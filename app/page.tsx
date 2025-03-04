"use client"
import React, { useState, useEffect } from 'react';
import { Cpu, Layers, Code, Database, Grid, Zap, ArrowDownCircle, Plus, Monitor } from 'lucide-react';

const ParallaxPortfolio = () => {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-hidden">
      {/* Hero Section with Parallax */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Layer - Moves slower */}
        <div 
          className="absolute inset-0 z-0" 
          style={{ 
            background: 'radial-gradient(circle, rgba(16,24,39,1) 0%, rgba(2,6,23,1) 100%)',
            transform: `translateY(${scrollY * 0.1}px)`
          }}
        >
          {/* Circuit pattern overlay */}
          <div className="absolute inset-0 opacity-10" style={{ 
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M11 18h78 M11 50h78 M11 82h78 M30 18v64 M50 18v64 M70 18v64\' stroke=\'%23ffffff\' fill=\'none\' stroke-width=\'1\'/%3E%3C/svg%3E")',
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Middle Layer - Hexagon Grid - Moves at medium speed */}
        <div 
          className="absolute inset-0 z-10 opacity-20" 
          style={{ 
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'24\' height=\'40\' viewBox=\'0 0 24 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0,0 L24,0 L24,40 L0,40 L0,0 Z M12,6 L18,15 L18,25 L12,34 L6,25 L6,15 L12,6 Z\' fill=\'%2348BB78\' fill-opacity=\'1\'/%3E%3C/svg%3E")',
            transform: `translateY(${scrollY * 0.3}px)`
          }}
        />

        {/* Front Layer - Floating Elements - Moves faster */}
        <div 
          className="absolute inset-0 z-20" 
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
          {/* Floating icons */}
          <Monitor className="absolute text-green-400 opacity-30" style={{ top: '15%', left: '20%', width: '40px', height: '40px' }} />
          <Cpu className="absolute text-blue-400 opacity-30" style={{ top: '30%', right: '25%', width: '50px', height: '50px' }} />
          <Database className="absolute text-purple-400 opacity-30" style={{ bottom: '25%', left: '30%', width: '45px', height: '45px' }} />
          <Code className="absolute text-yellow-400 opacity-30" style={{ bottom: '40%', right: '15%', width: '35px', height: '35px' }} />
          <Grid className="absolute text-red-400 opacity-30" style={{ top: '50%', left: '15%', width: '30px', height: '30px' }} />
        </div>

        {/* Content - Fixed Position */}
        <div className="relative z-30 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              John Doe
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl mb-6 font-light">Robotics & Systems Engineer</h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-300">
            Building the future through intelligent systems design and robotic innovation
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-green-500 to-blue-600 px-6 py-3 rounded-lg font-medium flex items-center">
              <span>View Projects</span>
              <ArrowDownCircle className="ml-2 w-5 h-5" />
            </button>
            <button className="border border-white/20 bg-white/5 backdrop-blur-sm px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition">
              Contact Me
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 animate-bounce"
          style={{ opacity: Math.max(0, 1 - scrollY * 0.005) }}
        >
          <ArrowDownCircle className="w-10 h-10 text-white/50" />
        </div>
      </div>

      {/* Projects Section */}
      <div className="relative py-24 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Featured <span className="text-green-400">Projects</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Autonomous Navigation System',
                icon: <Zap className="w-10 h-10 text-green-400" />,
                description: 'SLAM-based navigation for industrial robots with real-time obstacle avoidance'
              },
              {
                title: 'Robotic Arm Control',
                icon: <Cpu className="w-10 h-10 text-blue-400" />,
                description: 'Inverse kinematics solution for precise manipulation of 6-DOF robotic arms'
              },
              {
                title: 'Distributed Control Systems',
                icon: <Cpu className="w-10 h-10 text-purple-400" />,
                description: 'Fault-tolerant architecture for mission-critical robotic operations'
              },
              {
                title: 'Computer Vision Pipeline',
                icon: <Layers className="w-10 h-10 text-yellow-400" />,
                description: 'Real-time object detection and classification for industrial applications'
              },
              {
                title: 'Data Synchronization Protocol',
                icon: <Database className="w-10 h-10 text-red-400" />,
                description: 'Low-latency communication system for robotic swarm coordination'
              },
              {
                title: 'Human-Robot Interface',
                icon: <Grid className="w-10 h-10 text-orange-400" />,
                description: 'Intuitive control system with gesture recognition and voice commands'
              }
            ].map((project, index) => (
              <div 
                key={index} 
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden hover:border-green-500/50 transition-all duration-300 group"
                style={{ 
                  transform: `translateY(${Math.max(0, (scrollY - 500) * 0.1)}px)`,
                  opacity: Math.min(1, Math.max(0, (scrollY - 300) * 0.002))
                }}
              >
                <div className="p-6">
                  <div className="mb-4">{project.icon}</div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-green-400 transition-colors">{project.title}</h3>
                  <p className="text-gray-400">{project.description}</p>
                </div>
                <div className="px-6 py-3 border-t border-slate-700/50 flex justify-between items-center">
                  <span className="text-sm text-gray-400">View Details</span>
                  <Plus className="w-5 h-5 text-green-400 group-hover:rotate-90 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Background circuit lines - parallax effect */}
        <div 
          className="absolute inset-0 z-0 opacity-5" 
          style={{ 
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M11 18h78 M11 50h78 M11 82h78 M30 18v64 M50 18v64 M70 18v64\' stroke=\'%23ffffff\' fill=\'none\' stroke-width=\'1\'/%3E%3C/svg%3E")',
            backgroundSize: '100px 100px',
            transform: `translateY(${(scrollY - 500) * 0.2}px)`
          }}
        />
      </div>

      {/* About/Skills Section */}
      <div className="relative py-24 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div 
              style={{ 
                transform: `translateY(${Math.max(0, (scrollY - 1000) * 0.1)}px)`,
                opacity: Math.min(1, Math.max(0, (scrollY - 800) * 0.001))
              }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                About <span className="text-green-400">Me</span>
              </h2>
              <p className="text-gray-300 mb-4">
                "I'm a systems engineer specializing in robotics and automation, with experience in designing and implementing cutting-edge solutions for industrial and research applications."
              </p>
              <p className="text-gray-300 mb-6">
                "My approach combines theoretical knowledge with practical implementation, ensuring that complex problems are solved with elegant and efficient systems."
              </p>
              <div className="flex space-x-4">
                <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-4 flex-1">
                  <h3 className="font-bold text-green-400 text-lg mb-1">5+</h3>
                  <p className="text-sm text-gray-400">Years Experience</p>
                </div>
                <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-4 flex-1">
                  <h3 className="font-bold text-green-400 text-lg mb-1">20+</h3>
                  <p className="text-sm text-gray-400">Projects Completed</p>
                </div>
                <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-4 flex-1">
                  <h3 className="font-bold text-green-400 text-lg mb-1">8+</h3>
                  <p className="text-sm text-gray-400">Happy Clients</p>
                </div>
              </div>
            </div>
            
            <div 
              className="grid grid-cols-2 gap-4"
              style={{ 
                transform: `translateY(${Math.max(0, (scrollY - 1000) * 0.15)}px)`,
                opacity: Math.min(1, Math.max(0, (scrollY - 800) * 0.001))
              }}
            >
              {[
                { name: 'Robotics', level: 90 },
                { name: 'System Design', level: 85 },
                { name: 'Computer Vision', level: 75 },
                { name: 'Machine Learning', level: 70 },
                { name: 'Control Systems', level: 88 },
                { name: 'Embedded Programming', level: 82 },
                { name: 'ROS', level: 80 },
                { name: 'PCB Design', level: 65 }
              ].map((skill, index) => (
                <div key={index} className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-4 hover:border-green-500/50 transition-all">
                  <p className="text-sm text-gray-300 mb-2">{skill.name}</p>
                  <div className="w-full bg-slate-700/50 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Background hexagons - parallax effect */}
        <div 
          className="absolute inset-0 z-0 opacity-10" 
          style={{ 
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'24\' height=\'40\' viewBox=\'0 0 24 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0,0 L24,0 L24,40 L0,40 L0,0 Z M12,6 L18,15 L18,25 L12,34 L6,25 L6,15 L12,6 Z\' fill=\'%2348BB78\' fill-opacity=\'1\'/%3E%3C/svg%3E")',
            backgroundSize: '48px 80px',
            transform: `translateY(${(scrollY - 1000) * 0.1}px)`
          }}
        />
      </div>

      {/* Contact Section */}
      <div className="relative py-24 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Let's <span className="text-green-400">Connect</span>
          </h2>
          <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
            "Interested in working together? Let's discuss how my expertise in robotics and systems design can bring your ideas to life."
          </p>
          <button className="bg-gradient-to-r from-green-500 to-blue-600 px-8 py-4 rounded-lg font-medium text-lg">
            Get In Touch
          </button>
        </div>
        
        {/* Footer */}
        <div className="mt-24 border-t border-slate-800 pt-8 pb-12 max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">John Doe</h3>
              <p className="text-gray-400 mt-1">Robotics & Systems Engineer</p>
            </div>
            <div className="flex space-x-6">
              {['GitHub', 'LinkedIn', 'Twitter', 'Email'].map((item, index) => (
                <a key={index} href="#" className="text-gray-400 hover:text-green-400 transition-colors">{item}</a>
              ))}
            </div>
          </div>
          <div className="mt-8 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} John Doe. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParallaxPortfolio;