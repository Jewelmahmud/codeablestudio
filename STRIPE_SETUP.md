# Stripe Payment Integration Setup

This guide will help you set up Stripe payment processing for the CodableStudio invoice system.

## Prerequisites

1. A Stripe account (sign up at https://stripe.com)
2. Node.js and npm installed
3. The CodableStudio project set up

## Setup Steps

### 1. Install Dependencies

First, install the Stripe dependency in the server:

```bash
cd server
npm install stripe
```

### 2. Configure Stripe Keys

1. Go to your Stripe Dashboard (https://dashboard.stripe.com)
2. Navigate to Developers > API keys
3. Copy your **Publishable key** and **Secret key**

### 3. Environment Variables

Create a `.env` file in the server directory with your Stripe keys:

```env
# Stripe Configuration
STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
STRIPE_SECRET_KEY=sk_test_your_secret_key_here
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret_here

# Other environment variables
PORT=5000
NODE_ENV=development
```

### 4. Update Server Configuration

Update the `server/src/routes/payments.ts` file to use environment variables:

```typescript
// Replace this line:
const stripe = new Stripe('sk_test_your_stripe_secret_key_here', {

// With this:
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
```

### 5. Set Up Webhooks (Optional but Recommended)

1. In your Stripe Dashboard, go to Developers > Webhooks
2. Click "Add endpoint"
3. Set the endpoint URL to: `https://your-domain.com/api/payments/webhook`
4. Select these events:
   - `payment_intent.succeeded`
   - `payment_intent.payment_failed`
5. Copy the webhook signing secret and add it to your `.env` file

### 6. Test the Integration

1. Start the server:
   ```bash
   cd server
   npm run dev
   ```

2. Start the client:
   ```bash
   cd client
   npm start
   ```

3. Navigate to the dashboard and click on the Invoice card
4. Try making a test payment using Stripe's test card numbers:
   - **Success**: `4242 4242 4242 4242`
   - **Decline**: `4000 0000 0000 0002`
   - **Expiry**: Any future date
   - **CVC**: Any 3 digits

## API Endpoints

The payment system provides these endpoints:

- `POST /api/payments/create-payment-intent` - Create a payment intent
- `POST /api/payments/confirm-payment` - Confirm a payment
- `GET /api/payments/payment-status/:id` - Get payment status
- `POST /api/payments/webhook` - Stripe webhook handler
- `GET /api/payments/invoice/:id` - Get invoice details
- `GET /api/payments/invoices` - Get all invoices

## Security Considerations

1. **Never expose your secret key** in client-side code
2. **Always use HTTPS** in production
3. **Validate webhook signatures** to ensure requests come from Stripe
4. **Store sensitive data** in environment variables
5. **Use test keys** during development

## Production Deployment

When deploying to production:

1. Switch to live Stripe keys
2. Set up proper webhook endpoints
3. Configure CORS for your domain
4. Set up proper error handling and logging
5. Implement database storage for invoices and payments
6. Add proper authentication and authorization

## Troubleshooting

### Common Issues

1. **CORS errors**: Make sure your server CORS configuration allows your client domain
2. **Webhook signature verification failed**: Check your webhook secret
3. **Payment intent creation failed**: Verify your Stripe secret key
4. **Client secret not found**: Ensure the payment intent was created successfully

### Testing

Use Stripe's test mode for development:
- Test card numbers work without real charges
- Webhooks can be tested using Stripe CLI
- Use test API keys for all development work

## Additional Resources

- [Stripe Documentation](https://stripe.com/docs)
- [Stripe API Reference](https://stripe.com/docs/api)
- [Stripe Webhooks Guide](https://stripe.com/docs/webhooks)
- [Stripe Testing Guide](https://stripe.com/docs/testing)

## Support

If you encounter issues:
1. Check the Stripe Dashboard for error logs
2. Review the server console for error messages
3. Verify your API keys and webhook configuration
4. Test with Stripe's test card numbers first 