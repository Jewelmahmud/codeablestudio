import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRightIcon,
  ClockIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  CheckCircleIcon,
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  CpuChipIcon,
  RocketLaunchIcon,
  StarIcon
} from '@heroicons/react/24/outline';

const CaseStudies = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const caseStudies = [
    {
      id: 1,
      title: 'E-Commerce Platform Transformation',
      client: 'TechRetail Inc.',
      industry: 'E-Commerce',
      category: 'web-development',
      duration: '6 months',
      teamSize: '8 developers',
      budget: '$150,000',
      challenge: 'Legacy e-commerce platform with poor performance, outdated UI, and limited mobile responsiveness causing 40% cart abandonment.',
      solution: 'Built a modern React-based e-commerce platform with Node.js backend, implementing advanced search, personalized recommendations, and seamless mobile experience.',
      results: [
        '300% increase in mobile conversions',
        '60% reduction in page load time',
        '45% increase in average order value',
        '80% improvement in customer satisfaction'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Redis', 'AWS'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      testimonial: {
        content: 'CodeableStudio transformed our entire digital presence. The new platform exceeded all our expectations and delivered measurable business results.',
        author: 'Sarah Johnson',
        role: 'CTO, TechRetail Inc.',
        rating: 5
      }
    },
    {
      id: 2,
      title: 'AI-Powered Healthcare Analytics',
      client: 'MedTech Solutions',
      industry: 'Healthcare',
      category: 'ai-ml',
      duration: '8 months',
      teamSize: '12 developers',
      budget: '$250,000',
      challenge: 'Healthcare provider struggling with patient data analysis, inefficient diagnosis processes, and lack of predictive insights for better patient outcomes.',
      solution: 'Developed an AI-powered analytics platform using machine learning algorithms to analyze patient data, predict health risks, and optimize treatment plans.',
      results: [
        '85% improvement in diagnosis accuracy',
        '50% reduction in patient wait times',
        '30% increase in treatment success rates',
        '90% automation of routine analysis tasks'
      ],
      technologies: ['Python', 'TensorFlow', 'React', 'PostgreSQL', 'Docker'],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop',
      testimonial: {
        content: 'The AI platform has revolutionized how we approach patient care. It\'s like having an expert consultant available 24/7.',
        author: 'Dr. Michael Chen',
        role: 'Chief Medical Officer, MedTech Solutions',
        rating: 5
      }
    },
    {
      id: 3,
      title: 'FinTech Mobile Banking App',
      client: 'DigitalBank Pro',
      industry: 'Financial Services',
      category: 'mobile-development',
      duration: '10 months',
      teamSize: '10 developers',
      budget: '$200,000',
      challenge: 'Traditional bank needing to modernize their services with a secure, user-friendly mobile banking application to compete with fintech startups.',
      solution: 'Created a comprehensive mobile banking app with React Native, implementing advanced security features, real-time transactions, and intuitive user experience.',
      results: [
        '200% increase in mobile banking adoption',
        '95% user satisfaction rating',
        '70% reduction in customer support calls',
        '40% increase in daily active users'
      ],
      technologies: ['React Native', 'Node.js', 'PostgreSQL', 'Firebase', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
      testimonial: {
        content: 'The mobile app has completely transformed our customer experience. Our users love the intuitive interface and robust security features.',
        author: 'Emily Rodriguez',
        role: 'Head of Digital Banking, DigitalBank Pro',
        rating: 5
      }
    },
    {
      id: 4,
      title: 'Supply Chain Management System',
      client: 'Global Logistics Corp',
      industry: 'Logistics',
      category: 'enterprise',
      duration: '12 months',
      teamSize: '15 developers',
      budget: '$350,000',
      challenge: 'Complex supply chain operations with multiple warehouses, transportation routes, and inventory management causing delays and cost overruns.',
      solution: 'Built a comprehensive supply chain management system with real-time tracking, predictive analytics, and automated optimization algorithms.',
      results: [
        '35% reduction in delivery times',
        '25% decrease in operational costs',
        '90% improvement in inventory accuracy',
        '50% increase in customer satisfaction'
      ],
      technologies: ['Java', 'Spring Boot', 'React', 'Oracle', 'Kubernetes'],
      image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&h=400&fit=crop',
      testimonial: {
        content: 'The supply chain system has given us unprecedented visibility and control over our operations. ROI was achieved within 6 months.',
        author: 'David Kim',
        role: 'VP of Operations, Global Logistics Corp',
        rating: 5
      }
    },
    {
      id: 5,
      title: 'Educational Learning Platform',
      client: 'EduTech Innovations',
      industry: 'Education',
      category: 'web-development',
      duration: '7 months',
      teamSize: '9 developers',
      budget: '$180,000',
      challenge: 'Educational institution needing an online learning platform to support remote education with interactive features and progress tracking.',
      solution: 'Developed a comprehensive learning management system with video conferencing, interactive assessments, and personalized learning paths.',
      results: [
        '150% increase in student engagement',
        '80% improvement in learning outcomes',
        '95% student satisfaction rate',
        '60% reduction in administrative workload'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'WebRTC', 'AWS'],
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop',
      testimonial: {
        content: 'The learning platform has made education accessible to students worldwide. The interactive features keep students engaged and motivated.',
        author: 'Lisa Wang',
        role: 'Director of Technology, EduTech Innovations',
        rating: 5
      }
    },
    {
      id: 6,
      title: 'Real Estate Management Platform',
      client: 'PropertyTech Solutions',
      industry: 'Real Estate',
      category: 'enterprise',
      duration: '9 months',
      teamSize: '11 developers',
      budget: '$220,000',
      challenge: 'Real estate company managing hundreds of properties with manual processes, leading to inefficiencies and poor tenant experience.',
      solution: 'Created a comprehensive property management platform with tenant portals, maintenance tracking, and financial reporting automation.',
      results: [
        '40% reduction in property management time',
        '75% improvement in tenant satisfaction',
        '30% increase in rental income',
        '90% automation of routine tasks'
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
      testimonial: {
        content: 'The platform has streamlined our entire operation. We can now focus on growth instead of administrative tasks.',
        author: 'Alex Thompson',
        role: 'CEO, PropertyTech Solutions',
        rating: 5
      }
    }
  ];

  const categories = [
    { id: 'all', name: 'All Cases', icon: <ChartBarIcon className="h-5 w-5" /> },
    { id: 'web-development', name: 'Web Development', icon: <CodeBracketIcon className="h-5 w-5" /> },
    { id: 'mobile-development', name: 'Mobile Development', icon: <DevicePhoneMobileIcon className="h-5 w-5" /> },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: <CpuChipIcon className="h-5 w-5" /> },
    { id: 'enterprise', name: 'Enterprise Solutions', icon: <RocketLaunchIcon className="h-5 w-5" /> }
  ];

  const filteredCaseStudies = selectedCategory === 'all' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === selectedCategory);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Discover how we've helped businesses across industries achieve remarkable results through innovative technology solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {filteredCaseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {study.industry}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                                  <h3 className="text-2xl font-bold text-custom-dark mb-4">
                  {study.title}
                </h3>
                  
                  {/* Project Details */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <ClockIcon className="h-5 w-5" />
                      <span className="text-sm">{study.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <UserGroupIcon className="h-5 w-5" />
                      <span className="text-sm">{study.teamSize}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <CurrencyDollarIcon className="h-5 w-5" />
                      <span className="text-sm">{study.budget}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <ChartBarIcon className="h-5 w-5" />
                      <span className="text-sm">{study.client}</span>
                    </div>
                  </div>

                  {/* Challenge & Solution */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-custom-dark mb-2">Challenge</h4>
                    <p className="text-gray-600 text-sm mb-4">{study.challenge}</p>
                    
                                          <h4 className="font-semibold text-custom-dark mb-2">Solution</h4>
                    <p className="text-gray-600 text-sm mb-4">{study.solution}</p>
                  </div>

                  {/* Results */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-custom-dark mb-3">Key Results</h4>
                    <div className="space-y-2">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircleIcon className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-custom-dark mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-gray-50 rounded-lg p-4 mb-6">
                    <div className="flex items-center mb-3">
                      {[...Array(study.testimonial.rating)].map((_, i) => (
                        <StarIcon key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 text-sm italic mb-3">
                      "{study.testimonial.content}"
                    </p>
                    <div className="text-sm">
                                              <span className="font-semibold text-custom-dark">{study.testimonial.author}</span>
                      <span className="text-gray-500"> - {study.testimonial.role}</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link
                    to={`/case-studies/${study.id}`}
                    className="inline-flex items-center bg-primary-600 text-white hover:bg-primary-700 font-semibold py-3 px-6 rounded-lg transition-all duration-200"
                  >
                    View Full Case Study
                    <ArrowRightIcon className="h-4 w-4 ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
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
              Ready to Start Your Success Story?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve similar results for your business. Our team is ready to transform your ideas into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105"
              >
                Start Your Project
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies; 