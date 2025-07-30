import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  Bars3Icon, 
  XMarkIcon, 
  ChevronDownIcon,
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  RocketLaunchIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  CpuChipIcon,
  ChatBubbleLeftRightIcon,
  ChartBarIcon,
  UserGroupIcon,
  ClockIcon,
  SparklesIcon,
  ShoppingCartIcon
} from '@heroicons/react/24/outline';
import LanguageSwitcher from './LanguageSwitcher';
import './MegaMenu.css';

const Navbar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isTechnologiesOpen, setIsTechnologiesOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: t('navigation.home'), href: '/', type: 'link' },
    { name: t('navigation.services'), href: '/services', type: 'dropdown', dropdownType: 'services' },
    { name: t('navigation.technologies'), href: '/technologies', type: 'dropdown', dropdownType: 'technologies' },
    { name: t('navigation.projects'), href: '/projects', type: 'link' },
    { name: t('navigation.caseStudies'), href: '/case-studies', type: 'link' },
    { name: t('navigation.about'), href: '/about', type: 'link' },
    { name: t('navigation.contact'), href: '/contact', type: 'link' },
  ];

  const services = {
    webDevelopment: [
      {
        name: 'Custom Web Applications',
        description: 'Scalable web solutions',
        icon: <CodeBracketIcon className="w-6 h-6" />,
        href: '/services/web-application-development'
      },
      {
        name: 'E-commerce Platforms',
        description: 'Online store solutions',
        icon: <ShoppingCartIcon className="w-6 h-6" />,
        href: '/services/ecommerce-development'
      },
      {
        name: 'Progressive Web Apps',
        description: 'Modern PWA development',
        icon: <RocketLaunchIcon className="w-6 h-6" />,
        href: '/services/progressive-web-apps'
      },
      {
        name: 'API Development',
        description: 'RESTful & GraphQL APIs',
        icon: <GlobeAltIcon className="w-6 h-6" />,
        href: '/services/api-development'
      }
    ],
    mobileDevelopment: [
      {
        name: 'iOS Development',
        description: 'Native iPhone apps',
        icon: <DevicePhoneMobileIcon className="w-6 h-6" />,
        href: '/services#ios-development'
      },
      {
        name: 'Android Development',
        description: 'Native Android apps',
        icon: <DevicePhoneMobileIcon className="w-6 h-6" />,
        href: '/services#android-development'
      },
      {
        name: 'Cross-platform Apps',
        description: 'React Native & Flutter',
        icon: <DevicePhoneMobileIcon className="w-6 h-6" />,
        href: '/services#cross-platform'
      },
      {
        name: 'App Maintenance',
        description: 'Updates & support',
        icon: <ShieldCheckIcon className="w-6 h-6" />,
        href: '/services#app-maintenance'
      }
    ],
    aiMl: [
      {
        name: 'Machine Learning',
        description: 'Custom ML models',
        icon: <CpuChipIcon className="w-6 h-6" />,
        href: '/services#machine-learning'
      },
      {
        name: 'AI Chatbots',
        description: 'Intelligent automation',
        icon: <ChatBubbleLeftRightIcon className="w-6 h-6" />,
        href: '/services#ai-chatbots'
      },
      {
        name: 'Data Analytics',
        description: 'Business intelligence',
        icon: <ChartBarIcon className="w-6 h-6" />,
        href: '/services#data-analytics'
      },
      {
        name: 'Computer Vision',
        description: 'Image recognition',
        icon: <SparklesIcon className="w-6 h-6" />,
        href: '/services#computer-vision'
      }
    ],
    cloudDevOps: [
      {
        name: 'Cloud Migration',
        description: 'AWS, Azure, GCP',
        icon: <GlobeAltIcon className="w-6 h-6" />,
        href: '/services#cloud-migration'
      },
      {
        name: 'DevOps Automation',
        description: 'CI/CD pipelines',
        icon: <RocketLaunchIcon className="w-6 h-6" />,
        href: '/services#devops-automation'
      },
      {
        name: 'Containerization',
        description: 'Docker & Kubernetes',
        icon: <ShieldCheckIcon className="w-6 h-6" />,
        href: '/services#containerization'
      },
      {
        name: 'Server Management',
        description: '24/7 monitoring',
        icon: <ClockIcon className="w-6 h-6" />,
        href: '/services#server-management'
      }
    ],
    consulting: [
      {
        name: 'Technical Consulting',
        description: 'Expert guidance',
        icon: <UserGroupIcon className="w-6 h-6" />,
        href: '/services#technical-consulting'
      },
      {
        name: 'Architecture Design',
        description: 'System planning',
        icon: <CodeBracketIcon className="w-6 h-6" />,
        href: '/services#architecture-design'
      },
      {
        name: 'Code Review',
        description: 'Quality assurance',
        icon: <ShieldCheckIcon className="w-6 h-6" />,
        href: '/services#code-review'
      },
      {
        name: 'Performance Optimization',
        description: 'Speed improvements',
        icon: <RocketLaunchIcon className="w-6 h-6" />,
        href: '/services#performance-optimization'
      }
    ],
    maintenance: [
      {
        name: 'Bug Fixes',
        description: 'Issue resolution',
        icon: <ShieldCheckIcon className="w-6 h-6" />,
        href: '/services#bug-fixes'
      },
      {
        name: 'Feature Updates',
        description: 'New functionality',
        icon: <SparklesIcon className="w-6 h-6" />,
        href: '/services#feature-updates'
      },
      {
        name: 'Security Updates',
        description: 'Vulnerability patches',
        icon: <ShieldCheckIcon className="w-6 h-6" />,
        href: '/services#security-updates'
      },
      {
        name: 'Performance Monitoring',
        description: '24/7 oversight',
        icon: <ClockIcon className="w-6 h-6" />,
        href: '/services#performance-monitoring'
      }
    ]
  };

  const technologies = {
    frontend: [
      { 
        name: 'React', 
        description: 'Modern UI development', 
        icon: <img src="/images/icons/react.svg" alt="React" className="w-6 h-6" />,
        href: '/services#react'
      },
      { 
        name: 'Vue.js', 
        description: 'Progressive framework', 
        icon: (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M24,1.61H14.06L12,5.16 9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z"/>
          </svg>
        ),
        href: '/services#vuejs'
      },
      { 
        name: 'Angular', 
        description: 'Enterprise solutions', 
        icon: <img src="/images/icons/angular.svg" alt="Angular" className="w-6 h-6" />,
        href: '/services#angular'
      },
      { 
        name: 'Next.js', 
        description: 'Full-stack React', 
        icon: <img src="/images/icons/nextjs.svg" alt="Next.js" className="w-6 h-6" />,
        href: '/services#nextjs'
      },
      { 
        name: 'TypeScript', 
        description: 'Type-safe JavaScript', 
        icon: <img src="/images/icons/TypeScript.svg" alt="TypeScript" className="w-6 h-6" />,
        href: '/services#typescript'
      },
      { 
        name: 'Tailwind CSS', 
        description: 'Utility-first CSS', 
        icon: <img src="/images/icons/Tailwind CSS.svg" alt="Tailwind CSS" className="w-6 h-6" />,
        href: '/services#tailwind-css'
      },
    ],
    backend: [
      { 
        name: 'Node.js', 
        description: 'JavaScript runtime', 
        icon: <img src="/images/icons/Node.js.svg" alt="Node.js" className="w-6 h-6" />,
        href: '/services#nodejs'
      },
      { 
        name: 'Python', 
        description: 'Versatile programming', 
        icon: <img src="/images/icons/python.svg" alt="Python" className="w-6 h-6" />,
        href: '/services#python'
      },
      { 
        name: 'Java', 
        description: 'Enterprise applications', 
        icon: <img src="/images/icons/java.svg" alt="Java" className="w-6 h-6" />,
        href: '/services#java'
      },
      { 
        name: 'PHP', 
        description: 'Web development', 
        icon: <img src="/images/icons/php.svg" alt="PHP" className="w-6 h-6" />,
        href: '/services#php'
      },
      { 
        name: 'Go', 
        description: 'High-performance', 
        icon: <img src="/images/icons/go.svg" alt="Go" className="w-6 h-6" />,
        href: '/services#go'
      },
      { 
        name: 'C#', 
        description: 'Microsoft ecosystem', 
        icon: <img src="/images/icons/c-sharp.svg" alt="C#" className="w-6 h-6" />,
        href: '/services#csharp'
      },
    ],
    mobile: [
      { 
        name: 'React Native', 
        description: 'Cross-platform mobile', 
        icon: <img src="/images/icons/react.svg" alt="React Native" className="w-5 h-5" />,
        href: '/services#react-native'
      },
      { 
        name: 'Flutter', 
        description: 'Google UI framework', 
        icon: <img src="/images/icons/flutter.svg" alt="Flutter" className="w-5 h-5" />,
        href: '/services#flutter'
      },
      { 
        name: 'Swift', 
        description: 'iOS development', 
        icon: <img src="/images/icons/swift.svg" alt="Swift" className="w-5 h-5" />,
        href: '/services#swift'
      },
      { 
        name: 'Kotlin', 
        description: 'Android development', 
        icon: <img src="/images/icons/kotlin.svg" alt="Kotlin" className="w-5 h-5" />,
        href: '/services#kotlin'
      },
      { 
        name: 'Ionic', 
        description: 'Hybrid mobile apps', 
        icon: <img src="/images/icons/ionic.svg" alt="Ionic" className="w-5 h-5" />,
        href: '/services#ionic'
      },
      { 
        name: 'Xamarin', 
        description: 'Microsoft mobile', 
        icon: <img src="/images/icons/xamarin.svg" alt="Xamarin" className="w-5 h-5" />,
        href: '/services#xamarin'
      },
    ],
    desktop: [
      { 
        name: 'Electron', 
        description: 'Cross-platform desktop', 
        icon: <img src="/images/icons/electron.svg" alt="Electron" className="w-5 h-5" />,
        href: '/services#electron'
      },
      { 
        name: 'Tauri', 
        description: 'Modern desktop apps', 
        icon: <img src="/images/icons/tauri.svg" alt="Tauri" className="w-5 h-5" />,
        href: '/services#tauri'
      },
      { 
        name: 'Qt', 
        description: 'Native desktop UI', 
        icon: <img src="/images/icons/qt.svg" alt="Qt" className="w-5 h-5" />,
        href: '/services#qt'
      },
      { 
        name: 'WPF', 
        description: 'Windows desktop', 
        icon: <img src="/images/icons/wpf.svg" alt="WPF" className="w-5 h-5" />,
        href: '/services#wpf'
      },
      { 
        name: 'Cocoa', 
        description: 'macOS development', 
        icon: <img src="/images/icons/cocoa.svg" alt="Cocoa" className="w-5 h-5" />,
        href: '/services#cocoa'
      },
      { 
        name: 'GTK', 
        description: 'Linux desktop', 
        icon: <img src="/images/icons/gtk.svg" alt="GTK" className="w-5 h-5" />,
        href: '/services#gtk'
      },
    ],
    database: [
      { 
        name: 'PostgreSQL', 
        description: 'Advanced open source', 
        icon: <img src="/images/icons/postgresql.svg" alt="PostgreSQL" className="w-5 h-5" />,
        href: '/services#postgresql'
      },
      { 
        name: 'MongoDB', 
        description: 'NoSQL database', 
        icon: <img src="/images/icons/mongodb.svg" alt="MongoDB" className="w-5 h-5" />,
        href: '/services#mongodb'
      },
      { 
        name: 'MySQL', 
        description: 'Reliable database', 
        icon: <img src="/images/icons/mysql.svg" alt="MySQL" className="w-5 h-5" />,
        href: '/services#mysql'
      },
      { 
        name: 'Redis', 
        description: 'In-memory cache', 
        icon: <img src="/images/icons/redis.svg" alt="Redis" className="w-5 h-5" />,
        href: '/services#redis'
      },
      { 
        name: 'Firebase', 
        description: 'Google platform', 
        icon: <img src="/images/icons/firebase.svg" alt="Firebase" className="w-5 h-5" />,
        href: '/services#firebase'
      },
      { 
        name: 'Supabase', 
        description: 'Open source Firebase', 
        icon: <img src="/images/icons/supabase.svg" alt="Supabase" className="w-5 h-5" />,
        href: '/services#supabase'
      },
    ],
    cloud: [
      { 
        name: 'AWS', 
        description: 'Amazon Web Services', 
        icon: <img src="/images/icons/aws.svg" alt="AWS" className="w-5 h-5" />,
        href: '/services#aws'
      },
      { 
        name: 'Azure', 
        description: 'Microsoft Cloud', 
        icon: <img src="/images/icons/azure.svg" alt="Azure" className="w-5 h-5" />,
        href: '/services#azure'
      },
      { 
        name: 'Google Cloud', 
        description: 'Google platform', 
        icon: <img src="/images/icons/google-cloud.svg" alt="Google Cloud" className="w-5 h-5" />,
        href: '/services#google-cloud'
      },
      { 
        name: 'Docker', 
        description: 'Containerization', 
        icon: <img src="/images/icons/docker.svg" alt="Docker" className="w-5 h-5" />,
        href: '/services#docker'
      },
      { 
        name: 'Kubernetes', 
        description: 'Container orchestration', 
        icon: <img src="/images/icons/kubernetes.svg" alt="Kubernetes" className="w-5 h-5" />,
        href: '/services#kubernetes'
      },
      { 
        name: 'Vercel', 
        description: 'Deployment platform', 
        icon: <img src="/images/icons/vercel.svg" alt="Vercel" className="w-5 h-5" />,
        href: '/services#vercel'
      },
    ],
    ai: [
      { 
        name: 'TensorFlow', 
        description: 'Machine learning', 
        icon: <img src="/images/icons/tensorflow.svg" alt="TensorFlow" className="w-5 h-5" />,
        href: '/services#tensorflow'
      },
      { 
        name: 'PyTorch', 
        description: 'Deep learning', 
        icon: <img src="/images/icons/pytorch.svg" alt="PyTorch" className="w-5 h-5" />,
        href: '/services#pytorch'
      },
      { 
        name: 'OpenAI', 
        description: 'AI models & APIs', 
        icon: <img src="/images/icons/openai.svg" alt="OpenAI" className="w-5 h-5" />,
        href: '/services#openai'
      },
      { 
        name: 'Hugging Face', 
        description: 'NLP & transformers', 
        icon: <img src="/images/icons/hugging-face.svg" alt="Hugging Face" className="w-5 h-5" />,
        href: '/services#hugging-face'
      },
      { 
        name: 'Scikit-learn', 
        description: 'Machine learning', 
        icon: <img src="/images/icons/scikit_learn.svg" alt="Scikit-learn" className="w-5 h-5" />,
        href: '/services#scikit-learn'
      },
      { 
        name: 'LangChain', 
        description: 'LLM applications', 
        icon: <img src="/images/icons/langchain.svg" alt="LangChain" className="w-5 h-5" />,
        href: '/services#langchain'
      },
    ],
    crypto: [
      { 
        name: 'Solidity', 
        description: 'Smart contracts', 
        icon: <img src="/images/icons/solidity.svg" alt="Solidity" className="w-5 h-5" />,
        href: '/services#solidity'
      },
      { 
        name: 'Web3.js', 
        description: 'Ethereum library', 
        icon: <img src="/images/icons/Web3js.svg" alt="Web3.js" className="w-5 h-5" />,
        href: '/services#web3js'
      },
      { 
        name: 'Hardhat', 
        description: 'Development framework', 
        icon: <img src="/images/icons/Hardhat.svg" alt="Hardhat" className="w-5 h-5" />,
        href: '/services#hardhat'
      },
      { 
        name: 'Truffle', 
        description: 'Smart contract dev', 
        icon: <img src="/images/icons/Truffle_Suite.svg" alt="Truffle" className="w-5 h-5" />,
        href: '/services#truffle'
      },
      { 
        name: 'IPFS', 
        description: 'Decentralized storage', 
        icon: <img src="/images/icons/ipfs.svg" alt="IPFS" className="w-5 h-5" />,
        href: '/services#ipfs'
      },
      { 
        name: 'Chainlink', 
        description: 'Oracle networks', 
        icon: <img src="/images/icons/chainlink_link.svg" alt="Chainlink" className="w-5 h-5" />,
        href: '/services#chainlink'
      },
    ],
  };

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
                     {/* Logo */}
           <Link to="/" className="flex items-center space-x-2">
             <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
               isScrolled 
                 ? 'bg-gradient-to-br from-primary-600 to-primary-800' 
                 : 'bg-white'
             }`}>
               <span className={`font-bold text-xl transition-colors duration-300 ${
                 isScrolled ? 'text-white' : 'text-primary-600'
               }`}>CS</span>
             </div>
             <span className={`text-xl font-bold transition-colors duration-200 ${
                               isScrolled ? 'text-custom-dark' : 'text-white'
             }`}>Codable Studio</span>
           </Link>

                     {/* Desktop Navigation */}
                       <div className="hidden md:flex items-center space-x-6">
             {navigation.map((item) => (
               item.type === 'dropdown' ? (
                 // Render dropdown menu
                 <div 
                   key={item.name}
                   className="relative"
                   onMouseEnter={() => item.dropdownType === 'services' ? setIsServicesOpen(true) : setIsTechnologiesOpen(true)}
                   onMouseLeave={() => item.dropdownType === 'services' ? setIsServicesOpen(false) : setIsTechnologiesOpen(false)}
                 >
                   <button
                     className={`flex items-center text-sm font-medium transition-colors duration-200 ${
                       isScrolled 
                         ? 'text-gray-700 hover:text-primary-600' 
                         : 'text-white hover:text-primary-600'
                     }`}
                   >
                     {item.name}
                     <ChevronDownIcon className="ml-1 h-4 w-4" />
                   </button>
                   
                   {/* Invisible bridge to prevent mouse leave */}
                   {(item.dropdownType === 'services' ? isServicesOpen : isTechnologiesOpen) && (
                     <div className="absolute top-full left-0 w-full h-6 bg-transparent"></div>
                   )}
                   
                   {/* Services Mega Menu */}
                   {item.dropdownType === 'services' && isServicesOpen && (
                     <div className="mega-menu active">
                       <div className="mega-menu-grid">
                         {/* Web Development */}
                         <div className="mega-menu-category">
                           <div className="mega-menu-category-header">
                             <span className="mega-menu-category-icon">🌐</span>
                             <h3 className="mega-menu-category-title">Web Development</h3>
                           </div>
                           <div className="mega-menu-items">
                             {services.webDevelopment.map((service) => (
                               <Link
                                 key={service.name}
                                 to={service.href}
                                 className="mega-menu-item"
                               >
                                 <div className="mega-menu-item-icon">
                                   {service.icon}
                                 </div>
                                 <div className="mega-menu-item-content">
                                   <div className="mega-menu-item-title">{service.name}</div>
                                   <div className="mega-menu-item-description">{service.description}</div>
                                 </div>
                               </Link>
                             ))}
                           </div>
                         </div>
                         
                         {/* Mobile Development */}
                         <div className="mega-menu-category">
                           <div className="mega-menu-category-header">
                             <span className="mega-menu-category-icon">📱</span>
                             <h3 className="mega-menu-category-title">Mobile Development</h3>
                           </div>
                           <div className="mega-menu-items">
                             {services.mobileDevelopment.map((service) => (
                               <Link
                                 key={service.name}
                                 to={service.href}
                                 className="mega-menu-item"
                               >
                                 <div className="mega-menu-item-icon">
                                   {service.icon}
                                 </div>
                                 <div className="mega-menu-item-content">
                                   <div className="mega-menu-item-title">{service.name}</div>
                                   <div className="mega-menu-item-description">{service.description}</div>
                                 </div>
                               </Link>
                             ))}
                           </div>
                         </div>
                         
                         {/* AI & Machine Learning */}
                         <div className="mega-menu-category">
                           <div className="mega-menu-category-header">
                             <span className="mega-menu-category-icon">🤖</span>
                             <h3 className="mega-menu-category-title">AI & Machine Learning</h3>
                           </div>
                           <div className="mega-menu-items">
                             {services.aiMl.map((service) => (
                               <Link
                                 key={service.name}
                                 to={service.href}
                                 className="mega-menu-item"
                               >
                                 <div className="mega-menu-item-icon">
                                   {service.icon}
                                 </div>
                                 <div className="mega-menu-item-content">
                                   <div className="mega-menu-item-title">{service.name}</div>
                                   <div className="mega-menu-item-description">{service.description}</div>
                                 </div>
                               </Link>
                             ))}
                           </div>
                         </div>
                         
                         {/* Cloud & DevOps */}
                         <div className="mega-menu-category">
                           <div className="mega-menu-category-header">
                             <span className="mega-menu-category-icon">☁️</span>
                             <h3 className="mega-menu-category-title">Cloud & DevOps</h3>
                           </div>
                           <div className="mega-menu-items">
                             {services.cloudDevOps.map((service) => (
                               <Link
                                 key={service.name}
                                 to={service.href}
                                 className="mega-menu-item"
                               >
                                 <div className="mega-menu-item-icon">
                                   {service.icon}
                                 </div>
                                 <div className="mega-menu-item-content">
                                   <div className="mega-menu-item-title">{service.name}</div>
                                   <div className="mega-menu-item-description">{service.description}</div>
                                 </div>
                               </Link>
                             ))}
                           </div>
                         </div>
                         
                         {/* Consulting */}
                         <div className="mega-menu-category">
                           <div className="mega-menu-category-header">
                             <span className="mega-menu-category-icon">💼</span>
                             <h3 className="mega-menu-category-title">Consulting</h3>
                           </div>
                           <div className="mega-menu-items">
                             {services.consulting.map((service) => (
                               <Link
                                 key={service.name}
                                 to={service.href}
                                 className="mega-menu-item"
                               >
                                 <div className="mega-menu-item-icon">
                                   {service.icon}
                                 </div>
                                 <div className="mega-menu-item-content">
                                   <div className="mega-menu-item-title">{service.name}</div>
                                   <div className="mega-menu-item-description">{service.description}</div>
                                 </div>
                               </Link>
                             ))}
                           </div>
                         </div>
                         
                         {/* Maintenance & Support */}
                         <div className="mega-menu-category">
                           <div className="mega-menu-category-header">
                             <span className="mega-menu-category-icon">🔧</span>
                             <h3 className="mega-menu-category-title">Maintenance & Support</h3>
                           </div>
                           <div className="mega-menu-items">
                             {services.maintenance.map((service) => (
                               <Link
                                 key={service.name}
                                 to={service.href}
                                 className="mega-menu-item"
                               >
                                 <div className="mega-menu-item-icon">
                                   {service.icon}
                                 </div>
                                 <div className="mega-menu-item-content">
                                   <div className="mega-menu-item-title">{service.name}</div>
                                   <div className="mega-menu-item-description">{service.description}</div>
                                 </div>
                               </Link>
                             ))}
                           </div>
                         </div>
                       </div>
                       
                       {/* Bottom CTA */}
                       <div className="mega-menu-cta">
                         <p className="mega-menu-cta-text">Need a custom solution?</p>
                         <Link
                           to="/contact"
                           className="mega-menu-cta-button"
                         >
                           Get Free Consultation
                         </Link>
                       </div>
                     </div>
                   )}
                   
                   {/* Technologies Mega Menu */}
                   {item.dropdownType === 'technologies' && isTechnologiesOpen && (
                     <div className="mega-menu active">
                       <div className="mega-menu-grid">
                         {/* Frontend */}
                         <div className="mega-menu-category">
                           <div className="mega-menu-category-header">
                             <span className="mega-menu-category-icon">🎨</span>
                             <h3 className="mega-menu-category-title">Frontend</h3>
                           </div>
                           <div className="mega-menu-items">
                             {technologies.frontend.map((tech) => (
                               <Link
                                 key={tech.name}
                                 to={tech.href}
                                 className="mega-menu-item"
                               >
                                 <div className="mega-menu-item-icon">
                                   {tech.icon}
                                 </div>
                                 <div className="mega-menu-item-content">
                                   <div className="mega-menu-item-title">{tech.name}</div>
                                   <div className="mega-menu-item-description">{tech.description}</div>
                                 </div>
                               </Link>
                             ))}
                           </div>
                         </div>
                         
                         {/* Backend */}
                         <div className="mega-menu-category">
                           <div className="mega-menu-category-header">
                             <span className="mega-menu-category-icon">⚙️</span>
                             <h3 className="mega-menu-category-title">Backend</h3>
                           </div>
                           <div className="mega-menu-items">
                             {technologies.backend.map((tech) => (
                               <Link
                                 key={tech.name}
                                 to={tech.href}
                                 className="mega-menu-item"
                               >
                                 <div className="mega-menu-item-icon">
                                   {tech.icon}
                                 </div>
                                 <div className="mega-menu-item-content">
                                   <div className="mega-menu-item-title">{tech.name}</div>
                                   <div className="mega-menu-item-description">{tech.description}</div>
                                 </div>
                               </Link>
                             ))}
                           </div>
                         </div>
                         
                         {/* Mobile */}
                         <div className="mega-menu-category">
                           <div className="mega-menu-category-header">
                             <span className="mega-menu-category-icon">📱</span>
                             <h3 className="mega-menu-category-title">Mobile</h3>
                           </div>
                           <div className="mega-menu-items">
                             {technologies.mobile.map((tech) => (
                               <Link
                                 key={tech.name}
                                 to={tech.href}
                                 className="mega-menu-item"
                               >
                                 <div className="mega-menu-item-icon">
                                   {tech.icon}
                                 </div>
                                 <div className="mega-menu-item-content">
                                   <div className="mega-menu-item-title">{tech.name}</div>
                                   <div className="mega-menu-item-description">{tech.description}</div>
                                 </div>
                               </Link>
                             ))}
                           </div>
                         </div>
                         
                         {/* Desktop */}
                         <div className="mega-menu-category">
                           <div className="mega-menu-category-header">
                             <span className="mega-menu-category-icon">🖥️</span>
                             <h3 className="mega-menu-category-title">Desktop</h3>
                           </div>
                           <div className="mega-menu-items">
                             {technologies.desktop.map((tech) => (
                               <Link
                                 key={tech.name}
                                 to={tech.href}
                                 className="mega-menu-item"
                               >
                                 <div className="mega-menu-item-icon">
                                   {tech.icon}
                                 </div>
                                 <div className="mega-menu-item-content">
                                   <div className="mega-menu-item-title">{tech.name}</div>
                                   <div className="mega-menu-item-description">{tech.description}</div>
                                 </div>
                               </Link>
                             ))}
                           </div>
                         </div>
                         
                         {/* Database */}
                         <div className="mega-menu-category">
                           <div className="mega-menu-category-header">
                             <span className="mega-menu-category-icon">🗄️</span>
                             <h3 className="mega-menu-category-title">Database</h3>
                           </div>
                           <div className="mega-menu-items">
                             {technologies.database.map((tech) => (
                               <Link
                                 key={tech.name}
                                 to={tech.href}
                                 className="mega-menu-item"
                               >
                                 <div className="mega-menu-item-icon">
                                   {tech.icon}
                                 </div>
                                 <div className="mega-menu-item-content">
                                   <div className="mega-menu-item-title">{tech.name}</div>
                                   <div className="mega-menu-item-description">{tech.description}</div>
                                 </div>
                               </Link>
                             ))}
                           </div>
                         </div>
                         
                         {/* Cloud & DevOps */}
                         <div className="mega-menu-category">
                           <div className="mega-menu-category-header">
                             <span className="mega-menu-category-icon">☁️</span>
                             <h3 className="mega-menu-category-title">Cloud & DevOps</h3>
                           </div>
                           <div className="mega-menu-items">
                             {technologies.cloud.map((tech) => (
                               <Link
                                 key={tech.name}
                                 to={tech.href}
                                 className="mega-menu-item"
                               >
                                 <div className="mega-menu-item-icon">
                                   {tech.icon}
                                 </div>
                                 <div className="mega-menu-item-content">
                                   <div className="mega-menu-item-title">{tech.name}</div>
                                   <div className="mega-menu-item-description">{tech.description}</div>
                                 </div>
                               </Link>
                             ))}
                           </div>
                         </div>
                         
                         {/* AI */}
                         <div className="mega-menu-category">
                           <div className="mega-menu-category-header">
                             <span className="mega-menu-category-icon">🤖</span>
                             <h3 className="mega-menu-category-title">AI</h3>
                           </div>
                           <div className="mega-menu-items">
                             {technologies.ai.map((tech) => (
                               <Link
                                 key={tech.name}
                                 to={tech.href}
                                 className="mega-menu-item"
                               >
                                 <div className="mega-menu-item-icon">
                                   {tech.icon}
                                 </div>
                                 <div className="mega-menu-item-content">
                                   <div className="mega-menu-item-title">{tech.name}</div>
                                   <div className="mega-menu-item-description">{tech.description}</div>
                                 </div>
                               </Link>
                             ))}
                           </div>
                         </div>
                         
                         {/* Crypto Development */}
                         <div className="mega-menu-category">
                           <div className="mega-menu-category-header">
                             <span className="mega-menu-category-icon">₿</span>
                             <h3 className="mega-menu-category-title">Crypto Development</h3>
                           </div>
                           <div className="mega-menu-items">
                             {technologies.crypto.map((tech) => (
                               <Link
                                 key={tech.name}
                                 to={tech.href}
                                 className="mega-menu-item"
                               >
                                 <div className="mega-menu-item-icon">
                                   {tech.icon}
                                 </div>
                                 <div className="mega-menu-item-content">
                                   <div className="mega-menu-item-title">{tech.name}</div>
                                   <div className="mega-menu-item-description">{tech.description}</div>
                                 </div>
                               </Link>
                             ))}
                           </div>
                         </div>
                       </div>
                       
                       {/* Bottom CTA */}
                       <div className="mega-menu-cta">
                         <p className="mega-menu-cta-text">Need a specific technology solution?</p>
                         <Link
                           to="/contact"
                           className="mega-menu-cta-button"
                         >
                           Get Custom Quote
                         </Link>
                       </div>
                     </div>
                   )}
                 </div>
               ) : (
                 // Render regular link
                 <Link
                   key={item.name}
                   to={item.href}
                   className={`text-sm font-medium transition-colors duration-200 ${
                     isActive(item.href)
                       ? 'text-[rgb(158_169_193)]'
                       : isScrolled 
                         ? 'text-gray-700 hover:text-primary-600' 
                         : 'text-white hover:text-primary-600'
                   }`}
                 >
                   {item.name}
                 </Link>
               )
             ))}
             
             
             <LanguageSwitcher isScrolled={isScrolled} />
             
             <Link
               to="/login"
               className="btn-primary text-sm ml-2"
             >
               {t('navigation.clientLogin')}
             </Link>
          </div>

                     {/* Mobile Action Buttons */}
           <div className="md:hidden flex items-center space-x-4">
             <button
               onClick={() => setIsOpen(!isOpen)}
               className={`transition-colors duration-200 focus:outline-none ${
                 isScrolled 
                   ? 'text-gray-700 hover:text-primary-600 focus:text-primary-600'
                   : 'text-white hover:text-primary-600 focus:text-primary-600'
               }`}
             >
               {isOpen ? (
                 <XMarkIcon className="h-6 w-6" />
               ) : (
                 <Bars3Icon className="h-6 w-6" />
               )}
             </button>
             
             <LanguageSwitcher isScrolled={isScrolled} />
             
             <Link
               to="/login"
               className="btn-primary text-sm"
             >
               {t('navigation.clientLogin')}
             </Link>
           </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md rounded-lg mt-2 shadow-lg">
                             {navigation.map((item) => (
                 <Link
                   key={item.name}
                   to={item.href}
                   className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                     isActive(item.href)
                       ? 'text-primary-600 bg-primary-50'
                       : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                   }`}
                   onClick={() => setIsOpen(false)}
                 >
                   {item.name}
                 </Link>
               ))}
               
                              {/* Mobile Services Section */}
                <div className="border-t border-gray-200 pt-4 mt-4">
                  <div className="px-3 py-2 text-sm font-semibold text-gray-900 mb-2">Services</div>
                  <div className="grid grid-cols-2 gap-2">
                    {Object.entries(services).map(([category, serviceList]) => (
                      <div key={category} className="space-y-1">
                        <div className="px-3 py-1 text-xs font-medium text-gray-500 uppercase tracking-wide">
                          {category === 'webDevelopment' && '🌐 Web Development'}
                          {category === 'mobileDevelopment' && '📱 Mobile Development'}
                          {category === 'aiMl' && '🤖 AI & Machine Learning'}
                          {category === 'cloudDevOps' && '☁️ Cloud & DevOps'}
                          {category === 'consulting' && '💼 Consulting'}
                          {category === 'maintenance' && '🔧 Maintenance & Support'}
                        </div>
                        {serviceList.slice(0, 2).map((service) => (
                          <div key={service.name} className="px-3 py-1 text-sm text-gray-700 flex items-center space-x-2">
                            <span className="w-5 h-5 flex items-center justify-center text-primary-600">{service.icon}</span>
                            <span>{service.name}</span>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
               
                              {/* Mobile Technologies Section */}
               <div className="border-t border-gray-200 pt-4 mt-4">
                 <div className="px-3 py-2 text-sm font-semibold text-gray-900 mb-2">Technologies</div>
                 <div className="grid grid-cols-2 gap-2">
                   {Object.entries(technologies).map(([category, techs]) => (
                     <div key={category} className="space-y-1">
                       <div className="px-3 py-1 text-xs font-medium text-gray-500 uppercase tracking-wide">
                         {category === 'frontend' && '🎨 Frontend'}
                         {category === 'backend' && '⚙️ Backend'}
                         {category === 'mobile' && '📱 Mobile'}
                         {category === 'desktop' && '🖥️ Desktop'}
                         {category === 'database' && '🗄️ Database'}
                         {category === 'cloud' && '☁️ Cloud & DevOps'}
                         {category === 'ai' && '🤖 AI'}
                         {category === 'crypto' && '₿ Crypto Development'}
                       </div>
                                               {techs.slice(0, 3).map((tech) => (
                          <div key={tech.name} className="px-3 py-1 text-sm text-gray-700 flex items-center space-x-2">
                            <span className="w-5 h-5 flex items-center justify-center">{tech.icon}</span>
                            <span>{tech.name}</span>
                          </div>
                        ))}
                     </div>
                   ))}
                 </div>
               </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 