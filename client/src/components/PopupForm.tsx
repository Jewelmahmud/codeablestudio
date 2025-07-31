import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

interface PopupFormProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
  type?: 'contact' | 'quote' | 'consultation';
  projectType?: string;
  projectName?: string;
  estimatedPrice?: number;
  hideCalculatorFields?: boolean;
}

interface FormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  projectType?: string;
  budget?: string;
  timeline?: string;
  message: string;
}

const PopupForm: React.FC<PopupFormProps> = ({
  isOpen,
  onClose,
  title = "Get Your Free Quote",
  subtitle = "Fill out the form below and we'll get back to you within 24 hours",
  type = 'quote',
  projectType,
  projectName,
  estimatedPrice,
  hideCalculatorFields = false
}) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: projectType || '',
    budget: '',
    timeline: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);
      
      setIsSubmitted(true);
      setTimeout(() => {
        onClose();
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          projectType: projectType || '',
          budget: '',
          timeline: '',
          message: ''
        });
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getFormFields = () => {
    const baseFields = [
      {
        name: 'name',
        label: 'Full Name',
        type: 'text',
        required: true,
        placeholder: 'Enter your full name'
      },
      {
        name: 'email',
        label: 'Email Address',
        type: 'email',
        required: true,
        placeholder: 'Enter your email address'
      },
      {
        name: 'phone',
        label: 'Phone Number',
        type: 'tel',
        required: false,
        placeholder: 'Enter your phone number'
      },
      {
        name: 'company',
        label: 'Company Name',
        type: 'text',
        required: false,
        placeholder: 'Enter your company name'
      }
    ];

    const quoteFields = [
      {
        name: 'projectType',
        label: 'Project Type',
        type: 'select',
        required: true,
        options: [
          { value: '', label: 'Select project type' },
          { value: 'web-development', label: 'Web Development' },
          { value: 'mobile-app', label: 'Mobile App Development' },
          { value: 'api-development', label: 'API Development' },
          { value: 'ecommerce', label: 'E-commerce Platform' },
          { value: 'pwa', label: 'Progressive Web App' },
          { value: 'ai-ml', label: 'AI & Machine Learning' },
          { value: 'consulting', label: 'Technical Consulting' },
          { value: 'other', label: 'Other' }
        ]
      },
      {
        name: 'budget',
        label: 'Budget Range',
        type: 'select',
        required: true,
        options: [
          { value: '', label: 'Select budget range' },
          { value: 'under-10k', label: 'Under $10,000' },
          { value: '10k-25k', label: '$10,000 - $25,000' },
          { value: '25k-50k', label: '$25,000 - $50,000' },
          { value: '50k-100k', label: '$50,000 - $100,000' },
          { value: 'over-100k', label: 'Over $100,000' }
        ]
      },
      {
        name: 'timeline',
        label: 'Project Timeline',
        type: 'select',
        required: true,
        options: [
          { value: '', label: 'Select timeline' },
          { value: 'asap', label: 'ASAP' },
          { value: '1-2-months', label: '1-2 months' },
          { value: '3-6-months', label: '3-6 months' },
          { value: '6-months-plus', label: '6+ months' },
          { value: 'flexible', label: 'Flexible' }
        ]
      }
    ];

    const messageField = {
      name: 'message',
      label: type === 'contact' ? 'Message' : 'Project Details',
      type: 'textarea',
      required: true,
      placeholder: type === 'contact' 
        ? 'Tell us about your project or inquiry...'
        : 'Describe your project requirements, goals, and any specific features you need...'
    };

    // Hide calculator fields if hideCalculatorFields is true
    const fieldsToInclude = hideCalculatorFields 
      ? [...baseFields, messageField]
      : [...baseFields, ...(type !== 'contact' ? quoteFields : []), messageField];

    return fieldsToInclude;
  };

  const renderField = (field: any) => {
    const commonProps = {
      name: field.name,
      value: formData[field.name as keyof FormData] || '',
      onChange: handleInputChange,
      required: field.required,
      placeholder: field.placeholder,
      className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
    };

    switch (field.type) {
      case 'select':
        return (
          <select {...commonProps}>
            {field.options.map((option: any) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );
      case 'textarea':
        return (
          <textarea
            {...commonProps}
            rows={4}
            className={`${commonProps.className} resize-none`}
          />
        );
      default:
        return <input type={field.type} {...commonProps} />;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <div className="flex min-h-screen items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-2xl bg-white rounded shadow-2xl overflow-hidden"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">{title}</h2>
                    <p className="text-primary-100">{subtitle}</p>
                  </div>
                  <button
                    onClick={onClose}
                    className="text-white hover:text-gray-200 transition-colors"
                  >
                    <XMarkIcon className="h-6 w-6" />
                  </button>
                </div>
                
                {estimatedPrice && (
                  <div className="mt-4 p-4 bg-white/10 rounded-lg">
                    {projectName && (
                      <p className="text-sm text-primary-100 mb-1">Project Type:</p>
                    )}
                    {projectName && (
                      <p className="text-lg font-semibold mb-2">{projectName}</p>
                    )}
                    <p className="text-sm text-primary-100 mb-1">Estimated Project Cost:</p>
                    <p className="text-2xl font-bold">${estimatedPrice.toLocaleString()}</p>
                  </div>
                )}
              </div>

              {/* Form */}
              <div className="p-6">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {getFormFields().map((field) => (
                        <div key={field.name} className={field.type === 'textarea' ? 'md:col-span-2' : ''}>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            {field.label}
                            {field.required && <span className="text-red-500 ml-1">*</span>}
                          </label>
                          {renderField(field)}
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center space-x-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 bg-primary-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center justify-center">
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                            Submitting...
                          </div>
                        ) : (
                          'Submit Request'
                        )}
                      </button>
                      <button
                        type="button"
                        onClick={onClose}
                        className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="text-center py-8">
                    <CheckCircleIcon className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Thank You!</h3>
                    <p className="text-gray-600">
                      Your request has been submitted successfully. We'll get back to you within 24 hours.
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default PopupForm; 