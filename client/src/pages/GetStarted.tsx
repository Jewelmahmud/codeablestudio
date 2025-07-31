import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  UserGroupIcon,
  ClockIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  ChartBarIcon,
  CogIcon,
  CircleStackIcon,
  CloudIcon,
  LockClosedIcon,
  SparklesIcon,
  DocumentTextIcon,
  VideoCameraIcon,
  ChatBubbleLeftRightIcon,
  ShoppingCartIcon,
  CreditCardIcon,
  BellIcon,
  MapPinIcon,
  CalendarIcon,
  UsersIcon,
  DocumentDuplicateIcon,
  PresentationChartLineIcon,
  CubeIcon,
  WifiIcon,
  MagnifyingGlassIcon,
  EnvelopeIcon,
  ServerIcon,
  ExclamationTriangleIcon,
  CalculatorIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';
import PopupForm from '../components/PopupForm';

interface CalculatorStep {
  id: number;
  title: string;
  description: string;
}

interface ProjectType {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  icon: React.ReactNode;
  features: string[];
}

interface ProjectSize {
  id: string;
  name: string;
  description: string;
  multiplier: number;
  duration: string;
  teamSize: string;
}

interface ProjectFeature {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  icon: React.ReactNode;
}

const GetStarted = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedProjectType, setSelectedProjectType] = useState('');
  const [selectedProjectSize, setSelectedProjectSize] = useState('');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [selectedSupport, setSelectedSupport] = useState('');
  const [selectedHosting, setSelectedHosting] = useState('');
  const [showPopupForm, setShowPopupForm] = useState(false);

  const steps: CalculatorStep[] = [
    { id: 1, title: 'Project Type', description: 'Choose your development type' },
    { id: 2, title: 'Project Size', description: 'Define scope and complexity' },
    { id: 3, title: 'Core Features', description: 'Select essential features' },
    { id: 4, title: 'Advanced Features', description: 'Add advanced capabilities' },
    { id: 5, title: 'Support & Hosting', description: 'Choose support and hosting' },
    { id: 6, title: 'Quote Summary', description: 'Review your custom quote' }
  ];

  const projectTypes: ProjectType[] = [
    {
      id: 'web-development',
      name: 'Web Development',
      description: 'Custom web applications and websites',
      basePrice: 15000,
      icon: <CodeBracketIcon className="w-8 h-8" />,
      features: ['Responsive Design', 'SEO Optimization', 'Content Management', 'User Authentication']
    },
    {
      id: 'mobile-app',
      name: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications',
      basePrice: 25000,
      icon: <DevicePhoneMobileIcon className="w-8 h-8" />,
      features: ['iOS & Android', 'Push Notifications', 'Offline Support', 'App Store Deployment']
    },
    {
      id: 'api-development',
      name: 'API Development',
      description: 'RESTful APIs and microservices',
      basePrice: 12000,
      icon: <GlobeAltIcon className="w-8 h-8" />,
      features: ['REST/GraphQL APIs', 'Authentication', 'Rate Limiting', 'API Documentation']
    },
    {
      id: 'ecommerce',
      name: 'E-commerce Platform',
      description: 'Online stores and marketplaces',
      basePrice: 30000,
      icon: <ShoppingCartIcon className="w-8 h-8" />,
      features: ['Payment Integration', 'Inventory Management', 'Order Processing', 'Analytics Dashboard']
    },
    {
      id: 'pwa',
      name: 'Progressive Web App',
      description: 'Modern PWA with app-like experience',
      basePrice: 20000,
      icon: <RocketLaunchIcon className="w-8 h-8" />,
      features: ['Offline Functionality', 'Push Notifications', 'App-like UI', 'Cross-platform']
    },
    {
      id: 'ai-ml',
      name: 'AI & Machine Learning',
      description: 'Intelligent solutions and automation',
      basePrice: 40000,
      icon: <SparklesIcon className="w-8 h-8" />,
      features: ['Custom ML Models', 'Data Processing', 'Predictive Analytics', 'AI Integration']
    }
  ];

  const projectSizes: ProjectSize[] = [
    {
      id: 'small',
      name: 'Small Project',
      description: 'Basic functionality, simple features',
      multiplier: 1.0,
      duration: '4-8 weeks',
      teamSize: '1-2 developers'
    },
    {
      id: 'medium',
      name: 'Medium Project',
      description: 'Standard features, moderate complexity',
      multiplier: 1.8,
      duration: '8-16 weeks',
      teamSize: '2-3 developers'
    },
    {
      id: 'large',
      name: 'Large Project',
      description: 'Complex features, advanced functionality',
      multiplier: 3.0,
      duration: '16-24 weeks',
      teamSize: '3-5 developers'
    },
    {
      id: 'enterprise',
      name: 'Enterprise Project',
      description: 'Multi-service, high scalability',
      multiplier: 5.0,
      duration: '24-36 weeks',
      teamSize: '5+ developers'
    }
  ];

  const coreFeatures: ProjectFeature[] = [
    {
      id: 'authentication',
      name: 'User Authentication',
      description: 'Secure login and user management',
      price: 2000,
      category: 'core',
      icon: <LockClosedIcon className="w-6 h-6" />
    },
    {
      id: 'database',
      name: 'Database Design',
      description: 'Custom database architecture',
      price: 3000,
      category: 'core',
      icon: <CircleStackIcon className="w-6 h-6" />
    },
    {
      id: 'responsive',
      name: 'Responsive Design',
      description: 'Mobile-first responsive layout',
      price: 1500,
      category: 'core',
      icon: <DevicePhoneMobileIcon className="w-6 h-6" />
    },
    {
      id: 'seo',
      name: 'SEO Optimization',
      description: 'Search engine optimization',
      price: 1200,
      category: 'core',
      icon: <MagnifyingGlassIcon className="w-6 h-6" />
    },
    {
      id: 'analytics',
      name: 'Analytics Integration',
      description: 'Google Analytics and tracking',
      price: 800,
      category: 'core',
      icon: <ChartBarIcon className="w-6 h-6" />
    },
    {
      id: 'cms',
      name: 'Content Management',
      description: 'Admin panel and CMS',
      price: 2500,
      category: 'core',
      icon: <DocumentTextIcon className="w-6 h-6" />
    }
  ];

  const advancedFeatures: ProjectFeature[] = [
    {
      id: 'real-time',
      name: 'Real-time Features',
      description: 'WebSocket and live updates',
      price: 4000,
      category: 'advanced',
      icon: <WifiIcon className="w-6 h-6" />
    },
    {
      id: 'payment',
      name: 'Payment Integration',
      description: 'Stripe, PayPal, and more',
      price: 3000,
      category: 'advanced',
      icon: <CreditCardIcon className="w-6 h-6" />
    },
    {
      id: 'notifications',
      name: 'Push Notifications',
      description: 'Email and push notifications',
      price: 2000,
      category: 'advanced',
      icon: <BellIcon className="w-6 h-6" />
    },
    {
      id: 'api-integration',
      name: 'Third-party APIs',
      description: 'External service integrations',
      price: 3500,
      category: 'advanced',
      icon: <GlobeAltIcon className="w-6 h-6" />
    },
    {
      id: 'ai-chatbot',
      name: 'AI Chatbot',
      description: 'Intelligent customer support',
      price: 5000,
      category: 'advanced',
      icon: <ChatBubbleLeftRightIcon className="w-6 h-6" />
    },
    {
      id: 'video-streaming',
      name: 'Video Streaming',
      description: 'Video upload and streaming',
      price: 4500,
      category: 'advanced',
      icon: <VideoCameraIcon className="w-6 h-6" />
    }
  ];

  const supportOptions = [
    { id: 'basic', name: 'Basic Support', price: 0, description: 'Email support during development' },
    { id: 'standard', name: 'Standard Support', price: 1000, description: '3 months post-launch support' },
    { id: 'premium', name: 'Premium Support', price: 2500, description: '6 months support with maintenance' },
    { id: 'enterprise', name: 'Enterprise Support', price: 5000, description: '12 months support with SLA' }
  ];

  const hostingOptions = [
    { id: 'shared', name: 'Shared Hosting', price: 500, description: 'Basic shared hosting environment', icon: <CloudIcon className="w-6 h-6" /> },
    { id: 'vps', name: 'VPS Hosting', price: 2000, description: 'Virtual private server with dedicated resources', icon: <ServerIcon className="w-6 h-6" /> },
    { id: 'dedicated', name: 'Dedicated Server', price: 5000, description: 'Full dedicated server with maximum control', icon: <CogIcon className="w-6 h-6" /> },
    { id: 'cloud', name: 'Cloud Hosting (AWS/Azure)', price: 3000, description: 'Scalable cloud infrastructure with auto-scaling', icon: <GlobeAltIcon className="w-6 h-6" /> },
    { id: 'managed', name: 'Managed Cloud', price: 4000, description: 'Fully managed cloud hosting with monitoring', icon: <ShieldCheckIcon className="w-6 h-6" /> },
    { id: 'existing', name: 'I already have hosting', price: 0, description: 'Use your existing hosting infrastructure', icon: <CheckCircleIcon className="w-6 h-6" /> }
  ];

  const calculateTotal = () => {
    const projectType = projectTypes.find(pt => pt.id === selectedProjectType);
    const projectSize = projectSizes.find(ps => ps.id === selectedProjectSize);
    
    if (!projectType || !projectSize) return 0;

    let total = projectType.basePrice * projectSize.multiplier;

    // Add selected features
    const allFeatures = [...coreFeatures, ...advancedFeatures];
    selectedFeatures.forEach(featureId => {
      const feature = allFeatures.find(f => f.id === featureId);
      if (feature) total += feature.price;
    });

    // Add support
    const support = supportOptions.find(s => s.id === selectedSupport);
    if (support) total += support.price;

    // Add hosting
    const hosting = hostingOptions.find(h => h.id === selectedHosting);
    if (hosting) total += hosting.price;

    return total;
  };

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const toggleFeature = (featureId: string) => {
    setSelectedFeatures(prev => 
      prev.includes(featureId) 
        ? prev.filter(id => id !== featureId)
        : [...prev, featureId]
    );
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-custom-dark mb-4">Select Project Type</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {projectTypes.map((type) => (
                <div
                  key={type.id}
                  onClick={() => setSelectedProjectType(type.id)}
                  className={`p-6 border-2 rounded-lg cursor-pointer transition-all ${
                    selectedProjectType === type.id
                      ? 'border-primary-600 bg-primary-50'
                      : 'border-gray-200 hover:border-primary-300'
                  }`}
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="text-primary-600">{type.icon}</span>
                    <h4 className="font-semibold text-custom-dark">{type.name}</h4>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{type.description}</p>
                  <p className="text-primary-600 font-semibold mb-3">From ${type.basePrice.toLocaleString()}</p>
                  <ul className="text-xs text-gray-500 space-y-1">
                    {type.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircleIcon className="w-3 h-3 text-green-500 mr-1" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-custom-dark mb-4">Select Project Size</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projectSizes.map((size) => (
                <div
                  key={size.id}
                  onClick={() => setSelectedProjectSize(size.id)}
                  className={`p-6 border-2 rounded-lg cursor-pointer transition-all ${
                    selectedProjectSize === size.id
                      ? 'border-primary-600 bg-primary-50'
                      : 'border-gray-200 hover:border-primary-300'
                  }`}
                >
                  <h4 className="font-semibold text-custom-dark mb-2">{size.name}</h4>
                  <p className="text-gray-600 text-sm mb-3">{size.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Duration:</span>
                      <span className="font-medium">{size.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Team Size:</span>
                      <span className="font-medium">{size.teamSize}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Multiplier:</span>
                      <span className="font-medium">{size.multiplier}x</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-custom-dark mb-4">Select Core Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {coreFeatures.map((feature) => (
                <div
                  key={feature.id}
                  onClick={() => toggleFeature(feature.id)}
                  className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                    selectedFeatures.includes(feature.id)
                      ? 'border-primary-600 bg-primary-50'
                      : 'border-gray-200 hover:border-primary-300'
                  }`}
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-primary-600">{feature.icon}</span>
                    <h4 className="font-semibold text-custom-dark">{feature.name}</h4>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">{feature.description}</p>
                  <p className="text-primary-600 font-semibold">+${feature.price.toLocaleString()}</p>
                </div>
              ))}
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-custom-dark mb-4">Select Advanced Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {advancedFeatures.map((feature) => (
                <div
                  key={feature.id}
                  onClick={() => toggleFeature(feature.id)}
                  className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                    selectedFeatures.includes(feature.id)
                      ? 'border-primary-600 bg-primary-50'
                      : 'border-gray-200 hover:border-primary-300'
                  }`}
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-primary-600">{feature.icon}</span>
                    <h4 className="font-semibold text-custom-dark">{feature.name}</h4>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">{feature.description}</p>
                  <p className="text-primary-600 font-semibold">+${feature.price.toLocaleString()}</p>
                </div>
              ))}
            </div>
          </div>
        );
      case 5:
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-custom-dark mb-4">Select Support & Maintenance</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {supportOptions.map((support) => (
                  <div
                    key={support.id}
                    onClick={() => setSelectedSupport(support.id)}
                    className={`p-6 border-2 rounded-lg cursor-pointer transition-all ${
                      selectedSupport === support.id
                        ? 'border-primary-600 bg-primary-50'
                        : 'border-gray-200 hover:border-primary-300'
                    }`}
                  >
                    <h4 className="font-semibold text-custom-dark mb-2">{support.name}</h4>
                    <p className="text-gray-600 text-sm mb-3">{support.description}</p>
                    <p className="text-primary-600 font-semibold">
                      {support.price === 0 ? 'Included' : `+$${support.price.toLocaleString()}`}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-custom-dark mb-4">Select Hosting & Deployment</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {hostingOptions.map((hosting) => (
                  <div
                    key={hosting.id}
                    onClick={() => setSelectedHosting(hosting.id)}
                    className={`p-6 border-2 rounded-lg cursor-pointer transition-all ${
                      selectedHosting === hosting.id
                        ? 'border-primary-600 bg-primary-50'
                        : 'border-gray-200 hover:border-primary-300'
                    }`}
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="text-primary-600">{hosting.icon}</span>
                      <h4 className="font-semibold text-custom-dark">{hosting.name}</h4>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">{hosting.description}</p>
                    <p className="text-primary-600 font-semibold">
                      {hosting.price === 0 ? 'No additional cost' : `+$${hosting.price.toLocaleString()}`}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case 6:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-custom-dark mb-4">Your Custom Project Quote</h3>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Project Type:</span>
                  <span>{projectTypes.find(pt => pt.id === selectedProjectType)?.name || 'Not selected'}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Project Size:</span>
                  <span>{projectSizes.find(ps => ps.id === selectedProjectSize)?.name || 'Not selected'}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Selected Features:</span>
                  <span>{selectedFeatures.length} features</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Support Plan:</span>
                  <span>{supportOptions.find(s => s.id === selectedSupport)?.name || 'Not selected'}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Hosting:</span>
                  <span>{hostingOptions.find(h => h.id === selectedHosting)?.name || 'Not selected'}</span>
                </div>
                <hr className="border-gray-300" />
                <div className="flex justify-between items-center text-lg font-bold">
                  <span>Total Estimated Cost:</span>
                  <span className="text-primary-600">${calculateTotal().toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[calc(100vh-200px)] flex items-center justify-center bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          src="/videos/coding.mp4"
        />
        <div className="absolute inset-0 bg-primary-900 bg-opacity-60" />
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg"
          >
            Get Started Today
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 drop-shadow-md"
          >
            Transform your ideas into reality with our comprehensive development services. Get a custom quote tailored to your needs.
          </motion.p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-custom-dark mb-4">
              Our Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a wide range of development services to help you build the perfect solution for your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectTypes.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-primary-600">{service.icon}</span>
                  <h3 className="text-xl font-semibold text-custom-dark">{service.name}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <p className="text-primary-600 font-semibold mb-4">From ${service.basePrice.toLocaleString()}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Calculator Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-custom-dark mb-4">
              Custom Project Pricing Calculator
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get an instant estimate for your custom development project. Our calculator considers all aspects of your requirements.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            {/* Progress Steps */}
            <div className="mb-8">
              <div className="flex items-center justify-between">
                {steps.map((step, index) => (
                  <div key={step.id} className="flex items-center">
                    <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                      currentStep >= step.id 
                        ? 'bg-primary-600 border-primary-600 text-white' 
                        : 'border-gray-300 text-gray-500'
                    }`}>
                      {step.id}
                    </div>
                    {index < steps.length - 1 && (
                      <div className={`w-16 h-1 mx-2 ${
                        currentStep > step.id ? 'bg-primary-600' : 'bg-gray-300'
                      }`} />
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-custom-dark">
                  {steps[currentStep - 1].title}
                </h3>
                <p className="text-gray-600">{steps[currentStep - 1].description}</p>
              </div>
            </div>

            {/* Step Content */}
            <div className="mb-8">
              {renderStep()}
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center">
              <button
                onClick={prevStep}
                disabled={currentStep === 1}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-colors ${
                  currentStep === 1
                    ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <ArrowLeftIcon className="w-5 h-5" />
                <span>Previous</span>
              </button>

              <div className="text-center">
                <span className="text-sm text-gray-500">
                  Step {currentStep} of {steps.length}
                </span>
              </div>

              {currentStep < steps.length ? (
                <button
                  onClick={nextStep}
                  className="flex items-center space-x-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                >
                  <span>Next</span>
                  <ArrowRightIcon className="w-5 h-5" />
                </button>
              ) : (
                <button
                  onClick={() => setShowPopupForm(true)}
                  className="flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  <span>Get Detailed Quote</span>
                  <CheckCircleIcon className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your project requirements and create a custom solution that drives your business forward.
            </p>
            <button
              onClick={() => setShowPopupForm(true)}
              className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 inline-block"
            >
              Get Free Consultation
            </button>
          </motion.div>
        </div>
      </section>

      {/* Popup Form */}
      <PopupForm
        isOpen={showPopupForm}
        onClose={() => setShowPopupForm(false)}
        title="Get Your Custom Quote"
        subtitle="Fill out the form below and we'll provide you with a detailed project proposal"
        type="quote"
        projectType={selectedProjectType}
        projectName={projectTypes.find(pt => pt.id === selectedProjectType)?.name}
        estimatedPrice={calculateTotal()}
        hideCalculatorFields={true}
      />
    </div>
  );
};

export default GetStarted; 