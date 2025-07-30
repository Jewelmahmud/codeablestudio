import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './i18n';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingChat from './components/FloatingChat';
import Home from './pages/Home';
import Services from './pages/Services';
import Projects from './pages/Projects';
import CaseStudies from './pages/CaseStudies';
import Careers from './pages/Careers';
import JobDetails from './pages/JobDetails';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Dashboard from './client/Dashboard';
import ProjectDetail from './pages/ProjectDetail';
import Invoices from './pages/Invoices';
import Payment from './pages/Payment';
import WebApplicationDevelopment from './services/WebApplicationDevelopment';
import EcommerceDevelopment from './services/EcommerceDevelopment';
import ProgressiveWebApps from './services/ProgressiveWebApps';
import APIDevelopment from './services/APIDevelopment';
import ScrollToTop from './components/ScrollToTop';

function AppContent() {
  const location = useLocation();
  const isDashboardPage = location.pathname === '/dashboard' || location.pathname.startsWith('/project/') || location.pathname.startsWith('/invoices') || location.pathname.startsWith('/payment/');

  return (
    <div className="App min-h-screen bg-gray-50">
      <ScrollToTop />
      {!isDashboardPage && <Navbar />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
                                  <Route path="/services" element={<Services />} />
                        <Route path="/services/web-application-development" element={<WebApplicationDevelopment />} />
                        <Route path="/services/ecommerce-development" element={<EcommerceDevelopment />} />
                        <Route path="/services/progressive-web-apps" element={<ProgressiveWebApps />} />
                        <Route path="/services/api-development" element={<APIDevelopment />} />
                        <Route path="/projects" element={<Projects />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/careers/:id" element={<JobDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/invoices" element={<Invoices />} />
          <Route path="/payment/:invoiceId" element={<Payment />} />
        </Routes>
      </main>
      {!isDashboardPage && <Footer />}
      <FloatingChat />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
