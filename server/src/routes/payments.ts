import express from 'express';
import Stripe from 'stripe';

const router = express.Router();

// Initialize Stripe with your secret key
// In production, use environment variable: process.env.STRIPE_SECRET_KEY
const stripe = new Stripe('sk_test_your_stripe_secret_key_here', {
  apiVersion: '2023-10-16',
});

// Create payment intent
router.post('/create-payment-intent', async (req, res) => {
  try {
    const { amount, currency = 'usd', invoice_id } = req.body;

    if (!amount || !invoice_id) {
      return res.status(400).json({ error: 'Amount and invoice_id are required' });
    }

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Convert to cents
      currency,
      metadata: {
        invoice_id,
      },
      automatic_payment_methods: {
        enabled: true,
      },
    });

    res.json({
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id,
    });
  } catch (error) {
    console.error('Error creating payment intent:', error);
    res.status(500).json({ error: 'Failed to create payment intent' });
  }
});

// Confirm payment
router.post('/confirm-payment', async (req, res) => {
  try {
    const { payment_intent_id } = req.body;

    if (!payment_intent_id) {
      return res.status(400).json({ error: 'Payment intent ID is required' });
    }

    // Retrieve the payment intent
    const paymentIntent = await stripe.paymentIntents.retrieve(payment_intent_id);

    if (paymentIntent.status === 'succeeded') {
      // Update invoice status in your database
      // await updateInvoiceStatus(paymentIntent.metadata.invoice_id, 'paid');
      
      res.json({ 
        success: true, 
        message: 'Payment confirmed',
        invoice_id: paymentIntent.metadata.invoice_id 
      });
    } else {
      res.status(400).json({ error: 'Payment not completed' });
    }
  } catch (error) {
    console.error('Error confirming payment:', error);
    res.status(500).json({ error: 'Failed to confirm payment' });
  }
});

// Get payment status
router.get('/payment-status/:payment_intent_id', async (req, res) => {
  try {
    const { payment_intent_id } = req.params;

    const paymentIntent = await stripe.paymentIntents.retrieve(payment_intent_id);

    res.json({
      status: paymentIntent.status,
      amount: paymentIntent.amount / 100, // Convert from cents
      currency: paymentIntent.currency,
      invoice_id: paymentIntent.metadata.invoice_id,
    });
  } catch (error) {
    console.error('Error retrieving payment status:', error);
    res.status(500).json({ error: 'Failed to retrieve payment status' });
  }
});

// Webhook to handle Stripe events
router.post('/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
  const sig = req.headers['stripe-signature'];
  const endpointSecret = 'whsec_your_webhook_secret_here'; // Use environment variable in production

  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the event
  switch (event.type) {
    case 'payment_intent.succeeded':
      const paymentIntent = event.data.object;
      console.log('Payment succeeded:', paymentIntent.id);
      
      // Update invoice status in your database
      // await updateInvoiceStatus(paymentIntent.metadata.invoice_id, 'paid');
      break;
      
    case 'payment_intent.payment_failed':
      const failedPayment = event.data.object;
      console.log('Payment failed:', failedPayment.id);
      
      // Handle failed payment
      // await updateInvoiceStatus(failedPayment.metadata.invoice_id, 'failed');
      break;
      
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  res.json({ received: true });
});

// Get invoice details
router.get('/invoice/:invoice_id', async (req, res) => {
  try {
    const { invoice_id } = req.params;

    // Mock invoice data - in real app, fetch from database
    const mockInvoices = {
      'INV-001': {
        id: 'INV-001',
        project: 'E-commerce Platform',
        amount: 5000,
        status: 'Pending',
        dueDate: '2024-02-15',
        description: 'Phase 1 development and design',
        items: [
          { name: 'Frontend Development', quantity: 1, rate: 3000, amount: 3000 },
          { name: 'Backend API', quantity: 1, rate: 1500, amount: 1500 },
          { name: 'UI/UX Design', quantity: 1, rate: 500, amount: 500 }
        ]
      },
      'INV-002': {
        id: 'INV-002',
        project: 'Mobile App Development',
        amount: 8500,
        status: 'Pending',
        dueDate: '2024-01-30',
        description: 'Mobile application development',
        items: [
          { name: 'iOS Development', quantity: 1, rate: 4000, amount: 4000 },
          { name: 'Android Development', quantity: 1, rate: 3500, amount: 3500 },
          { name: 'Testing & QA', quantity: 1, rate: 1000, amount: 1000 }
        ]
      },
      'INV-003': {
        id: 'INV-003',
        project: 'Website Redesign',
        amount: 3200,
        status: 'Overdue',
        dueDate: '2024-01-20',
        description: 'Website redesign and optimization',
        items: [
          { name: 'Design Redesign', quantity: 1, rate: 1500, amount: 1500 },
          { name: 'Frontend Implementation', quantity: 1, rate: 1200, amount: 1200 },
          { name: 'SEO Optimization', quantity: 1, rate: 500, amount: 500 }
        ]
      }
    };

    const invoice = mockInvoices[invoice_id];
    
    if (!invoice) {
      return res.status(404).json({ error: 'Invoice not found' });
    }

    res.json(invoice);
  } catch (error) {
    console.error('Error fetching invoice:', error);
    res.status(500).json({ error: 'Failed to fetch invoice' });
  }
});

// Get all invoices
router.get('/invoices', async (req, res) => {
  try {
    // Mock invoices data - in real app, fetch from database
    const invoices = [
      {
        id: 'INV-001',
        project: 'E-commerce Platform',
        amount: 5000,
        status: 'Pending',
        dueDate: '2024-02-15',
        isOverdue: false,
        description: 'Phase 1 development and design',
        items: [
          { name: 'Frontend Development', quantity: 1, rate: 3000, amount: 3000 },
          { name: 'Backend API', quantity: 1, rate: 1500, amount: 1500 },
          { name: 'UI/UX Design', quantity: 1, rate: 500, amount: 500 }
        ]
      },
      {
        id: 'INV-002',
        project: 'Mobile App Development',
        amount: 8500,
        status: 'Paid',
        dueDate: '2024-01-30',
        isOverdue: false,
        description: 'Mobile application development',
        items: [
          { name: 'iOS Development', quantity: 1, rate: 4000, amount: 4000 },
          { name: 'Android Development', quantity: 1, rate: 3500, amount: 3500 },
          { name: 'Testing & QA', quantity: 1, rate: 1000, amount: 1000 }
        ]
      },
      {
        id: 'INV-003',
        project: 'Website Redesign',
        amount: 3200,
        status: 'Overdue',
        dueDate: '2024-01-20',
        isOverdue: true,
        description: 'Website redesign and optimization',
        items: [
          { name: 'Design Redesign', quantity: 1, rate: 1500, amount: 1500 },
          { name: 'Frontend Implementation', quantity: 1, rate: 1200, amount: 1200 },
          { name: 'SEO Optimization', quantity: 1, rate: 500, amount: 500 }
        ]
      }
    ];

    res.json(invoices);
  } catch (error) {
    console.error('Error fetching invoices:', error);
    res.status(500).json({ error: 'Failed to fetch invoices' });
  }
});

export default router; 