import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  CodeBracketIcon, 
  DevicePhoneMobileIcon, 
  CpuChipIcon,
  RocketLaunchIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  StarIcon,
  UserGroupIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

const Home = () => {
  const features = [
    {
      icon: <CodeBracketIcon className="h-8 w-8" />,
      title: 'Custom Software Development',
      description: 'Tailored solutions built specifically for your business needs and workflows.'
    },
    {
      icon: <DevicePhoneMobileIcon className="h-8 w-8" />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.'
    },
    {
      icon: <CpuChipIcon className="h-8 w-8" />,
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions that automate processes and provide insights.'
    },
    {
      icon: <RocketLaunchIcon className="h-8 w-8" />,
      title: 'Digital Transformation',
      description: 'Complete digital transformation to modernize your business operations.'
    }
  ];

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '25+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '99%', label: 'Client Satisfaction' }
  ];

  const benefits = [
    'Scalable and maintainable code architecture',
    'Modern tech stack and best practices',
    'Agile development methodology',
    '24/7 support and maintenance',
    'Security-first approach',
    'Performance optimization'
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      content: 'CodeableStudio transformed our business with a custom CRM solution. The team was professional, responsive, and delivered beyond our expectations.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Michael Chen',
      role: 'CTO, InnovateCorp',
      content: 'Working with CodeableStudio was a game-changer. Their expertise in AI and machine learning helped us automate 70% of our manual processes.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Product Manager, GrowthCo',
      content: 'The mobile app they developed for us exceeded all expectations. User engagement increased by 300% within the first month of launch.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
    }
  ];

  const technologies = [
    { name: 'React', category: 'Frontend', icon: '⚛️' },
    { name: 'Node.js', category: 'Backend', icon: '🟢' },
    { name: 'Python', category: 'Backend', icon: '🐍' },
    { name: 'TypeScript', category: 'Language', icon: '📘' },
    { name: 'AWS', category: 'Cloud', icon: '☁️' },
    { name: 'Docker', category: 'DevOps', icon: '🐳' },
    { name: 'MongoDB', category: 'Database', icon: '🍃' },
    { name: 'PostgreSQL', category: 'Database', icon: '🐘' },
    { name: 'Flutter', category: 'Mobile', icon: '📱' },
    { name: 'TensorFlow', category: 'AI/ML', icon: '🧠' },
    { name: 'Kubernetes', category: 'DevOps', icon: '⚓' },
    { name: 'GraphQL', category: 'API', icon: '🔗' }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your requirements, define project scope, and create a detailed roadmap.',
      icon: <ChatBubbleLeftRightIcon className="h-8 w-8" />
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      description: 'Our designers create intuitive user interfaces and interactive prototypes.',
      icon: <SparklesIcon className="h-8 w-8" />
    },
    {
      step: '03',
      title: 'Development',
      description: 'Expert developers build your solution using modern technologies and best practices.',
      icon: <CodeBracketIcon className="h-8 w-8" />
    },
    {
      step: '04',
      title: 'Testing & Quality Assurance',
      description: 'Rigorous testing ensures your solution is bug-free and performs optimally.',
      icon: <ShieldCheckIcon className="h-8 w-8" />
    },
    {
      step: '05',
      title: 'Deployment & Launch',
      description: 'We deploy your solution and provide comprehensive launch support.',
      icon: <RocketLaunchIcon className="h-8 w-8" />
    },
    {
      step: '06',
      title: 'Support & Maintenance',
      description: 'Ongoing support, updates, and maintenance to keep your solution running smoothly.',
      icon: <ClockIcon className="h-8 w-8" />
    }
  ];

  const teamMembers = [
    {
      name: 'Alex Thompson',
      role: 'Lead Software Architect',
      expertise: 'Full-Stack Development, System Design',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face'
    },
    {
      name: 'Maria Garcia',
      role: 'Senior Frontend Developer',
      expertise: 'React, TypeScript, UI/UX',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face'
    },
    {
      name: 'David Kim',
      role: 'Backend Engineer',
      expertise: 'Node.js, Python, Database Design',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face'
    },
    {
      name: 'Lisa Wang',
      role: 'AI/ML Specialist',
      expertise: 'Machine Learning, Data Science',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face'
    }
  ];

  const blogPosts = [
    {
      title: 'The Future of AI in Software Development',
      excerpt: 'Discover how artificial intelligence is revolutionizing the way we build and deploy software applications.',
      category: 'Technology',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop'
    },
    {
      title: 'Building Scalable Microservices Architecture',
      excerpt: 'Learn the best practices for designing and implementing microservices that can scale with your business.',
      category: 'Architecture',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop'
    },
    {
      title: 'React Performance Optimization Techniques',
      excerpt: 'Explore advanced techniques to optimize React applications for better performance and user experience.',
      category: 'Frontend',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Decorative SVG Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating Code Blocks */}
          <svg className="absolute top-20 left-10 w-32 h-32 opacity-10 animate-pulse" viewBox="0 0 100 100" fill="none">
            <rect x="10" y="10" width="80" height="80" rx="8" stroke="white" strokeWidth="2" fill="none"/>
            <rect x="20" y="25" width="40" height="3" fill="white" opacity="0.6"/>
            <rect x="20" y="35" width="30" height="3" fill="white" opacity="0.4"/>
            <rect x="20" y="45" width="50" height="3" fill="white" opacity="0.6"/>
            <rect x="20" y="55" width="35" height="3" fill="white" opacity="0.4"/>
          </svg>
          
          <svg className="absolute top-40 right-20 w-24 h-24 opacity-10 animate-bounce" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="2" fill="none"/>
            <circle cx="50" cy="50" r="25" stroke="white" strokeWidth="1" fill="none"/>
            <circle cx="50" cy="50" r="10" fill="white" opacity="0.6"/>
          </svg>
          
          {/* Circuit Board Pattern */}
          <svg className="absolute bottom-20 left-1/4 w-48 h-32 opacity-5" viewBox="0 0 200 150" fill="none">
            <path d="M10 20 L50 20 L50 40 L90 40 L90 60 L130 60 L130 80 L170 80 L170 100 L190 100" stroke="white" strokeWidth="2"/>
            <path d="M10 60 L30 60 L30 80 L70 80 L70 100 L110 100 L110 120 L150 120" stroke="white" strokeWidth="2"/>
            <circle cx="50" cy="20" r="3" fill="white"/>
            <circle cx="90" cy="40" r="3" fill="white"/>
            <circle cx="130" cy="60" r="3" fill="white"/>
            <circle cx="170" cy="80" r="3" fill="white"/>
            <circle cx="30" cy="60" r="3" fill="white"/>
            <circle cx="70" cy="80" r="3" fill="white"/>
            <circle cx="110" cy="100" r="3" fill="white"/>
          </svg>
          
          {/* Abstract Tech Shapes */}
          <svg className="absolute top-1/2 right-10 w-40 h-40 opacity-5" viewBox="0 0 200 200" fill="none">
            <polygon points="100,20 180,80 180,120 100,180 20,120 20,80" stroke="white" strokeWidth="2" fill="none"/>
            <polygon points="100,40 160,80 160,120 100,160 40,120 40,80" stroke="white" strokeWidth="1" fill="none"/>
            <circle cx="100" cy="100" r="20" fill="white" opacity="0.3"/>
          </svg>
          
                     {/* Binary Code Rain Effect */}
           <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
             {[...Array(20)].map((_, i) => (
               <div
                 key={i}
                 className="absolute text-white opacity-10 text-xs font-mono animate-pulse"
                 style={{
                   left: `${Math.random() * 100}%`,
                   top: `${Math.random() * 100}%`,
                   animationDelay: `${Math.random() * 3}s`,
                   animationDuration: `${2 + Math.random() * 3}s`
                 }}
               >
                 {Math.random() > 0.5 ? '1' : '0'}
               </div>
             ))}
           </div>
           
           {/* Floating Code Snippets */}
           <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
             {/* JavaScript/React Code */}
             <div className="absolute top-32 right-32 w-64 h-48 opacity-5 animate-pulse">
               <div className="bg-black/20 backdrop-blur-sm rounded-lg p-4 font-mono text-xs text-white">
                 <div className="text-yellow-400 mb-2">// React Component</div>
                 <div className="text-blue-400">function</div>
                 <div className="text-white">App() {'{'}</div>
                 <div className="text-blue-400 ml-4">return</div>
                 <div className="text-white ml-4">{'<'}<span className="text-green-400">div</span>{'>'}</div>
                 <div className="text-white ml-8">{'<'}<span className="text-green-400">h1</span>{'>'}</div>
                 <div className="text-yellow-300 ml-12">Hello World</div>
                 <div className="text-white ml-8">{'</'}<span className="text-green-400">h1</span>{'>'}</div>
                 <div className="text-white ml-4">{'</'}<span className="text-green-400">div</span>{'>'}</div>
                 <div className="text-white">{'}'}</div>
               </div>
             </div>
             
             {/* Python Code */}
             <div className="absolute bottom-40 left-20 w-56 h-40 opacity-5 animate-pulse" style={{animationDelay: '1s'}}>
               <div className="bg-black/20 backdrop-blur-sm rounded-lg p-4 font-mono text-xs text-white">
                 <div className="text-blue-400">def</div>
                 <div className="text-white">calculate_sum(a, b):</div>
                 <div className="text-blue-400 ml-4">return</div>
                 <div className="text-white ml-4">a + b</div>
                 <div className="text-gray-400 mt-2"># Main execution</div>
                 <div className="text-white">result = calculate_sum(5, 3)</div>
                 <div className="text-blue-400">print</div>
                 <div className="text-white">(result)</div>
               </div>
             </div>
             
             {/* HTML/CSS Code */}
             <div className="absolute top-1/2 left-1/3 w-60 h-36 opacity-5 animate-pulse" style={{animationDelay: '2s'}}>
               <div className="bg-black/20 backdrop-blur-sm rounded-lg p-4 font-mono text-xs text-white">
                 <div className="text-blue-400">{'<'}<span className="text-green-400">style</span>{'>'}</div>
                 <div className="text-white">.container {'{'}</div>
                 <div className="text-blue-400 ml-4">display:</div>
                 <div className="text-yellow-300 ml-4">flex;</div>
                 <div className="text-blue-400 ml-4">justify-content:</div>
                 <div className="text-yellow-300 ml-4">center;</div>
                 <div className="text-white">{'}'}</div>
                 <div className="text-blue-400">{'</'}<span className="text-green-400">style</span>{'>'}</div>
               </div>
             </div>
             
             {/* TypeScript Code */}
             <div className="absolute bottom-20 right-1/4 w-52 h-44 opacity-5 animate-pulse" style={{animationDelay: '0.5s'}}>
               <div className="bg-black/20 backdrop-blur-sm rounded-lg p-4 font-mono text-xs text-white">
                 <div className="text-blue-400">interface</div>
                 <div className="text-white">User {'{'}</div>
                 <div className="text-blue-400 ml-4">id:</div>
                 <div className="text-white ml-4">number;</div>
                 <div className="text-blue-400 ml-4">name:</div>
                 <div className="text-white ml-4">string;</div>
                 <div className="text-blue-400 ml-4">email:</div>
                 <div className="text-white ml-4">string;</div>
                 <div className="text-white">{'}'}</div>
                 <div className="text-gray-400 mt-2">const user: User = {'{'}</div>
                 <div className="text-blue-400 ml-4">id:</div>
                 <div className="text-white ml-4">1,</div>
                 <div className="text-blue-400 ml-4">name:</div>
                 <div className="text-yellow-300 ml-4">"John"</div>
                 <div className="text-white">{'}'}</div>
               </div>
             </div>
             
             {/* SQL Code */}
             <div className="absolute top-1/4 left-1/2 w-48 h-32 opacity-5 animate-pulse" style={{animationDelay: '1.5s'}}>
               <div className="bg-black/20 backdrop-blur-sm rounded-lg p-4 font-mono text-xs text-white">
                 <div className="text-blue-400">SELECT</div>
                 <div className="text-white">name, email</div>
                 <div className="text-blue-400">FROM</div>
                 <div className="text-white">users</div>
                 <div className="text-blue-400">WHERE</div>
                 <div className="text-white">active = true</div>
                 <div className="text-blue-400">ORDER BY</div>
                 <div className="text-white">created_at DESC;</div>
               </div>
             </div>
           </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-48">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Building the Future of
                <span className="text-yellow-400"> Digital Innovation</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                We transform ideas into powerful software solutions that drive business growth and digital success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600 text-center"
                >
                  Start Your Project
                </Link>
                <Link
                  to="/projects"
                  className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600 text-center"
                >
                  View Our Work
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Additional Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-32 h-32 opacity-10">
                <svg viewBox="0 0 100 100" fill="none">
                  <path d="M20 20 L80 20 L80 80 L20 80 Z" stroke="white" strokeWidth="2" fill="none"/>
                  <path d="M30 30 L70 30 L70 70 L30 70 Z" stroke="white" strokeWidth="1" fill="none"/>
                  <circle cx="50" cy="50" r="15" fill="white" opacity="0.3"/>
                </svg>
              </div>
              
              <div className="absolute -bottom-8 -left-8 w-24 h-24 opacity-10">
                <svg viewBox="0 0 100 100" fill="none">
                  <polygon points="50,10 90,30 90,70 50,90 10,70 10,30" stroke="white" strokeWidth="2" fill="none"/>
                  <polygon points="50,25 75,40 75,65 50,80 25,65 25,40" stroke="white" strokeWidth="1" fill="none"/>
                </svg>
              </div>
              
              <div className="relative z-10">
                <img 
                  src="/images/hero_illustration.svg" 
                  alt="Hero Illustration" 
                  className="w-full h-auto max-w-lg mx-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive software development services to help your business thrive in the digital age.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card p-6 text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-primary-600">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose CodeableStudio?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We combine technical expertise with business acumen to deliver solutions that not only work flawlessly but also drive real business value.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircleIcon className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="text-primary-100 mb-6">
                  Let's discuss your project requirements and create a custom solution that fits your needs.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-all duration-200"
                >
                  Schedule a Call
                  <ArrowRightIcon className="h-5 w-5 ml-2" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card p-6 bg-white"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Technology Stack
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use cutting-edge technologies to build robust, scalable, and future-proof solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="text-center p-4 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="text-3xl mb-2">{tech.icon}</div>
                <h3 className="font-semibold text-gray-900 text-sm">{tech.name}</h3>
                <p className="text-xs text-gray-500">{tech.category}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process Section */}
      <section className="py-20 bg-gray-50">
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
              We follow a proven, agile methodology that ensures quality, transparency, and timely delivery.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card p-6 bg-white relative"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {step.step}
                </div>
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-primary-600">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our talented team of developers, designers, and strategists work together to bring your vision to life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                    <UserGroupIcon className="h-4 w-4 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-primary-600 font-medium mb-2">{member.role}</p>
                <p className="text-sm text-gray-600">{member.expertise}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog/News Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest Insights & News
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest trends, technologies, and insights from our team.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card bg-white overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-primary-600">{post.category}</span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link
                    to="/blog"
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                  >
                    Read More
                    <ArrowRightIcon className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link
              to="/blog"
              className="inline-flex items-center bg-primary-600 text-white hover:bg-primary-700 font-semibold py-3 px-8 rounded-lg transition-all duration-200"
            >
              <DocumentTextIcon className="h-5 w-5 mr-2" />
              View All Articles
            </Link>
          </motion.div>
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Let's build something amazing together. Get in touch with us today and take the first step towards digital transformation.
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

export default Home; 