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
  HeartIcon,
  TruckIcon,
  PhotoIcon
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

const EcommerceDevelopment = () => {
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
    { id: 1, title: 'Store Type', description: 'Choose your e-commerce platform type' },
    { id: 2, title: 'Store Size', description: 'Define scope and complexity' },
    { id: 3, title: 'Core Features', description: 'Select essential e-commerce features' },
    { id: 4, title: 'Advanced Features', description: 'Add advanced e-commerce capabilities' },
    { id: 5, title: 'Integrations', description: 'Connect with payment and shipping services' },
    { id: 6, title: 'Security & Compliance', description: 'Payment security requirements' },
    { id: 7, title: 'Support & Maintenance', description: 'Ongoing support options' },
    { id: 8, title: 'Hosting & Deployment', description: 'Choose hosting environment' },
    { id: 9, title: 'Quote Summary', description: 'Review your custom quote' }
  ];

  const projectTypes: ProjectType[] = [
    {
      id: 'b2c',
      name: 'B2C E-commerce Store',
      description: 'Direct-to-consumer online store with shopping cart and payments',
      basePrice: 15000,
      icon: <ShoppingCartIcon className="w-8 h-8" />
    },
    {
      id: 'b2b',
      name: 'B2B E-commerce Platform',
      description: 'Business-to-business marketplace with bulk ordering',
      basePrice: 25000,
      icon: <UsersIcon className="w-8 h-8" />
    },
    {
      id: 'marketplace',
      name: 'Multi-Vendor Marketplace',
      description: 'Platform for multiple sellers with commission system',
      basePrice: 30000,
      icon: <GlobeAltIcon className="w-8 h-8" />
    },
    {
      id: 'subscription',
      name: 'Subscription E-commerce',
      description: 'Recurring billing and subscription management',
      basePrice: 20000,
      icon: <CalendarIcon className="w-8 h-8" />
    },
    {
      id: 'dropshipping',
      name: 'Dropshipping Platform',
      description: 'Automated order fulfillment and supplier integration',
      basePrice: 18000,
      icon: <CubeIcon className="w-8 h-8" />
    },
    {
      id: 'wholesale',
      name: 'Wholesale E-commerce',
      description: 'Bulk ordering system with tiered pricing',
      basePrice: 22000,
      icon: <CurrencyDollarIcon className="w-8 h-8" />
    },
    {
      id: 'fashion',
      name: 'Fashion E-commerce',
      description: 'Clothing store with size guides and virtual try-on',
      basePrice: 20000,
      icon: <ShoppingCartIcon className="w-8 h-8" />
    },
    {
      id: 'electronics',
      name: 'Electronics Store',
      description: 'Tech products with warranty and support integration',
      basePrice: 18000,
      icon: <CogIcon className="w-8 h-8" />
    },
    {
      id: 'food',
      name: 'Food & Beverage E-commerce',
      description: 'Grocery delivery with inventory and expiry tracking',
      basePrice: 25000,
      icon: <BellIcon className="w-8 h-8" />
    },
    {
      id: 'jewelry',
      name: 'Jewelry & Luxury Goods',
      description: 'High-end products with authentication and insurance',
      basePrice: 28000,
      icon: <SparklesIcon className="w-8 h-8" />
    },
    {
      id: 'automotive',
      name: 'Automotive Parts Store',
      description: 'Vehicle parts with fitment guides and compatibility',
      basePrice: 22000,
      icon: <CogIcon className="w-8 h-8" />
    },
    {
      id: 'health',
      name: 'Health & Beauty Store',
      description: 'Cosmetics and wellness products with reviews',
      basePrice: 20000,
      icon: <ShieldCheckIcon className="w-8 h-8" />
    },
    {
      id: 'home',
      name: 'Home & Garden Store',
      description: 'Furniture and home improvement products',
      basePrice: 18000,
      icon: <MapPinIcon className="w-8 h-8" />
    },
    {
      id: 'sports',
      name: 'Sports & Fitness Store',
      description: 'Athletic equipment with size and fit recommendations',
      basePrice: 19000,
      icon: <RocketLaunchIcon className="w-8 h-8" />
    },
    {
      id: 'books',
      name: 'Books & Media Store',
      description: 'Digital and physical media with DRM protection',
      basePrice: 16000,
      icon: <DocumentTextIcon className="w-8 h-8" />
    },
    {
      id: 'art',
      name: 'Art & Collectibles Store',
      description: 'Original artwork and collectible items marketplace',
      basePrice: 24000,
      icon: <SparklesIcon className="w-8 h-8" />
    },
    {
      id: 'pet',
      name: 'Pet Supplies Store',
      description: 'Pet products with breed-specific recommendations',
      basePrice: 17000,
      icon: <UsersIcon className="w-8 h-8" />
    },
    {
      id: 'baby',
      name: 'Baby & Kids Store',
      description: 'Children\'s products with age-appropriate filtering',
      basePrice: 19000,
      icon: <UsersIcon className="w-8 h-8" />
    },
    {
      id: 'outdoor',
      name: 'Outdoor & Adventure Store',
      description: 'Camping and outdoor equipment with weather integration',
      basePrice: 20000,
      icon: <MapPinIcon className="w-8 h-8" />
    },
    {
      id: 'music',
      name: 'Music & Instruments Store',
      description: 'Musical instruments and equipment with sound samples',
      basePrice: 21000,
      icon: <VideoCameraIcon className="w-8 h-8" />
    },
    {
      id: 'custom',
      name: 'Custom E-commerce Solution',
      description: 'Bespoke online store for unique business requirements',
      basePrice: 35000,
      icon: <CodeBracketIcon className="w-8 h-8" />
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
      id: 'shopping-cart',
      name: 'Shopping Cart System',
      description: 'Add to cart, quantity management, cart persistence',
      price: 2000,
      category: 'core',
      icon: <ShoppingCartIcon className="w-6 h-6" />
    },
    {
      id: 'product-catalog',
      name: 'Product Catalog',
      description: 'Product listings, categories, search and filtering',
      price: 2500,
      category: 'core',
      icon: <CubeIcon className="w-6 h-6" />
    },
    {
      id: 'payment-gateway',
      name: 'Payment Processing',
      description: 'Credit card, PayPal, and digital wallet integration',
      price: 3000,
      category: 'core',
      icon: <CreditCardIcon className="w-6 h-6" />
    },
    {
      id: 'order-management',
      name: 'Order Management',
      description: 'Order tracking, status updates, order history',
      price: 2200,
      category: 'core',
      icon: <DocumentTextIcon className="w-6 h-6" />
    },
    {
      id: 'user-accounts',
      name: 'Customer Accounts',
      description: 'User registration, login, profile management',
      price: 1500,
      category: 'core',
      icon: <UsersIcon className="w-6 h-6" />
    },
    {
      id: 'inventory-system',
      name: 'Inventory Management',
      description: 'Stock tracking, low stock alerts, automated updates',
      price: 2800,
      category: 'core',
      icon: <CircleStackIcon className="w-6 h-6" />
    },
    {
      id: 'admin-dashboard',
      name: 'Admin Dashboard',
      description: 'Sales analytics, order management, product administration',
      price: 2500,
      category: 'core',
      icon: <CogIcon className="w-6 h-6" />
    },
    {
      id: 'responsive-design',
      name: 'Mobile-Responsive Design',
      description: 'Optimized for mobile shopping experience',
      price: 1800,
      category: 'core',
      icon: <DevicePhoneMobileIcon className="w-6 h-6" />
    },
    {
      id: 'search-filter',
      name: 'Advanced Search & Filters',
      description: 'Product search, category filters, price range',
      price: 1600,
      category: 'core',
      icon: <MagnifyingGlassIcon className="w-6 h-6" />
    },
    {
      id: 'email-notifications',
      name: 'Order Notifications',
      description: 'Order confirmations, shipping updates, email templates',
      price: 1200,
      category: 'core',
      icon: <EnvelopeIcon className="w-6 h-6" />
    },
    {
      id: 'security-compliance',
      name: 'PCI DSS Compliance',
      description: 'Payment security standards and data protection',
      price: 2000,
      category: 'core',
      icon: <ShieldCheckIcon className="w-6 h-6" />
    },
    {
      id: 'product-reviews',
      name: 'Product Reviews & Ratings',
      description: 'Customer reviews, star ratings, review moderation',
      price: 1400,
      category: 'core',
      icon: <CheckCircleIcon className="w-6 h-6" />
    },
    {
      id: 'wishlist',
      name: 'Wishlist System',
      description: 'Save favorite products, share wishlists',
      price: 800,
      category: 'core',
      icon: <HeartIcon className="w-6 h-6" />
    },
    {
      id: 'shipping-calculator',
      name: 'Shipping Calculator',
      description: 'Real-time shipping rates, multiple carriers',
      price: 1500,
      category: 'core',
      icon: <TruckIcon className="w-6 h-6" />
    },
    {
      id: 'tax-calculation',
      name: 'Tax Calculation',
      description: 'Automatic tax calculation, multiple tax rates',
      price: 1200,
      category: 'core',
      icon: <CurrencyDollarIcon className="w-6 h-6" />
    },
    {
      id: 'checkout-process',
      name: 'Streamlined Checkout',
      description: 'One-page checkout, guest checkout option',
      price: 1800,
      category: 'core',
      icon: <ArrowRightIcon className="w-6 h-6" />
    },
    {
      id: 'product-images',
      name: 'Product Image Management',
      description: 'Multiple product images, zoom functionality',
      price: 1000,
      category: 'core',
      icon: <PhotoIcon className="w-6 h-6" />
    }
  ];

  const advancedFeatures: ProjectFeature[] = [
    {
      id: 'loyalty-program',
      name: 'Loyalty Program',
      description: 'Points system, rewards, member benefits',
      price: 2500,
      category: 'advanced',
      icon: <HeartIcon className="w-6 h-6" />
    },
    {
      id: 'personalization',
      name: 'AI Product Recommendations',
      description: 'Personalized product suggestions, machine learning',
      price: 3500,
      category: 'advanced',
      icon: <SparklesIcon className="w-6 h-6" />
    },
    {
      id: 'abandoned-cart',
      name: 'Abandoned Cart Recovery',
      description: 'Email reminders, cart recovery automation',
      price: 1800,
      category: 'advanced',
      icon: <ShoppingCartIcon className="w-6 h-6" />
    },
    {
      id: 'subscription-billing',
      name: 'Subscription Management',
      description: 'Recurring billing, subscription lifecycle management',
      price: 2800,
      category: 'advanced',
      icon: <CalendarIcon className="w-6 h-6" />
    },
    {
      id: 'multi-currency',
      name: 'Multi-Currency Support',
      description: 'International currencies, exchange rates',
      price: 2200,
      category: 'advanced',
      icon: <CurrencyDollarIcon className="w-6 h-6" />
    },
    {
      id: 'affiliate-system',
      name: 'Affiliate Marketing System',
      description: 'Commission tracking, affiliate dashboard',
      price: 3000,
      category: 'advanced',
      icon: <UsersIcon className="w-6 h-6" />
    },
    {
      id: 'live-chat',
      name: 'Live Chat Support',
      description: 'Real-time customer support, chat integration',
      price: 2000,
      category: 'advanced',
      icon: <ChatBubbleLeftRightIcon className="w-6 h-6" />
    },
    {
      id: 'virtual-try-on',
      name: 'Virtual Try-On (AR)',
      description: 'Augmented reality for fashion and accessories',
      price: 4500,
      category: 'advanced',
      icon: <VideoCameraIcon className="w-6 h-6" />
    },
    {
      id: 'social-commerce',
      name: 'Social Commerce Integration',
      description: 'Facebook Shop, Instagram Shopping, social selling',
      price: 2500,
      category: 'advanced',
      icon: <GlobeAltIcon className="w-6 h-6" />
    },
    {
      id: 'inventory-forecasting',
      name: 'Inventory Forecasting',
      description: 'AI-powered demand prediction, stock optimization',
      price: 3200,
      category: 'advanced',
      icon: <ChartBarIcon className="w-6 h-6" />
    },
    {
      id: 'dropshipping-automation',
      name: 'Dropshipping Automation',
      description: 'Automated order fulfillment, supplier integration',
      price: 2800,
      category: 'advanced',
      icon: <CubeIcon className="w-6 h-6" />
    },
    {
      id: 'b2b-portal',
      name: 'B2B Customer Portal',
      description: 'Wholesale pricing, bulk ordering, account management',
      price: 3500,
      category: 'advanced',
      icon: <UsersIcon className="w-6 h-6" />
    },
    {
      id: 'marketplace-commission',
      name: 'Marketplace Commission System',
      description: 'Multi-vendor commission tracking, payout automation',
      price: 4000,
      category: 'advanced',
      icon: <CurrencyDollarIcon className="w-6 h-6" />
    },
    {
      id: 'advanced-analytics',
      name: 'Advanced Analytics Dashboard',
      description: 'Sales analytics, customer insights, performance metrics',
      price: 3000,
      category: 'advanced',
      icon: <ChartBarIcon className="w-6 h-6" />
    },
    {
      id: 'mobile-app',
      name: 'Mobile App Development',
      description: 'Native iOS and Android e-commerce apps',
      price: 8000,
      category: 'advanced',
      icon: <DevicePhoneMobileIcon className="w-6 h-6" />
    },
    {
      id: 'voice-shopping',
      name: 'Voice Shopping Assistant',
      description: 'Voice commands, speech recognition for shopping',
      price: 3800,
      category: 'advanced',
      icon: <BellIcon className="w-6 h-6" />
    },
    {
      id: 'blockchain-payments',
      name: 'Cryptocurrency Payments',
      description: 'Bitcoin, Ethereum, and other crypto payments',
      price: 3500,
      category: 'advanced',
      icon: <CubeIcon className="w-6 h-6" />
    },
    {
      id: 'advanced-search',
      name: 'Advanced Product Search',
      description: 'Elasticsearch, faceted search, search analytics',
      price: 2800,
      category: 'advanced',
      icon: <MagnifyingGlassIcon className="w-6 h-6" />
    },
    {
      id: 'warehouse-management',
      name: 'Warehouse Management System',
      description: 'Inventory tracking, picking, packing, shipping',
      price: 4200,
      category: 'advanced',
      icon: <CogIcon className="w-6 h-6" />
    },
    {
      id: 'customer-segmentation',
      name: 'Customer Segmentation',
      description: 'AI-powered customer grouping, targeted marketing',
      price: 2600,
      category: 'advanced',
      icon: <UserGroupIcon className="w-6 h-6" />
    },
    {
      id: 'dynamic-pricing',
      name: 'Dynamic Pricing Engine',
      description: 'Real-time price optimization, competitor monitoring',
      price: 3200,
      category: 'advanced',
      icon: <CurrencyDollarIcon className="w-6 h-6" />
    },
    {
      id: 'order-fulfillment',
      name: 'Order Fulfillment Automation',
      description: 'Automated order processing, shipping label generation',
      price: 2400,
      category: 'advanced',
      icon: <TruckIcon className="w-6 h-6" />
    },
    {
      id: 'customer-service',
      name: 'Customer Service Portal',
      description: 'Ticket system, knowledge base, support automation',
      price: 2200,
      category: 'advanced',
      icon: <ChatBubbleLeftRightIcon className="w-6 h-6" />
    },
    {
      id: 'gift-cards',
      name: 'Gift Card System',
      description: 'Digital gift cards, redemption tracking',
      price: 1800,
      category: 'advanced',
      icon: <CreditCardIcon className="w-6 h-6" />
    },
    {
      id: 'product-bundles',
      name: 'Product Bundling',
      description: 'Create product bundles, volume discounts',
      price: 1600,
      category: 'advanced',
      icon: <CubeIcon className="w-6 h-6" />
    },
    {
      id: 'return-management',
      name: 'Return Management System',
      description: 'Return processing, refund automation, RMA tracking',
      price: 2000,
      category: 'advanced',
      icon: <ArrowLeftIcon className="w-6 h-6" />
    }
  ];

  const integrations: ProjectFeature[] = [
    {
      id: 'stripe-payments',
      name: 'Stripe Payment Gateway',
      description: 'Credit cards, digital wallets, subscription billing',
      price: 2500,
      category: 'integration',
      icon: <CreditCardIcon className="w-6 h-6" />
    },
    {
      id: 'paypal-integration',
      name: 'PayPal Integration',
      description: 'PayPal payments, PayPal Credit, Venmo',
      price: 1800,
      category: 'integration',
      icon: <CreditCardIcon className="w-6 h-6" />
    },
    {
      id: 'shipping-carriers',
      name: 'Shipping Carrier Integration',
      description: 'UPS, FedEx, USPS, DHL shipping rates',
      price: 2200,
      category: 'integration',
      icon: <TruckIcon className="w-6 h-6" />
    },
    {
      id: 'quickbooks',
      name: 'QuickBooks Integration',
      description: 'Accounting sync, invoice generation, financial reporting',
      price: 2000,
      category: 'integration',
      icon: <DocumentTextIcon className="w-6 h-6" />
    },
    {
      id: 'mailchimp',
      name: 'Mailchimp Integration',
      description: 'Email marketing, customer segmentation, automation',
      price: 1200,
      category: 'integration',
      icon: <EnvelopeIcon className="w-6 h-6" />
    },
    {
      id: 'google-analytics',
      name: 'Google Analytics 4',
      description: 'E-commerce tracking, conversion analytics, user behavior',
      price: 800,
      category: 'integration',
      icon: <ChartBarIcon className="w-6 h-6" />
    },
    {
      id: 'facebook-pixel',
      name: 'Facebook Pixel',
      description: 'Conversion tracking, retargeting, ad optimization',
      price: 1000,
      category: 'integration',
      icon: <GlobeAltIcon className="w-6 h-6" />
    },
    {
      id: 'shopify-migration',
      name: 'Shopify Migration',
      description: 'Data migration from Shopify, product sync',
      price: 3000,
      category: 'integration',
      icon: <CloudIcon className="w-6 h-6" />
    },
    {
      id: 'woocommerce-migration',
      name: 'WooCommerce Migration',
      description: 'Data migration from WooCommerce, WordPress sync',
      price: 2800,
      category: 'integration',
      icon: <CloudIcon className="w-6 h-6" />
    },
    {
      id: 'inventory-systems',
      name: 'Inventory System Integration',
      description: 'TradeGecko, Zoho Inventory, Fishbowl integration',
      price: 2500,
      category: 'integration',
      icon: <CubeIcon className="w-6 h-6" />
    },
    {
      id: 'crm-integration',
      name: 'CRM Integration',
      description: 'Salesforce, HubSpot, Pipedrive customer sync',
      price: 2200,
      category: 'integration',
      icon: <UsersIcon className="w-6 h-6" />
    },
    {
      id: 'erp-integration',
      name: 'ERP System Integration',
      description: 'SAP, Oracle, NetSuite business system sync',
      price: 4000,
      category: 'integration',
      icon: <CogIcon className="w-6 h-6" />
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
            <h3 className="text-xl font-semibold text-custom-dark mb-4">Select Store Type</h3>
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
            <h3 className="text-xl font-semibold text-custom-dark mb-4">Store Size & Complexity</h3>
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
            <h3 className="text-xl font-semibold text-custom-dark mb-4">Core E-commerce Features</h3>
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
            <h3 className="text-xl font-semibold text-custom-dark mb-4">Advanced E-commerce Features</h3>
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
            <h3 className="text-xl font-semibold text-custom-dark mb-4">Payment & Shipping Integrations</h3>
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
            <h3 className="text-xl font-semibold text-custom-dark mb-4">Payment Security & Compliance</h3>
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
                  <span className="font-semibold text-custom-dark">Store Type:</span>
                  <span>{projectTypes.find(pt => pt.id === selectedProjectType)?.name}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-custom-dark">Store Size:</span>
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
                <li>• Complete e-commerce platform development</li>
                <li>• Mobile-optimized shopping experience</li>
                <li>• Payment gateway integration</li>
                <li>• Inventory management system</li>
                <li>• Order processing and fulfillment</li>
                <li>• Customer management and analytics</li>
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
              E-commerce Development
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
            >
              Powerful online stores that drive sales and provide exceptional shopping experiences
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
              Why Choose Our E-commerce Development Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We build high-converting online stores with advanced features, secure payment processing, and seamless user experiences.
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
              <h3 className="text-xl font-semibold text-custom-dark mb-3">High Conversion Rates</h3>
              <p className="text-gray-600">Optimized checkout flows and user experience design to maximize sales conversions.</p>
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
              <h3 className="text-xl font-semibold text-custom-dark mb-3">PCI DSS Compliant</h3>
              <p className="text-gray-600">Payment Card Industry compliance and secure payment processing to protect customer data.</p>
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
              <h3 className="text-xl font-semibold text-custom-dark mb-3">Mobile Shopping</h3>
              <p className="text-gray-600">Mobile-optimized shopping experience with fast loading and intuitive navigation.</p>
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
              <h3 className="text-xl font-semibold text-custom-dark mb-3">Inventory Management</h3>
              <p className="text-gray-600">Advanced inventory tracking, stock management, and automated reorder systems.</p>
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
              <h3 className="text-xl font-semibold text-custom-dark mb-3">Multi-Payment Options</h3>
              <p className="text-gray-600">Support for credit cards, digital wallets, and alternative payment methods.</p>
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
              <h3 className="text-xl font-semibold text-custom-dark mb-3">Analytics & Reporting</h3>
              <p className="text-gray-600">Comprehensive sales analytics, customer insights, and performance tracking.</p>
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
              Types of E-commerce Platforms We Build
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From simple online stores to complex multi-vendor marketplaces, we create e-commerce solutions that drive sales.
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
                <h3 className="text-lg font-semibold text-custom-dark">B2C Online Stores</h3>
              </div>
              <p className="text-gray-600">Direct-to-consumer stores with shopping carts, secure payments, and customer management.</p>
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
                <h3 className="text-lg font-semibold text-custom-dark">B2B E-commerce</h3>
              </div>
              <p className="text-gray-600">Business-to-business platforms with bulk ordering, wholesale pricing, and account management.</p>
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
                <h3 className="text-lg font-semibold text-custom-dark">Multi-Vendor Marketplaces</h3>
              </div>
              <p className="text-gray-600">Platforms for multiple sellers with commission systems and vendor management.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                  <CalendarIcon className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-custom-dark">Subscription E-commerce</h3>
              </div>
              <p className="text-gray-600">Recurring billing platforms with subscription management and member benefits.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                  <CubeIcon className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-custom-dark">Dropshipping Platforms</h3>
              </div>
              <p className="text-gray-600">Automated order fulfillment systems with supplier integration and inventory sync.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                  <CurrencyDollarIcon className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-lg font-semibold text-custom-dark">Wholesale E-commerce</h3>
              </div>
              <p className="text-gray-600">Bulk ordering systems with tiered pricing and wholesale customer management.</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Pricing Calculator Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-custom-dark mb-4">
            E-commerce Pricing Calculator
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get an accurate estimate for your online store project. Our step-by-step calculator helps you build the perfect e-commerce solution.
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
              Our E-commerce Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We specialize in creating high-converting online stores that maximize sales and provide exceptional shopping experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CodeBracketIcon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-custom-dark mb-2">Custom E-commerce Development</h3>
              <p className="text-gray-600">Bespoke online stores tailored to your specific business needs and product requirements.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DevicePhoneMobileIcon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-custom-dark mb-2">Mobile Shopping Experience</h3>
              <p className="text-gray-600">Mobile-optimized design ensuring seamless shopping on all devices.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheckIcon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-custom-dark mb-2">PCI DSS Compliant</h3>
              <p className="text-gray-600">Payment security standards and data protection for secure transactions.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <RocketLaunchIcon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-custom-dark mb-2">High Conversion Rates</h3>
              <p className="text-gray-600">Optimized checkout flows and user experience to maximize sales conversions.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserGroupIcon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-custom-dark mb-2">Inventory Management</h3>
              <p className="text-gray-600">Advanced inventory tracking, stock management, and automated reorder systems.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ClockIcon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-custom-dark mb-2">Multi-Payment Options</h3>
              <p className="text-gray-600">Support for credit cards, digital wallets, and alternative payment methods.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcommerceDevelopment; 