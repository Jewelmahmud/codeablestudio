import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isTechnologiesOpen, setIsTechnologiesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const technologies = {
    frontend: [
      { 
        name: 'React', 
        description: 'Modern UI development', 
                 icon: <img src="/images/icons/react.svg" alt="React" className="w-6 h-6" />
      },
      { 
        name: 'Vue.js', 
        description: 'Progressive framework', 
                 icon: (
           <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
             <path d="M24,1.61H14.06L12,5.16 9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z"/>
           </svg>
         )
      },
             { 
         name: 'Angular', 
         description: 'Enterprise solutions', 
         icon: <img src="/images/icons/angular.svg" alt="Angular" className="w-6 h-6" />
       },
       { 
         name: 'Next.js', 
         description: 'Full-stack React', 
         icon: <img src="/images/icons/nextjs.svg" alt="Next.js" className="w-6 h-6" />
       },
       { 
         name: 'TypeScript', 
         description: 'Type-safe JavaScript', 
         icon: <img src="/images/icons/TypeScript.svg" alt="TypeScript" className="w-6 h-6" />
       },
       { 
         name: 'Tailwind CSS', 
         description: 'Utility-first CSS', 
         icon: <img src="/images/icons/Tailwind CSS.svg" alt="Tailwind CSS" className="w-6 h-6" />
       },
    ],
    backend: [
             { 
         name: 'Node.js', 
         description: 'JavaScript runtime', 
         icon: <img src="/images/icons/Node.js.svg" alt="Node.js" className="w-6 h-6" />
       },
       { 
         name: 'Python', 
         description: 'Versatile programming', 
         icon: <img src="/images/icons/python.svg" alt="Python" className="w-6 h-6" />
       },
       { 
         name: 'Java', 
         description: 'Enterprise applications', 
         icon: <img src="/images/icons/java.svg" alt="Java" className="w-6 h-6" />
       },
       { 
         name: 'PHP', 
         description: 'Web development', 
         icon: <img src="/images/icons/php.svg" alt="PHP" className="w-6 h-6" />
       },
       { 
         name: 'Go', 
         description: 'High-performance', 
         icon: <img src="/images/icons/go.svg" alt="Go" className="w-6 h-6" />
       },
       { 
         name: 'C#', 
         description: 'Microsoft ecosystem', 
         icon: <img src="/images/icons/c-sharp.svg" alt="C#" className="w-6 h-6" />
       },
    ],
    mobile: [
      { 
        name: 'React Native', 
        description: 'Cross-platform mobile', 
        icon: <img src="/images/icons/react.svg" alt="React Native" className="w-5 h-5" />
      },
      { 
        name: 'Flutter', 
        description: 'Google UI framework', 
        icon: <img src="/images/icons/flutter.svg" alt="Flutter" className="w-5 h-5" />
      },
      { 
        name: 'Swift', 
        description: 'iOS development', 
        icon: <img src="/images/icons/swift.svg" alt="Swift" className="w-5 h-5" />
      },
      { 
        name: 'Kotlin', 
        description: 'Android development', 
        icon: <img src="/images/icons/kotlin.svg" alt="Kotlin" className="w-5 h-5" />
      },
      { 
        name: 'Ionic', 
        description: 'Hybrid mobile apps', 
        icon: <img src="/images/icons/ionic.svg" alt="Ionic" className="w-5 h-5" />
      },
      { 
        name: 'Xamarin', 
        description: 'Microsoft mobile', 
        icon: <img src="/images/icons/xamarin.svg" alt="Xamarin" className="w-5 h-5" />
      },
    ],
    desktop: [
      { 
        name: 'Electron', 
        description: 'Cross-platform desktop', 
        icon: <img src="/images/icons/electron.svg" alt="Electron" className="w-5 h-5" />
      },
      { 
        name: 'Tauri', 
        description: 'Modern desktop apps', 
        icon: <img src="/images/icons/tauri.svg" alt="Tauri" className="w-5 h-5" />
      },
      { 
        name: 'Qt', 
        description: 'Native desktop UI', 
        icon: <img src="/images/icons/qt.svg" alt="Qt" className="w-5 h-5" />
      },
      { 
        name: 'WPF', 
        description: 'Windows desktop', 
        icon: <img src="/images/icons/wpf.svg" alt="WPF" className="w-5 h-5" />
      },
      { 
        name: 'Cocoa', 
        description: 'macOS development', 
        icon: <img src="/images/icons/cocoa.svg" alt="Cocoa" className="w-5 h-5" />
      },
      { 
        name: 'GTK', 
        description: 'Linux desktop', 
        icon: <img src="/images/icons/gtk.svg" alt="GTK" className="w-5 h-5" />
      },
    ],
    database: [
      { 
        name: 'PostgreSQL', 
        description: 'Advanced open source', 
        icon: <img src="/images/icons/postgresql.svg" alt="PostgreSQL" className="w-5 h-5" />
      },
      { 
        name: 'MongoDB', 
        description: 'NoSQL database', 
        icon: <img src="/images/icons/mongodb.svg" alt="MongoDB" className="w-5 h-5" />
      },
      { 
        name: 'MySQL', 
        description: 'Reliable database', 
        icon: <img src="/images/icons/mysql.svg" alt="MySQL" className="w-5 h-5" />
      },
      { 
        name: 'Redis', 
        description: 'In-memory cache', 
        icon: <img src="/images/icons/redis.svg" alt="Redis" className="w-5 h-5" />
      },
      { 
        name: 'Firebase', 
        description: 'Google platform', 
        icon: <img src="/images/icons/firebase.svg" alt="Firebase" className="w-5 h-5" />
      },
      { 
        name: 'Supabase', 
        description: 'Open source Firebase', 
        icon: <img src="/images/icons/supabase.svg" alt="Supabase" className="w-5 h-5" />
      },
    ],
    cloud: [
      { 
        name: 'AWS', 
        description: 'Amazon Web Services', 
        icon: <img src="/images/icons/aws.svg" alt="AWS" className="w-5 h-5" />
      },
      { 
        name: 'Azure', 
        description: 'Microsoft Cloud', 
        icon: <img src="/images/icons/azure.svg" alt="Azure" className="w-5 h-5" />
      },
      { 
        name: 'Google Cloud', 
        description: 'Google platform', 
        icon: <img src="/images/icons/google-cloud.svg" alt="Google Cloud" className="w-5 h-5" />
      },
      { 
        name: 'Docker', 
        description: 'Containerization', 
        icon: <img src="/images/icons/docker.svg" alt="Docker" className="w-5 h-5" />
      },
      { 
        name: 'Kubernetes', 
        description: 'Container orchestration', 
        icon: <img src="/images/icons/kubernetes.svg" alt="Kubernetes" className="w-5 h-5" />
      },
      { 
        name: 'Vercel', 
        description: 'Deployment platform', 
        icon: <img src="/images/icons/vercel.svg" alt="Vercel" className="w-5 h-5" />
      },
    ],
    ai: [
      { 
        name: 'TensorFlow', 
        description: 'Machine learning', 
        icon: <img src="/images/icons/tensorflow.svg" alt="TensorFlow" className="w-5 h-5" />
      },
      { 
        name: 'PyTorch', 
        description: 'Deep learning', 
        icon: <img src="/images/icons/pytorch.svg" alt="PyTorch" className="w-5 h-5" />
      },
      { 
        name: 'OpenAI', 
        description: 'AI models & APIs', 
        icon: <img src="/images/icons/openai.svg" alt="OpenAI" className="w-5 h-5" />
      },
      { 
        name: 'Hugging Face', 
        description: 'NLP & transformers', 
        icon: <img src="/images/icons/hugging-face.svg" alt="Hugging Face" className="w-5 h-5" />
      },
      { 
        name: 'Scikit-learn', 
        description: 'Machine learning', 
        icon: <img src="/images/icons/scikit_learn.svg" alt="Scikit-learn" className="w-5 h-5" />
      },
      { 
        name: 'LangChain', 
        description: 'LLM applications', 
        icon: <img src="/images/icons/langchain.svg" alt="LangChain" className="w-5 h-5" />
      },
    ],
    crypto: [
      { 
        name: 'Solidity', 
        description: 'Smart contracts', 
        icon: <img src="/images/icons/solidity.svg" alt="Solidity" className="w-5 h-5" />
      },
      { 
        name: 'Web3.js', 
        description: 'Ethereum library', 
        icon: <img src="/images/icons/Web3js.svg" alt="Web3.js" className="w-5 h-5" />
      },
      { 
        name: 'Hardhat', 
        description: 'Development framework', 
        icon: <img src="/images/icons/Hardhat.svg" alt="Hardhat" className="w-5 h-5" />
      },
      { 
        name: 'Truffle', 
        description: 'Smart contract dev', 
        icon: <img src="/images/icons/Truffle_Suite.svg" alt="Truffle" className="w-5 h-5" />
      },
      { 
        name: 'IPFS', 
        description: 'Decentralized storage', 
        icon: <img src="/images/icons/ipfs.svg" alt="IPFS" className="w-5 h-5" />
      },
      { 
        name: 'Chainlink', 
        description: 'Oracle networks', 
        icon: <img src="/images/icons/chainlink_link.svg" alt="Chainlink" className="w-5 h-5" />
      },
    ],
  };

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
                     {/* Logo */}
           <Link to="/" className="flex items-center space-x-2">
             <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
               isScrolled 
                 ? 'bg-gradient-to-br from-primary-600 to-primary-800' 
                 : 'bg-white'
             }`}>
               <span className={`font-bold text-xl transition-colors duration-300 ${
                 isScrolled ? 'text-white' : 'text-primary-600'
               }`}>CS</span>
             </div>
             <span className={`text-xl font-bold transition-colors duration-200 ${
               isScrolled ? 'text-gray-900' : 'text-white'
             }`}>Codeable Studio</span>
           </Link>

                     {/* Desktop Navigation */}
           <div className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-primary-600'
                    : isScrolled 
                      ? 'text-gray-700 hover:text-primary-600' 
                      : 'text-white hover:text-primary-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
                         {/* Technologies Dropdown */}
             <div 
               className="relative"
               onMouseEnter={() => setIsTechnologiesOpen(true)}
               onMouseLeave={() => setIsTechnologiesOpen(false)}
             >
               <button
                 className={`flex items-center text-sm font-medium transition-colors duration-200 ${
                   isScrolled 
                     ? 'text-gray-700 hover:text-primary-600' 
                     : 'text-white hover:text-primary-600'
                 }`}
               >
                 Technologies
                 <ChevronDownIcon className="ml-1 h-4 w-4" />
               </button>
               
               {/* Invisible bridge to prevent mouse leave */}
               {isTechnologiesOpen && (
                 <div className="absolute top-full left-0 w-full h-6 bg-transparent"></div>
               )}
               
                              {/* Mega Menu */}
                                       {isTechnologiesOpen && (
                          <div className="absolute top-full left-0 w-screen max-w-6xl bg-white/95 backdrop-blur-md shadow-xl border border-gray-200 rounded-lg p-6 mt-6"
                            style={{ left: '50%', transform: 'translateX(-50%)' }}
                          >
                   <div className="grid grid-cols-8 gap-6">
                    {/* Frontend */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <span className="mr-2">🎨</span>
                        Frontend
                      </h3>
                      <div className="space-y-3">
                                                 {technologies.frontend.map((tech) => (
                           <div key={tech.name} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                             <span className="w-8 h-8 flex items-center justify-center">{tech.icon}</span>
                             <div>
                               <div className="font-medium text-gray-900">{tech.name}</div>
                               <div className="text-sm text-gray-600">{tech.description}</div>
                             </div>
                           </div>
                         ))}
                      </div>
                    </div>
                    
                                         {/* Backend */}
                     <div>
                       <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                         <span className="mr-2">⚙️</span>
                         Backend
                       </h3>
                       <div className="space-y-3">
                                                   {technologies.backend.map((tech) => (
                            <div key={tech.name} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                              <span className="w-8 h-8 flex items-center justify-center">{tech.icon}</span>
                              <div>
                                <div className="font-medium text-gray-900">{tech.name}</div>
                                <div className="text-sm text-gray-600">{tech.description}</div>
                              </div>
                            </div>
                          ))}
                       </div>
                     </div>
                     
                     {/* Mobile */}
                     <div>
                       <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                         <span className="mr-2">📱</span>
                         Mobile
                       </h3>
                       <div className="space-y-3">
                                                   {technologies.mobile.map((tech) => (
                            <div key={tech.name} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                              <span className="w-8 h-8 flex items-center justify-center">{tech.icon}</span>
                              <div>
                                <div className="font-medium text-gray-900">{tech.name}</div>
                                <div className="text-sm text-gray-600">{tech.description}</div>
                              </div>
                            </div>
                          ))}
                       </div>
                     </div>
                     
                     {/* Desktop */}
                     <div>
                       <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                         <span className="mr-2">🖥️</span>
                         Desktop
                       </h3>
                       <div className="space-y-3">
                                                   {technologies.desktop.map((tech) => (
                            <div key={tech.name} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                              <span className="w-8 h-8 flex items-center justify-center">{tech.icon}</span>
                              <div>
                                <div className="font-medium text-gray-900">{tech.name}</div>
                                <div className="text-sm text-gray-600">{tech.description}</div>
                              </div>
                            </div>
                          ))}
                       </div>
                     </div>
                     
                     {/* Database */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <span className="mr-2">🗄️</span>
                        Database
                      </h3>
                      <div className="space-y-3">
                                                 {technologies.database.map((tech) => (
                           <div key={tech.name} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                             <span className="w-8 h-8 flex items-center justify-center">{tech.icon}</span>
                             <div>
                               <div className="font-medium text-gray-900">{tech.name}</div>
                               <div className="text-sm text-gray-600">{tech.description}</div>
                             </div>
                           </div>
                         ))}
                      </div>
                    </div>
                    
                    {/* Cloud & DevOps */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <span className="mr-2">☁️</span>
                        Cloud & DevOps
                      </h3>
                      <div className="space-y-3">
                                                 {technologies.cloud.map((tech) => (
                           <div key={tech.name} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                             <span className="w-8 h-8 flex items-center justify-center">{tech.icon}</span>
                             <div>
                               <div className="font-medium text-gray-900">{tech.name}</div>
                               <div className="text-sm text-gray-600">{tech.description}</div>
                             </div>
                           </div>
                         ))}
                      </div>
                    </div>
                    
                    {/* AI */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <span className="mr-2">🤖</span>
                        AI
                      </h3>
                      <div className="space-y-3">
                                                 {technologies.ai.map((tech) => (
                           <div key={tech.name} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                             <span className="w-8 h-8 flex items-center justify-center">{tech.icon}</span>
                             <div>
                               <div className="font-medium text-gray-900">{tech.name}</div>
                               <div className="text-sm text-gray-600">{tech.description}</div>
                             </div>
                           </div>
                         ))}
                      </div>
                    </div>
                    
                    {/* Crypto Development */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <span className="mr-2">₿</span>
                        Crypto Development
                      </h3>
                      <div className="space-y-3">
                                                 {technologies.crypto.map((tech) => (
                           <div key={tech.name} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                             <span className="w-8 h-8 flex items-center justify-center">{tech.icon}</span>
                             <div>
                               <div className="font-medium text-gray-900">{tech.name}</div>
                               <div className="text-sm text-gray-600">{tech.description}</div>
                             </div>
                           </div>
                         ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Bottom CTA */}
                  <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                    <p className="text-gray-600 mb-3">Need a specific technology solution?</p>
                    <Link
                      to="/contact"
                      className="inline-flex items-center bg-primary-600 text-white hover:bg-primary-700 font-semibold py-2 px-4 rounded-lg transition-colors"
                    >
                      Get Custom Quote
                    </Link>
                  </div>
                </div>
              )}
            </div>
            
                         <Link
               to="/contact"
               className="btn-primary text-sm"
             >
               Get Started
             </Link>
             
             <Link
               to="/login"
               className="btn-primary text-sm ml-2"
             >
               Client Login
             </Link>
          </div>

                     {/* Mobile Action Buttons */}
           <div className="md:hidden flex items-center space-x-4">
             <button
               onClick={() => setIsOpen(!isOpen)}
               className={`transition-colors duration-200 focus:outline-none ${
                 isScrolled 
                   ? 'text-gray-700 hover:text-primary-600 focus:text-primary-600'
                   : 'text-white hover:text-primary-600 focus:text-primary-600'
               }`}
             >
               {isOpen ? (
                 <XMarkIcon className="h-6 w-6" />
               ) : (
                 <Bars3Icon className="h-6 w-6" />
               )}
             </button>
             
             <Link
               to="/login"
               className="btn-primary text-sm"
             >
               Client Login
             </Link>
           </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md rounded-lg mt-2 shadow-lg">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
                             {/* Mobile Technologies Section */}
               <div className="border-t border-gray-200 pt-4 mt-4">
                 <div className="px-3 py-2 text-sm font-semibold text-gray-900 mb-2">Technologies</div>
                 <div className="grid grid-cols-2 gap-2">
                   {Object.entries(technologies).map(([category, techs]) => (
                     <div key={category} className="space-y-1">
                       <div className="px-3 py-1 text-xs font-medium text-gray-500 uppercase tracking-wide">
                         {category === 'frontend' && '🎨 Frontend'}
                         {category === 'backend' && '⚙️ Backend'}
                         {category === 'mobile' && '📱 Mobile'}
                         {category === 'desktop' && '🖥️ Desktop'}
                         {category === 'database' && '🗄️ Database'}
                         {category === 'cloud' && '☁️ Cloud & DevOps'}
                         {category === 'ai' && '🤖 AI'}
                         {category === 'crypto' && '₿ Crypto Development'}
                       </div>
                                               {techs.slice(0, 3).map((tech) => (
                          <div key={tech.name} className="px-3 py-1 text-sm text-gray-700 flex items-center space-x-2">
                            <span className="w-5 h-5 flex items-center justify-center">{tech.icon}</span>
                            <span>{tech.name}</span>
                          </div>
                        ))}
                     </div>
                   ))}
                 </div>
               </div>
              
                             <Link
                 to="/contact"
                 className="block px-3 py-2 mt-4 text-center btn-primary"
                 onClick={() => setIsOpen(false)}
               >
                 Get Started
               </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 