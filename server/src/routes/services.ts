import { Router } from 'express';
import { Service } from '../types';

const router = Router();

// Sample services data
const services: Service[] = [
  {
    id: '1',
    title: 'Custom Software Development',
    description: 'Build scalable, high-performance software solutions tailored to your business needs.',
    icon: '💻',
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
    icon: '🌐',
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
    icon: '📱',
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
    icon: '🤖',
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
    icon: '🎨',
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
    icon: '💡',
    category: 'consulting',
    features: [
      'Technology strategy',
      'Architecture review',
      'Performance optimization',
      'Security audits',
      'Team training & mentoring'
    ]
  }
];

// GET /api/services - Get all services
router.get('/', (req, res) => {
  res.json({
    services,
    total: services.length
  });
});

// GET /api/services/:id - Get specific service
router.get('/:id', (req, res) => {
  const service = services.find(s => s.id === req.params.id);
  
  if (!service) {
    return res.status(404).json({
      error: 'Service not found'
    });
  }
  
  res.json(service);
});

// GET /api/services/category/:category - Get services by category
router.get('/category/:category', (req, res) => {
  const { category } = req.params;
  const filteredServices = services.filter(s => s.category === category);
  
  res.json({
    services: filteredServices,
    category,
    total: filteredServices.length
  });
});

export { router as servicesRouter }; 