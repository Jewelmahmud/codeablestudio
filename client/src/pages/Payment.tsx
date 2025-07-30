import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ArrowLeftIcon,
  CreditCardIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';
import { Invoice, CardDetails, FormErrors } from '../types';

const Payment = () => {
  const { invoiceId } = useParams<{ invoiceId: string }>();
  const navigate = useNavigate();
  const [invoice, setInvoice] = useState<Invoice | null>(null);
  const [loading, setLoading] = useState(true);
  const [processing, setProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardDetails, setCardDetails] = useState<CardDetails>({
    number: '',
    expiry: '',
    cvc: '',
    name: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});

  // Mock invoice data - in real app, fetch from API
  const mockInvoices: Record<string, Invoice> = {
    'INV-001': {
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
    'INV-002': {
      id: 'INV-002',
      project: 'Mobile App Development',
      amount: 8500,
      status: 'Pending',
      dueDate: '2024-01-30',
      isOverdue: false,
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
      isOverdue: true,
      description: 'Website redesign and optimization',
      items: [
        { name: 'Design Redesign', quantity: 1, rate: 1500, amount: 1500 },
        { name: 'Frontend Implementation', quantity: 1, rate: 1200, amount: 1200 },
        { name: 'SEO Optimization', quantity: 1, rate: 500, amount: 500 }
      ]
    }
  };

  useEffect(() => {
    // Simulate API call to fetch invoice details
    setTimeout(() => {
      if (invoiceId) {
        const foundInvoice = mockInvoices[invoiceId];
        if (foundInvoice) {
          setInvoice(foundInvoice);
        }
      }
      setLoading(false);
    }, 1000);
  }, [invoiceId]);

  const validateForm = () => {
    const newErrors: FormErrors = {};
    
    if (!cardDetails.number) newErrors.number = 'Card number is required';
    if (!cardDetails.expiry) newErrors.expiry = 'Expiry date is required';
    if (!cardDetails.cvc) newErrors.cvc = 'CVC is required';
    if (!cardDetails.name) newErrors.name = 'Cardholder name is required';
    
    // Basic card number validation
    if (cardDetails.number && cardDetails.number.replace(/\s/g, '').length < 13) {
      newErrors.number = 'Invalid card number';
    }
    
    // Basic expiry validation
    if (cardDetails.expiry && !/^\d{2}\/\d{2}$/.test(cardDetails.expiry)) {
      newErrors.expiry = 'Invalid expiry format (MM/YY)';
    }
    
    // Basic CVC validation
    if (cardDetails.cvc && cardDetails.cvc.length < 3) {
      newErrors.cvc = 'Invalid CVC';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const processPayment = async () => {
    if (!validateForm()) return;
    
    setProcessing(true);
    
    try {
      // Here you would integrate with Stripe API
      // Example Stripe integration:
      /*
      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: invoice.amount * 100, // Stripe expects amount in cents
          currency: 'usd',
          invoice_id: invoice.id,
          payment_method_data: {
            type: 'card',
            card: {
              token: 'tok_visa' // In real app, use Stripe.js to create token
            }
          }
        })
      });
      
      const paymentIntent = await response.json();
      
      // Confirm the payment
      const confirmResponse = await fetch('/api/confirm-payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          payment_intent_id: paymentIntent.id
        })
      });
      */
      
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Simulate successful payment
      alert('Payment processed successfully!');
      navigate('/invoices');
      
    } catch (error) {
      console.error('Payment failed:', error);
      alert('Payment failed. Please try again.');
    } finally {
      setProcessing(false);
    }
  };

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    
    if (parts.length) {
      return parts.join(' ');
    } else {
      return v;
    }
  };

  const formatExpiry = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      return v.substring(0, 2) + '/' + v.substring(2, 4);
    }
    return v;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (!invoice) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white text-xl">Invoice not found</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => navigate('/invoices')}
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
              >
                <ArrowLeftIcon className="h-5 w-5" />
                <span>Back to Invoices</span>
              </button>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-primary-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">CS</span>
              </div>
              <span className="text-lg font-bold text-white">Codable Studio</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Invoice Details */}
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl border border-gray-700/50 shadow-2xl p-8">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                <DocumentTextIcon className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Invoice Details</h2>
                <p className="text-gray-400 text-sm">Review your invoice information</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50">
                  <p className="text-gray-400 text-sm mb-1">Invoice Number</p>
                  <p className="text-white font-semibold text-lg">{invoice.id}</p>
                </div>
                
                <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50">
                  <p className="text-gray-400 text-sm mb-1">Status</p>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    invoice.isOverdue ? 'text-red-400 bg-red-400/10' : 'text-yellow-400 bg-yellow-400/10'
                  }`}>
                    {invoice.status}
                  </span>
                </div>
                
                <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50">
                  <p className="text-gray-400 text-sm mb-1">Project</p>
                  <p className="text-white font-medium">{invoice.project}</p>
                </div>
                
                <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50">
                  <p className="text-gray-400 text-sm mb-1">Due Date</p>
                  <p className={`text-white font-medium ${invoice.isOverdue ? 'text-red-400' : ''}`}>
                    {invoice.dueDate}
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl p-6 border border-blue-500/20">
                <h3 className="text-white font-semibold mb-4 flex items-center space-x-2">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  <span>Invoice Items</span>
                </h3>
                <div className="space-y-3">
                  {invoice.items.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b border-gray-700/30 last:border-b-0">
                      <div>
                        <p className="text-white font-medium">{item.name}</p>
                        <p className="text-gray-400 text-sm">Qty: {item.quantity} × ${item.rate.toLocaleString()}</p>
                      </div>
                      <span className="text-white font-semibold">${item.amount.toLocaleString()}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-between items-center pt-4 border-t border-gray-700/30 mt-4">
                  <span className="text-white font-bold text-xl">Total Amount</span>
                  <span className="text-white font-bold text-3xl bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                    ${invoice.amount.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Form */}
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl border border-gray-700/50 shadow-2xl p-8">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                <CreditCardIcon className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Payment Information</h2>
                <p className="text-gray-400 text-sm">Complete your secure payment</p>
              </div>
            </div>
            
            <div className="space-y-6">
              {/* Payment Method Selection */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-4">Payment Method</label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => setPaymentMethod('card')}
                    className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                      paymentMethod === 'card'
                        ? 'border-green-500 bg-green-500/10 text-green-400 shadow-lg'
                        : 'border-gray-600 bg-gray-800/50 text-gray-400 hover:border-gray-500 hover:bg-gray-700/50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <CreditCardIcon className="h-5 w-5" />
                      <span className="font-medium">Credit Card</span>
                    </div>
                  </button>
                  <button
                    onClick={() => setPaymentMethod('bank')}
                    className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                      paymentMethod === 'bank'
                        ? 'border-green-500 bg-green-500/10 text-green-400 shadow-lg'
                        : 'border-gray-600 bg-gray-800/50 text-gray-400 hover:border-gray-500 hover:bg-gray-700/50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                      <span className="font-medium">Bank Transfer</span>
                    </div>
                  </button>
                </div>
              </div>

              {/* Card Details Form */}
              {paymentMethod === 'card' && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-3">Card Number</label>
                    <div className="relative">
                      <input 
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        value={cardDetails.number}
                        onChange={(e) => setCardDetails({...cardDetails, number: formatCardNumber(e.target.value)})}
                        className={`w-full px-4 py-4 bg-gray-800/50 border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 ${
                          errors.number ? 'border-red-500' : 'border-gray-600'
                        }`}
                      />
                      <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                        <svg className="w-8 h-5 text-gray-500" viewBox="0 0 32 20">
                          <rect width="32" height="20" rx="3" fill="#1f2937"/>
                          <circle cx="10" cy="10" r="4" fill="#6b7280"/>
                          <circle cx="22" cy="10" r="4" fill="#6b7280"/>
                        </svg>
                      </div>
                    </div>
                    {errors.number && <p className="text-red-400 text-sm mt-2 flex items-center space-x-1">
                      <ExclamationTriangleIcon className="w-4 h-4" />
                      <span>{errors.number}</span>
                    </p>}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-3">Expiry Date</label>
                      <input 
                        type="text"
                        placeholder="MM/YY"
                        value={cardDetails.expiry}
                        onChange={(e) => setCardDetails({...cardDetails, expiry: formatExpiry(e.target.value)})}
                        className={`w-full px-4 py-4 bg-gray-800/50 border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 ${
                          errors.expiry ? 'border-red-500' : 'border-gray-600'
                        }`}
                      />
                      {errors.expiry && <p className="text-red-400 text-sm mt-2 flex items-center space-x-1">
                        <ExclamationTriangleIcon className="w-4 h-4" />
                        <span>{errors.expiry}</span>
                      </p>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-3">CVC</label>
                      <input 
                        type="text"
                        placeholder="123"
                        value={cardDetails.cvc}
                        onChange={(e) => setCardDetails({...cardDetails, cvc: e.target.value.replace(/\D/g, '').slice(0, 4)})}
                        className={`w-full px-4 py-4 bg-gray-800/50 border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 ${
                          errors.cvc ? 'border-red-500' : 'border-gray-600'
                        }`}
                      />
                      {errors.cvc && <p className="text-red-400 text-sm mt-2 flex items-center space-x-1">
                        <ExclamationTriangleIcon className="w-4 h-4" />
                        <span>{errors.cvc}</span>
                      </p>}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-3">Cardholder Name</label>
                    <input 
                      type="text"
                      placeholder="John Doe"
                      value={cardDetails.name}
                      onChange={(e) => setCardDetails({...cardDetails, name: e.target.value})}
                      className={`w-full px-4 py-4 bg-gray-800/50 border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 ${
                        errors.name ? 'border-red-500' : 'border-gray-600'
                      }`}
                    />
                    {errors.name && <p className="text-red-400 text-sm mt-2 flex items-center space-x-1">
                      <ExclamationTriangleIcon className="w-4 h-4" />
                      <span>{errors.name}</span>
                    </p>}
                  </div>
                </div>
              )}

              {/* Bank Transfer Info */}
              {paymentMethod === 'bank' && (
                <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl p-6 border border-blue-500/20">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="text-blue-400 font-semibold text-lg">Bank Transfer</span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Bank transfer details will be provided after you submit the payment request. 
                    Please allow 2-3 business days for processing. You'll receive an email with 
                    the transfer instructions.
                  </p>
                </div>
              )}

              {/* Security Badge */}
              <div className="flex items-center justify-center space-x-3 text-gray-400 text-sm bg-gray-800/30 rounded-xl p-4 border border-gray-700/50">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>Secured by Stripe • SSL Encrypted • PCI Compliant</span>
              </div>

              {/* Payment Button */}
              <div className="pt-6">
                <button 
                  onClick={processPayment}
                  disabled={processing}
                  className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-200 ${
                    processing 
                      ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-lg hover:shadow-xl transform hover:scale-105'
                  }`}
                >
                  {processing ? (
                    <div className="flex items-center justify-center space-x-3">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Processing Payment...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center space-x-2">
                      <CreditCardIcon className="h-5 w-5" />
                      <span>Pay ${invoice.amount.toLocaleString()}</span>
                    </div>
                  )}
                </button>
              </div>

              <div className="text-center">
                <p className="text-gray-400 text-xs leading-relaxed">
                  Your payment is secured by Stripe. We never store your card details on our servers.
                  All transactions are encrypted and processed securely.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment; 