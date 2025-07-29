import React, { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { 
  ArrowLeftIcon,
  CalendarIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  CheckCircleIcon,
  ClockIcon,
  ExclamationTriangleIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  LinkIcon,
  StarIcon,
  PaperAirplaneIcon,
  EyeIcon,
  EyeSlashIcon
} from '@heroicons/react/24/outline';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [showDevLinks, setShowDevLinks] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0);

  // Mock project data - in real app, fetch based on id
  const project = {
    id: id || '1',
    name: 'E-commerce Platform',
    status: 'In Progress',
    progress: 75,
    dueDate: '2024-02-15',
    budget: '$15,000',
    spent: '$11,250',
    team: [
      { name: 'John Doe', role: 'Lead Developer', avatar: 'JD' },
      { name: 'Jane Smith', role: 'UI/UX Designer', avatar: 'JS' }
    ],
    priority: 'high',
    description: 'A modern e-commerce platform with advanced features including payment processing, inventory management, and customer analytics.',
    milestones: [
      { id: 1, title: 'Design Phase', status: 'completed', progress: 100, dueDate: '2024-01-10' },
      { id: 2, title: 'Frontend Development', status: 'completed', progress: 100, dueDate: '2024-01-25' },
      { id: 3, title: 'Backend API', status: 'in-progress', progress: 80, dueDate: '2024-02-05' },
      { id: 4, title: 'Payment Integration', status: 'pending', progress: 0, dueDate: '2024-02-10' },
      { id: 5, title: 'Testing & QA', status: 'pending', progress: 0, dueDate: '2024-02-12' },
      { id: 6, title: 'Deployment', status: 'pending', progress: 0, dueDate: '2024-02-15' }
    ],
    devLinks: {
      staging: 'https://staging-ecommerce.codeablestudio.com',
      production: 'https://ecommerce.codeablestudio.com',
      github: 'https://github.com/codeablestudio/ecommerce-platform',
      figma: 'https://figma.com/file/ecommerce-design'
    },
    feedback: [
      { id: 1, user: 'John Client', message: 'The design looks great! Can we add more payment options?', rating: 5, date: '2024-01-28' },
      { id: 2, user: 'John Client', message: 'Navigation is intuitive. Looking forward to the final version.', rating: 4, date: '2024-01-25' }
    ],
    recentUpdates: [
      { id: 1, type: 'milestone', message: 'Backend API development reached 80% completion', date: '2024-01-30' },
      { id: 2, type: 'feedback', message: 'New feedback received from client', date: '2024-01-28' },
      { id: 3, type: 'update', message: 'Payment gateway integration started', date: '2024-01-27' }
    ]
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-400 bg-green-400/10';
      case 'in-progress': return 'text-blue-400 bg-blue-400/10';
      case 'pending': return 'text-gray-400 bg-gray-400/10';
      default: return 'text-gray-400 bg-gray-400/10';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-400 bg-red-400/10';
      case 'medium': return 'text-yellow-400 bg-yellow-400/10';
      case 'low': return 'text-green-400 bg-green-400/10';
      default: return 'text-gray-400 bg-gray-400/10';
    }
  };

  const handleSubmitFeedback = (e: React.FormEvent) => {
    e.preventDefault();
    if (feedback.trim() && rating > 0) {
      console.log('Feedback submitted:', { feedback, rating });
      setFeedback('');
      setRating(0);
      // In real app, send to API
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gray-900">
      {/* Animated Code Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 text-green-400 text-xs font-mono animate-pulse">
            <div>const project = {'{'}</div>
            <div className="ml-4">id: "{project.id}",</div>
            <div className="ml-4">progress: {project.progress}%,</div>
            <div className="ml-4">status: "{project.status}"</div>
            <div>{'}'};</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="bg-white/10 backdrop-blur-md border-b border-white/20 sticky top-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => navigate('/dashboard')}
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                >
                  <ArrowLeftIcon className="h-5 w-5" />
                  <span>Back to Dashboard</span>
                </button>
              </div>
              
              <div className="flex items-center space-x-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status.toLowerCase())}`}>
                  {project.status}
                </span>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getPriorityColor(project.priority)}`}>
                  {project.priority} Priority
                </span>
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Project Header */}
          <div className="mb-8">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">{project.name}</h1>
                <p className="text-gray-400 max-w-2xl">{project.description}</p>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setShowDevLinks(!showDevLinks)}
                  className="flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  <LinkIcon className="h-4 w-4" />
                  <span>Dev Links</span>
                </button>
              </div>
            </div>

            {/* Dev Links Dropdown */}
            {showDevLinks && (
              <div className="mt-4 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 p-4">
                <h3 className="text-white font-semibold mb-3">Development Links</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <a href={project.devLinks.staging} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 p-2 bg-white/5 rounded hover:bg-white/10 transition-colors">
                    <span className="text-blue-400">🌐</span>
                    <span className="text-gray-300">Staging Environment</span>
                  </a>
                  <a href={project.devLinks.production} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 p-2 bg-white/5 rounded hover:bg-white/10 transition-colors">
                    <span className="text-green-400">🚀</span>
                    <span className="text-gray-300">Production</span>
                  </a>
                  <a href={project.devLinks.github} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 p-2 bg-white/5 rounded hover:bg-white/10 transition-colors">
                    <span className="text-gray-400">📁</span>
                    <span className="text-gray-300">GitHub Repository</span>
                  </a>
                  <a href={project.devLinks.figma} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 p-2 bg-white/5 rounded hover:bg-white/10 transition-colors">
                    <span className="text-purple-400">🎨</span>
                    <span className="text-gray-300">Figma Design</span>
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Project Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Progress</p>
                  <p className="text-2xl font-bold text-white">{project.progress}%</p>
                </div>
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <CheckCircleIcon className="h-6 w-6 text-blue-400" />
                </div>
              </div>
              <div className="mt-3 w-full bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-primary-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Budget Used</p>
                  <p className="text-2xl font-bold text-white">{project.spent}</p>
                  <p className="text-sm text-gray-400">of {project.budget}</p>
                </div>
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <CurrencyDollarIcon className="h-6 w-6 text-green-400" />
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Due Date</p>
                  <p className="text-2xl font-bold text-white">{formatDate(project.dueDate)}</p>
                </div>
                <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                  <CalendarIcon className="h-6 w-6 text-yellow-400" />
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Team Size</p>
                  <p className="text-2xl font-bold text-white">{project.team.length}</p>
                </div>
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <UserGroupIcon className="h-6 w-6 text-purple-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex space-x-1 bg-white/10 backdrop-blur-md rounded-lg p-1 mb-8">
            {[
              { id: 'overview', label: 'Overview', icon: DocumentTextIcon },
              { id: 'milestones', label: 'Milestones', icon: CheckCircleIcon },
              { id: 'feedback', label: 'Feedback', icon: ChatBubbleLeftRightIcon },
              { id: 'updates', label: 'Updates', icon: ClockIcon }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <tab.icon className="h-4 w-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="space-y-8">
            {activeTab === 'overview' && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Team Section */}
                <div className="lg:col-span-2">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                    <div className="p-6 border-b border-white/10">
                      <h2 className="text-xl font-semibold text-white">Project Team</h2>
                    </div>
                    <div className="p-6">
                      <div className="space-y-4">
                        {project.team.map((member, index) => (
                          <div key={index} className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg">
                            <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                              <span className="text-white font-medium">{member.avatar}</span>
                            </div>
                            <div className="flex-1">
                              <h3 className="text-white font-medium">{member.name}</h3>
                              <p className="text-gray-400 text-sm">{member.role}</p>
                            </div>
                            <button className="text-primary-400 hover:text-primary-300 text-sm font-medium">
                              Contact
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recent Updates */}
                <div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-6">
                    <h2 className="text-xl font-semibold text-white mb-4">Recent Updates</h2>
                    <div className="space-y-3">
                      {project.recentUpdates.map((update) => (
                        <div key={update.id} className="flex items-start space-x-3 p-2 rounded-lg hover:bg-white/5">
                          <div className={`w-2 h-2 rounded-full mt-2 ${
                            update.type === 'milestone' ? 'bg-green-400' :
                            update.type === 'feedback' ? 'bg-blue-400' : 'bg-yellow-400'
                          }`}></div>
                          <div className="flex-1">
                            <p className="text-gray-300 text-sm">{update.message}</p>
                            <p className="text-gray-500 text-xs">{formatDate(update.date)}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'milestones' && (
              <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                <div className="p-6 border-b border-white/10">
                  <h2 className="text-xl font-semibold text-white">Project Milestones</h2>
                </div>
                <div className="p-6">
                  <div className="space-y-6">
                    {project.milestones.map((milestone) => (
                      <div key={milestone.id} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-white font-medium">{milestone.title}</h3>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(milestone.status)}`}>
                              {milestone.status.replace('-', ' ')}
                            </span>
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-gray-400">
                            <span>Due: {formatDate(milestone.dueDate)}</span>
                            <span>Progress: {milestone.progress}%</span>
                          </div>
                          <div className="mt-2 w-full bg-gray-700 rounded-full h-2">
                            <div 
                              className="bg-primary-500 h-2 rounded-full transition-all duration-300"
                              style={{ width: `${milestone.progress}%` }}
                            ></div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          {milestone.status === 'completed' && (
                            <CheckCircleIcon className="h-5 w-5 text-green-400" />
                          )}
                          {milestone.status === 'in-progress' && (
                            <ClockIcon className="h-5 w-5 text-blue-400" />
                          )}
                          {milestone.status === 'pending' && (
                            <ExclamationTriangleIcon className="h-5 w-5 text-gray-400" />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'feedback' && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Feedback List */}
                <div className="lg:col-span-2">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                    <div className="p-6 border-b border-white/10">
                      <h2 className="text-xl font-semibold text-white">Previous Feedback</h2>
                    </div>
                    <div className="p-6">
                      <div className="space-y-4">
                        {project.feedback.map((item) => (
                          <div key={item.id} className="p-4 bg-white/5 rounded-lg">
                            <div className="flex items-start justify-between mb-2">
                              <div className="flex items-center space-x-2">
                                <h3 className="text-white font-medium">{item.user}</h3>
                                <div className="flex items-center space-x-1">
                                  {[...Array(5)].map((_, i) => (
                                    <StarIcon 
                                      key={i} 
                                      className={`h-4 w-4 ${i < item.rating ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} 
                                    />
                                  ))}
                                </div>
                              </div>
                              <span className="text-gray-400 text-sm">{formatDate(item.date)}</span>
                            </div>
                            <p className="text-gray-300">{item.message}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Add Feedback */}
                <div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-6">
                    <h2 className="text-xl font-semibold text-white mb-4">Add Feedback</h2>
                    <form onSubmit={handleSubmitFeedback} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Rating</label>
                        <div className="flex items-center space-x-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button
                              key={star}
                              type="button"
                              onClick={() => setRating(star)}
                              className={`h-6 w-6 ${star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-400'}`}
                            >
                              <StarIcon />
                            </button>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                        <textarea
                          value={feedback}
                          onChange={(e) => setFeedback(e.target.value)}
                          rows={4}
                          className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
                          placeholder="Share your feedback about this project..."
                        />
                      </div>
                      
                      <button
                        type="submit"
                        disabled={!feedback.trim() || rating === 0}
                        className="w-full flex items-center justify-center space-x-2 bg-primary-600 hover:bg-primary-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg transition-colors"
                      >
                        <PaperAirplaneIcon className="h-4 w-4" />
                        <span>Send Feedback</span>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'updates' && (
              <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                <div className="p-6 border-b border-white/10">
                  <h2 className="text-xl font-semibold text-white">Project Updates</h2>
                </div>
                <div className="p-6">
                  <div className="space-y-6">
                    {project.recentUpdates.map((update) => (
                      <div key={update.id} className="flex items-start space-x-4 p-4 bg-white/5 rounded-lg">
                        <div className={`w-3 h-3 rounded-full mt-2 ${
                          update.type === 'milestone' ? 'bg-green-400' :
                          update.type === 'feedback' ? 'bg-blue-400' : 'bg-yellow-400'
                        }`}></div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              update.type === 'milestone' ? 'bg-green-400/10 text-green-400' :
                              update.type === 'feedback' ? 'bg-blue-400/10 text-blue-400' : 'bg-yellow-400/10 text-yellow-400'
                            }`}>
                              {update.type.charAt(0).toUpperCase() + update.type.slice(1)}
                            </span>
                            <span className="text-gray-400 text-sm">{formatDate(update.date)}</span>
                          </div>
                          <p className="text-gray-300">{update.message}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail; 