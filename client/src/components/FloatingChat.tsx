import React, { useState } from 'react';
import { ChatBubbleLeftRightIcon, XMarkIcon } from '@heroicons/react/24/outline';

const FloatingChat = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    console.log('Chat button clicked, current state:', isOpen);
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-80 h-96 bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="bg-primary-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <ChatBubbleLeftRightIcon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold">Live Chat</h3>
                <p className="text-xs text-primary-100">We're online now</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-primary-100 transition-colors"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          </div>
          
          {/* Chat Messages */}
          <div className="h-64 p-4 overflow-y-auto bg-gray-50">
            <div className="space-y-4">
              {/* Bot Message */}
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-bold">CS</span>
                </div>
                <div className="bg-white rounded-lg p-3 shadow-sm max-w-xs">
                  <p className="text-sm text-gray-800">
                    Hi! 👋 How can we help you today? We're here to discuss your project needs.
                  </p>
                </div>
              </div>
              
              {/* User Message */}
              <div className="flex items-start space-x-3 justify-end">
                <div className="bg-primary-600 rounded-lg p-3 shadow-sm max-w-xs">
                  <p className="text-sm text-white">
                    I'd like to discuss a new project
                  </p>
                </div>
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-gray-600 text-sm font-bold">U</span>
                </div>
              </div>
              
              {/* Bot Response */}
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-bold">CS</span>
                </div>
                <div className="bg-white rounded-lg p-3 shadow-sm max-w-xs">
                  <p className="text-sm text-gray-800">
                    Great! What type of project are you looking to build? We specialize in web apps, mobile apps, and custom software solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Input Area */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
              />
              <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm font-medium">
                Send
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              Press Enter to send • Usually responds in minutes
            </p>
          </div>
        </div>
      )}
      
      {/* Floating Chat Button */}
      <button
        onClick={handleToggle}
        className={`w-14 h-14 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center cursor-pointer z-10 relative ${
          isOpen ? 'rotate-180' : ''
        }`}
        aria-label="Toggle chat window"
        type="button"
      >
        {isOpen ? (
          <XMarkIcon className="h-6 w-6" />
        ) : (
          <ChatBubbleLeftRightIcon className="h-6 w-6" />
        )}
      </button>
      
      {/* Pulse Animation */}
      {!isOpen && (
        <div className="absolute inset-0 w-14 h-14 bg-primary-400 rounded-full animate-ping opacity-75"></div>
      )}
    </div>
  );
};

export default FloatingChat; 