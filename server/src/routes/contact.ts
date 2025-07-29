import { Router } from 'express';
import { ContactForm } from '../types';

const router = Router();

// POST /api/contact - Submit contact form
router.post('/', (req, res) => {
  try {
    const contactData: ContactForm = req.body;
    
    // Validate required fields
    if (!contactData.name || !contactData.email || !contactData.message) {
      return res.status(400).json({
        error: 'Missing required fields',
        required: ['name', 'email', 'message']
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(contactData.email)) {
      return res.status(400).json({
        error: 'Invalid email format'
      });
    }

    // In a real application, you would:
    // 1. Save to database
    // 2. Send email notification
    // 3. Integrate with CRM
    
    console.log('Contact form submission:', contactData);

    res.status(201).json({
      message: 'Thank you for your message! We\'ll get back to you soon.',
      data: {
        name: contactData.name,
        email: contactData.email,
        submittedAt: new Date().toISOString()
      }
    });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      error: 'Failed to submit contact form'
    });
  }
});

// GET /api/contact - Get contact information
router.get('/', (req, res) => {
  res.json({
    contact: {
      email: 'hello@codeablestudio.com',
      phone: '+1 (555) 123-4567',
      address: '123 Innovation Drive, Tech City, TC 12345',
      social: {
        linkedin: 'https://linkedin.com/company/codeablestudio',
        twitter: 'https://twitter.com/codeablestudio',
        github: 'https://github.com/codeablestudio'
      }
    }
  });
});

export { router as contactRouter }; 