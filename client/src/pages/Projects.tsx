import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  EyeIcon,
  ArrowTopRightOnSquareIcon,
  TagIcon
} from '@heroicons/react/24/outline';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  client: string;
  duration: string;
  url?: string;
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/projects');
        const data = await response.json();
        setProjects(data.projects);
      } catch (error) {
        console.error('Error fetching projects:', error);
        // Fallback data
        setProjects([
          {
            id: '1',
            title: 'E-Commerce Platform',
            description: 'A modern e-commerce platform with advanced inventory management, payment processing, and analytics dashboard.',
            image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
            technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
            category: 'E-commerce',
            client: 'RetailTech Solutions',
            duration: '6 months',
            url: 'https://example-ecommerce.com'
          },
          {
            id: '2',
            title: 'Healthcare Management System',
            description: 'Comprehensive healthcare management system with patient records, appointment scheduling, and telemedicine features.',
            image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop',
            technologies: ['Vue.js', 'Python', 'PostgreSQL', 'Docker', 'HIPAA Compliant'],
            category: 'Healthcare',
            client: 'MediCare Plus',
            duration: '8 months',
            url: 'https://example-healthcare.com'
          },
          {
            id: '3',
            title: 'AI-Powered Analytics Dashboard',
            description: 'Real-time analytics dashboard with machine learning insights and predictive modeling capabilities.',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
            technologies: ['React', 'Python', 'TensorFlow', 'Redis', 'Kubernetes'],
            category: 'AI/ML',
            client: 'DataInsight Corp',
            duration: '4 months',
            url: 'https://example-analytics.com'
          },
          {
            id: '4',
            title: 'Mobile Banking App',
            description: 'Secure mobile banking application with biometric authentication and real-time transaction monitoring.',
            image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
            technologies: ['React Native', 'Node.js', 'MongoDB', 'JWT', 'Firebase'],
            category: 'Fintech',
            client: 'SecureBank',
            duration: '7 months',
            url: 'https://example-banking.com'
          },
          {
            id: '5',
            title: 'Real Estate Management Platform',
            description: 'Comprehensive real estate management platform with property listings, virtual tours, and CRM integration.',
            image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
            technologies: ['Angular', 'C#', 'SQL Server', 'Azure', '3D Visualization'],
            category: 'Real Estate',
            client: 'PropertyPro',
            duration: '5 months',
            url: 'https://example-realestate.com'
          },
          {
            id: '6',
            title: 'Educational Learning Platform',
            description: 'Interactive learning platform with gamification, progress tracking, and adaptive learning algorithms.',
            image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop',
            technologies: ['React', 'Node.js', 'MongoDB', 'WebRTC', 'AI/ML'],
            category: 'EdTech',
            client: 'LearnSmart Academy',
            duration: '6 months',
            url: 'https://example-education.com'
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'E-commerce', name: 'E-commerce' },
    { id: 'Healthcare', name: 'Healthcare' },
    { id: 'AI/ML', name: 'AI/ML' },
    { id: 'Fintech', name: 'Fintech' },
    { id: 'Real Estate', name: 'Real Estate' },
    { id: 'EdTech', name: 'EdTech' }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
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
          <source src="/videos/project.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Transparent Blue Overlay */}
        <div className="absolute inset-0" style={{ backgroundColor: 'rgb(37 99 235 / 82%)' }}></div>
        
        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Our Projects
              </h1>
              <p className="text-xl text-white max-w-3xl mx-auto">
                Explore our portfolio of successful projects that demonstrate our expertise in software development and digital innovation.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

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

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card overflow-hidden"
              >
                <div className="relative h-48 bg-gray-200">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <button className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors duration-200">
                      <EyeIcon className="h-6 w-6" />
                    </button>
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors duration-200"
                      >
                        <ArrowTopRightOnSquareIcon className="h-6 w-6" />
                      </a>
                    )}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    <span className="text-sm text-gray-500">
                      {project.duration}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="mb-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <TagIcon className="h-4 w-4 text-gray-400" />
                      <span className="text-sm font-medium text-gray-700">Technologies:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="border-t pt-4">
                    <p className="text-sm text-gray-500">
                      <span className="font-medium">Client:</span> {project.client}
                    </p>
                  </div>
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
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Let's create something amazing together. Get in touch with us to discuss your project requirements.
            </p>
            <Link
              to="/contact"
              className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 inline-block"
            >
              Start Your Project
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects; 