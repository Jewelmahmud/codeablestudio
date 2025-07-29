import { Router } from 'express';
import { Project } from '../types';

const router = Router();

// Sample projects data
const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform with advanced inventory management, payment processing, and analytics dashboard.',
    image: '/images/projects/ecommerce.jpg',
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
    image: '/images/projects/healthcare.jpg',
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
    image: '/images/projects/analytics.jpg',
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
    image: '/images/projects/banking.jpg',
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
    image: '/images/projects/realestate.jpg',
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
    image: '/images/projects/education.jpg',
    technologies: ['React', 'Node.js', 'MongoDB', 'WebRTC', 'AI/ML'],
    category: 'EdTech',
    client: 'LearnSmart Academy',
    duration: '6 months',
    url: 'https://example-education.com'
  }
];

// GET /api/projects - Get all projects
router.get('/', (req, res) => {
  const { category, limit } = req.query;
  
  let filteredProjects = projects;
  
  // Filter by category if provided
  if (category) {
    filteredProjects = projects.filter(p => 
      p.category.toLowerCase() === (category as string).toLowerCase()
    );
  }
  
  // Limit results if provided
  if (limit) {
    filteredProjects = filteredProjects.slice(0, parseInt(limit as string));
  }
  
  res.json({
    projects: filteredProjects,
    total: filteredProjects.length,
    filters: { category, limit }
  });
});

// GET /api/projects/:id - Get specific project
router.get('/:id', (req, res) => {
  const project = projects.find(p => p.id === req.params.id);
  
  if (!project) {
    return res.status(404).json({
      error: 'Project not found'
    });
  }
  
  res.json(project);
});

// GET /api/projects/category/:category - Get projects by category
router.get('/category/:category', (req, res) => {
  const { category } = req.params;
  const filteredProjects = projects.filter(p => 
    p.category.toLowerCase() === category.toLowerCase()
  );
  
  res.json({
    projects: filteredProjects,
    category,
    total: filteredProjects.length
  });
});

export { router as projectsRouter }; 