import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { 
  ArrowLeftIcon,
  PlusIcon,
  DocumentTextIcon,
  CreditCardIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';
import { Invoice, CardDetails } from '../types';

const Invoices = () => {
  const [invoices, setInvoices] = useState<Invoice[]>([
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
  ]);

  const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardDetails, setCardDetails] = useState<CardDetails>({
    number: '',
    expiry: '',
    cvc: '',
    name: ''
  });

  const handlePayment = (invoice: Invoice) => {
    setSelectedInvoice(invoice);
    setShowPaymentModal(true);
  };

  const processPayment = async () => {
    if (!selectedInvoice) return;
    
    try {
      // Simulate Stripe payment processing
      console.log('Processing payment for invoice:', selectedInvoice.id);
      
      // Here you would integrate with Stripe API
      // const response = await fetch('/api/create-payment-intent', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     amount: selectedInvoice.amount,
      //     currency: 'usd',
      //     invoice_id: selectedInvoice.id
      //   })
      // });
      
      // Simulate successful payment
      setTimeout(() => {
        setInvoices(prev => prev.map(inv => 
          inv.id === selectedInvoice.id 
            ? { ...inv, status: 'Paid' }
            : inv
        ));
        setShowPaymentModal(false);
        setSelectedInvoice(null);
        alert('Payment processed successfully!');
      }, 2000);
      
    } catch (error) {
      console.error('Payment failed:', error);
      alert('Payment failed. Please try again.');
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Paid': return 'text-green-400 bg-green-400/10';
      case 'Pending': return 'text-yellow-400 bg-yellow-400/10';
      case 'Overdue': return 'text-red-400 bg-red-400/10';
      default: return 'text-gray-400 bg-gray-400/10';
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link to="/dashboard" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
                <ArrowLeftIcon className="h-5 w-5" />
                <span>Back to Dashboard</span>
              </Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-primary-800 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">CS</span>
                </div>
                <span className="text-lg font-bold text-white">Codeable Studio</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Invoices</h1>
          <p className="text-gray-400">Manage and pay your project invoices</p>
        </div>

        {/* Invoice Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Total Invoices</p>
                <p className="text-2xl font-bold text-white">{invoices.length}</p>
              </div>
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <DocumentTextIcon className="h-6 w-6 text-blue-400" />
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Total Amount</p>
                <p className="text-2xl font-bold text-white">${invoices.reduce((sum, inv) => sum + inv.amount, 0).toLocaleString()}</p>
              </div>
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                <CreditCardIcon className="h-6 w-6 text-green-400" />
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Paid</p>
                <p className="text-2xl font-bold text-white">{invoices.filter(inv => inv.status === 'Paid').length}</p>
              </div>
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                <CheckCircleIcon className="h-6 w-6 text-green-400" />
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Pending</p>
                <p className="text-2xl font-bold text-white">{invoices.filter(inv => inv.status === 'Pending' || inv.status === 'Overdue').length}</p>
              </div>
              <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                <ExclamationTriangleIcon className="h-6 w-6 text-yellow-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Invoices Table */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
          <div className="p-6 border-b border-white/10">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-white">All Invoices</h2>
              <button className="flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition-colors">
                <PlusIcon className="h-4 w-4" />
                <span>Generate Invoice</span>
              </button>
            </div>
          </div>
          <div className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">Invoice #</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">Project</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">Amount</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">Status</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">Due Date</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {invoices.map((invoice) => (
                    <tr key={invoice.id} className="border-b border-white/5 hover:bg-white/5">
                      <td className="py-4 px-4">
                        <div className="text-white font-medium">{invoice.id}</div>
                      </td>
                      <td className="py-4 px-4 text-gray-300">{invoice.project}</td>
                      <td className="py-4 px-4 text-white font-medium">${invoice.amount.toLocaleString()}</td>
                      <td className="py-4 px-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(invoice.status)}`}>
                          {invoice.status}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <span className={`text-gray-300 ${invoice.isOverdue ? 'text-red-400' : ''}`}>
                          {invoice.dueDate}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center space-x-2">
                          {invoice.status === 'Paid' ? (
                            <button className="text-green-400 hover:text-green-300 text-sm">Download</button>
                          ) : (
                            <button 
                              onClick={() => handlePayment(invoice)}
                              className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm transition-colors"
                            >
                              Pay Now
                            </button>
                          )}
                          <button 
                            onClick={() => setSelectedInvoice(invoice)}
                            className="text-blue-400 hover:text-blue-300 text-sm"
                          >
                            View Details
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Modal */}
      {showPaymentModal && selectedInvoice && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl border border-gray-700/50 shadow-2xl w-full max-w-lg mx-auto transform transition-all duration-300 scale-100">
            {/* Header */}
            <div className="relative p-6 border-b border-gray-700/50">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                    <CreditCardIcon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Secure Payment</h3>
                    <p className="text-gray-400 text-sm">Complete your payment securely</p>
                  </div>
                </div>
                <button 
                  onClick={() => setShowPaymentModal(false)}
                  className="w-8 h-8 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="p-6 space-y-6">
              {/* Invoice Summary */}
              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl p-4 border border-blue-500/20">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-white font-semibold">Invoice Summary</h4>
                  <span className="text-blue-400 text-sm font-medium">{selectedInvoice.id}</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">Project</span>
                    <span className="text-white font-medium">{selectedInvoice.project}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">Amount</span>
                    <span className="text-white font-bold text-lg">${selectedInvoice.amount.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Payment Method Selection */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-3">Payment Method</label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setPaymentMethod('card')}
                    className={`p-3 rounded-xl border-2 transition-all duration-200 ${
                      paymentMethod === 'card'
                        ? 'border-green-500 bg-green-500/10 text-green-400'
                        : 'border-gray-600 bg-gray-800/50 text-gray-400 hover:border-gray-500 hover:bg-gray-700/50'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <CreditCardIcon className="h-4 w-4" />
                      <span className="text-sm font-medium">Credit Card</span>
                    </div>
                  </button>
                  <button
                    onClick={() => setPaymentMethod('bank')}
                    className={`p-3 rounded-xl border-2 transition-all duration-200 ${
                      paymentMethod === 'bank'
                        ? 'border-green-500 bg-green-500/10 text-green-400'
                        : 'border-gray-600 bg-gray-800/50 text-gray-400 hover:border-gray-500 hover:bg-gray-700/50'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                      <span className="text-sm font-medium">Bank Transfer</span>
                    </div>
                  </button>
                </div>
              </div>

              {/* Card Details Form */}
              {paymentMethod === 'card' && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Card Number</label>
                    <div className="relative">
                      <input 
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        value={cardDetails.number}
                        onChange={(e) => setCardDetails({...cardDetails, number: e.target.value})}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                      />
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                        <svg className="w-6 h-4 text-gray-500" viewBox="0 0 24 16">
                          <rect width="24" height="16" rx="2" fill="#1f2937"/>
                          <circle cx="8" cy="8" r="3" fill="#6b7280"/>
                          <circle cx="16" cy="8" r="3" fill="#6b7280"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">Expiry Date</label>
                      <input 
                        type="text"
                        placeholder="MM/YY"
                        value={cardDetails.expiry}
                        onChange={(e) => setCardDetails({...cardDetails, expiry: e.target.value})}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">CVC</label>
                      <input 
                        type="text"
                        placeholder="123"
                        value={cardDetails.cvc}
                        onChange={(e) => setCardDetails({...cardDetails, cvc: e.target.value})}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Cardholder Name</label>
                    <input 
                      type="text"
                      placeholder="John Doe"
                      value={cardDetails.name}
                      onChange={(e) => setCardDetails({...cardDetails, name: e.target.value})}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                </div>
              )}

              {/* Bank Transfer Info */}
              {paymentMethod === 'bank' && (
                <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl p-4 border border-blue-500/20">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="text-blue-400 font-medium">Bank Transfer</span>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Bank transfer details will be provided after you submit the payment request. 
                    Please allow 2-3 business days for processing.
                  </p>
                </div>
              )}

              {/* Security Badge */}
              <div className="flex items-center justify-center space-x-2 text-gray-400 text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>Secured by Stripe • SSL Encrypted</span>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3 pt-4">
                <button 
                  onClick={() => setShowPaymentModal(false)}
                  className="flex-1 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 border border-gray-600 hover:border-gray-500"
                >
                  Cancel
                </button>
                <button 
                  onClick={processPayment}
                  className="flex-1 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Pay ${selectedInvoice.amount.toLocaleString()}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Invoice Details Modal */}
      {selectedInvoice && !showPaymentModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-xl p-6 w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-white">Invoice Details</h3>
              <button 
                onClick={() => setSelectedInvoice(null)}
                className="text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>
            
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-400 text-sm">Invoice Number</p>
                  <p className="text-white font-medium">{selectedInvoice.id}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Status</p>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(selectedInvoice.status)}`}>
                    {selectedInvoice.status}
                  </span>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Project</p>
                  <p className="text-white">{selectedInvoice.project}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Due Date</p>
                  <p className={`text-white ${selectedInvoice.isOverdue ? 'text-red-400' : ''}`}>
                    {selectedInvoice.dueDate}
                  </p>
                </div>
              </div>

              <div>
                <p className="text-gray-400 text-sm mb-2">Description</p>
                <p className="text-white">{selectedInvoice.description}</p>
              </div>

              <div>
                <h4 className="text-white font-medium mb-3">Items</h4>
                <div className="space-y-2">
                  {selectedInvoice.items.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-700">
                      <div>
                        <p className="text-white">{item.name}</p>
                        <p className="text-gray-400 text-sm">Qty: {item.quantity} × ${item.rate}</p>
                      </div>
                      <p className="text-white font-medium">${item.amount.toLocaleString()}</p>
                    </div>
                  ))}
                  <div className="flex justify-between items-center py-2 pt-4">
                    <p className="text-white font-medium">Total</p>
                    <p className="text-white font-bold text-lg">${selectedInvoice.amount.toLocaleString()}</p>
                  </div>
                </div>
              </div>

              {selectedInvoice.status !== 'Paid' && (
                <div className="flex justify-end">
                  <button 
                    onClick={() => handlePayment(selectedInvoice)}
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors"
                  >
                    Pay Now
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Invoices; 