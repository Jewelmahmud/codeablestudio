import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  CogIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  ChartBarIcon,
  UserGroupIcon,
  ClockIcon,
  SparklesIcon,
  WifiIcon,
  CloudIcon,
  BoltIcon,
  EyeIcon,
  CursorArrowRaysIcon,
  CommandLineIcon,
  MagnifyingGlassIcon,
  EnvelopeIcon,
  ServerIcon,
  DeviceTabletIcon,
  ComputerDesktopIcon,
  CalculatorIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  CheckCircleIcon,
  CurrencyDollarIcon,
  CodeBracketIcon,
  LockClosedIcon,
  CircleStackIcon,
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
  HomeIcon,
  MicrophoneIcon,
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

const ProgressiveWebApps = () => {
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
    { id: 1, title: 'PWA Type', description: 'Choose your Progressive Web App type' },
    { id: 2, title: 'Project Size', description: 'Define scope and complexity' },
    { id: 3, title: 'Core Features', description: 'Select essential PWA features' },
    { id: 4, title: 'Advanced Features', description: 'Add advanced capabilities' },
    { id: 5, title: 'Integrations', description: 'Connect with external services' },
    { id: 6, title: 'Security & Compliance', description: 'Security requirements' },
    { id: 7, title: 'Support & Maintenance', description: 'Ongoing support options' },
    { id: 8, title: 'Hosting & Deployment', description: 'Choose hosting environment' },
    { id: 9, title: 'Quote Summary', description: 'Review your custom quote' }
  ];

  const projectTypes: ProjectType[] = [
    {
      id: 'ecommerce',
      name: 'E-commerce PWA',
      description: 'Online store with offline capabilities',
      basePrice: 15000,
      icon: <ShoppingCartIcon className="w-6 h-6" />
    },
    {
      id: 'social',
      name: 'Social Media PWA',
      description: 'Social networking with real-time features',
      basePrice: 12000,
      icon: <UserGroupIcon className="w-6 h-6" />
    },
    {
      id: 'content',
      name: 'News & Content PWA',
      description: 'Content platform with offline reading',
      basePrice: 8000,
      icon: <DocumentTextIcon className="w-6 h-6" />
    },
    {
      id: 'productivity',
      name: 'Productivity PWA',
      description: 'Task management and collaboration tools',
      basePrice: 10000,
      icon: <CogIcon className="w-6 h-6" />
    },
    {
      id: 'travel',
      name: 'Travel & Booking PWA',
      description: 'Travel planning with offline maps',
      basePrice: 14000,
      icon: <MapPinIcon className="w-6 h-6" />
    },
    {
      id: 'healthcare',
      name: 'Healthcare PWA',
      description: 'Health tracking and telemedicine',
      basePrice: 18000,
      icon: <ShieldCheckIcon className="w-6 h-6" />
    },
    {
      id: 'education',
      name: 'Education PWA',
      description: 'Learning platform with offline courses',
      basePrice: 11000,
      icon: <DocumentDuplicateIcon className="w-6 h-6" />
    },
    {
      id: 'entertainment',
      name: 'Entertainment PWA',
      description: 'Media streaming with offline playback',
      basePrice: 13000,
      icon: <VideoCameraIcon className="w-6 h-6" />
    },
    {
      id: 'finance',
      name: 'Finance PWA',
      description: 'Banking and financial management',
      basePrice: 20000,
      icon: <CurrencyDollarIcon className="w-6 h-6" />
    },
    {
      id: 'realestate',
      name: 'Real Estate PWA',
      description: 'Property search with offline listings',
      basePrice: 12000,
      icon: <HomeIcon className="w-6 h-6" />
    },
    {
      id: 'fooddelivery',
      name: 'Food Delivery PWA',
      description: 'Restaurant ordering with offline menu',
      basePrice: 16000,
      icon: <ShoppingCartIcon className="w-6 h-6" />
    },
    {
      id: 'fitness',
      name: 'Fitness PWA',
      description: 'Workout tracking with offline routines',
      basePrice: 9000,
      icon: <SparklesIcon className="w-6 h-6" />
    },
    {
      id: 'events',
      name: 'Event Management PWA',
      description: 'Event planning with offline schedules',
      basePrice: 10000,
      icon: <CalendarIcon className="w-6 h-6" />
    },
    {
      id: 'marketplace',
      name: 'Marketplace PWA',
      description: 'Multi-vendor platform with offline browsing',
      basePrice: 17000,
      icon: <GlobeAltIcon className="w-6 h-6" />
    },
    {
      id: 'crm',
      name: 'CRM PWA',
      description: 'Customer relationship management',
      basePrice: 15000,
      icon: <UsersIcon className="w-6 h-6" />
    },
    {
      id: 'inventory',
      name: 'Inventory PWA',
      description: 'Stock management with offline sync',
      basePrice: 11000,
      icon: <CubeIcon className="w-6 h-6" />
    },
    {
      id: 'analytics',
      name: 'Analytics PWA',
      description: 'Data visualization with offline reports',
      basePrice: 13000,
      icon: <ChartBarIcon className="w-6 h-6" />
    },
    {
      id: 'communication',
      name: 'Communication PWA',
      description: 'Messaging and video calls',
      basePrice: 14000,
      icon: <ChatBubbleLeftRightIcon className="w-6 h-6" />
    },
    {
      id: 'gaming',
      name: 'Gaming PWA',
      description: 'Casual games with offline play',
      basePrice: 12000,
      icon: <SparklesIcon className="w-6 h-6" />
    },
    {
      id: 'custom',
      name: 'Custom PWA',
      description: 'Tailored solution for your needs',
      basePrice: 25000,
      icon: <CodeBracketIcon className="w-6 h-6" />
    }
  ];

  const projectSizes: ProjectSize[] = [
    {
      id: 'small',
      name: 'Small PWA',
      description: 'Basic PWA with core features, 5-10 pages',
      multiplier: 1.0,
      duration: '4-6 weeks'
    },
    {
      id: 'medium',
      name: 'Medium PWA',
      description: 'Standard PWA with advanced features, 10-25 pages',
      multiplier: 1.5,
      duration: '6-10 weeks'
    },
    {
      id: 'large',
      name: 'Large PWA',
      description: 'Complex PWA with enterprise features, 25+ pages',
      multiplier: 2.0,
      duration: '10-16 weeks'
    },
    {
      id: 'enterprise',
      name: 'Enterprise PWA',
      description: 'Full-scale PWA with custom integrations',
      multiplier: 2.5,
      duration: '16-24 weeks'
    }
  ];

  const coreFeatures: ProjectFeature[] = [
    {
      id: 'service-worker',
      name: 'Service Worker',
      description: 'Offline functionality and caching',
      price: 2000,
      category: 'core',
      icon: <WifiIcon className="w-5 h-5" />
    },
    {
      id: 'web-manifest',
      name: 'Web App Manifest',
      description: 'App-like installation experience',
      price: 1500,
      category: 'core',
      icon: <DevicePhoneMobileIcon className="w-5 h-5" />
    },
    {
      id: 'responsive-design',
      name: 'Responsive Design',
      description: 'Works on all devices',
      price: 2500,
      category: 'core',
      icon: <DeviceTabletIcon className="w-5 h-5" />
    },
    {
      id: 'push-notifications',
      name: 'Push Notifications',
      description: 'Real-time updates and alerts',
      price: 3000,
      category: 'core',
      icon: <BellIcon className="w-5 h-5" />
    },
    {
      id: 'background-sync',
      name: 'Background Sync',
      description: 'Data synchronization when online',
      price: 2500,
      category: 'core',
      icon: <CloudIcon className="w-5 h-5" />
    },
    {
      id: 'app-shell',
      name: 'App Shell Architecture',
      description: 'Fast loading and navigation',
      price: 2000,
      category: 'core',
      icon: <BoltIcon className="w-5 h-5" />
    },
    {
      id: 'offline-database',
      name: 'Offline Database',
      description: 'Local data storage',
      price: 2000,
      category: 'core',
      icon: <CircleStackIcon className="w-5 h-5" />
    },
    {
      id: 'progressive-enhancement',
      name: 'Progressive Enhancement',
      description: 'Works without JavaScript',
      price: 1500,
      category: 'core',
      icon: <SparklesIcon className="w-5 h-5" />
    },
    {
      id: 'fast-loading',
      name: 'Fast Loading',
      description: 'Optimized performance',
      price: 3000,
      category: 'core',
      icon: <RocketLaunchIcon className="w-5 h-5" />
    },
    {
      id: 'https-secure',
      name: 'Secure HTTPS',
      description: 'Encrypted data transmission',
      price: 1000,
      category: 'core',
      icon: <LockClosedIcon className="w-5 h-5" />
    },
    {
      id: 'cross-browser',
      name: 'Cross-Browser Support',
      description: 'Works on all modern browsers',
      price: 2000,
      category: 'core',
      icon: <GlobeAltIcon className="w-5 h-5" />
    },
    {
      id: 'app-store-optimization',
      name: 'App Store Optimization',
      description: 'Better discoverability',
      price: 1500,
      category: 'core',
      icon: <MagnifyingGlassIcon className="w-5 h-5" />
    },
    {
      id: 'installation-prompts',
      name: 'Installation Prompts',
      description: 'Easy app installation',
      price: 1000,
      category: 'core',
      icon: <DevicePhoneMobileIcon className="w-5 h-5" />
    },
    {
      id: 'offline-maps',
      name: 'Offline Maps',
      description: 'Location services without internet',
      price: 3000,
      category: 'core',
      icon: <MapPinIcon className="w-5 h-5" />
    },
    {
      id: 'media-caching',
      name: 'Media Caching',
      description: 'Offline media playback',
      price: 2000,
      category: 'core',
      icon: <VideoCameraIcon className="w-5 h-5" />
    },
    {
      id: 'data-sync',
      name: 'Data Synchronization',
      description: 'Seamless online/offline sync',
      price: 2500,
      category: 'core',
      icon: <CloudIcon className="w-5 h-5" />
    }
  ];

  const advancedFeatures: ProjectFeature[] = [
    {
      id: 'advanced-caching',
      name: 'Advanced Caching Strategies',
      description: 'Intelligent content caching',
      price: 3000,
      category: 'advanced',
      icon: <BoltIcon className="w-5 h-5" />
    },
    {
      id: 'background-processing',
      name: 'Background Processing',
      description: 'Tasks run in background',
      price: 4000,
      category: 'advanced',
      icon: <CogIcon className="w-5 h-5" />
    },
    {
      id: 'geolocation',
      name: 'Geolocation Services',
      description: 'Location-based features',
      price: 2500,
      category: 'advanced',
      icon: <MapPinIcon className="w-5 h-5" />
    },
    {
      id: 'camera-media',
      name: 'Camera & Media Access',
      description: 'Photo and video capture',
      price: 3000,
      category: 'advanced',
      icon: <VideoCameraIcon className="w-5 h-5" />
    },
    {
      id: 'biometric-auth',
      name: 'Biometric Authentication',
      description: 'Fingerprint and face unlock',
      price: 3500,
      category: 'advanced',
      icon: <ShieldCheckIcon className="w-5 h-5" />
    },
    {
      id: 'voice-recognition',
      name: 'Voice Recognition',
      description: 'Voice commands and dictation',
      price: 4000,
      category: 'advanced',
      icon: <MicrophoneIcon className="w-5 h-5" />
    },
    {
      id: 'augmented-reality',
      name: 'Augmented Reality',
      description: 'AR features and overlays',
      price: 8000,
      category: 'advanced',
      icon: <EyeIcon className="w-5 h-5" />
    },
    {
      id: 'machine-learning',
      name: 'Machine Learning',
      description: 'AI-powered features',
      price: 6000,
      category: 'advanced',
      icon: <SparklesIcon className="w-5 h-5" />
    },
    {
      id: 'real-time-collaboration',
      name: 'Real-time Collaboration',
      description: 'Multi-user editing',
      price: 5000,
      category: 'advanced',
      icon: <UserGroupIcon className="w-5 h-5" />
    },
    {
      id: 'advanced-analytics',
      name: 'Advanced Analytics',
      description: 'User behavior tracking',
      price: 3000,
      category: 'advanced',
      icon: <ChartBarIcon className="w-5 h-5" />
    },
    {
      id: 'ab-testing',
      name: 'A/B Testing',
      description: 'Performance optimization',
      price: 2500,
      category: 'advanced',
      icon: <PresentationChartLineIcon className="w-5 h-5" />
    },
    {
      id: 'multi-language',
      name: 'Multi-language Support',
      description: 'Internationalization',
      price: 2000,
      category: 'advanced',
      icon: <GlobeAltIcon className="w-5 h-5" />
    },
    {
      id: 'accessibility',
      name: 'Accessibility Features',
      description: 'WCAG compliance',
      price: 3000,
      category: 'advanced',
      icon: <EyeIcon className="w-5 h-5" />
    },
    {
      id: 'advanced-security',
      name: 'Advanced Security',
      description: 'Encryption and security',
      price: 4000,
      category: 'advanced',
      icon: <LockClosedIcon className="w-5 h-5" />
    },
    {
      id: 'performance-monitoring',
      name: 'Performance Monitoring',
      description: 'Real-time performance tracking',
      price: 2000,
      category: 'advanced',
      icon: <ChartBarIcon className="w-5 h-5" />
    },
    {
      id: 'error-tracking',
      name: 'Error Tracking',
      description: 'Crash reporting and analytics',
      price: 1500,
      category: 'advanced',
      icon: <ExclamationTriangleIcon className="w-5 h-5" />
    },
    {
      id: 'user-feedback',
      name: 'User Feedback System',
      description: 'In-app feedback collection',
      price: 1500,
      category: 'advanced',
      icon: <ChatBubbleLeftRightIcon className="w-5 h-5" />
    },
    {
      id: 'advanced-search',
      name: 'Advanced Search',
      description: 'Full-text search capabilities',
      price: 3000,
      category: 'advanced',
      icon: <MagnifyingGlassIcon className="w-5 h-5" />
    },
    {
      id: 'social-integration',
      name: 'Social Integration',
      description: 'Social media sharing',
      price: 2000,
      category: 'advanced',
      icon: <UserGroupIcon className="w-5 h-5" />
    },
    {
      id: 'payment-processing',
      name: 'Payment Processing',
      description: 'Secure payment handling',
      price: 4000,
      category: 'advanced',
      icon: <CreditCardIcon className="w-5 h-5" />
    },
    {
      id: 'inventory-management',
      name: 'Inventory Management',
      description: 'Stock tracking and alerts',
      price: 3000,
      category: 'advanced',
      icon: <CubeIcon className="w-5 h-5" />
    },
    {
      id: 'customer-support',
      name: 'Customer Support',
      description: 'Live chat and help system',
      price: 2500,
      category: 'advanced',
      icon: <ChatBubbleLeftRightIcon className="w-5 h-5" />
    },
    {
      id: 'advanced-reporting',
      name: 'Advanced Reporting',
      description: 'Custom reports and dashboards',
      price: 3500,
      category: 'advanced',
      icon: <DocumentDuplicateIcon className="w-5 h-5" />
    },
    {
      id: 'api-integration',
      name: 'API Integration',
      description: 'Third-party service integration',
      price: 3000,
      category: 'advanced',
      icon: <ServerIcon className="w-5 h-5" />
    },
    {
      id: 'data-export-import',
      name: 'Data Export/Import',
      description: 'Bulk data operations',
      price: 2000,
      category: 'advanced',
      icon: <DocumentDuplicateIcon className="w-5 h-5" />
    },
    {
      id: 'advanced-permissions',
      name: 'Advanced Permissions',
      description: 'Granular access control',
      price: 2500,
      category: 'advanced',
      icon: <LockClosedIcon className="w-5 h-5" />
    }
  ];

  const integrations: ProjectFeature[] = [
    {
      id: 'firebase',
      name: 'Firebase',
      description: 'Backend services and analytics',
      price: 2000,
      category: 'integration',
      icon: <CloudIcon className="w-5 h-5" />
    },
    {
      id: 'aws-amplify',
      name: 'AWS Amplify',
      description: 'Cloud infrastructure',
      price: 3000,
      category: 'integration',
      icon: <CloudIcon className="w-5 h-5" />
    },
    {
      id: 'google-cloud',
      name: 'Google Cloud',
      description: 'Cloud computing services',
      price: 2500,
      category: 'integration',
      icon: <CloudIcon className="w-5 h-5" />
    },
    {
      id: 'azure',
      name: 'Microsoft Azure',
      description: 'Enterprise cloud platform',
      price: 3000,
      category: 'integration',
      icon: <CloudIcon className="w-5 h-5" />
    },
    {
      id: 'stripe',
      name: 'Stripe',
      description: 'Payment processing',
      price: 2000,
      category: 'integration',
      icon: <CreditCardIcon className="w-5 h-5" />
    },
    {
      id: 'sendgrid',
      name: 'SendGrid',
      description: 'Email services',
      price: 1000,
      category: 'integration',
      icon: <EnvelopeIcon className="w-5 h-5" />
    },
    {
      id: 'twilio',
      name: 'Twilio',
      description: 'SMS and communication',
      price: 2000,
      category: 'integration',
      icon: <ChatBubbleLeftRightIcon className="w-5 h-5" />
    },
    {
      id: 'google-maps',
      name: 'Google Maps',
      description: 'Location services',
      price: 1500,
      category: 'integration',
      icon: <MapPinIcon className="w-5 h-5" />
    },
    {
      id: 'auth0',
      name: 'Auth0',
      description: 'Authentication services',
      price: 2000,
      category: 'integration',
      icon: <ShieldCheckIcon className="w-5 h-5" />
    },
    {
      id: 'contentful',
      name: 'Contentful',
      description: 'Content management',
      price: 2000,
      category: 'integration',
      icon: <DocumentTextIcon className="w-5 h-5" />
    },
    {
      id: 'shopify',
      name: 'Shopify',
      description: 'E-commerce platform',
      price: 3000,
      category: 'integration',
      icon: <ShoppingCartIcon className="w-5 h-5" />
    },
    {
      id: 'slack',
      name: 'Slack',
      description: 'Team communication',
      price: 1500,
      category: 'integration',
      icon: <ChatBubbleLeftRightIcon className="w-5 h-5" />
    }
  ];

  const securityFeatures: ProjectFeature[] = [
    {
      id: 'ssl-certificate',
      name: 'SSL Certificate',
      description: 'HTTPS encryption',
      price: 500,
      category: 'security',
      icon: <LockClosedIcon className="w-5 h-5" />
    },
    {
      id: 'data-encryption',
      name: 'Data Encryption',
      description: 'End-to-end encryption',
      price: 1500,
      category: 'security',
      icon: <ShieldCheckIcon className="w-5 h-5" />
    },
    {
      id: 'two-factor-auth',
      name: 'Two-Factor Authentication',
      description: 'Enhanced login security',
      price: 1000,
      category: 'security',
      icon: <ShieldCheckIcon className="w-5 h-5" />
    },
    {
      id: 'gdpr-compliance',
      name: 'GDPR Compliance',
      description: 'Data protection compliance',
      price: 2000,
      category: 'security',
      icon: <DocumentTextIcon className="w-5 h-5" />
    },
    {
      id: 'penetration-testing',
      name: 'Penetration Testing',
      description: 'Security vulnerability testing',
      price: 3000,
      category: 'security',
      icon: <ShieldCheckIcon className="w-5 h-5" />
    }
  ];

  const supportOptions = [
    { id: 'basic', name: 'Basic Support', description: 'Email support, 5 business days', price: 0 },
    { id: 'standard', name: 'Standard Support', description: 'Email & phone support, 2 business days', price: 2000 },
    { id: 'premium', name: 'Premium Support', description: '24/7 support with dedicated manager', price: 5000 },
    { id: 'enterprise', name: 'Enterprise Support', description: 'Custom SLA with on-site support', price: 10000 }
  ];

  const hostingOptions = [
    { id: 'shared', name: 'Shared Hosting', description: 'Basic shared hosting environment', price: 0 },
    { id: 'vps', name: 'VPS Hosting', description: 'Virtual private server hosting', price: 1500 },
    { id: 'dedicated', name: 'Dedicated Server', description: 'Dedicated server hosting', price: 3000 },
    { id: 'cloud', name: 'Cloud Hosting', description: 'Scalable cloud infrastructure', price: 2500 }
  ];

  const calculateTotal = () => {
    let total = 0;
    
    // Add base project cost
    const project = projectTypes.find(p => p.id === selectedProjectType);
    if (project) {
      const size = projectSizes.find(s => s.id === selectedProjectSize);
      const multiplier = size ? size.multiplier : 1;
      total += project.basePrice * multiplier;
    }
    
    // Add selected features cost
    selectedFeatures.forEach(featureId => {
      const feature = [...coreFeatures, ...advancedFeatures].find(f => f.id === featureId);
      if (feature) total += feature.price;
    });
    
    // Add selected integrations cost
    selectedIntegrations.forEach(integrationId => {
      const integration = integrations.find(i => i.id === integrationId);
      if (integration) total += integration.price;
    });
    
    // Add security features cost
    selectedSecurity.forEach(securityId => {
      const security = securityFeatures.find(s => s.id === securityId);
      if (security) total += security.price;
    });
    
    // Add support cost
    const support = supportOptions.find(s => s.id === selectedSupport);
    if (support) total += support.price;
    
    // Add hosting cost
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
        ? prev.filter(f => f !== featureId)
        : [...prev, featureId]
    );
  };

  const toggleIntegration = (integrationId: string) => {
    setSelectedIntegrations(prev => 
      prev.includes(integrationId) 
        ? prev.filter(i => i !== integrationId)
        : [...prev, integrationId]
    );
  };

  const toggleSecurity = (securityId: string) => {
    setSelectedSecurity(prev => 
      prev.includes(securityId) 
        ? prev.filter(s => s !== securityId)
        : [...prev, securityId]
    );
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Select PWA Type</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {projectTypes.map((type) => (
                <div
                  key={type.id}
                  onClick={() => setSelectedProjectType(type.id)}
                  className={`p-6 border-2 rounded-lg cursor-pointer transition-all ${
                    selectedProjectType === type.id
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-gray-200 hover:border-blue-300'
                  }`}
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="text-blue-600">{type.icon}</span>
                    <h4 className="font-semibold text-gray-900">{type.name}</h4>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{type.description}</p>
                  <p className="text-blue-600 font-semibold">From ${type.basePrice.toLocaleString()}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Project Size & Complexity</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projectSizes.map((size) => (
                <div
                  key={size.id}
                  onClick={() => setSelectedProjectSize(size.id)}
                  className={`p-6 border-2 rounded-lg cursor-pointer transition-all ${
                    selectedProjectSize === size.id
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-gray-200 hover:border-blue-300'
                  }`}
                >
                  <h4 className="font-semibold text-gray-900 mb-2">{size.name}</h4>
                  <p className="text-gray-600 text-sm mb-3">{size.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-600 font-semibold">{size.duration}</span>
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
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Core Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {coreFeatures.map((feature) => (
                <div
                  key={feature.id}
                  onClick={() => toggleFeature(feature.id)}
                  className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                    selectedFeatures.includes(feature.id)
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-gray-200 hover:border-blue-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-blue-600">{feature.icon}</span>
                      <div>
                        <h4 className="font-semibold text-gray-900">{feature.name}</h4>
                        <p className="text-gray-600 text-sm">{feature.description}</p>
                      </div>
                    </div>
                    <span className="text-blue-600 font-semibold">${feature.price.toLocaleString()}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Advanced Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {advancedFeatures.map((feature) => (
                <div
                  key={feature.id}
                  onClick={() => toggleFeature(feature.id)}
                  className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                    selectedFeatures.includes(feature.id)
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-gray-200 hover:border-blue-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-blue-600">{feature.icon}</span>
                      <div>
                        <h4 className="font-semibold text-gray-900">{feature.name}</h4>
                        <p className="text-gray-600 text-sm">{feature.description}</p>
                      </div>
                    </div>
                    <span className="text-blue-600 font-semibold">${feature.price.toLocaleString()}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Third-party Integrations</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {integrations.map((integration) => (
                <div
                  key={integration.id}
                  onClick={() => toggleIntegration(integration.id)}
                  className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                    selectedIntegrations.includes(integration.id)
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-gray-200 hover:border-blue-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-blue-600">{integration.icon}</span>
                      <div>
                        <h4 className="font-semibold text-gray-900">{integration.name}</h4>
                        <p className="text-gray-600 text-sm">{integration.description}</p>
                      </div>
                    </div>
                    <span className="text-blue-600 font-semibold">${integration.price.toLocaleString()}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Security & Compliance</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {securityFeatures.map((security) => (
                <div
                  key={security.id}
                  onClick={() => toggleSecurity(security.id)}
                  className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                    selectedSecurity.includes(security.id)
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-gray-200 hover:border-blue-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-blue-600">{security.icon}</span>
                      <div>
                        <h4 className="font-semibold text-gray-900">{security.name}</h4>
                        <p className="text-gray-600 text-sm">{security.description}</p>
                      </div>
                    </div>
                    <span className="text-blue-600 font-semibold">${security.price.toLocaleString()}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 7:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Support & Maintenance</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {supportOptions.map((support) => (
                <div
                  key={support.id}
                  onClick={() => setSelectedSupport(support.id)}
                  className={`p-6 border-2 rounded-lg cursor-pointer transition-all ${
                    selectedSupport === support.id
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-gray-200 hover:border-blue-300'
                  }`}
                >
                  <h4 className="font-semibold text-gray-900 mb-2">{support.name}</h4>
                  <p className="text-gray-600 text-sm mb-3">{support.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-600 font-semibold">${support.price.toLocaleString()}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 8:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Hosting & Deployment</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {hostingOptions.map((hosting) => (
                <div
                  key={hosting.id}
                  onClick={() => setSelectedHosting(hosting.id)}
                  className={`p-6 border-2 rounded-lg cursor-pointer transition-all ${
                    selectedHosting === hosting.id
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-gray-200 hover:border-blue-300'
                  }`}
                >
                  <h4 className="font-semibold text-gray-900 mb-2">{hosting.name}</h4>
                  <p className="text-gray-600 text-sm mb-3">{hosting.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-600 font-semibold">${hosting.price.toLocaleString()}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 9:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Your PWA Quote Summary</h3>
            <div className="bg-gradient-to-br from-blue-600 to-purple-700 text-white p-8 rounded-xl">
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center">
                  <span className="text-lg">Estimated Cost:</span>
                  <span className="text-3xl font-bold">${calculateTotal().toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Development Time:</span>
                  <span className="font-medium">8-16 weeks</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Team Size:</span>
                  <span className="font-medium">3-5 developers</span>
                </div>
              </div>

              <div className="bg-white bg-opacity-10 p-6 rounded-lg mb-6">
                <h4 className="font-semibold mb-3">What's Included:</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Custom PWA design and development</li>
                  <li>• Service worker implementation</li>
                  <li>• Web app manifest creation</li>
                  <li>• Responsive design for all devices</li>
                  <li>• Performance optimization</li>
                  <li>• Testing and quality assurance</li>
                  <li>• Deployment and hosting setup</li>
                  <li>• 3 months of post-launch support</li>
                </ul>
              </div>

              <div className="space-y-4">
                <button className="w-full bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-all duration-200">
                  Get Detailed Proposal
                </button>
                <button className="w-full border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-6 rounded-lg transition-all duration-200">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  React.useEffect(() => {
    calculateTotal();
  }, [selectedProjectType, selectedProjectSize, selectedFeatures, selectedIntegrations, selectedSecurity, selectedSupport, selectedHosting]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Background Video */}
      <div className="relative h-[calc(100vh-200px)] overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/coding.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Transparent Blue Overlay */}
        <div className="absolute inset-0" style={{ backgroundColor: 'rgb(37 99 235 / 82%)' }}></div>
        
        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Progressive Web Apps Development
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
            >
              Transform your web application into a native-like experience with offline capabilities, 
              push notifications, and app-like installation. Build once, deploy everywhere.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105">
                Get Started
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-4 px-8 rounded-lg transition-all duration-200">
                View Portfolio
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our PWA Development?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in creating Progressive Web Apps that deliver native app experiences 
              with the reach and accessibility of the web.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <WifiIcon className="w-8 h-8" />,
                title: "Offline First",
                description: "Your app works seamlessly even without internet connection"
              },
              {
                icon: <RocketLaunchIcon className="w-8 h-8" />,
                title: "Lightning Fast",
                description: "Instant loading with service worker caching strategies"
              },
              {
                icon: <DevicePhoneMobileIcon className="w-8 h-8" />,
                title: "App-Like Experience",
                description: "Native app feel with home screen installation"
              },
              {
                icon: <ShieldCheckIcon className="w-8 h-8" />,
                title: "Secure by Default",
                description: "HTTPS required with advanced security features"
              },
              {
                icon: <GlobeAltIcon className="w-8 h-8" />,
                title: "Cross-Platform",
                description: "Works on all devices and browsers"
              },
              {
                icon: <SparklesIcon className="w-8 h-8" />,
                title: "Future-Ready",
                description: "Built with latest web standards and technologies"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl border border-blue-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-blue-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Types of PWAs We Build */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Types of Progressive Web Apps We Build
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From e-commerce to enterprise solutions, we create PWAs that transform 
              how users interact with your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <DevicePhoneMobileIcon className="w-8 h-8" />,
                title: "E-commerce PWAs",
                description: "Online stores with offline shopping capabilities, push notifications for deals, and seamless checkout experiences."
              },
              {
                icon: <UserGroupIcon className="w-8 h-8" />,
                title: "Social Media PWAs",
                description: "Social networking platforms with real-time messaging, photo sharing, and offline content browsing."
              },
              {
                icon: <GlobeAltIcon className="w-8 h-8" />,
                title: "Content PWAs",
                description: "News, blogs, and media platforms with offline reading, content caching, and personalized recommendations."
              },
              {
                icon: <CogIcon className="w-8 h-8" />,
                title: "Productivity PWAs",
                description: "Task management, project collaboration, and workflow automation tools with offline sync capabilities."
              },
              {
                icon: <ChartBarIcon className="w-8 h-8" />,
                title: "Business PWAs",
                description: "CRM, analytics, and enterprise solutions with real-time data sync and offline functionality."
              },
              {
                icon: <SparklesIcon className="w-8 h-8" />,
                title: "Custom PWAs",
                description: "Tailored solutions designed specifically for your unique business requirements and user needs."
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our PWA Development Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Progressive Web App Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end PWA development services from concept to deployment and maintenance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              {[
                {
                  icon: <EyeIcon className="w-6 h-6" />,
                  title: "PWA Strategy & Planning",
                  description: "We analyze your business needs and create a comprehensive PWA strategy that aligns with your goals."
                },
                {
                  icon: <CommandLineIcon className="w-6 h-6" />,
                  title: "Custom PWA Development",
                  description: "Full-stack development of Progressive Web Apps with modern frameworks and best practices."
                },
                {
                  icon: <DeviceTabletIcon className="w-6 h-6" />,
                  title: "Responsive Design",
                  description: "Mobile-first design approach ensuring your PWA works perfectly on all devices and screen sizes."
                },
                {
                  icon: <BoltIcon className="w-6 h-6" />,
                  title: "Performance Optimization",
                  description: "Lightning-fast loading times with advanced caching strategies and performance monitoring."
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="space-y-8">
              {[
                {
                  icon: <CloudIcon className="w-6 h-6" />,
                  title: "Service Worker Implementation",
                  description: "Advanced caching strategies and offline functionality for seamless user experience."
                },
                {
                  icon: <MagnifyingGlassIcon className="w-6 h-6" />,
                  title: "SEO & Discoverability",
                  description: "Optimize your PWA for search engines and app stores with proper meta tags and manifests."
                },
                {
                  icon: <ShieldCheckIcon className="w-6 h-6" />,
                  title: "Security & Compliance",
                  description: "HTTPS implementation, data encryption, and compliance with web security standards."
                },
                {
                  icon: <CogIcon className="w-6 h-6" />,
                  title: "Maintenance & Support",
                  description: "Ongoing maintenance, updates, and technical support to keep your PWA running smoothly."
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PWA Pricing Calculator */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-custom-dark mb-4">
            PWA Pricing Calculator
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get an instant estimate for your Progressive Web App development project. 
            Follow our step-by-step wizard to customize your PWA requirements.
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Build Your Progressive Web App?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Let's transform your web application into a powerful, app-like experience 
              that works offline and engages users like never before.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105">
                Start Your PWA Project
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-4 px-8 rounded-lg transition-all duration-200">
                View Our PWA Portfolio
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProgressiveWebApps; 