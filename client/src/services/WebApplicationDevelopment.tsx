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
  ServerIcon
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

const WebApplicationDevelopment = () => {
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
    { id: 1, title: 'Project Type', description: 'Choose your web application type' },
    { id: 2, title: 'Project Size', description: 'Define scope and complexity' },
    { id: 3, title: 'Core Features', description: 'Select essential features' },
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
      name: 'E-commerce Platform',
      description: 'Online store with shopping cart, payments, inventory',
      basePrice: 15000,
      icon: <ShoppingCartIcon className="w-8 h-8" />
    },
    {
      id: 'crm',
      name: 'CRM System',
      description: 'Customer relationship management with sales tracking',
      basePrice: 12000,
      icon: <UsersIcon className="w-8 h-8" />
    },
    {
      id: 'saas',
      name: 'SaaS Application',
      description: 'Software-as-a-Service with subscription management',
      basePrice: 20000,
      icon: <CloudIcon className="w-8 h-8" />
    },
    {
      id: 'social',
      name: 'Social Network',
      description: 'Community platform with user interactions',
      basePrice: 18000,
      icon: <ChatBubbleLeftRightIcon className="w-8 h-8" />
    },
    {
      id: 'dashboard',
      name: 'Analytics Dashboard',
      description: 'Data visualization and reporting platform',
      basePrice: 14000,
      icon: <ChartBarIcon className="w-8 h-8" />
    },
    {
      id: 'booking',
      name: 'Booking System',
      description: 'Appointment scheduling and reservation management',
      basePrice: 10000,
      icon: <CalendarIcon className="w-8 h-8" />
    },
    {
      id: 'content',
      name: 'Content Management',
      description: 'CMS with content creation and publishing',
      basePrice: 8000,
      icon: <DocumentTextIcon className="w-8 h-8" />
    },
    {
      id: 'custom',
      name: 'Custom Application',
      description: 'Bespoke solution for unique requirements',
      basePrice: 25000,
      icon: <CodeBracketIcon className="w-8 h-8" />
    },
    {
      id: 'learning',
      name: 'Learning Management System',
      description: 'Educational platform with courses, assessments, progress tracking',
      basePrice: 16000,
      icon: <DocumentDuplicateIcon className="w-8 h-8" />
    },
    {
      id: 'marketplace',
      name: 'Marketplace Platform',
      description: 'Multi-vendor marketplace with seller management',
      basePrice: 22000,
      icon: <GlobeAltIcon className="w-8 h-8" />
    },
    {
      id: 'realestate',
      name: 'Real Estate Platform',
      description: 'Property listings, search, virtual tours, agent management',
      basePrice: 18000,
      icon: <MapPinIcon className="w-8 h-8" />
    },
    {
      id: 'healthcare',
      name: 'Healthcare Management',
      description: 'Patient portal, appointment scheduling, medical records',
      basePrice: 25000,
      icon: <ShieldCheckIcon className="w-8 h-8" />
    },
    {
      id: 'finance',
      name: 'Financial Management',
      description: 'Budgeting, expense tracking, financial reporting',
      basePrice: 20000,
      icon: <CurrencyDollarIcon className="w-8 h-8" />
    },
    {
      id: 'restaurant',
      name: 'Restaurant Management',
      description: 'Online ordering, table reservations, menu management',
      basePrice: 12000,
      icon: <BellIcon className="w-8 h-8" />
    },
    {
      id: 'event',
      name: 'Event Management',
      description: 'Event planning, ticketing, attendee management',
      basePrice: 14000,
      icon: <CalendarIcon className="w-8 h-8" />
    },
    {
      id: 'inventory',
      name: 'Inventory Management',
      description: 'Stock tracking, supplier management, warehouse operations',
      basePrice: 16000,
      icon: <CubeIcon className="w-8 h-8" />
    },
    {
      id: 'hr',
      name: 'HR Management System',
      description: 'Employee portal, payroll, performance tracking',
      basePrice: 18000,
      icon: <UserGroupIcon className="w-8 h-8" />
    },
    {
      id: 'project',
      name: 'Project Management',
      description: 'Task tracking, team collaboration, project timelines',
      basePrice: 15000,
      icon: <PresentationChartLineIcon className="w-8 h-8" />
    },
    {
      id: 'blog',
      name: 'Blog & Publishing',
      description: 'Content creation, SEO optimization, reader engagement',
      basePrice: 8000,
      icon: <DocumentTextIcon className="w-8 h-8" />
    },
    {
      id: 'video',
      name: 'Video Streaming',
      description: 'Video hosting, streaming, user-generated content',
      basePrice: 22000,
      icon: <VideoCameraIcon className="w-8 h-8" />
    },
    {
      id: 'chat',
      name: 'Chat Application',
      description: 'Real-time messaging, video calls, file sharing',
      basePrice: 16000,
      icon: <ChatBubbleLeftRightIcon className="w-8 h-8" />
    },
    {
      id: 'api',
      name: 'API Development',
      description: 'RESTful APIs, third-party integrations, documentation',
      basePrice: 12000,
      icon: <CogIcon className="w-8 h-8" />
    },
    {
      id: 'mobile',
      name: 'Mobile Web App',
      description: 'Progressive web app with mobile-first design',
      basePrice: 18000,
      icon: <DevicePhoneMobileIcon className="w-8 h-8" />
    },
    {
      id: 'travel',
      name: 'Travel Booking Platform',
      description: 'Flight, hotel, and activity booking system',
      basePrice: 20000,
      icon: <GlobeAltIcon className="w-8 h-8" />
    },
    {
      id: 'fitness',
      name: 'Fitness & Wellness App',
      description: 'Workout tracking, nutrition planning, progress monitoring',
      basePrice: 16000,
      icon: <RocketLaunchIcon className="w-8 h-8" />
    },
    {
      id: 'education',
      name: 'Online Education Platform',
      description: 'Course marketplace, video lessons, student progress',
      basePrice: 18000,
      icon: <DocumentDuplicateIcon className="w-8 h-8" />
    },
    {
      id: 'logistics',
      name: 'Logistics Management',
      description: 'Supply chain tracking, delivery management, warehouse ops',
      basePrice: 22000,
      icon: <CubeIcon className="w-8 h-8" />
    },
    {
      id: 'legal',
      name: 'Legal Practice Management',
      description: 'Case management, document automation, client portal',
      basePrice: 25000,
      icon: <DocumentTextIcon className="w-8 h-8" />
    },
    {
      id: 'consulting',
      name: 'Consulting Firm Platform',
      description: 'Client management, project tracking, resource allocation',
      basePrice: 20000,
      icon: <UserGroupIcon className="w-8 h-8" />
    },
    {
      id: 'nonprofit',
      name: 'Nonprofit Management',
      description: 'Donor management, volunteer coordination, fundraising',
      basePrice: 15000,
      icon: <UsersIcon className="w-8 h-8" />
    },
    {
      id: 'manufacturing',
      name: 'Manufacturing ERP',
      description: 'Production planning, quality control, inventory tracking',
      basePrice: 28000,
      icon: <CogIcon className="w-8 h-8" />
    },
    {
      id: 'retail',
      name: 'Retail Management System',
      description: 'POS integration, inventory, customer loyalty program',
      basePrice: 16000,
      icon: <ShoppingCartIcon className="w-8 h-8" />
    },
    {
      id: 'media',
      name: 'Media & Entertainment',
      description: 'Content streaming, user-generated content, monetization',
      basePrice: 24000,
      icon: <VideoCameraIcon className="w-8 h-8" />
    }
  ];

  const projectSizes: ProjectSize[] = [
    {
      id: 'small',
      name: 'Small Project',
      description: 'Basic functionality, 5-10 pages, simple features',
      multiplier: 1.0,
      duration: '4-6 weeks'
    },
    {
      id: 'medium',
      name: 'Medium Project',
      description: 'Standard features, 10-25 pages, moderate complexity',
      multiplier: 1.5,
      duration: '8-12 weeks'
    },
    {
      id: 'large',
      name: 'Large Project',
      description: 'Advanced features, 25+ pages, high complexity',
      multiplier: 2.5,
      duration: '16-24 weeks'
    },
    {
      id: 'enterprise',
      name: 'Enterprise Project',
      description: 'Complex system, multiple modules, enterprise features',
      multiplier: 4.0,
      duration: '24-36 weeks'
    }
  ];

  const coreFeatures: ProjectFeature[] = [
    {
      id: 'user-auth',
      name: 'User Authentication',
      description: 'Login, registration, password reset',
      price: 1500,
      category: 'core',
      icon: <LockClosedIcon className="w-6 h-6" />
    },
    {
      id: 'user-profiles',
      name: 'User Profiles',
      description: 'User profile management and settings',
      price: 1000,
      category: 'core',
      icon: <UsersIcon className="w-6 h-6" />
    },
    {
      id: 'admin-panel',
      name: 'Admin Panel',
      description: 'Administrative dashboard and controls',
      price: 2000,
      category: 'core',
      icon: <CogIcon className="w-6 h-6" />
    },
    {
      id: 'database',
      name: 'Database Design',
      description: 'Custom database schema and optimization',
      price: 2500,
      category: 'core',
      icon: <CircleStackIcon className="w-6 h-6" />
    },
    {
      id: 'responsive',
      name: 'Responsive Design',
      description: 'Mobile-friendly responsive layout',
      price: 1500,
      category: 'core',
      icon: <DevicePhoneMobileIcon className="w-6 h-6" />
    },
    {
      id: 'search',
      name: 'Search Functionality',
      description: 'Advanced search with filters',
      price: 1200,
      category: 'core',
      icon: <MagnifyingGlassIcon className="w-6 h-6" />
    },
    {
      id: 'data-export',
      name: 'Data Export',
      description: 'Export data to CSV, Excel, PDF formats',
      price: 800,
      category: 'core',
      icon: <DocumentDuplicateIcon className="w-6 h-6" />
    },
    {
      id: 'email-templates',
      name: 'Email Templates',
      description: 'Customizable email notifications and templates',
      price: 1000,
      category: 'core',
      icon: <EnvelopeIcon className="w-6 h-6" />
    },
    {
      id: 'role-permissions',
      name: 'Role-based Access Control',
      description: 'User roles, permissions, and access management',
      price: 1800,
      category: 'core',
      icon: <ShieldCheckIcon className="w-6 h-6" />
    },
    {
      id: 'audit-log',
      name: 'Audit Logging',
      description: 'Track user actions and system changes',
      price: 1200,
      category: 'core',
      icon: <DocumentTextIcon className="w-6 h-6" />
    },
    {
      id: 'data-validation',
      name: 'Data Validation',
      description: 'Input validation and error handling',
      price: 900,
      category: 'core',
      icon: <CheckCircleIcon className="w-6 h-6" />
    },
    {
      id: 'breadcrumbs',
      name: 'Navigation Breadcrumbs',
      description: 'Site navigation and breadcrumb trails',
      price: 600,
      category: 'core',
      icon: <MapPinIcon className="w-6 h-6" />
    },
    {
      id: 'pagination',
      name: 'Pagination System',
      description: 'Data pagination and page navigation',
      price: 700,
      category: 'core',
      icon: <ArrowRightIcon className="w-6 h-6" />
    },
    {
      id: 'form-builder',
      name: 'Dynamic Form Builder',
      description: 'Custom form creation and management',
      price: 1500,
      category: 'core',
      icon: <DocumentTextIcon className="w-6 h-6" />
    },
    {
      id: 'file-preview',
      name: 'File Preview System',
      description: 'Preview documents, images, and files',
      price: 1100,
      category: 'core',
      icon: <DocumentDuplicateIcon className="w-6 h-6" />
    },
    {
      id: 'data-import',
      name: 'Data Import System',
      description: 'Bulk data import from various formats',
      price: 1300,
      category: 'core',
      icon: <CloudIcon className="w-6 h-6" />
    },
    {
      id: 'session-management',
      name: 'Session Management',
      description: 'User session handling and timeout',
      price: 800,
      category: 'core',
      icon: <ClockIcon className="w-6 h-6" />
    }
  ];

  const advancedFeatures: ProjectFeature[] = [
    {
      id: 'real-time',
      name: 'Real-time Updates',
      description: 'Live data updates and notifications',
      price: 3000,
      category: 'advanced',
      icon: <WifiIcon className="w-6 h-6" />
    },
    {
      id: 'analytics',
      name: 'Analytics Dashboard',
      description: 'Data visualization and reporting',
      price: 2500,
      category: 'advanced',
      icon: <ChartBarIcon className="w-6 h-6" />
    },
    {
      id: 'notifications',
      name: 'Push Notifications',
      description: 'Email and push notification system',
      price: 1800,
      category: 'advanced',
      icon: <BellIcon className="w-6 h-6" />
    },
    {
      id: 'file-upload',
      name: 'File Management',
      description: 'File upload, storage, and management',
      price: 2000,
      category: 'advanced',
      icon: <DocumentDuplicateIcon className="w-6 h-6" />
    },
    {
      id: 'multi-language',
      name: 'Multi-language Support',
      description: 'Internationalization (i18n)',
      price: 2200,
      category: 'advanced',
      icon: <GlobeAltIcon className="w-6 h-6" />
    },
    {
      id: 'api',
      name: 'REST API',
      description: 'Custom API development',
      price: 3500,
      category: 'advanced',
      icon: <CodeBracketIcon className="w-6 h-6" />
    },
    {
      id: 'ai-ml',
      name: 'AI & Machine Learning',
      description: 'Intelligent features, predictive analytics, automation',
      price: 5000,
      category: 'advanced',
      icon: <SparklesIcon className="w-6 h-6" />
    },
    {
      id: 'blockchain',
      name: 'Blockchain Integration',
      description: 'Smart contracts, cryptocurrency payments, decentralized features',
      price: 4000,
      category: 'advanced',
      icon: <CubeIcon className="w-6 h-6" />
    },
    {
      id: 'voice-assistant',
      name: 'Voice Assistant',
      description: 'Voice commands, speech recognition, audio processing',
      price: 3200,
      category: 'advanced',
      icon: <BellIcon className="w-6 h-6" />
    },
    {
      id: 'ar-vr',
      name: 'AR/VR Integration',
      description: 'Augmented reality, virtual reality experiences',
      price: 4500,
      category: 'advanced',
      icon: <VideoCameraIcon className="w-6 h-6" />
    },
    {
      id: 'iot-connectivity',
      name: 'IoT Connectivity',
      description: 'Internet of Things device integration and management',
      price: 3800,
      category: 'advanced',
      icon: <WifiIcon className="w-6 h-6" />
    },
    {
      id: 'advanced-search',
      name: 'Advanced Search Engine',
      description: 'Elasticsearch, full-text search, faceted search',
      price: 2800,
      category: 'advanced',
      icon: <MagnifyingGlassIcon className="w-6 h-6" />
    },
    {
      id: 'workflow-automation',
      name: 'Workflow Automation',
      description: 'Business process automation, approval workflows',
      price: 3000,
      category: 'advanced',
      icon: <CogIcon className="w-6 h-6" />
    },
    {
      id: 'data-warehouse',
      name: 'Data Warehouse',
      description: 'Big data processing, data lakes, ETL pipelines',
      price: 4200,
      category: 'advanced',
      icon: <CircleStackIcon className="w-6 h-6" />
    },
    {
      id: 'microservices',
      name: 'Microservices Architecture',
      description: 'Scalable microservices, service mesh, containerization',
      price: 4800,
      category: 'advanced',
      icon: <CloudIcon className="w-6 h-6" />
    },
    {
      id: 'real-time-collaboration',
      name: 'Real-time Collaboration',
      description: 'Live editing, collaborative features, conflict resolution',
      price: 3600,
      category: 'advanced',
      icon: <UserGroupIcon className="w-6 h-6" />
    },
    {
      id: 'advanced-reporting',
      name: 'Advanced Reporting',
      description: 'Custom reports, scheduled reports, data visualization',
      price: 2400,
      category: 'advanced',
      icon: <ChartBarIcon className="w-6 h-6" />
    },
    {
      id: 'api-gateway',
      name: 'API Gateway',
      description: 'API management, rate limiting, authentication',
      price: 2600,
      category: 'advanced',
      icon: <GlobeAltIcon className="w-6 h-6" />
    },
    {
      id: 'event-streaming',
      name: 'Event Streaming',
      description: 'Kafka, event-driven architecture, message queues',
      price: 3400,
      category: 'advanced',
      icon: <WifiIcon className="w-6 h-6" />
    },
    {
      id: 'advanced-caching',
      name: 'Advanced Caching',
      description: 'Redis, CDN, distributed caching, cache invalidation',
      price: 2200,
      category: 'advanced',
      icon: <RocketLaunchIcon className="w-6 h-6" />
    },
    {
      id: 'load-balancing',
      name: 'Load Balancing',
      description: 'Traffic distribution, auto-scaling, high availability',
      price: 2900,
      category: 'advanced',
      icon: <CogIcon className="w-6 h-6" />
    },
    {
      id: 'advanced-security',
      name: 'Advanced Security',
      description: 'Penetration testing, security audits, threat detection',
      price: 3800,
      category: 'advanced',
      icon: <ShieldCheckIcon className="w-6 h-6" />
    },
    {
      id: 'performance-monitoring',
      name: 'Performance Monitoring',
      description: 'APM, error tracking, performance optimization',
      price: 2100,
      category: 'advanced',
      icon: <ChartBarIcon className="w-6 h-6" />
    },
    {
      id: 'disaster-recovery',
      name: 'Disaster Recovery',
      description: 'Backup strategies, failover systems, data recovery',
      price: 3200,
      category: 'advanced',
      icon: <CloudIcon className="w-6 h-6" />
    },
    {
      id: 'compliance-tools',
      name: 'Compliance Tools',
      description: 'SOX, HIPAA, PCI DSS compliance automation',
      price: 3500,
      category: 'advanced',
      icon: <DocumentTextIcon className="w-6 h-6" />
    }
  ];

  const integrations: ProjectFeature[] = [
    {
      id: 'payment-gateway',
      name: 'Payment Gateway',
      description: 'Stripe, PayPal, or other payment processors',
      price: 2000,
      category: 'integration',
      icon: <CreditCardIcon className="w-6 h-6" />
    },
    {
      id: 'email-service',
      name: 'Email Service',
      description: 'SendGrid, Mailgun, or AWS SES',
      price: 800,
      category: 'integration',
      icon: <EnvelopeIcon className="w-6 h-6" />
    },
    {
      id: 'social-login',
      name: 'Social Login',
      description: 'Google, Facebook, Twitter OAuth',
      price: 1200,
      category: 'integration',
      icon: <UserGroupIcon className="w-6 h-6" />
    },
    {
      id: 'maps',
      name: 'Maps Integration',
      description: 'Google Maps or Mapbox integration',
      price: 1500,
      category: 'integration',
      icon: <MapPinIcon className="w-6 h-6" />
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
      id: 'third-party-api',
      name: 'Third-party APIs',
      description: 'Custom API integrations',
      price: 2500,
      category: 'integration',
      icon: <GlobeAltIcon className="w-6 h-6" />
    }
  ];

  const securityFeatures: ProjectFeature[] = [
    {
      id: 'ssl',
      name: 'SSL Certificate',
      description: 'HTTPS encryption and security',
      price: 500,
      category: 'security',
      icon: <ShieldCheckIcon className="w-6 h-6" />
    },
    {
      id: 'data-encryption',
      name: 'Data Encryption',
      description: 'End-to-end data encryption',
      price: 1500,
      category: 'security',
      icon: <LockClosedIcon className="w-6 h-6" />
    },
    {
      id: 'gdpr',
      name: 'GDPR Compliance',
      description: 'Data protection and privacy compliance',
      price: 2000,
      category: 'security',
      icon: <DocumentTextIcon className="w-6 h-6" />
    },
    {
      id: 'backup',
      name: 'Automated Backups',
      description: 'Regular data backup and recovery',
      price: 1000,
      category: 'security',
      icon: <CloudIcon className="w-6 h-6" />
    },
    {
      id: 'monitoring',
      name: 'Security Monitoring',
      description: '24/7 security monitoring and alerts',
      price: 1800,
      category: 'security',
      icon: <ShieldCheckIcon className="w-6 h-6" />
    },
    {
      id: 'two-factor-auth',
      name: 'Two-Factor Authentication',
      description: 'Multi-factor authentication for users',
      price: 1200,
      category: 'security',
      icon: <LockClosedIcon className="w-6 h-6" />
    },
    {
      id: 'hipaa',
      name: 'HIPAA Compliance',
      description: 'Healthcare data protection standards',
      price: 3500,
      category: 'security',
      icon: <DocumentTextIcon className="w-6 h-6" />
    },
    {
      id: 'pci-dss',
      name: 'PCI DSS Compliance',
      description: 'Payment card industry security standards',
      price: 2800,
      category: 'security',
      icon: <CreditCardIcon className="w-6 h-6" />
    },
    {
      id: 'sox',
      name: 'SOX Compliance',
      description: 'Sarbanes-Oxley financial reporting compliance',
      price: 4200,
      category: 'security',
      icon: <DocumentTextIcon className="w-6 h-6" />
    },
    {
      id: 'penetration-testing',
      name: 'Penetration Testing',
      description: 'Security vulnerability assessment',
      price: 2500,
      category: 'security',
      icon: <ShieldCheckIcon className="w-6 h-6" />
    },
    {
      id: 'firewall',
      name: 'Web Application Firewall',
      description: 'Advanced firewall protection',
      price: 1800,
      category: 'security',
      icon: <ShieldCheckIcon className="w-6 h-6" />
    },
    {
      id: 'vpn',
      name: 'VPN Access',
      description: 'Secure remote access for team members',
      price: 900,
      category: 'security',
      icon: <LockClosedIcon className="w-6 h-6" />
    },
    {
      id: 'audit-logging',
      name: 'Audit Logging',
      description: 'Comprehensive activity logging and tracking',
      price: 1100,
      category: 'security',
      icon: <DocumentTextIcon className="w-6 h-6" />
    },
    {
      id: 'data-masking',
      name: 'Data Masking',
      description: 'Sensitive data obfuscation',
      price: 1600,
      category: 'security',
      icon: <LockClosedIcon className="w-6 h-6" />
    },
    {
      id: 'api-security',
      name: 'API Security',
      description: 'API authentication and rate limiting',
      price: 1400,
      category: 'security',
      icon: <GlobeAltIcon className="w-6 h-6" />
    },
    {
      id: 'session-management',
      name: 'Session Management',
      description: 'Secure session handling and timeout',
      price: 800,
      category: 'security',
      icon: <ClockIcon className="w-6 h-6" />
    },
    {
      id: 'input-validation',
      name: 'Input Validation',
      description: 'Comprehensive input sanitization',
      price: 700,
      category: 'security',
      icon: <ShieldCheckIcon className="w-6 h-6" />
    },
    {
      id: 'sql-injection-protection',
      name: 'SQL Injection Protection',
      description: 'Database query security measures',
      price: 1200,
      category: 'security',
      icon: <CircleStackIcon className="w-6 h-6" />
    },
    {
      id: 'xss-protection',
      name: 'XSS Protection',
      description: 'Cross-site scripting prevention',
      price: 1000,
      category: 'security',
      icon: <ShieldCheckIcon className="w-6 h-6" />
    },
    {
      id: 'csrf-protection',
      name: 'CSRF Protection',
      description: 'Cross-site request forgery prevention',
      price: 900,
      category: 'security',
      icon: <ShieldCheckIcon className="w-6 h-6" />
    },
    {
      id: 'file-upload-security',
      name: 'File Upload Security',
      description: 'Secure file upload validation',
      price: 1300,
      category: 'security',
      icon: <DocumentTextIcon className="w-6 h-6" />
    },
    {
      id: 'email-security',
      name: 'Email Security',
      description: 'SPF, DKIM, DMARC email protection',
      price: 600,
      category: 'security',
      icon: <EnvelopeIcon className="w-6 h-6" />
    },
    {
      id: 'ddos-protection',
      name: 'DDoS Protection',
      description: 'Distributed denial of service protection',
      price: 2200,
      category: 'security',
      icon: <ShieldCheckIcon className="w-6 h-6" />
    },
    {
      id: 'malware-scanning',
      name: 'Malware Scanning',
      description: 'Automated malware detection and removal',
      price: 1700,
      category: 'security',
      icon: <ShieldCheckIcon className="w-6 h-6" />
    },
    {
      id: 'privacy-policy',
      name: 'Privacy Policy Generator',
      description: 'Automated privacy policy creation',
      price: 500,
      category: 'security',
      icon: <DocumentTextIcon className="w-6 h-6" />
    },
    {
      id: 'terms-of-service',
      name: 'Terms of Service Generator',
      description: 'Automated terms of service creation',
      price: 500,
      category: 'security',
      icon: <DocumentTextIcon className="w-6 h-6" />
    },
    {
      id: 'data-retention',
      name: 'Data Retention Policies',
      description: 'Automated data lifecycle management',
      price: 1400,
      category: 'security',
      icon: <ClockIcon className="w-6 h-6" />
    },
    {
      id: 'access-control',
      name: 'Role-Based Access Control',
      description: 'Granular user permissions and roles',
      price: 1600,
      category: 'security',
      icon: <UsersIcon className="w-6 h-6" />
    },
    {
      id: 'single-sign-on',
      name: 'Single Sign-On (SSO)',
      description: 'Enterprise SSO integration',
      price: 2400,
      category: 'security',
      icon: <UserGroupIcon className="w-6 h-6" />
    },
    {
      id: 'biometric-auth',
      name: 'Biometric Authentication',
      description: 'Fingerprint, face recognition support',
      price: 2800,
      category: 'security',
      icon: <LockClosedIcon className="w-6 h-6" />
    },
    {
      id: 'blockchain-security',
      name: 'Blockchain Security',
      description: 'Immutable audit trails and verification',
      price: 3200,
      category: 'security',
      icon: <CubeIcon className="w-6 h-6" />
    },
    {
      id: 'quantum-resistant',
      name: 'Quantum-Resistant Encryption',
      description: 'Future-proof encryption algorithms',
      price: 3800,
      category: 'security',
      icon: <LockClosedIcon className="w-6 h-6" />
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
                  <p className="text-primary-600 font-semibold">From ${type.basePrice.toLocaleString()}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-custom-dark mb-4">Project Size & Complexity</h3>
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
            <h3 className="text-xl font-semibold text-custom-dark mb-4">Core Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-primary-600">{feature.icon}</span>
                      <div>
                        <h4 className="font-semibold text-custom-dark">{feature.name}</h4>
                        <p className="text-gray-600 text-sm">{feature.description}</p>
                      </div>
                    </div>
                    <span className="text-primary-600 font-semibold">${feature.price.toLocaleString()}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-custom-dark mb-4">Advanced Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-primary-600">{feature.icon}</span>
                      <div>
                        <h4 className="font-semibold text-custom-dark">{feature.name}</h4>
                        <p className="text-gray-600 text-sm">{feature.description}</p>
                      </div>
                    </div>
                    <span className="text-primary-600 font-semibold">${feature.price.toLocaleString()}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-custom-dark mb-4">Third-party Integrations</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {integrations.map((feature) => (
                <div
                  key={feature.id}
                  onClick={() => toggleFeature(feature.id)}
                  className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                    selectedFeatures.includes(feature.id)
                      ? 'border-primary-600 bg-primary-50'
                      : 'border-gray-200 hover:border-primary-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-primary-600">{feature.icon}</span>
                      <div>
                        <h4 className="font-semibold text-custom-dark">{feature.name}</h4>
                        <p className="text-gray-600 text-sm">{feature.description}</p>
                      </div>
                    </div>
                    <span className="text-primary-600 font-semibold">${feature.price.toLocaleString()}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-custom-dark mb-4">Security & Compliance</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {securityFeatures.map((feature) => (
                <div
                  key={feature.id}
                  onClick={() => toggleFeature(feature.id)}
                  className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                    selectedFeatures.includes(feature.id)
                      ? 'border-primary-600 bg-primary-50'
                      : 'border-gray-200 hover:border-primary-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-primary-600">{feature.icon}</span>
                      <div>
                        <h4 className="font-semibold text-custom-dark">{feature.name}</h4>
                        <p className="text-gray-600 text-sm">{feature.description}</p>
                      </div>
                    </div>
                    <span className="text-primary-600 font-semibold">${feature.price.toLocaleString()}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 7:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-custom-dark mb-4">Support & Maintenance</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {supportOptions.map((option) => (
                <div
                  key={option.id}
                  onClick={() => setSelectedSupport(option.id)}
                  className={`p-6 border-2 rounded-lg cursor-pointer transition-all ${
                    selectedSupport === option.id
                      ? 'border-primary-600 bg-primary-50'
                      : 'border-gray-200 hover:border-primary-300'
                  }`}
                >
                  <h4 className="font-semibold text-custom-dark mb-2">{option.name}</h4>
                  <p className="text-gray-600 text-sm mb-3">{option.description}</p>
                  <span className="text-primary-600 font-semibold">${option.price.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </div>
        );

      case 8:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-custom-dark mb-4">Hosting & Deployment</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {hostingOptions.map((option) => (
                <div
                  key={option.id}
                  onClick={() => setSelectedHosting(option.id)}
                  className={`p-6 border-2 rounded-lg cursor-pointer transition-all ${
                    selectedHosting === option.id
                      ? 'border-primary-600 bg-primary-50'
                      : 'border-gray-200 hover:border-primary-300'
                  }`}
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="text-primary-600">{option.icon}</span>
                    <h4 className="font-semibold text-custom-dark">{option.name}</h4>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{option.description}</p>
                  <span className="text-primary-600 font-semibold">${option.price.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </div>
        );

      case 9:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-custom-dark mb-4">Your Custom Quote</h3>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-custom-dark">Project Type:</span>
                  <span>{projectTypes.find(pt => pt.id === selectedProjectType)?.name}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-custom-dark">Project Size:</span>
                  <span>{projectSizes.find(ps => ps.id === selectedProjectSize)?.name}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-custom-dark">Selected Features:</span>
                  <span>{selectedFeatures.length} features</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-custom-dark">Support Plan:</span>
                  <span>{supportOptions.find(s => s.id === selectedSupport)?.name}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-custom-dark">Hosting:</span>
                  <span>{hostingOptions.find(h => h.id === selectedHosting)?.name}</span>
                </div>
                <hr className="my-4" />
                <div className="flex justify-between items-center text-xl font-bold text-custom-dark">
                  <span>Total Estimated Cost:</span>
                  <span>${calculateTotal().toLocaleString()}</span>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">What's Included:</h4>
              <ul className="text-blue-800 text-sm space-y-1">
                <li>• Complete web application development</li>
                <li>• Responsive design for all devices</li>
                <li>• Database design and implementation</li>
                <li>• Testing and quality assurance</li>
                <li>• Deployment and hosting setup</li>
                <li>• Documentation and training</li>
                <li>• Post-launch support (as selected)</li>
              </ul>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

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
              Web Application Development
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
            >
              Custom web applications built with modern technologies and best practices
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Started
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors">
                View Portfolio
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-custom-dark mb-4">
              Why Choose Our Web Development Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with proven methodologies to deliver exceptional web applications that drive business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <RocketLaunchIcon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-custom-dark mb-3">Fast Development</h3>
              <p className="text-gray-600">Agile development methodology ensures rapid delivery without compromising quality.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheckIcon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-custom-dark mb-3">Enterprise Security</h3>
              <p className="text-gray-600">Bank-level security protocols and compliance standards to protect your data.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DevicePhoneMobileIcon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-custom-dark mb-3">Responsive Design</h3>
              <p className="text-gray-600">Mobile-first approach ensuring perfect functionality across all devices.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserGroupIcon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-custom-dark mb-3">Expert Team</h3>
              <p className="text-gray-600">Experienced developers, designers, and project managers dedicated to your success.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ClockIcon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-custom-dark mb-3">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock technical support and maintenance for your application.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ChartBarIcon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-custom-dark mb-3">Performance Optimized</h3>
              <p className="text-gray-600">Lightning-fast applications with optimized code and infrastructure.</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Technology Stack Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-custom-dark mb-4">
              Modern Technology Stack
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use the latest technologies and frameworks to build scalable, maintainable, and high-performance web applications.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <CodeBracketIcon className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-custom-dark">React</h4>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <CodeBracketIcon className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-custom-dark">Node.js</h4>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <CodeBracketIcon className="w-6 h-6 text-yellow-600" />
              </div>
              <h4 className="font-semibold text-custom-dark">TypeScript</h4>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <CircleStackIcon className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="font-semibold text-custom-dark">PostgreSQL</h4>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <CloudIcon className="w-6 h-6 text-red-600" />
              </div>
              <h4 className="font-semibold text-custom-dark">AWS</h4>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <CogIcon className="w-6 h-6 text-indigo-600" />
              </div>
              <h4 className="font-semibold text-custom-dark">Docker</h4>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Development Process Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-custom-dark mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery and exceeds expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-custom-dark mb-3">Discovery & Planning</h3>
              <p className="text-gray-600">We analyze your requirements, define project scope, and create a detailed roadmap.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-custom-dark mb-3">Design & Prototyping</h3>
              <p className="text-gray-600">Create wireframes, mockups, and interactive prototypes for your approval.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-custom-dark mb-3">Development</h3>
              <p className="text-gray-600">Agile development with regular updates and continuous integration.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary-600">4</span>
              </div>
              <h3 className="text-xl font-semibold text-custom-dark mb-3">Testing & Launch</h3>
              <p className="text-gray-600">Comprehensive testing, deployment, and ongoing support and maintenance.</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Project Types Overview */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-custom-dark mb-4">
              Types of Web Applications We Build
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From simple business websites to complex enterprise applications, we have the expertise to build it all.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <ShoppingCartIcon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-custom-dark">E-commerce Platforms</h3>
              </div>
              <p className="text-gray-600">Complete online stores with payment processing, inventory management, and customer analytics.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <UsersIcon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-custom-dark">Business Applications</h3>
              </div>
              <p className="text-gray-600">Custom business software for CRM, project management, and internal operations.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                  <GlobeAltIcon className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-custom-dark">Web Portals</h3>
              </div>
              <p className="text-gray-600">Information portals, dashboards, and content management systems.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                  <ChatBubbleLeftRightIcon className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-custom-dark">Social Platforms</h3>
              </div>
              <p className="text-gray-600">Social networking sites, community platforms, and communication tools.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                  <DocumentTextIcon className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-custom-dark">Content Platforms</h3>
              </div>
              <p className="text-gray-600">Blogs, news sites, educational platforms, and content management systems.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                  <CogIcon className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-lg font-semibold text-custom-dark">API Services</h3>
              </div>
              <p className="text-gray-600">RESTful APIs, microservices, and backend systems for mobile and web applications.</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Pricing Calculator Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-custom-dark mb-4">
            Custom Pricing Calculator
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get an accurate estimate for your web application project. Our step-by-step calculator helps you build the perfect solution.
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

      {/* Services Overview */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-custom-dark mb-4">
              Our Web Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We specialize in creating custom web applications that drive business growth and user engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CodeBracketIcon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-custom-dark mb-2">Custom Development</h3>
              <p className="text-gray-600">Bespoke web applications tailored to your specific business needs and requirements.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DevicePhoneMobileIcon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-custom-dark mb-2">Responsive Design</h3>
              <p className="text-gray-600">Mobile-first design approach ensuring your app works perfectly on all devices.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheckIcon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-custom-dark mb-2">Security First</h3>
              <p className="text-gray-600">Enterprise-grade security measures to protect your data and users.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <RocketLaunchIcon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-custom-dark mb-2">Performance Optimized</h3>
              <p className="text-gray-600">Lightning-fast applications with optimized code and infrastructure.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserGroupIcon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-custom-dark mb-2">User Experience</h3>
              <p className="text-gray-600">Intuitive and engaging user interfaces that keep users coming back.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ClockIcon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-custom-dark mb-2">Ongoing Support</h3>
              <p className="text-gray-600">Continuous maintenance, updates, and support to keep your app running smoothly.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebApplicationDevelopment; 