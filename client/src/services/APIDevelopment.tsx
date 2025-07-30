import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CalculatorIcon,
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  UserGroupIcon,
  ClockIcon,
  CurrencyDollarIcon,
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
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';

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
}

interface ProjectSize {
  id: string;
  name: string;
  description: string;
  multiplier: number;
  duration: string;
}

interface ProjectFeature {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  icon: React.ReactNode;
}

const APIDevelopment = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedProjectType, setSelectedProjectType] = useState('');
  const [selectedProjectSize, setSelectedProjectSize] = useState('');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [selectedDuration, setSelectedDuration] = useState('');
  const [selectedComplexity, setSelectedComplexity] = useState('');
  const [selectedIntegrations, setSelectedIntegrations] = useState<string[]>([]);
  const [selectedSecurity, setSelectedSecurity] = useState<string[]>([]);
  const [selectedSupport, setSelectedSupport] = useState('');
  const [selectedHosting, setSelectedHosting] = useState('');

  const steps: CalculatorStep[] = [
    { id: 1, title: 'API Type', description: 'Choose your API development type' },
    { id: 2, title: 'Project Size', description: 'Define scope and complexity' },
    { id: 3, title: 'Core Features', description: 'Select essential API features' },
    { id: 4, title: 'Advanced Features', description: 'Add advanced capabilities' },
    { id: 5, title: 'Integrations', description: 'Connect with external services' },
    { id: 6, title: 'Security & Compliance', description: 'Security requirements' },
    { id: 7, title: 'Support & Maintenance', description: 'Ongoing support options' },
    { id: 8, title: 'Hosting & Deployment', description: 'Choose hosting environment' },
    { id: 9, title: 'Quote Summary', description: 'Review your custom quote' }
  ];

  const projectTypes: ProjectType[] = [
    {
      id: 'rest-api',
      name: 'REST API',
      description: 'RESTful API with standard HTTP methods',
      basePrice: 8000,
      icon: <GlobeAltIcon className="w-8 h-8" />
    },
    {
      id: 'graphql-api',
      name: 'GraphQL API',
      description: 'Flexible query language for APIs',
      basePrice: 12000,
      icon: <CodeBracketIcon className="w-8 h-8" />
    },
    {
      id: 'soap-api',
      name: 'SOAP API',
      description: 'Enterprise-grade SOAP web services',
      basePrice: 15000,
      icon: <DocumentTextIcon className="w-8 h-8" />
    },
    {
      id: 'webhook-api',
      name: 'Webhook API',
      description: 'Event-driven webhook system',
      basePrice: 6000,
      icon: <BellIcon className="w-8 h-8" />
    },
    {
      id: 'microservices-api',
      name: 'Microservices API',
      description: 'Distributed microservices architecture',
      basePrice: 20000,
      icon: <CloudIcon className="w-8 h-8" />
    },
    {
      id: 'api-gateway',
      name: 'API Gateway',
      description: 'Centralized API management and routing',
      basePrice: 18000,
      icon: <CogIcon className="w-8 h-8" />
    },
    {
      id: 'real-time-api',
      name: 'Real-time API',
      description: 'WebSocket and real-time communication',
      basePrice: 14000,
      icon: <WifiIcon className="w-8 h-8" />
    },
    {
      id: 'streaming-api',
      name: 'Streaming API',
      description: 'Data streaming and event processing',
      basePrice: 16000,
      icon: <RocketLaunchIcon className="w-8 h-8" />
    }
  ];

  const projectSizes: ProjectSize[] = [
    {
      id: 'small',
      name: 'Small API',
      description: 'Basic endpoints, simple data models',
      multiplier: 1.0,
      duration: '2-4 weeks'
    },
    {
      id: 'medium',
      name: 'Medium API',
      description: 'Standard endpoints, moderate complexity',
      multiplier: 1.5,
      duration: '4-8 weeks'
    },
    {
      id: 'large',
      name: 'Large API',
      description: 'Complex endpoints, advanced features',
      multiplier: 2.5,
      duration: '8-16 weeks'
    },
    {
      id: 'enterprise',
      name: 'Enterprise API',
      description: 'Multi-service, high scalability',
      multiplier: 4.0,
      duration: '16-24 weeks'
    }
  ];

  const coreFeatures: ProjectFeature[] = [
    {
      id: 'authentication',
      name: 'Authentication',
      description: 'JWT, OAuth, API key authentication',
      price: 2000,
      category: 'core',
      icon: <LockClosedIcon className="w-6 h-6" />
    },
    {
      id: 'authorization',
      name: 'Authorization',
      description: 'Role-based access control',
      price: 1500,
      category: 'core',
      icon: <ShieldCheckIcon className="w-6 h-6" />
    },
    {
      id: 'rate-limiting',
      name: 'Rate Limiting',
      description: 'Request throttling and quotas',
      price: 1200,
      category: 'core',
      icon: <ClockIcon className="w-6 h-6" />
    },
    {
      id: 'validation',
      name: 'Data Validation',
      description: 'Input validation and sanitization',
      price: 1000,
      category: 'core',
      icon: <CheckCircleIcon className="w-6 h-6" />
    },
    {
      id: 'error-handling',
      name: 'Error Handling',
      description: 'Comprehensive error responses',
      price: 800,
      category: 'core',
      icon: <ExclamationTriangleIcon className="w-6 h-6" />
    },
    {
      id: 'logging',
      name: 'API Logging',
      description: 'Request/response logging',
      price: 600,
      category: 'core',
      icon: <DocumentTextIcon className="w-6 h-6" />
    },
    {
      id: 'caching',
      name: 'Caching',
      description: 'Response caching and optimization',
      price: 1500,
      category: 'core',
      icon: <RocketLaunchIcon className="w-6 h-6" />
    },
    {
      id: 'pagination',
      name: 'Pagination',
      description: 'Data pagination and filtering',
      price: 700,
      category: 'core',
      icon: <ArrowRightIcon className="w-6 h-6" />
    },
    {
      id: 'versioning',
      name: 'API Versioning',
      description: 'Version control and backward compatibility',
      price: 1200,
      category: 'core',
      icon: <DocumentDuplicateIcon className="w-6 h-6" />
    },
    {
      id: 'monitoring',
      name: 'Health Monitoring',
      description: 'API health checks and status',
      price: 900,
      category: 'core',
      icon: <ChartBarIcon className="w-6 h-6" />
    }
  ];

  const advancedFeatures: ProjectFeature[] = [
    {
      id: 'analytics',
      name: 'API Analytics',
      description: 'Usage analytics and insights',
      price: 2500,
      category: 'advanced',
      icon: <ChartBarIcon className="w-6 h-6" />
    },
    {
      id: 'webhooks',
      name: 'Webhook System',
      description: 'Event-driven webhook delivery',
      price: 2000,
      category: 'advanced',
      icon: <BellIcon className="w-6 h-6" />
    },
    {
      id: 'real-time',
      name: 'Real-time Updates',
      description: 'WebSocket and SSE support',
      price: 3000,
      category: 'advanced',
      icon: <WifiIcon className="w-6 h-6" />
    },
    {
      id: 'streaming',
      name: 'Data Streaming',
      description: 'Stream processing and events',
      price: 3500,
      category: 'advanced',
      icon: <RocketLaunchIcon className="w-6 h-6" />
    },
    {
      id: 'graphql',
      name: 'GraphQL Support',
      description: 'GraphQL schema and resolvers',
      price: 4000,
      category: 'advanced',
      icon: <CodeBracketIcon className="w-6 h-6" />
    },
    {
      id: 'batch-operations',
      name: 'Batch Operations',
      description: 'Bulk data processing',
      price: 1800,
      category: 'advanced',
      icon: <CubeIcon className="w-6 h-6" />
    },
    {
      id: 'search',
      name: 'Advanced Search',
      description: 'Full-text search and filtering',
      price: 2200,
      category: 'advanced',
      icon: <MagnifyingGlassIcon className="w-6 h-6" />
    },
    {
      id: 'notifications',
      name: 'Push Notifications',
      description: 'Real-time push notifications',
      price: 1800,
      category: 'advanced',
      icon: <BellIcon className="w-6 h-6" />
    }
  ];

  const integrations: ProjectFeature[] = [
    {
      id: 'payment-gateway',
      name: 'Payment Gateway',
      description: 'Stripe, PayPal integration',
      price: 2000,
      category: 'integration',
      icon: <CreditCardIcon className="w-6 h-6" />
    },
    {
      id: 'email-service',
      name: 'Email Service',
      description: 'SendGrid, Mailgun integration',
      price: 800,
      category: 'integration',
      icon: <EnvelopeIcon className="w-6 h-6" />
    },
    {
      id: 'sms-service',
      name: 'SMS Service',
      description: 'Twilio SMS integration',
      price: 1200,
      category: 'integration',
      icon: <DevicePhoneMobileIcon className="w-6 h-6" />
    },
    {
      id: 'cloud-storage',
      name: 'Cloud Storage',
      description: 'AWS S3, Google Cloud Storage',
      price: 1000,
      category: 'integration',
      icon: <CloudIcon className="w-6 h-6" />
    },
    {
      id: 'database',
      name: 'Database Integration',
      description: 'PostgreSQL, MongoDB, Redis',
      price: 1500,
      category: 'integration',
      icon: <CircleStackIcon className="w-6 h-6" />
    },
    {
      id: 'third-party-apis',
      name: 'Third-party APIs',
      description: 'External API integrations',
      price: 2500,
      category: 'integration',
      icon: <GlobeAltIcon className="w-6 h-6" />
    }
  ];

  const securityFeatures: ProjectFeature[] = [
    {
      id: 'ssl-tls',
      name: 'SSL/TLS Encryption',
      description: 'HTTPS encryption',
      price: 500,
      category: 'security',
      icon: <ShieldCheckIcon className="w-6 h-6" />
    },
    {
      id: 'api-keys',
      name: 'API Key Management',
      description: 'Secure API key handling',
      price: 800,
      category: 'security',
      icon: <LockClosedIcon className="w-6 h-6" />
    },
    {
      id: 'oauth2',
      name: 'OAuth 2.0',
      description: 'OAuth 2.0 implementation',
      price: 1500,
      category: 'security',
      icon: <UserGroupIcon className="w-6 h-6" />
    },
    {
      id: 'jwt',
      name: 'JWT Tokens',
      description: 'JSON Web Token authentication',
      price: 1000,
      category: 'security',
      icon: <LockClosedIcon className="w-6 h-6" />
    },
    {
      id: 'cors',
      name: 'CORS Configuration',
      description: 'Cross-origin resource sharing',
      price: 400,
      category: 'security',
      icon: <GlobeAltIcon className="w-6 h-6" />
    },
    {
      id: 'input-sanitization',
      name: 'Input Sanitization',
      description: 'SQL injection protection',
      price: 1200,
      category: 'security',
      icon: <ShieldCheckIcon className="w-6 h-6" />
    },
    {
      id: 'rate-limiting-advanced',
      name: 'Advanced Rate Limiting',
      description: 'IP-based and user-based limits',
      price: 900,
      category: 'security',
      icon: <ClockIcon className="w-6 h-6" />
    },
    {
      id: 'audit-logging',
      name: 'Audit Logging',
      description: 'Comprehensive activity logging',
      price: 1100,
      category: 'security',
      icon: <DocumentTextIcon className="w-6 h-6" />
    }
  ];

  const supportOptions = [
    { id: 'basic', name: 'Basic Support', price: 0, description: 'Email support during development' },
    { id: 'standard', name: 'Standard Support', price: 500, description: '3 months post-launch support' },
    { id: 'premium', name: 'Premium Support', price: 1500, description: '6 months support with maintenance' },
    { id: 'enterprise', name: 'Enterprise Support', price: 3000, description: '12 months support with SLA' }
  ];

  const hostingOptions = [
    { id: 'shared', name: 'Shared Hosting', price: 20, description: 'Basic shared hosting environment', icon: <CloudIcon className="w-6 h-6" /> },
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
    const allFeatures = [...coreFeatures, ...advancedFeatures, ...integrations, ...securityFeatures];
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
            <h3 className="text-xl font-semibold text-custom-dark mb-4">Select API Type</h3>
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
                  <p className="text-primary-600 font-semibold">From ${type.basePrice.toLocaleString()}</p>
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
                  <div className="flex justify-between items-center">
                    <span className="text-primary-600 font-semibold">{size.duration}</span>
                    <span className="text-gray-500 text-sm">{size.multiplier}x multiplier</span>
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
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-custom-dark mb-4">Select Integrations</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {integrations.map((integration) => (
                <div
                  key={integration.id}
                  onClick={() => toggleFeature(integration.id)}
                  className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                    selectedFeatures.includes(integration.id)
                      ? 'border-primary-600 bg-primary-50'
                      : 'border-gray-200 hover:border-primary-300'
                  }`}
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-primary-600">{integration.icon}</span>
                    <h4 className="font-semibold text-custom-dark">{integration.name}</h4>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">{integration.description}</p>
                  <p className="text-primary-600 font-semibold">+${integration.price.toLocaleString()}</p>
                </div>
              ))}
            </div>
          </div>
        );
      case 6:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-custom-dark mb-4">Select Security Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {securityFeatures.map((security) => (
                <div
                  key={security.id}
                  onClick={() => toggleFeature(security.id)}
                  className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                    selectedFeatures.includes(security.id)
                      ? 'border-primary-600 bg-primary-50'
                      : 'border-gray-200 hover:border-primary-300'
                  }`}
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-primary-600">{security.icon}</span>
                    <h4 className="font-semibold text-custom-dark">{security.name}</h4>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">{security.description}</p>
                  <p className="text-primary-600 font-semibold">+${security.price.toLocaleString()}</p>
                </div>
              ))}
            </div>
          </div>
        );
      case 7:
        return (
          <div className="space-y-6">
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
        );
      case 8:
        return (
          <div className="space-y-6">
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
        );
      case 9:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-custom-dark mb-4">Your Custom API Quote</h3>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Base API Development:</span>
                  <span>${calculateTotal().toLocaleString()}</span>
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
    <div>
      {/* Hero Section */}
      <section className="relative h-[calc(100vh-200px)] flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          src="/videos/coding.mp4"
        />
        <div className="absolute inset-0 bg-blue-900 bg-opacity-60" />
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg"
          >
            API Development Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 drop-shadow-md"
          >
            Build robust, scalable, and secure APIs for your business. We specialize in REST, GraphQL, and custom integrations to power your digital ecosystem.
          </motion.p>
                </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-custom-dark mb-4">
              Why Choose Our API Development Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We build robust, scalable, and secure APIs that power modern applications and drive business growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CodeBracketIcon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-custom-dark mb-2">REST & GraphQL APIs</h3>
              <p className="text-gray-600">Modern API development with RESTful principles and GraphQL flexibility for optimal data fetching.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheckIcon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-custom-dark mb-2">Security First</h3>
              <p className="text-gray-600">Enterprise-grade security with authentication, authorization, and comprehensive threat protection.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <RocketLaunchIcon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-custom-dark mb-2">High Performance</h3>
              <p className="text-gray-600">Optimized APIs with caching, rate limiting, and load balancing for maximum performance.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <GlobeAltIcon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-custom-dark mb-2">Third-party Integrations</h3>
              <p className="text-gray-600">Seamless integration with payment gateways, cloud services, and external APIs.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DocumentTextIcon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-custom-dark mb-2">Comprehensive Documentation</h3>
              <p className="text-gray-600">Detailed API documentation with interactive examples and SDKs for easy integration.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ClockIcon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-custom-dark mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock monitoring, maintenance, and support to keep your APIs running smoothly.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Calculator Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-custom-dark mb-4">
            API Development Pricing Calculator
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get an instant estimate for your custom API development project. Our calculator considers all aspects of your requirements.
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
                  <button className="flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                    <span>Get Quote</span>
                    <CheckCircleIcon className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

      {/* Services Overview */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-custom-dark mb-4">
              Our API Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We specialize in creating custom APIs that drive business growth and enable seamless integrations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CodeBracketIcon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-custom-dark mb-2">Custom API Development</h3>
              <p className="text-gray-600">Bespoke API solutions tailored to your specific business needs and requirements.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <GlobeAltIcon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-custom-dark mb-2">API Integration</h3>
              <p className="text-gray-600">Seamless integration with third-party services and existing systems.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheckIcon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-custom-dark mb-2">Security Implementation</h3>
              <p className="text-gray-600">Enterprise-grade security measures to protect your data and users.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <RocketLaunchIcon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-custom-dark mb-2">Performance Optimization</h3>
              <p className="text-gray-600">High-performance APIs with caching, rate limiting, and load balancing.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DocumentTextIcon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-custom-dark mb-2">API Documentation</h3>
              <p className="text-gray-600">Comprehensive documentation with interactive examples and SDKs.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ClockIcon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-custom-dark mb-2">Ongoing Support</h3>
              <p className="text-gray-600">Continuous maintenance, updates, and support to keep your APIs running smoothly.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default APIDevelopment;