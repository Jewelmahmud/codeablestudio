import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  CheckCircleIcon,
  UserGroupIcon,
  TrophyIcon,
  HeartIcon
} from '@heroicons/react/24/outline';

const About = () => {
  const values = [
    {
      icon: <HeartIcon className="h-8 w-8" />,
      title: 'Passion for Excellence',
      description: 'We are passionate about delivering exceptional quality in everything we do.'
    },
    {
      icon: <UserGroupIcon className="h-8 w-8" />,
      title: 'Client-Centric Approach',
      description: 'Your success is our success. We work closely with you to achieve your goals.'
    },
    {
      icon: <TrophyIcon className="h-8 w-8" />,
      title: 'Innovation First',
      description: 'We stay ahead of the curve with cutting-edge technologies and methodologies.'
    }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      position: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
      bio: 'Experienced technology leader with 10+ years in software development and business strategy.'
    },
    {
      name: 'Michael Chen',
      position: 'CTO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      bio: 'Full-stack developer and architect with expertise in cloud technologies and scalable systems.'
    },
    {
      name: 'Emily Rodriguez',
      position: 'Lead Designer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      bio: 'Creative designer focused on user experience and modern interface design principles.'
    },
    {
      name: 'David Kim',
      position: 'Senior Developer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      bio: 'Backend specialist with deep knowledge in database design and API development.'
    }
  ];

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
              About CodeableStudio
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              We are a team of passionate developers, designers, and innovators dedicated to transforming businesses through technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-custom-dark mb-6">
                Our Mission
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                To empower businesses with innovative software solutions that drive growth, efficiency, and digital transformation.
              </p>
              <p className="text-gray-600 mb-8">
                Founded in 2019, CodeableStudio has been at the forefront of digital innovation, helping companies of all sizes navigate the complex world of software development. We believe that technology should work for you, not against you.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">25+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircleIcon className="h-6 w-6 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Proven track record of successful project delivery</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircleIcon className="h-6 w-6 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Expert team with diverse technical skills</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircleIcon className="h-6 w-6 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Modern development practices and technologies</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircleIcon className="h-6 w-6 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Dedicated support and maintenance services</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-custom-dark mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape our relationships with clients and partners.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card p-8 text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="text-primary-600">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-custom-dark mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
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
            <h2 className="text-3xl md:text-4xl font-bold text-custom-dark mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our talented team of professionals brings together diverse expertise to deliver exceptional results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card p-6 text-center"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-custom-dark mb-2">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-medium mb-4">
                  {member.position}
                </p>
                <p className="text-gray-600 text-sm">
                  {member.bio}
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
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your digital transformation goals.
            </p>
            <Link
              to="/contact"
              className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 inline-block"
            >
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About; 