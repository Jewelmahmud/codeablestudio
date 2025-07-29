import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  CodeBracketIcon, 
  DevicePhoneMobileIcon, 
  CpuChipIcon,
  RocketLaunchIcon,
  PaintBrushIcon,
  LightBulbIcon,
  CheckCircleIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  category: string;
  price?: string;
}

const Services = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const fetchServices = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/services');
        const data = await response.json();
        setServices(data.services);
      } catch (error) {
        console.error('Error fetching services:', error);
        // Fallback data
        setServices([
          {
            id: '1',
            title: 'Custom Software Development',
            description: 'Build scalable, high-performance software solutions tailored to your business needs.',
            icon: <CodeBracketIcon className="h-8 w-8" />,
            category: 'development',
            features: [
              'Full-stack development',
              'Cloud-native applications',
              'API development & integration',
              'Database design & optimization',
              'DevOps & CI/CD implementation'
            ]
          },
          {
            id: '2',
            title: 'Web Application Development',
            description: 'Modern, responsive web applications that deliver exceptional user experiences.',
            icon: <RocketLaunchIcon className="h-8 w-8" />,
            category: 'development',
            features: [
              'React, Vue, Angular development',
              'Progressive Web Apps (PWA)',
              'E-commerce solutions',
              'Content Management Systems',
              'Real-time applications'
            ]
          },
          {
            id: '3',
            title: 'Mobile App Development',
            description: 'Native and cross-platform mobile applications for iOS and Android.',
            icon: <DevicePhoneMobileIcon className="h-8 w-8" />,
            category: 'development',
            features: [
              'Native iOS & Android development',
              'React Native & Flutter apps',
              'App Store optimization',
              'Push notifications & analytics',
              'Offline functionality'
            ]
          },
          {
            id: '4',
            title: 'AI & Machine Learning',
            description: 'Intelligent solutions that automate processes and provide data-driven insights.',
            icon: <CpuChipIcon className="h-8 w-8" />,
            category: 'ai',
            features: [
              'Custom AI models',
              'Natural Language Processing',
              'Computer Vision solutions',
              'Predictive analytics',
              'Chatbot development'
            ]
          },
          {
            id: '5',
            title: 'UI/UX Design',
            description: 'Beautiful, intuitive designs that enhance user engagement and satisfaction.',
            icon: <PaintBrushIcon className="h-8 w-8" />,
            category: 'design',
            features: [
              'User research & personas',
              'Wireframing & prototyping',
              'Visual design & branding',
              'Usability testing',
              'Design systems'
            ]
          },
          {
            id: '6',
            title: 'Technical Consulting',
            description: 'Expert guidance to help you make informed technology decisions.',
            icon: <LightBulbIcon className="h-8 w-8" />,
            category: 'consulting',
            features: [
              'Technology strategy',
              'Architecture review',
              'Performance optimization',
              'Security audits',
              'Team training & mentoring'
            ]
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'development', name: 'Development' },
    { id: 'ai', name: 'AI & ML' },
    { id: 'design', name: 'Design' },
    { id: 'consulting', name: 'Consulting' }
  ];

  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600"></div>
      </div>
    );
  }

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
              Our Services
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Comprehensive software development services to help your business thrive in the digital age.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card p-8"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                  <div className="text-primary-600">
                    {service.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold transition-colors duration-200"
                >
                  Learn More
                  <ArrowRightIcon className="h-5 w-5 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology to ensure your project is delivered on time, within budget, and exceeds expectations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'We analyze your requirements and create a detailed project plan.'
              },
              {
                step: '02',
                title: 'Design',
                description: 'Our team creates wireframes, prototypes, and visual designs.'
              },
              {
                step: '03',
                title: 'Development',
                description: 'We build your solution using modern technologies and best practices.'
              },
              {
                step: '04',
                title: 'Launch',
                description: 'We deploy your solution and provide ongoing support and maintenance.'
              }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {process.title}
                </h3>
                <p className="text-gray-600">
                  {process.description}
                </p>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your project requirements and create a custom solution that fits your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105"
              >
                Start Your Project
              </Link>
              <Link
                to="/projects"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services; 