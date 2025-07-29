import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  PlusIcon,
  ChartBarIcon,
  ClockIcon,
  CheckCircleIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  CogIcon,
  BellIcon,
  UserCircleIcon,
  UserGroupIcon,
  ClipboardDocumentListIcon
} from '@heroicons/react/24/outline';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [showNotifications, setShowNotifications] = useState(false);

  // Mock data for demonstration
  const projects = [
    {
      id: 1,
      name: 'E-commerce Platform',
      status: 'In Progress',
      progress: 75,
      dueDate: '2024-02-15',
      budget: '$15,000',
      team: ['John Doe', 'Jane Smith'],
      priority: 'high'
    },
    {
      id: 2,
      name: 'Mobile App Development',
      status: 'Review',
      progress: 90,
      dueDate: '2024-01-30',
      budget: '$25,000',
      team: ['Mike Johnson', 'Sarah Wilson'],
      priority: 'medium'
    },
    {
      id: 3,
      name: 'Website Redesign',
      status: 'Completed',
      progress: 100,
      dueDate: '2024-01-20',
      budget: '$8,000',
      team: ['Alex Brown'],
      priority: 'low'
    }
  ];

  const notifications = [
    { id: 1, message: 'Project "E-commerce Platform" milestone completed', time: '2 hours ago', type: 'success' },
    { id: 2, message: 'New message from development team', time: '4 hours ago', type: 'info' },
    { id: 3, message: 'Budget update for Mobile App project', time: '1 day ago', type: 'warning' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'text-green-400 bg-green-400/10';
      case 'In Progress': return 'text-blue-400 bg-blue-400/10';
      case 'Review': return 'text-yellow-400 bg-yellow-400/10';
      case 'On Hold': return 'text-red-400 bg-red-400/10';
      default: return 'text-gray-400 bg-gray-400/10';
    }
  };

  const handlePayment = (invoiceId: string) => {
    // Redirect to payment page with invoice ID
    window.location.href = `/payment/${invoiceId}`;
  };



  return (
    <div className="min-h-screen relative overflow-hidden bg-gray-900">
      {/* Animated Code Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 text-green-400 text-xs font-mono animate-pulse">
            <div>const dashboard = {'{'}</div>
            <div className="ml-4">projects: [],</div>
            <div className="ml-4">analytics: {},</div>
            <div className="ml-4">notifications: []</div>
            <div>{'}'};</div>
          </div>
          
          <div className="absolute top-32 right-20 text-blue-400 text-xs font-mono animate-bounce">
            <div>function updateProject() {'{'}</div>
            <div className="ml-4">return api.put('/projects');</div>
            <div>{'}'}</div>
          </div>
          
          <div className="absolute bottom-32 left-1/4 text-purple-400 text-xs font-mono animate-pulse">
            <div>const metrics = {'{'}</div>
            <div className="ml-4">completed: 12,</div>
            <div className="ml-4">inProgress: 5,</div>
            <div className="ml-4">revenue: "$150K"</div>
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
                <Link to="/" className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-primary-800 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">CS</span>
                  </div>
                  <span className="text-lg font-bold text-white">Dashboard</span>
                </Link>
              </div>
              
              <div className="flex items-center space-x-4">
                {/* Notifications */}
                <div className="relative">
                  <button
                    onClick={() => setShowNotifications(!showNotifications)}
                    className="p-2 text-gray-300 hover:text-white transition-colors relative"
                  >
                    <BellIcon className="h-6 w-6" />
                    <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></span>
                  </button>
                  
                  {showNotifications && (
                    <div className="absolute right-0 mt-2 w-80 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 shadow-xl z-50">
                      <div className="p-4">
                        <h3 className="text-white font-semibold mb-3">Notifications</h3>
                        <div className="space-y-3">
                          {notifications.map((notification) => (
                            <div key={notification.id} className="flex items-start space-x-3 p-2 rounded-lg hover:bg-white/5">
                              <div className={`w-2 h-2 rounded-full mt-2 ${
                                notification.type === 'success' ? 'bg-green-400' :
                                notification.type === 'warning' ? 'bg-yellow-400' : 'bg-blue-400'
                              }`}></div>
                              <div className="flex-1">
                                <p className="text-gray-300 text-sm">{notification.message}</p>
                                <p className="text-gray-500 text-xs">{notification.time}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* User Menu */}
                <div className="flex items-center space-x-2">
                  <UserCircleIcon className="h-8 w-8 text-gray-300" />
                  <span className="text-gray-300 text-sm">John Client</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Dashboard Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Welcome back, John!</h1>
            <p className="text-gray-400">Here's what's happening with your projects today.</p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Active Projects</p>
                  <p className="text-2xl font-bold text-white">3</p>
                </div>
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <DocumentTextIcon className="h-6 w-6 text-blue-400" />
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Total Budget</p>
                  <p className="text-2xl font-bold text-white">$48K</p>
                </div>
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <ChartBarIcon className="h-6 w-6 text-green-400" />
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Completed</p>
                  <p className="text-2xl font-bold text-white">1</p>
                </div>
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <CheckCircleIcon className="h-6 w-6 text-purple-400" />
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Pending</p>
                  <p className="text-2xl font-bold text-white">2</p>
                </div>
                <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                  <ClockIcon className="h-6 w-6 text-yellow-400" />
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 cursor-pointer hover:bg-white/15 transition-colors" onClick={() => window.location.href = '/invoices'}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Invoices</p>
                  <p className="text-2xl font-bold text-white">2</p>
                  <p className="text-xs text-red-400 mt-1">1 pending</p>
                </div>
                <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
                  <svg className="h-6 w-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex space-x-1 bg-white/10 backdrop-blur-md rounded-lg p-1 mb-8">
            {[
              { id: 'overview', label: 'Overview', icon: ChartBarIcon },
              { id: 'projects', label: 'Projects', icon: DocumentTextIcon },
              { id: 'invoices', label: 'Invoices', icon: DocumentTextIcon },
              { id: 'messages', label: 'Messages', icon: ChatBubbleLeftRightIcon },
              { id: 'settings', label: 'Settings', icon: CogIcon }
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
                {/* Recent Projects */}
                <div className="lg:col-span-2">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                    <div className="p-6 border-b border-white/10">
                                             <div className="flex items-center justify-between">
                         <h2 className="text-xl font-semibold text-white">Recent Projects</h2>
                         <button 
                           onClick={() => setActiveTab('projects')}
                           className="text-primary-400 hover:text-primary-300 text-sm font-medium"
                         >
                           View All
                         </button>
                       </div>
                    </div>
                    <div className="p-6">
                      <div className="space-y-4">
                        {projects.slice(0, 3).map((project) => (
                          <div key={project.id} className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                            <div className="flex-1">
                              <div className="flex items-center space-x-3">
                                <h3 className="text-white font-medium">{project.name}</h3>
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                                  {project.status}
                                </span>
                              </div>
                              <div className="flex items-center space-x-4 mt-2 text-sm text-gray-400">
                                <span>Budget: {project.budget}</span>
                                <span>Due: {project.dueDate}</span>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="w-16 bg-gray-700 rounded-full h-2">
                                <div 
                                  className="bg-primary-500 h-2 rounded-full transition-all duration-300"
                                  style={{ width: `${project.progress}%` }}
                                ></div>
                              </div>
                              <span className="text-sm text-gray-400">{project.progress}%</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-6">
                    <h2 className="text-xl font-semibold text-white mb-4">Quick Actions</h2>
                    <div className="space-y-3">
                      <button className="w-full flex items-center space-x-3 p-3 bg-primary-600 hover:bg-primary-700 rounded-lg text-white transition-colors">
                        <PlusIcon className="h-5 w-5" />
                        <span>New Project</span>
                      </button>
                      <button className="w-full flex items-center space-x-3 p-3 bg-white/10 hover:bg-white/20 rounded-lg text-gray-300 transition-colors">
                        <ChatBubbleLeftRightIcon className="h-5 w-5" />
                        <span>Send Message</span>
                      </button>
                      <button className="w-full flex items-center space-x-3 p-3 bg-white/10 hover:bg-white/20 rounded-lg text-gray-300 transition-colors">
                        <DocumentTextIcon className="h-5 w-5" />
                        <span>View Reports</span>
                      </button>
                      <button className="w-full flex items-center space-x-3 p-3 bg-white/10 hover:bg-white/20 rounded-lg text-gray-300 transition-colors">
                        <UserGroupIcon className="h-5 w-5" />
                        <span>Hire a Team</span>
                      </button>
                      <button className="w-full flex items-center space-x-3 p-3 bg-white/10 hover:bg-white/20 rounded-lg text-gray-300 transition-colors">
                        <ClipboardDocumentListIcon className="h-5 w-5" />
                        <span>Add a Task</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'projects' && (
              <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                <div className="p-6 border-b border-white/10">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-white">All Projects</h2>
                    <button className="flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition-colors">
                      <PlusIcon className="h-4 w-4" />
                      <span>Add Project</span>
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-white/10">
                          <th className="text-left py-3 px-4 text-gray-400 font-medium">Project</th>
                          <th className="text-left py-3 px-4 text-gray-400 font-medium">Status</th>
                          <th className="text-left py-3 px-4 text-gray-400 font-medium">Progress</th>
                          <th className="text-left py-3 px-4 text-gray-400 font-medium">Budget</th>
                          <th className="text-left py-3 px-4 text-gray-400 font-medium">Due Date</th>
                          <th className="text-left py-3 px-4 text-gray-400 font-medium">Team</th>
                          <th className="text-left py-3 px-4 text-gray-400 font-medium">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {projects.map((project) => (
                          <tr key={project.id} className="border-b border-white/5 hover:bg-white/5">
                            <td className="py-4 px-4">
                              <div>
                                <div className="text-white font-medium">{project.name}</div>
                                <div className="text-sm text-gray-400">ID: #{project.id}</div>
                              </div>
                            </td>
                            <td className="py-4 px-4">
                              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                                {project.status}
                              </span>
                            </td>
                            <td className="py-4 px-4">
                              <div className="flex items-center space-x-2">
                                <div className="w-20 bg-gray-700 rounded-full h-2">
                                  <div 
                                    className="bg-primary-500 h-2 rounded-full transition-all duration-300"
                                    style={{ width: `${project.progress}%` }}
                                  ></div>
                                </div>
                                <span className="text-sm text-gray-400">{project.progress}%</span>
                              </div>
                            </td>
                            <td className="py-4 px-4 text-white">{project.budget}</td>
                            <td className="py-4 px-4 text-gray-300">{project.dueDate}</td>
                            <td className="py-4 px-4">
                              <div className="flex -space-x-2">
                                {project.team.map((member, index) => (
                                  <div key={index} className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white text-xs font-medium">
                                    {member.split(' ').map(n => n[0]).join('')}
                                  </div>
                                ))}
                              </div>
                            </td>
                                                         <td className="py-4 px-4">
                               <div className="flex items-center space-x-2">
                                 <Link to={`/project/${project.id}`} className="text-blue-400 hover:text-blue-300 text-sm">View</Link>
                                 <button className="text-gray-400 hover:text-gray-300 text-sm">Edit</button>
                               </div>
                             </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'invoices' && (
              <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                <div className="p-6 border-b border-white/10">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-white">Invoices</h2>
                    <button className="flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition-colors">
                      <PlusIcon className="h-4 w-4" />
                      <span>Generate Invoice</span>
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-white/10">
                          <th className="text-left py-3 px-4 text-gray-400 font-medium">Invoice #</th>
                          <th className="text-left py-3 px-4 text-gray-400 font-medium">Project</th>
                          <th className="text-left py-3 px-4 text-gray-400 font-medium">Amount</th>
                          <th className="text-left py-3 px-4 text-gray-400 font-medium">Status</th>
                          <th className="text-left py-3 px-4 text-gray-400 font-medium">Due Date</th>
                          <th className="text-left py-3 px-4 text-gray-400 font-medium">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          {
                            id: 'INV-001',
                            project: 'E-commerce Platform',
                            amount: '$5,000',
                            status: 'Pending',
                            dueDate: '2024-02-15',
                            isOverdue: false
                          },
                          {
                            id: 'INV-002',
                            project: 'Mobile App Development',
                            amount: '$8,500',
                            status: 'Paid',
                            dueDate: '2024-01-30',
                            isOverdue: false
                          },
                          {
                            id: 'INV-003',
                            project: 'Website Redesign',
                            amount: '$3,200',
                            status: 'Overdue',
                            dueDate: '2024-01-20',
                            isOverdue: true
                          }
                        ].map((invoice) => (
                          <tr key={invoice.id} className="border-b border-white/5 hover:bg-white/5">
                            <td className="py-4 px-4">
                              <div className="text-white font-medium">{invoice.id}</div>
                            </td>
                            <td className="py-4 px-4 text-gray-300">{invoice.project}</td>
                            <td className="py-4 px-4 text-white font-medium">{invoice.amount}</td>
                            <td className="py-4 px-4">
                              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                invoice.status === 'Paid' ? 'text-green-400 bg-green-400/10' :
                                invoice.status === 'Pending' ? 'text-yellow-400 bg-yellow-400/10' :
                                'text-red-400 bg-red-400/10'
                              }`}>
                                {invoice.status}
                              </span>
                            </td>
                            <td className="py-4 px-4">
                              <span className={`text-gray-300 ${invoice.isOverdue ? 'text-red-400' : ''}`}>
                                {invoice.dueDate}
                              </span>
                            </td>
                            <td className="py-4 px-4">
                              <div className="flex items-center space-x-2">
                                {invoice.status === 'Paid' ? (
                                  <button className="text-green-400 hover:text-green-300 text-sm">Download</button>
                                ) : (
                                  <button 
                                    onClick={() => handlePayment(invoice.id)}
                                    className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm transition-colors"
                                  >
                                    Pay Now
                                  </button>
                                )}
                                <button className="text-blue-400 hover:text-blue-300 text-sm">View</button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'messages' && (
              <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                <div className="p-6 border-b border-white/10">
                  <h2 className="text-xl font-semibold text-white">Messages</h2>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="p-4 bg-white/5 rounded-lg">
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center">
                          <span className="text-white font-medium">JD</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <h3 className="text-white font-medium">John Doe</h3>
                            <span className="text-gray-400 text-sm">2 hours ago</span>
                          </div>
                          <p className="text-gray-300 mt-1">The e-commerce platform milestone has been completed. Please review the latest updates.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-white/5 rounded-lg">
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                          <span className="text-white font-medium">SW</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <h3 className="text-white font-medium">Sarah Wilson</h3>
                            <span className="text-gray-400 text-sm">1 day ago</span>
                          </div>
                          <p className="text-gray-300 mt-1">Mobile app development is progressing well. We'll have a demo ready by next week.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                <div className="p-6 border-b border-white/10">
                  <h2 className="text-xl font-semibold text-white">Account Settings</h2>
                </div>
                <div className="p-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium text-white mb-4">Profile Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                          <input type="text" defaultValue="John Client" className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                          <input type="email" defaultValue="john@client.com" className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500" />
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium text-white mb-4">Notification Preferences</h3>
                      <div className="space-y-3">
                        <label className="flex items-center">
                          <input type="checkbox" defaultChecked className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded bg-white/10 border-white/20" />
                          <span className="ml-2 text-gray-300">Email notifications</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" defaultChecked className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded bg-white/10 border-white/20" />
                          <span className="ml-2 text-gray-300">Project updates</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded bg-white/10 border-white/20" />
                          <span className="ml-2 text-gray-300">Marketing emails</span>
                        </label>
                      </div>
                    </div>
                    
                    <div className="flex space-x-4">
                      <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg transition-colors">
                        Save Changes
                      </button>
                      <button className="bg-white/10 hover:bg-white/20 text-gray-300 px-6 py-2 rounded-lg transition-colors">
                        Cancel
                      </button>
                    </div>
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

export default Dashboard; 