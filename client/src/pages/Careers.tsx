import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  MapPinIcon,
  ClockIcon,
  CurrencyDollarIcon,
  BriefcaseIcon,
  AcademicCapIcon,
  HeartIcon,
  UserGroupIcon,
  GlobeAltIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon,
  UsersIcon,
  LightBulbIcon,
  TrophyIcon,
  GiftIcon,
  CalendarIcon,
  ComputerDesktopIcon
} from '@heroicons/react/24/outline';

const Careers = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  const departments = [
    { id: 'all', name: 'All Departments' },
    { id: 'engineering', name: 'Engineering' },
    { id: 'design', name: 'Design' },
    { id: 'product', name: 'Product' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'sales', name: 'Sales' },
    { id: 'operations', name: 'Operations' }
  ];

  const locations = [
    { id: 'all', name: 'All Locations' },
    { id: 'remote', name: 'Remote' },
    { id: 'new-york', name: 'New York' },
    { id: 'san-francisco', name: 'San Francisco' },
    { id: 'london', name: 'London' },
    { id: 'berlin', name: 'Berlin' }
  ];

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior Full-Stack Developer',
      department: 'engineering',
      location: 'remote',
      type: 'Full-time',
      experience: '5+ years',
      salary: '$120k - $180k',
      description: 'We\'re looking for a Senior Full-Stack Developer to join our engineering team and help build scalable web applications.',
      requirements: [
        'Strong experience with React, Node.js, and TypeScript',
        'Experience with cloud platforms (AWS, Azure, or GCP)',
        'Knowledge of database design and optimization',
        'Experience with CI/CD pipelines and DevOps practices',
        'Strong problem-solving and communication skills'
      ],
      benefits: [
        'Competitive salary and equity',
        'Flexible remote work policy',
        'Health, dental, and vision insurance',
        'Professional development budget',
        'Unlimited PTO'
      ]
    },
    {
      id: 2,
      title: 'UI/UX Designer',
      department: 'design',
      location: 'new-york',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$90k - $130k',
      description: 'Join our design team to create beautiful, intuitive user experiences for our products.',
      requirements: [
        'Strong portfolio showcasing web and mobile design work',
        'Proficiency in Figma, Sketch, or Adobe Creative Suite',
        'Experience with user research and usability testing',
        'Knowledge of design systems and component libraries',
        'Understanding of accessibility principles'
      ],
      benefits: [
        'Competitive salary and equity',
        'Modern office in NYC',
        'Health, dental, and vision insurance',
        'Design conference attendance',
        'Latest design tools and equipment'
      ]
    },
    {
      id: 3,
      title: 'Product Manager',
      department: 'product',
      location: 'san-francisco',
      type: 'Full-time',
      experience: '4+ years',
      salary: '$130k - $180k',
      description: 'Lead product strategy and execution for our flagship products.',
      requirements: [
        'Experience in B2B SaaS product management',
        'Strong analytical and data-driven decision making',
        'Experience with agile development methodologies',
        'Excellent communication and stakeholder management',
        'Technical background or strong technical aptitude'
      ],
      benefits: [
        'Competitive salary and equity',
        'San Francisco office with great amenities',
        'Health, dental, and vision insurance',
        'Professional development opportunities',
        'Flexible work arrangements'
      ]
    },
    {
      id: 4,
      title: 'DevOps Engineer',
      department: 'engineering',
      location: 'remote',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$100k - $150k',
      description: 'Help us build and maintain robust, scalable infrastructure.',
      requirements: [
        'Experience with AWS, Docker, and Kubernetes',
        'Knowledge of CI/CD pipelines and automation',
        'Experience with monitoring and logging tools',
        'Understanding of security best practices',
        'Strong scripting skills (Python, Bash)'
      ],
      benefits: [
        'Competitive salary and equity',
        'Remote-first culture',
        'Health, dental, and vision insurance',
        'Home office setup allowance',
        'Professional certifications support'
      ]
    },
    {
      id: 5,
      title: 'Marketing Manager',
      department: 'marketing',
      location: 'london',
      type: 'Full-time',
      experience: '4+ years',
      salary: '£60k - £80k',
      description: 'Drive our marketing strategy and grow our brand presence globally.',
      requirements: [
        'Experience in B2B technology marketing',
        'Strong digital marketing skills',
        'Experience with marketing automation tools',
        'Data-driven approach to marketing',
        'Excellent written and verbal communication'
      ],
      benefits: [
        'Competitive salary and equity',
        'London office in tech hub',
        'Health insurance and pension',
        'Marketing conference attendance',
        'Flexible work arrangements'
      ]
    },
    {
      id: 6,
      title: 'Sales Development Representative',
      department: 'sales',
      location: 'berlin',
      type: 'Full-time',
      experience: '1+ years',
      salary: '€45k - €60k',
      description: 'Join our sales team and help grow our customer base in Europe.',
      requirements: [
        'Strong communication and interpersonal skills',
        'Experience in B2B sales or customer service',
        'Proficiency in German and English',
        'Goal-oriented and results-driven',
        'Willingness to learn and adapt'
      ],
      benefits: [
        'Competitive salary with commission',
        'Berlin office in startup district',
        'Health insurance and benefits',
        'Sales training and development',
        'Career growth opportunities'
      ]
    }
  ];

  const filteredJobs = jobOpenings.filter(job => {
    const departmentMatch = selectedDepartment === 'all' || job.department === selectedDepartment;
    const locationMatch = selectedLocation === 'all' || job.location === selectedLocation;
    return departmentMatch && locationMatch;
  });

  const benefits = [
    {
      icon: <HeartIcon className="w-8 h-8" />,
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision insurance for you and your family.'
    },
    {
      icon: <CalendarIcon className="w-8 h-8" />,
      title: 'Flexible Time Off',
      description: 'Unlimited PTO and flexible work arrangements to maintain work-life balance.'
    },
    {
      icon: <AcademicCapIcon className="w-8 h-8" />,
      title: 'Learning & Development',
      description: 'Annual budget for courses, conferences, and professional development.'
    },
    {
      icon: <ComputerDesktopIcon className="w-8 h-8" />,
      title: 'Home Office Setup',
      description: 'Budget for ergonomic furniture and the latest technology equipment.'
    },
    {
      icon: <GiftIcon className="w-8 h-8" />,
      title: 'Equity & Benefits',
      description: 'Competitive equity packages and comprehensive benefits package.'
    },
    {
      icon: <UsersIcon className="w-8 h-8" />,
      title: 'Team Events',
      description: 'Regular team building activities, happy hours, and company retreats.'
    }
  ];

  const values = [
    {
      icon: <LightBulbIcon className="w-12 h-12" />,
      title: 'Innovation',
      description: 'We encourage creative thinking and innovative solutions to complex problems.'
    },
    {
      icon: <UserGroupIcon className="w-12 h-12" />,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and cross-functional collaboration.'
    },
    {
      icon: <TrophyIcon className="w-12 h-12" />,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from code quality to customer service.'
    },
    {
      icon: <GlobeAltIcon className="w-12 h-12" />,
      title: 'Global Impact',
      description: 'We build solutions that make a positive impact on people worldwide.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Join Our Team
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Build the future with us. We're looking for passionate individuals who want to make a difference in the world through technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="#openings"
                className="inline-flex items-center bg-yellow-400 text-gray-900 hover:bg-yellow-300 font-semibold py-3 px-8 rounded-lg transition-all duration-200"
              >
                View Open Positions
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 font-semibold py-3 px-8 rounded-lg transition-all duration-200"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">50+</div>
              <div className="text-gray-600">Team Members</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">15+</div>
              <div className="text-gray-600">Countries</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">100+</div>
              <div className="text-gray-600">Projects Delivered</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">4.8</div>
              <div className="text-gray-600">Team Satisfaction</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-custom-dark mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape our company culture.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 text-primary-600">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-custom-dark mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-custom-dark mb-4">
              Why Work With Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer competitive benefits and a supportive environment to help you thrive.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 text-primary-600">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-custom-dark mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section id="openings" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-custom-dark mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find the perfect role that matches your skills and career goals.
            </p>
          </motion.div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              {departments.map(dept => (
                <option key={dept.id} value={dept.id}>{dept.name}</option>
              ))}
            </select>
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              {locations.map(loc => (
                <option key={loc.id} value={loc.id}>{loc.name}</option>
              ))}
            </select>
          </div>

          {/* Job Listings */}
          <div className="space-y-6">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-custom-dark mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <BriefcaseIcon className="w-4 h-4 mr-1" />
                        {job.department.charAt(0).toUpperCase() + job.department.slice(1)}
                      </div>
                      <div className="flex items-center">
                        <MapPinIcon className="w-4 h-4 mr-1" />
                        {job.location === 'remote' ? 'Remote' : job.location.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                      </div>
                      <div className="flex items-center">
                        <ClockIcon className="w-4 h-4 mr-1" />
                        {job.type}
                      </div>
                      <div className="flex items-center">
                        <AcademicCapIcon className="w-4 h-4 mr-1" />
                        {job.experience}
                      </div>
                      <div className="flex items-center">
                        <CurrencyDollarIcon className="w-4 h-4 mr-1" />
                        {job.salary}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 mt-4 lg:mt-0">
                    <Link
                      to={`/careers/${job.id}`}
                      className="inline-flex items-center bg-white text-primary-600 border border-primary-600 hover:bg-primary-50 font-semibold py-2 px-6 rounded-lg transition-colors"
                    >
                      View Details
                    </Link>
                    <Link
                      to={`/careers/${job.id}`}
                      className="inline-flex items-center bg-primary-600 text-white hover:bg-primary-700 font-semibold py-2 px-6 rounded-lg transition-colors"
                    >
                      Apply Now
                      <ArrowRightIcon className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{job.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-custom-dark mb-2">Requirements</h4>
                    <ul className="space-y-1">
                      {job.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600">
                          <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-custom-dark mb-2">Benefits</h4>
                    <ul className="space-y-1">
                      {job.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600">
                          <StarIcon className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="text-gray-500 text-lg mb-4">No positions found matching your criteria.</div>
              <button
                onClick={() => {
                  setSelectedDepartment('all');
                  setSelectedLocation('all');
                }}
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                Clear filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Don't See the Right Fit?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center bg-yellow-400 text-gray-900 hover:bg-yellow-300 font-semibold py-3 px-8 rounded-lg transition-all duration-200"
              >
                Send Resume
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 font-semibold py-3 px-8 rounded-lg transition-all duration-200"
              >
                Learn More About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Careers; 