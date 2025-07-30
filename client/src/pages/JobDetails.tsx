
import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  MapPinIcon,
  ClockIcon,
  CurrencyDollarIcon,
  BriefcaseIcon,
  AcademicCapIcon,
  CheckCircleIcon,
  StarIcon,
  ArrowLeftIcon
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const jobOpenings = [
    {
      id: 1,
      title: 'Senior Full-Stack Developer',
      department: 'engineering',
      location: 'remote',
      type: 'Full-time',
      experience: '5+ years',
      salary: '$120k - $180k',
      description: 'We are seeking a highly skilled Senior Full-Stack Developer to join our dynamic engineering team. In this role, you will be responsible for designing, developing, and maintaining our web applications, ensuring they are scalable, secure, and performant. You will work on both front-end and back-end development, contributing to all phases of the software development lifecycle.',
      responsibilities: [
        'Design and develop user-facing features using React and TypeScript.',
        'Build and maintain server-side logic with Node.js and Express.',
        'Collaborate with product managers and designers to translate requirements into technical solutions.',
        'Optimize applications for maximum speed and scalability.',
        'Implement security and data protection best practices.',
        'Write clean, maintainable, and well-documented code.'
      ],
      requirements: [
        '5+ years of professional experience in full-stack development.',
        'Strong proficiency in JavaScript, TypeScript, React, and Node.js.',
        'Experience with relational and NoSQL databases (e.g., PostgreSQL, MongoDB).',
        'Familiarity with cloud platforms such as AWS, Azure, or Google Cloud.',
        'Solid understanding of RESTful APIs and microservices architecture.',
        'Experience with containerization technologies like Docker and Kubernetes.',
        'Excellent problem-solving skills and attention to detail.'
      ],
      benefits: [
        'Competitive salary and performance-based bonuses.',
        'Comprehensive health, dental, and vision insurance.',
        'Generous paid time off and flexible work hours.',
        'Opportunities for professional growth and development.',
        'A collaborative and inclusive work environment.'
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
      description: 'We are looking for a talented UI/UX Designer to create amazing user experiences. The ideal candidate should have an eye for clean and artful design, possess superior UI/UX skills, and be able to translate high-level requirements into interaction flows and artifacts, and transform them into beautiful, intuitive, and functional user interfaces.',
      responsibilities: [
        'Collaborate with product management and engineering to define and implement innovative solutions for the product direction, visuals, and experience.',
        'Execute all visual design stages from concept to final hand-off to engineering.',
        'Conceptualize original ideas that bring simplicity and user-friendliness to complex design roadblocks.',
        'Create wireframes, storyboards, user flows, process flows, and site maps to effectively communicate interaction and design ideas.',
        'Conduct user research and evaluate user feedback.',
        'Establish and promote design guidelines, best practices, and standards.'
      ],
      requirements: [
        '3+ years of experience as a UI/UX Designer or similar role.',
        'A strong portfolio of design projects.',
        'Proficiency in Figma, Sketch, Adobe XD, or other visual design and wireframing tools.',
        'Excellent visual design skills with a sensitivity to user-system interaction.',
        'Ability to present your designs and sell your solutions to various stakeholders.',
        'Up-to-date with the latest UI trends, techniques, and technologies.'
      ],
      benefits: [
        'Competitive salary and benefits package.',
        'A creative and collaborative work environment.',
        'Opportunities for professional growth and development.',
        'Access to the latest design tools and technologies.',
        'Regular team-building events and activities.'
      ]
    },
    // Add other job details here...
];

const JobDetails = () => {
  const { id } = useParams();
  const job = jobOpenings.find(j => j.id.toString() === id);

  if (!job) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800">Job not found</h1>
          <p className="text-gray-600 mt-4">The job you are looking for does not exist.</p>
          <Link to="/careers" className="mt-8 inline-block bg-primary-600 text-white px-6 py-3 rounded-lg">
            Back to Careers
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8">
            <Link to="/careers" className="inline-flex items-center text-primary-600 hover:text-primary-700">
              <ArrowLeftIcon className="w-5 h-5 mr-2" />
              Back to all openings
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-6">
              <h1 className="text-4xl font-bold text-gray-900">{job.title}</h1>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-lg text-gray-600 mt-4">
                <div className="flex items-center">
                  <BriefcaseIcon className="w-5 h-5 mr-2" />
                  {job.department.charAt(0).toUpperCase() + job.department.slice(1)}
                </div>
                <div className="flex items-center">
                  <MapPinIcon className="w-5 h-5 mr-2" />
                  {job.location === 'remote' ? 'Remote' : job.location.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </div>
                <div className="flex items-center">
                  <ClockIcon className="w-5 h-5 mr-2" />
                  {job.type}
                </div>
                <div className="flex items-center">
                  <AcademicCapIcon className="w-5 h-5 mr-2" />
                  {job.experience}
                </div>
                <div className="flex items-center">
                  <CurrencyDollarIcon className="w-5 h-5 mr-2" />
                  {job.salary}
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="lead">{job.description}</p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Responsibilities</h2>
              <ul className="list-disc pl-6 space-y-2">
                {job.responsibilities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">Requirements</h2>
              <ul className="list-disc pl-6 space-y-2">
                {job.requirements.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">Benefits</h2>
              <ul className="list-disc pl-6 space-y-2">
                {job.benefits.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="mt-12 text-center">
              <Link
                to={`/apply/${job.id}`}
                className="inline-flex items-center bg-primary-600 text-white hover:bg-primary-700 font-semibold py-3 px-8 rounded-lg transition-colors text-lg"
              >
                Apply for this position
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default JobDetails;
