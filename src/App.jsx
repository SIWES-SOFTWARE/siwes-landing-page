"use client"

import { useEffect, useRef, useState } from "react"
import {
  GraduationCap,
  Building2,
  Users,
  FileText,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  CheckCircle,
  Target,
  Network,
  TrendingUp,
  Award,
  Clock,
  Briefcase,
  Star,
  Globe,
  Shield,
  Menu,
  X,
  ChevronUp,
} from "lucide-react"
import "./App.css"

function App() {
  const sectionsRef = useRef([])
  const currentSectionRef = useRef(0)
  const isScrollingRef = useRef(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleWheel = (e) => {
      if (isScrollingRef.current) return

      e.preventDefault()

      const direction = e.deltaY > 0 ? 1 : -1
      const nextSection = currentSectionRef.current + direction

      if (nextSection >= 0 && nextSection < sectionsRef.current.length) {
        isScrollingRef.current = true
        currentSectionRef.current = nextSection

        sectionsRef.current[nextSection]?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })

        setTimeout(() => {
          isScrollingRef.current = false
        }, 1000)
      }
    }

    window.addEventListener("wheel", handleWheel, { passive: false })
    return () => window.removeEventListener("wheel", handleWheel)
  }, [])

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el)
    }
  }

  const scrollToSection = (sectionIndex) => {
    if (sectionsRef.current[sectionIndex]) {
      isScrollingRef.current = true
      currentSectionRef.current = sectionIndex

      sectionsRef.current[sectionIndex].scrollIntoView({
        behavior: "smooth",
        block: "start",
      })

      setTimeout(() => {
        isScrollingRef.current = false
      }, 1000)

      setIsMobileMenuOpen(false)
    }
  }

  const scrollToTop = () => {
    scrollToSection(0)
  }

  return (
    <div className="app-container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-content">
            <div className="nav-brand">
              <img src="/logo.png" alt="UniPort Logo" className="brand-logo" />
              <span className="brand-text">SIWES UniPort</span>
            </div>

            <div className="nav-links-desktop">
              <button onClick={() => scrollToSection(0)} className="nav-link">
                Home
              </button>
              <button onClick={() => scrollToSection(1)} className="nav-link">
                Director's Message
              </button>
              <button onClick={() => scrollToSection(2)} className="nav-link">
                Who We Serve
              </button>
              <button onClick={() => scrollToSection(3)} className="nav-link">
                Instructions
              </button>
              <button onClick={() => scrollToSection(4)} className="nav-link">
                Quick Actions
              </button>
              <button onClick={() => scrollToSection(5)} className="nav-link">
                Benefits
              </button>
              <button onClick={() => scrollToSection(6)} className="nav-link">
                Partners
              </button>
              <button onClick={() => scrollToSection(7)} className="nav-link">
                Contact
              </button>
              <button className="login-btn" 
              onClick={() => window.location.href = "https://siwes.uniport.edu.ng/student"}
              // onClick={() => window.location.href = "https://siwes-student.vercel.app/"}
>Login</button>
            </div>

            <div className="mobile-menu-btn">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="hamburger-btn">
                {isMobileMenuOpen ? <X className="menu-icon" /> : <Menu className="menu-icon" />}
              </button>
            </div>
          </div>

          {isMobileMenuOpen && (
            <div className="mobile-menu">
              <div className="mobile-menu-content">
                <button onClick={() => scrollToSection(0)} className="mobile-nav-link">
                  Home
                </button>
                <button onClick={() => scrollToSection(1)} className="mobile-nav-link">
                  Director's Message
                </button>
                <button onClick={() => scrollToSection(2)} className="mobile-nav-link">
                  Who We Serve
                </button>
                <button onClick={() => scrollToSection(3)} className="mobile-nav-link">
                  Instructions
                </button>
                <button onClick={() => scrollToSection(4)} className="mobile-nav-link">
                  Quick Actions
                </button>
                <button onClick={() => scrollToSection(5)} className="mobile-nav-link">
                  Benefits
                </button>
                <button onClick={() => scrollToSection(6)} className="mobile-nav-link">
                  Partners
                </button>
                <button onClick={() => scrollToSection(7)} className="mobile-nav-link">
                  Contact
                </button>
                <button className="mobile-login-btn" 
                onClick={() => window.location.href = "https://siwes.uniport.edu.ng/student"}
              // onClick={() => window.location.href = "https://siwes-student.vercel.app/"}

                >Login</button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={addToRefs} className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">SIWES UniPort – Accelerating Your Practical Experience</h1>
            <p className="hero-subtitle">
              Empowering UniPort students to secure top SIWES attachments and connect with leading employers across
              Nigeria.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary">
                Get Started
                <ArrowRight className="btn-icon" />
              </button>
              <button className="btn-secondary" 
              onClick={() => window.location.href = "https://siwes.uniport.edu.ng/student"}
              // onClick={() => window.location.href = "https://siwes-student.vercel.app/"}

              >Log In</button>
            </div>
          </div>
        </div>
      </section>

      {/* Director's Welcome Message Section */}
      <section ref={addToRefs} className="section director-section">
        <div className="container">
          <div className="director-content">
            <div className="director-image">
              <img src="/SIWES_director.jpg" alt="Director" className="director-photo" />
            </div>
            <div className="director-message">
              <div className="section-header">
                <div className="section-title-wrapper primary">
                  <h2 className="section-title">Welcome Message from the Director</h2>
                </div>
              </div>
              <div className="director-text">
                <p className="director-quote">
                  "Welcome to the SIWES UniPort platform. As we continue to bridge the gap between academic learning and
                  practical industry experience, this platform serves as your gateway to meaningful industrial
                  attachments."
                </p>
                <p className="director-description">
                  Our commitment is to ensure every University of Port Harcourt student gains valuable hands-on
                  experience that complements their academic journey. Through strategic partnerships with leading
                  organizations, we facilitate placements that not only meet academic requirements but also prepare you
                  for successful careers.
                </p>
                <div className="director-signature">
                  <p className="director-name">Dr. Ibinabo Fubara Bob-Manuel</p>
                  <p className="director-title">AG Director, SIWES Unit</p>
                  <p className="director-institution">University of Port Harcourt</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Groups
      <section ref={addToRefs} className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-title-wrapper">
              <h2 className="section-title">Who We Serve</h2>
            </div>
            <p className="section-subtitle">
              Connecting students, employers, and institutions for successful SIWES placements
            </p>
          </div>
          <div className="target-groups-grid">
          
            <div className="target-card">
              <div className="target-icon primary">
                <GraduationCap className="icon" />
              </div>
              <h3 className="target-title">Students (UniPort)</h3>
              <p className="target-description">
                Already placed? Register with your SCAF details and access exclusive resources.
              </p>
              <div className="target-buttons">
                <button className="btn-primary-full">Read More</button>
                <button className="btn-outline-full" 
                // onClick={() => window.location.href = "https://siwes.uniport.edu.ng/student"}
              onClick={() => window.location.href = "https://siwes-student.vercel.app/"}

                >Login</button>
              </div>
            </div>

            
            <div className="target-card">
              <div className="target-icon secondary">
                <Building2 className="icon" />
              </div>
              <h3 className="target-title">Coordinators</h3>
              <p className="target-description">
                 Manage and oversee SIWES student activities with ease. Access tools to approve placements, assign supervisors, and track student progress.
              </p>
              <div className="target-buttons">
                <button className="btn-primary-full">Read More</button>
                <button className="btn-outline-full" 
                // onClick={() => window.location.href = "https://siwes.uniport.edu.ng/coordinators"}
              onClick={() => window.location.href = "https://siwes-coordinator.vercel.app/"}

                >Login</button>
              </div>
            </div>

           
<div className="target-card">
  <div className="target-icon accent">
    <Users className="icon" />
  </div>
  <h3 className="target-title">SIWES Supervisors</h3>
  <p className="target-description">
    Oversee assigned students during their SIWES program. Monitor performance, provide guidance, and submit evaluation reports seamlessly.
  </p>
  <div className="target-buttons">
    <button className="btn-primary-full">Read More</button>
    <button
      className="btn-outline-full"
      onClick={() => window.location.href = "https://siwes-supervisor.vercel.app/"}
    >
      Login
    </button>
  </div>
</div>


            
            <div className="target-card">
              <div className="target-icon accent">
                <Users className="icon" />
              </div>
              <h3 className="target-title">Institution Admin</h3>
              <p className="target-description">
                UniPort SIWES Coordinators: Manage placements and student lists efficiently.
              </p>
              <div className="target-buttons">
                <button className="btn-primary-full">Read More</button>
                <button className="btn-outline-full" 
                // onClick={() => window.location.href = "https://siwes.uniport.edu.ng/admin"}
              onClick={() => window.location.href = "https://siwes-admin.vercel.app/"}

                >Login</button>
              </div>
            </div>
          </div>
        </div>
      </section> */}

    {/* Target Groups */}
<section ref={addToRefs} className="section">
  <div className="container">
    <div className="section-header">
      <div className="section-title-wrapper">
        <h2 className="section-title">Who We Serve</h2>
      </div>
      <p className="section-subtitle">
        Connecting students, employers, and institutions for successful SIWES placements
      </p>
    </div>

    {/* Carousel container */}
    <div className="overflow-x-auto">
      <div className="flex gap-6 pb-4 snap-x snap-mandatory">
        
        {/* Students */}
        <div className="target-card flex-shrink-0 w-80 snap-center">
          <div className="target-icon primary">
            <GraduationCap className="icon" />
          </div>
          <h3 className="target-title">Students (UniPort)</h3>
          <p className="target-description">
            Already placed? Register with your SCAF details and access exclusive resources.
          </p>
          <div className="target-buttons">
            <button className="btn-primary-full">Read More</button>
            <button
              className="btn-outline-full"
              // onClick={() => window.open("https://siwes-student.vercel.app/", "_blank")}
                onClick={() => window.location.href = "https://siwes.uniport.edu.ng/student"}


            >
              Login
            </button>
          </div>
        </div>

        {/* Coordinators */}
        <div className="target-card flex-shrink-0 w-80 snap-center">
          <div className="target-icon secondary">
            <Building2 className="icon" />
          </div>
          <h3 className="target-title">Coordinators</h3>
          <p className="target-description">
            Manage and oversee SIWES student activities with ease. Access tools to approve placements, assign supervisors, and track student progress.
          </p>
          <div className="target-buttons">
            <button className="btn-primary-full">Read More</button>
            <button
              className="btn-outline-full"
              // onClick={() => window.open("https://siwes-coordinator.vercel.app/", "_blank")}
                onClick={() => window.location.href = "https://siwes.uniport.edu.ng/coordinator"}

            >
              Login
            </button>
          </div>
        </div>

        {/* Supervisors */}
        <div className="target-card flex-shrink-0 w-80 snap-center">
          <div className="target-icon accent">
            <Users className="icon" />
          </div>
          <h3 className="target-title">SIWES Supervisors</h3>
          <p className="target-description">
            Oversee assigned students during their SIWES program. Monitor performance, provide guidance, and submit evaluation reports seamlessly.
          </p>
          <div className="target-buttons">
            <button className="btn-primary-full">Read More</button>
            <button
              className="btn-outline-full"
              // onClick={() => window.open("https://siwes-supervisor.vercel.app/", "_blank")}
                onClick={() => window.location.href = "https://siwes.uniport.edu.ng/supervisor"}

            >
              Login
            </button>
          </div>
        </div>

        {/* Institution Admin */}
        <div className="target-card flex-shrink-0 w-80 snap-center">
          <div className="target-icon accent">
            <Users className="icon" />
          </div>
          <h3 className="target-title">Institution Admin</h3>
          <p className="target-description">
            Manage institutional SIWES operations, monitor placements, and generate insightful reports.
          </p>
          <div className="target-buttons">
            <button className="btn-primary-full">Read More</button>
            <button
              className="btn-outline-full"
              // onClick={() => window.open("https://siwes-admin.vercel.app/", "_blank")}
                onClick={() => window.location.href = "https://siwes.uniport.edu.ng/admin"}

            >
              Login
            </button>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>


      {/* Instructions Section for Students and Companies */}
      <section ref={addToRefs} className="section alt-bg instructions-section">
        <div className="container">
          <div className="section-header">
            <div className="section-title-wrapper secondary">
              <h2 className="section-title">How to Use Our Platform</h2>
            </div>
            <p className="section-subtitle">Step-by-step guide for students and employers to get started</p>
          </div>

          <div className="instructions-grid">
            {/* Student Instructions */}
            <div className="instruction-panel">
              <div className="instruction-header">
                <div className="instruction-icon primary">
                  <GraduationCap className="icon-large" />
                </div>
                <h3 className="instruction-title">For Students</h3>
                <p className="instruction-subtitle">Get started with your SIWES placement</p>
              </div>
              <div className="instruction-steps">
                <div className="step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h4 className="step-title">Register Your Account</h4>
                    <p className="step-description">Create your profile using your student ID and SCAF details</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h4 className="step-title">Complete Your Profile</h4>
                    <p className="step-description">Add your academic information, skills, and preferences</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h4 className="step-title">Browse Opportunities</h4>
                    <p className="step-description">Search and apply for SIWES placements that match your field</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number">4</div>
                  <div className="step-content">
                    <h4 className="step-title">Track Your Application</h4>
                    <p className="step-description">Monitor application status and communicate with employers</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Employer Instructions */}
            <div className="instruction-panel">
              <div className="instruction-header">
                <div className="instruction-icon secondary">
                  <Building2 className="icon-large" />
                </div>
                <h3 className="instruction-title">For Employers</h3>
                <p className="instruction-subtitle">Host talented UniPort students</p>
              </div>
              <div className="instruction-steps">
                <div className="step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h4 className="step-title">Company Registration</h4>
                    <p className="step-description">Register your organization and verify company details</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h4 className="step-title">Post Opportunities</h4>
                    <p className="step-description">Create detailed SIWES placement listings with requirements</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h4 className="step-title">Review Applications</h4>
                    <p className="step-description">Browse student profiles and select suitable candidates</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number">4</div>
                  <div className="step-content">
                    <h4 className="step-title">Manage Placements</h4>
                    <p className="step-description">Coordinate with students and provide progress feedback</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section ref={addToRefs} className="section alt-bg">
        <div className="container">
          <div className="section-header">
            <div className="section-title-wrapper accent">
              <h2 className="section-title">Quick Actions</h2>
            </div>
            <p className="section-subtitle">Fast-track your SIWES journey with our streamlined processes</p>
          </div>
          <div className="quick-actions-grid">
            <div className="quick-action-card primary">
              <div className="quick-action-header">
                <div className="quick-action-icon primary">
                  <FileText className="icon" />
                </div>
                <div className="quick-action-text">
                  <h3 className="quick-action-title">Request SIWES Attachment</h3>
                  <p className="quick-action-desc">Students can submit attachment requests</p>
                </div>
              </div>
              <button className="btn-primary">
                Get Started <ArrowRight className="btn-icon" />
              </button>
            </div>

            <div className="quick-action-card secondary">
              <div className="quick-action-header">
                <div className="quick-action-icon secondary">
                  <Building2 className="icon" />
                </div>
                <div className="quick-action-text">
                  <h3 className="quick-action-title">View Employers' Requests</h3>
                  <p className="quick-action-desc">Browse available placement opportunities</p>
                </div>
              </div>
              <button className="btn-secondary">
                Browse <ArrowRight className="btn-icon" />
              </button>
            </div>

            <div className="quick-action-card accent">
              <div className="quick-action-header">
                <div className="quick-action-icon accent">
                  <Users className="icon" />
                </div>
                <div className="quick-action-text">
                  <h3 className="quick-action-title">Request SIWES Students</h3>
                  <p className="quick-action-desc">Employers can request student placements</p>
                </div>
              </div>
              <button className="btn-accent">
                Request <ArrowRight className="btn-icon" />
              </button>
            </div>

            <div className="quick-action-card primary">
              <div className="quick-action-header">
                <div className="quick-action-icon primary">
                  <GraduationCap className="icon" />
                </div>
                <div className="quick-action-text">
                  <h3 className="quick-action-title">View Student Requests</h3>
                  <p className="quick-action-desc">Employers can review student applications</p>
                </div>
              </div>
              <button className="btn-primary">
                Review <ArrowRight className="btn-icon" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SIWES Benefits */}
      <section ref={addToRefs} className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-title-wrapper primary">
              <h2 className="section-title">SIWES Benefits</h2>
            </div>
            <p className="section-subtitle">
              Discover how SIWES transforms your academic journey into real-world expertise
            </p>
          </div>

          <div className="benefits-container">
            {/* Benefit 1 */}
            <div className="benefit-row">
              <div className="benefit-content">
                <div className="benefit-icon primary">
                  <Target className="icon-large" />
                </div>
                <h3 className="benefit-title">Skills Development</h3>
                <p className="benefit-description">
                  Enhance practical skills in real work environments through hands-on experience. Develop technical
                  competencies that complement your academic knowledge.
                </p>
              </div>
              <div className="benefit-visual primary">
                <div className="benefit-grid">
                  <div className="benefit-item">
                    <CheckCircle className="benefit-item-icon" />
                    <p className="benefit-item-text">Practical Skills</p>
                  </div>
                  <div className="benefit-item">
                    <TrendingUp className="benefit-item-icon" />
                    <p className="benefit-item-text">Career Growth</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="benefit-row reverse">
              <div className="benefit-content">
                <div className="benefit-icon secondary">
                  <Building2 className="icon-large" />
                </div>
                <h3 className="benefit-title">Industry Exposure</h3>
                <p className="benefit-description">
                  Gain insights into industry practices, standards, and professional workflows. Experience real
                  workplace dynamics and corporate culture.
                </p>
              </div>
              <div className="benefit-visual secondary">
                <div className="benefit-list">
                  <div className="benefit-list-item">
                    <Network className="benefit-list-icon" />
                    <span className="benefit-list-text">Professional Networking</span>
                  </div>
                  <div className="benefit-list-item">
                    <Star className="benefit-list-icon" />
                    <span className="benefit-list-text">Excellence Recognition</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="benefit-row">
              <div className="benefit-content">
                <div className="benefit-icon accent">
                  <Award className="icon-large" />
                </div>
                <h3 className="benefit-title">Career Advancement</h3>
                <p className="benefit-description">
                  Open doors to future career opportunities and professional growth. Build a strong foundation for your
                  professional journey.
                </p>
              </div>
              <div className="benefit-visual accent">
                <div className="benefit-stat">
                  <div className="stat-number">85%</div>
                  <p className="stat-text">Students secure jobs within 6 months</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section ref={addToRefs} className="section alt-bg">
        <div className="container">
          <div className="section-header">
            <div className="section-title-wrapper secondary">
              <h2 className="section-title">Our Trusted Partners</h2>
            </div>
            <p className="section-subtitle">Collaborating with leading institutions and organizations nationwide</p>
          </div>

          <div className="partners-grid">
            {/* Featured Partner */}
            <div className="partner-featured">
              <div className="partner-featured-icon">
                <GraduationCap className="icon-xl" />
              </div>
              <h3 className="partner-featured-title">University of Port Harcourt</h3>
              <p className="partner-featured-desc">Leading institution in academic excellence and innovation</p>
              <div className="partner-badge">
                <span className="badge-text">Primary Partner</span>
              </div>
            </div>

            {/* Medium Partners */}
            <div className="partner-card medium">
              <div className="partner-icon secondary">
                <Award className="icon" />
              </div>
              <h3 className="partner-title">Industrial Training Fund</h3>
              <p className="partner-desc">Supporting skills development nationwide</p>
              <div className="partner-tags">
                <span className="tag">Skills Development</span>
                <span className="tag">Training Support</span>
              </div>
            </div>

            <div className="partner-card small">
              <div className="partner-icon accent">
                <Shield className="icon" />
              </div>
              <h3 className="partner-title small">National Universities Commission</h3>
              <p className="partner-desc small">Education Standards & Quality Assurance</p>
            </div>

            {/* Industry Network */}
            <div className="partner-network">
              <div className="network-content">
                <h3 className="network-title">Industry Partners Network</h3>
                <p className="network-desc">Leading employers across various sectors</p>
                <div className="network-tags">
                  <span className="network-tag">Oil & Gas</span>
                  <span className="network-tag">Engineering</span>
                  <span className="network-tag">Technology</span>
                  <span className="network-tag">Manufacturing</span>
                </div>
              </div>
              <div className="network-icons">
                <div className="network-icon">
                  <Briefcase className="icon" />
                </div>
                <div className="network-icon">
                  <Globe className="icon" />
                </div>
              </div>
            </div>

            {/* Small Partners */}
            <div className="partner-card small">
              <div className="partner-icon primary">
                <FileText className="icon" />
              </div>
              <h3 className="partner-title small">NBTE</h3>
              <p className="partner-desc small">National Board for Technical Education</p>
            </div>

            <div className="partner-card small">
              <div className="partner-icon secondary">
                <Building2 className="icon" />
              </div>
              <h3 className="partner-title small">Corporate Partners</h3>
              <p className="partner-desc small">Leading private sector organizations</p>
            </div>

            <div className="partner-card small">
              <div className="partner-icon accent">
                <Globe className="icon" />
              </div>
              <h3 className="partner-title small">International Orgs</h3>
              <p className="partner-desc small">Global development partnerships</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section ref={addToRefs} className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-title-wrapper accent">
              <h2 className="section-title">Contact & Support</h2>
            </div>
            <div className="contact-hours">
              <Clock className="clock-icon" />
              <span>Available 9 AM – 4 PM (Monday - Friday)</span>
            </div>
          </div>

          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-card primary">
                <div className="contact-header">
                  <div className="contact-icon primary">
                    <Phone className="icon" />
                  </div>
                  <div className="contact-text">
                    <h3 className="contact-title">Phone Support</h3>
                    <p className="contact-desc">Direct line to our support team</p>
                  </div>
                </div>
                <div className="contact-details">
                  <p className="contact-detail">+234 84 817 000</p>
                  <p className="contact-detail">+234 84 817 001</p>
                </div>
              </div>

              <div className="contact-card secondary">
                <div className="contact-header">
                  <div className="contact-icon secondary">
                    <Mail className="icon" />
                  </div>
                  <div className="contact-text">
                    <h3 className="contact-title">Email Support</h3>
                    <p className="contact-desc">Get help via email</p>
                  </div>
                </div>
                <div className="contact-details">
                  <p className="contact-detail">siwes@uniport.edu.ng</p>
                  <p className="contact-detail">info@siwes.uniport.edu.ng</p>
                </div>
              </div>
            </div>

            <div className="contact-office">
              <div className="office-header">
                <div className="contact-icon accent">
                  <MapPin className="icon" />
                </div>
                <div className="contact-text">
                  <h3 className="contact-title">Visit Our Office</h3>
                  <p className="contact-desc">Come see us in person</p>
                </div>
              </div>
              <div className="office-address">
                <p className="address-line">SIWES Unit, Academic Affairs</p>
                <p className="address-line">University of Port Harcourt</p>
                <p className="address-line">PMB 5323, Port Harcourt</p>
                <p className="address-line">Rivers State, Nigeria</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer ref={addToRefs} className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="footer-logo">
                {/* <GraduationCap className="brand-icon" /> */}
                <img src="/logo.png" alt="UniPort Logo" className="brand-logo" />
                <span className="brand-text">SIWES UniPort</span>
              </div>
              <p className="footer-desc">
                Empowering University of Port Harcourt students through quality industrial work experience.
              </p>
            </div>
            <div className="footer-links">
              <h4 className="footer-heading">Quick Links</h4>
              <ul className="footer-list">
                <li>
                  <a href="#" className="footer-link">
                    About SIWES
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Student Portal
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Employer Portal
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Resources
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-links">
              <h4 className="footer-heading">Support</h4>
              <ul className="footer-list">
                <li>
                  <a href="#" className="footer-link">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Terms of Use
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-newsletter">
              <h4 className="footer-heading">Newsletter</h4>
              <p className="newsletter-desc">Stay updated with SIWES announcements</p>
              <div className="newsletter-form">
                <input type="email" placeholder="Your email" className="newsletter-input" />
                <button className="newsletter-btn">Subscribe</button>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 SIWES UniPort. All rights reserved. University of Port Harcourt.</p>
          </div>
        </div>
      </footer>

      <button onClick={scrollToTop} className="scroll-to-top" aria-label="Scroll to top">
        <ChevronUp className="scroll-icon" />
      </button>
    </div>
  )
}

export default App














// "use client"

// import { useEffect, useRef, useState } from "react"
// import {
//   GraduationCap,
//   Building2,
//   Users,
//   FileText,
//   Phone,
//   Mail,
//   MapPin,
//   ArrowRight,
//   CheckCircle,
//   Target,
//   Network,
//   TrendingUp,
//   Award,
//   Clock,
//   Briefcase,
//   Star,
//   Globe,
//   Shield,
//   Menu,
//   X,
//   ChevronUp,
//   UserCheck,
//   Search,
//   Upload,
// } from "lucide-react"
// import "./App.css"
// import logo from "./assets/logo.png"

// function App() {
//   const sectionsRef = useRef([])
//   const currentSectionRef = useRef(0)
//   const isScrollingRef = useRef(false)
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

//   useEffect(() => {
//     const handleWheel = (e) => {
//       if (isScrollingRef.current) return

//       e.preventDefault()

//       const direction = e.deltaY > 0 ? 1 : -1
//       const nextSection = currentSectionRef.current + direction

//       if (nextSection >= 0 && nextSection < sectionsRef.current.length) {
//         isScrollingRef.current = true
//         currentSectionRef.current = nextSection

//         sectionsRef.current[nextSection]?.scrollIntoView({
//           behavior: "smooth",
//           block: "start",
//         })

//         setTimeout(() => {
//           isScrollingRef.current = false
//         }, 1000)
//       }
//     }

//     window.addEventListener("wheel", handleWheel, { passive: false })
//     return () => window.removeEventListener("wheel", handleWheel)
//   }, [])

//   const addToRefs = (el) => {
//     if (el && !sectionsRef.current.includes(el)) {
//       sectionsRef.current.push(el)
//     }
//   }

//   const scrollToSection = (sectionIndex) => {
//     if (sectionsRef.current[sectionIndex]) {
//       isScrollingRef.current = true
//       currentSectionRef.current = sectionIndex

//       sectionsRef.current[sectionIndex].scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       })

//       setTimeout(() => {
//         isScrollingRef.current = false
//       }, 1000)

//       setIsMobileMenuOpen(false)
//     }
//   }

//   const scrollToTop = () => {
//     scrollToSection(0)
//   }

//   return (
//     <div className="app-container">
//       {/* Navigation */}
//       <nav className="navbar">
//         <div className="nav-container">
//           <div className="nav-content">
//             <div className="nav-brand">
//               <img src={logo || "/placeholder.svg"} alt="University of Port Harcourt Logo" className="brand-logo" />
//               <span className="brand-text">SIWES UniPort</span>
//             </div>

//             <div className="nav-links-desktop">
//               <button onClick={() => scrollToSection(0)} className="nav-link">
//                 Home
//               </button>
//               <button onClick={() => scrollToSection(1)} className="nav-link">
//                 Who We Serve
//               </button>
//               <button onClick={() => scrollToSection(2)} className="nav-link">
//                 Quick Actions
//               </button>
//               <button onClick={() => scrollToSection(3)} className="nav-link">
//                 Benefits
//               </button>
//               <button onClick={() => scrollToSection(4)} className="nav-link">
//                 Partners
//               </button>
//               <button onClick={() => scrollToSection(5)} className="nav-link">
//                 Director's Message
//               </button>
//               <button onClick={() => scrollToSection(6)} className="nav-link">
//                 Instructions
//               </button>
//               <button onClick={() => scrollToSection(7)} className="nav-link">
//                 Contact
//               </button>
//               <button className="login-btn">Login</button>
//             </div>

//             <div className="mobile-menu-btn">
//               <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="hamburger-btn">
//                 {isMobileMenuOpen ? <X className="menu-icon" /> : <Menu className="menu-icon" />}
//               </button>
//             </div>
//           </div>

//           {isMobileMenuOpen && (
//             <div className="mobile-menu">
//               <div className="mobile-menu-content">
//                 <button onClick={() => scrollToSection(0)} className="mobile-nav-link">
//                   Home
//                 </button>
//                 <button onClick={() => scrollToSection(1)} className="mobile-nav-link">
//                   Who We Serve
//                 </button>
//                 <button onClick={() => scrollToSection(2)} className="mobile-nav-link">
//                   Quick Actions
//                 </button>
//                 <button onClick={() => scrollToSection(3)} className="mobile-nav-link">
//                   Benefits
//                 </button>
//                 <button onClick={() => scrollToSection(4)} className="mobile-nav-link">
//                   Partners
//                 </button>
//                 <button onClick={() => scrollToSection(5)} className="mobile-nav-link">
//                   Director's Message
//                 </button>
//                 <button onClick={() => scrollToSection(6)} className="mobile-nav-link">
//                   Instructions
//                 </button>
//                 <button onClick={() => scrollToSection(7)} className="mobile-nav-link">
//                   Contact
//                 </button>
//                 <button className="mobile-login-btn">Login</button>
//               </div>
//             </div>
//           )}
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section ref={addToRefs} className="hero-section">
//         <div className="hero-container">
//           <div className="hero-content">
//             <h1 className="hero-title">SIWES UniPort – Accelerating Your Practical Experience</h1>
//             <p className="hero-subtitle">
//               Empowering UniPort students to secure top SIWES attachments and connect with leading employers across
//               Nigeria.
//             </p>
//             <div className="hero-buttons">
//               <button className="btn-primary">
//                 Get Started
//                 <ArrowRight className="btn-icon" />
//               </button>
//               <button className="btn-secondary">Log In</button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Target Groups */}
//       <section ref={addToRefs} className="section">
//         <div className="container">
//           <div className="section-header">
//             <div className="section-title-wrapper">
//               <h2 className="section-title">Who We Serve</h2>
//             </div>
//             <p className="section-subtitle">
//               Connecting students, employers, and institutions for successful SIWES placements
//             </p>
//           </div>
//           <div className="target-groups-grid">
//             {/* Students */}
//             <div className="target-card">
//               <div className="target-icon primary">
//                 <GraduationCap className="icon" />
//               </div>
//               <h3 className="target-title">Students (UniPort)</h3>
//               <p className="target-description">
//                 Already placed? Register with your SCAF details and access exclusive resources.
//               </p>
//               <div className="target-buttons">
//                 <button className="btn-primary-full">Read More</button>
//                 <button className="btn-outline-full">Login</button>
//               </div>
//             </div>

//             {/* Employers */}
//             <div className="target-card">
//               <div className="target-icon secondary">
//                 <Building2 className="icon" />
//               </div>
//               <h3 className="target-title">Employers</h3>
//               <p className="target-description">
//                 Looking to host UniPort SIWES students? Connect with talented future professionals.
//               </p>
//               <div className="target-buttons">
//                 <button className="btn-primary-full">Read More</button>
//                 <button className="btn-outline-full">Login</button>
//               </div>
//             </div>

//             {/* Institution Admin */}
//             <div className="target-card">
//               <div className="target-icon accent">
//                 <Users className="icon" />
//               </div>
//               <h3 className="target-title">Institution Admin</h3>
//               <p className="target-description">
//                 UniPort SIWES Coordinators: Manage placements and student lists efficiently.
//               </p>
//               <div className="target-buttons">
//                 <button className="btn-primary-full">Read More</button>
//                 <button className="btn-outline-full">Login</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Quick Links */}
//       <section ref={addToRefs} className="section alt-bg">
//         <div className="container">
//           <div className="section-header">
//             <div className="section-title-wrapper accent">
//               <h2 className="section-title">Quick Actions</h2>
//             </div>
//             <p className="section-subtitle">Fast-track your SIWES journey with our streamlined processes</p>
//           </div>
//           <div className="quick-actions-grid">
//             <div className="quick-action-card primary">
//               <div className="quick-action-header">
//                 <div className="quick-action-icon primary">
//                   <FileText className="icon" />
//                 </div>
//                 <div className="quick-action-text">
//                   <h3 className="quick-action-title">Request SIWES Attachment</h3>
//                   <p className="quick-action-desc">Students can submit attachment requests</p>
//                 </div>
//               </div>
//               <button className="btn-primary">
//                 Get Started <ArrowRight className="btn-icon" />
//               </button>
//             </div>

//             <div className="quick-action-card secondary">
//               <div className="quick-action-header">
//                 <div className="quick-action-icon secondary">
//                   <Building2 className="icon" />
//                 </div>
//                 <div className="quick-action-text">
//                   <h3 className="quick-action-title">View Employers' Requests</h3>
//                   <p className="quick-action-desc">Browse available placement opportunities</p>
//                 </div>
//               </div>
//               <button className="btn-secondary">
//                 Browse <ArrowRight className="btn-icon" />
//               </button>
//             </div>

//             <div className="quick-action-card accent">
//               <div className="quick-action-header">
//                 <div className="quick-action-icon accent">
//                   <Users className="icon" />
//                 </div>
//                 <div className="quick-action-text">
//                   <h3 className="quick-action-title">Request SIWES Students</h3>
//                   <p className="quick-action-desc">Employers can request student placements</p>
//                 </div>
//               </div>
//               <button className="btn-accent">
//                 Request <ArrowRight className="btn-icon" />
//               </button>
//             </div>

//             <div className="quick-action-card primary">
//               <div className="quick-action-header">
//                 <div className="quick-action-icon primary">
//                   <GraduationCap className="icon" />
//                 </div>
//                 <div className="quick-action-text">
//                   <h3 className="quick-action-title">View Student Requests</h3>
//                   <p className="quick-action-desc">Employers can review student applications</p>
//                 </div>
//               </div>
//               <button className="btn-primary">
//                 Review <ArrowRight className="btn-icon" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* SIWES Benefits */}
//       <section ref={addToRefs} className="section">
//         <div className="container">
//           <div className="section-header">
//             <div className="section-title-wrapper primary">
//               <h2 className="section-title">SIWES Benefits</h2>
//             </div>
//             <p className="section-subtitle">
//               Discover how SIWES transforms your academic journey into real-world expertise
//             </p>
//           </div>

//           <div className="benefits-container">
//             {/* Benefit 1 */}
//             <div className="benefit-row">
//               <div className="benefit-content">
//                 <div className="benefit-icon primary">
//                   <Target className="icon-large" />
//                 </div>
//                 <h3 className="benefit-title">Skills Development</h3>
//                 <p className="benefit-description">
//                   Enhance practical skills in real work environments through hands-on experience. Develop technical
//                   competencies that complement your academic knowledge.
//                 </p>
//               </div>
//               <div className="benefit-visual primary">
//                 <div className="benefit-grid">
//                   <div className="benefit-item">
//                     <CheckCircle className="benefit-item-icon" />
//                     <p className="benefit-item-text">Practical Skills</p>
//                   </div>
//                   <div className="benefit-item">
//                     <TrendingUp className="benefit-item-icon" />
//                     <p className="benefit-item-text">Career Growth</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Benefit 2 */}
//             <div className="benefit-row reverse">
//               <div className="benefit-content">
//                 <div className="benefit-icon secondary">
//                   <Building2 className="icon-large" />
//                 </div>
//                 <h3 className="benefit-title">Industry Exposure</h3>
//                 <p className="benefit-description">
//                   Gain insights into industry practices, standards, and professional workflows. Experience real
//                   workplace dynamics and corporate culture.
//                 </p>
//               </div>
//               <div className="benefit-visual secondary">
//                 <div className="benefit-list">
//                   <div className="benefit-list-item">
//                     <Network className="benefit-list-icon" />
//                     <span className="benefit-list-text">Professional Networking</span>
//                   </div>
//                   <div className="benefit-list-item">
//                     <Star className="benefit-list-icon" />
//                     <span className="benefit-list-text">Excellence Recognition</span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Benefit 3 */}
//             <div className="benefit-row">
//               <div className="benefit-content">
//                 <div className="benefit-icon accent">
//                   <Award className="icon-large" />
//                 </div>
//                 <h3 className="benefit-title">Career Advancement</h3>
//                 <p className="benefit-description">
//                   Open doors to future career opportunities and professional growth. Build a strong foundation for your
//                   professional journey.
//                 </p>
//               </div>
//               <div className="benefit-visual accent">
//                 <div className="benefit-stat">
//                   <div className="stat-number">85%</div>
//                   <p className="stat-text">Students secure jobs within 6 months</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Partners */}
//       <section ref={addToRefs} className="section alt-bg">
//         <div className="container">
//           <div className="section-header">
//             <div className="section-title-wrapper secondary">
//               <h2 className="section-title">Our Trusted Partners</h2>
//             </div>
//             <p className="section-subtitle">Collaborating with leading institutions and organizations nationwide</p>
//           </div>

//           <div className="partners-grid">
//             {/* Featured Partner */}
//             <div className="partner-featured">
//               <div className="partner-featured-icon">
//                 <GraduationCap className="icon-xl" />
//               </div>
//               <h3 className="partner-featured-title">University of Port Harcourt</h3>
//               <p className="partner-featured-desc">Leading institution in academic excellence and innovation</p>
//               <div className="partner-badge">
//                 <span className="badge-text">Primary Partner</span>
//               </div>
//             </div>

//             {/* Medium Partners */}
//             <div className="partner-card medium">
//               <div className="partner-icon secondary">
//                 <Award className="icon" />
//               </div>
//               <h3 className="partner-title">Industrial Training Fund</h3>
//               <p className="partner-desc">Supporting skills development nationwide</p>
//               <div className="partner-tags">
//                 <span className="tag">Skills Development</span>
//                 <span className="tag">Training Support</span>
//               </div>
//             </div>

//             <div className="partner-card small">
//               <div className="partner-icon accent">
//                 <Shield className="icon" />
//               </div>
//               <h3 className="partner-title small">National Universities Commission</h3>
//               <p className="partner-desc small">Education Standards & Quality Assurance</p>
//             </div>

//             {/* Industry Network */}
//             <div className="partner-network">
//               <div className="network-content">
//                 <h3 className="network-title">Industry Partners Network</h3>
//                 <p className="network-desc">Leading employers across various sectors</p>
//                 <div className="network-tags">
//                   <span className="network-tag">Oil & Gas</span>
//                   <span className="network-tag">Engineering</span>
//                   <span className="network-tag">Technology</span>
//                   <span className="network-tag">Manufacturing</span>
//                 </div>
//               </div>
//               <div className="network-icons">
//                 <div className="network-icon">
//                   <Briefcase className="icon" />
//                 </div>
//                 <div className="network-icon">
//                   <Globe className="icon" />
//                 </div>
//               </div>
//             </div>

//             {/* Small Partners */}
//             <div className="partner-card small">
//               <div className="partner-icon primary">
//                 <FileText className="icon" />
//               </div>
//               <h3 className="partner-title small">NBTE</h3>
//               <p className="partner-desc small">National Board for Technical Education</p>
//             </div>

//             <div className="partner-card small">
//               <div className="partner-icon secondary">
//                 <Building2 className="icon" />
//               </div>
//               <h3 className="partner-title small">Corporate Partners</h3>
//               <p className="partner-desc small">Leading private sector organizations</p>
//             </div>

//             <div className="partner-card small">
//               <div className="partner-icon accent">
//                 <Globe className="icon" />
//               </div>
//               <h3 className="partner-title small">International Orgs</h3>
//               <p className="partner-desc small">Global development partnerships</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section ref={addToRefs} className="section">
//         <div className="container">
//           <div className="section-header">
//             <div className="section-title-wrapper primary">
//               <h2 className="section-title">Director's Welcome Message</h2>
//             </div>
//             <p className="section-subtitle">A message from our SIWES Program Director</p>
//           </div>

//           <div className="director-message">
//             <div className="director-content">
//               <div className="director-image">
//                 <img src={logo || "/placeholder.svg"} alt="Director" className="director-photo" />
//               </div>
//               <div className="director-text">
//                 <h3 className="director-name">Prof. Grace Chinyere Offiah</h3>
//                 <p className="director-title">Director, SIWES Program</p>
//                 <div className="director-quote">
//                   <p className="quote-text">
//                     "Welcome to the SIWES UniPort platform. Our commitment is to bridge the gap between academic
//                     learning and practical industry experience. Through strategic partnerships with leading
//                     organizations, we ensure our students gain valuable hands-on experience that prepares them for
//                     successful careers."
//                   </p>
//                   <p className="quote-text">
//                     "This platform represents our dedication to excellence in industrial training, connecting our bright
//                     students with opportunities that will shape their professional futures. Together, we are building
//                     the next generation of skilled professionals."
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section ref={addToRefs} className="section alt-bg">
//         <div className="container">
//           <div className="section-header">
//             <div className="section-title-wrapper accent">
//               <h2 className="section-title">How to Use Our Platform</h2>
//             </div>
//             <p className="section-subtitle">Step-by-step guide for students and employers</p>
//           </div>

//           <div className="instructions-container">
//             {/* Student Instructions */}
//             <div className="instruction-group">
//               <div className="instruction-header">
//                 <div className="instruction-icon primary">
//                   <GraduationCap className="icon-large" />
//                 </div>
//                 <h3 className="instruction-title">For Students</h3>
//                 <p className="instruction-subtitle">Follow these steps to get started with your SIWES placement</p>
//               </div>

//               <div className="instruction-steps">
//                 <div className="instruction-step">
//                   <div className="step-number">1</div>
//                   <div className="step-content">
//                     <div className="step-icon">
//                       <UserCheck className="icon" />
//                     </div>
//                     <div className="step-text">
//                       <h4 className="step-title">Create Account</h4>
//                       <p className="step-desc">Register using your student ID and university email address</p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="instruction-step">
//                   <div className="step-number">2</div>
//                   <div className="step-content">
//                     <div className="step-icon">
//                       <Upload className="icon" />
//                     </div>
//                     <div className="step-text">
//                       <h4 className="step-title">Upload Documents</h4>
//                       <p className="step-desc">Submit your CV, SCAF form, and academic transcripts</p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="instruction-step">
//                   <div className="step-number">3</div>
//                   <div className="step-content">
//                     <div className="step-icon">
//                       <Search className="icon" />
//                     </div>
//                     <div className="step-text">
//                       <h4 className="step-title">Browse Opportunities</h4>
//                       <p className="step-desc">Search and apply for SIWES placements that match your field</p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="instruction-step">
//                   <div className="step-number">4</div>
//                   <div className="step-content">
//                     <div className="step-icon">
//                       <CheckCircle className="icon" />
//                     </div>
//                     <div className="step-text">
//                       <h4 className="step-title">Track Progress</h4>
//                       <p className="step-desc">Monitor your application status and receive placement updates</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Company Instructions */}
//             <div className="instruction-group">
//               <div className="instruction-header">
//                 <div className="instruction-icon secondary">
//                   <Building2 className="icon-large" />
//                 </div>
//                 <h3 className="instruction-title">For Employers</h3>
//                 <p className="instruction-subtitle">Connect with talented UniPort students for SIWES placements</p>
//               </div>

//               <div className="instruction-steps">
//                 <div className="instruction-step">
//                   <div className="step-number">1</div>
//                   <div className="step-content">
//                     <div className="step-icon">
//                       <Building2 className="icon" />
//                     </div>
//                     <div className="step-text">
//                       <h4 className="step-title">Company Registration</h4>
//                       <p className="step-desc">Register your organization and verify company credentials</p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="instruction-step">
//                   <div className="step-number">2</div>
//                   <div className="step-content">
//                     <div className="step-icon">
//                       <FileText className="icon" />
//                     </div>
//                     <div className="step-text">
//                       <h4 className="step-title">Post Opportunities</h4>
//                       <p className="step-desc">Create detailed SIWES placement listings with requirements</p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="instruction-step">
//                   <div className="step-number">3</div>
//                   <div className="step-content">
//                     <div className="step-icon">
//                       <Users className="icon" />
//                     </div>
//                     <div className="step-text">
//                       <h4 className="step-title">Review Applications</h4>
//                       <p className="step-desc">Browse student profiles and select suitable candidates</p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="instruction-step">
//                   <div className="step-number">4</div>
//                   <div className="step-content">
//                     <div className="step-icon">
//                       <Award className="icon" />
//                     </div>
//                     <div className="step-text">
//                       <h4 className="step-title">Manage Placements</h4>
//                       <p className="step-desc">Coordinate with students and provide progress feedback</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact */}
//       <section ref={addToRefs} className="section">
//         <div className="container">
//           <div className="section-header">
//             <div className="section-title-wrapper accent">
//               <h2 className="section-title">Contact & Support</h2>
//             </div>
//             <div className="contact-hours">
//               <Clock className="clock-icon" />
//               <span>Available 9 AM – 4 PM (Monday - Friday)</span>
//             </div>
//           </div>

//           <div className="contact-grid">
//             <div className="contact-info">
//               <div className="contact-card primary">
//                 <div className="contact-header">
//                   <div className="contact-icon primary">
//                     <Phone className="icon" />
//                   </div>
//                   <div className="contact-text">
//                     <h3 className="contact-title">Phone Support</h3>
//                     <p className="contact-desc">Direct line to our support team</p>
//                   </div>
//                 </div>
//                 <div className="contact-details">
//                   <p className="contact-detail">+234 84 817 000</p>
//                   <p className="contact-detail">+234 84 817 001</p>
//                 </div>
//               </div>

//               <div className="contact-card secondary">
//                 <div className="contact-header">
//                   <div className="contact-icon secondary">
//                     <Mail className="icon" />
//                   </div>
//                   <div className="contact-text">
//                     <h3 className="contact-title">Email Support</h3>
//                     <p className="contact-desc">Get help via email</p>
//                   </div>
//                 </div>
//                 <div className="contact-details">
//                   <p className="contact-detail">siwes@uniport.edu.ng</p>
//                   <p className="contact-detail">info@siwes.uniport.edu.ng</p>
//                 </div>
//               </div>
//             </div>

//             <div className="contact-office">
//               <div className="office-header">
//                 <div className="contact-icon accent">
//                   <MapPin className="icon" />
//                 </div>
//                 <div className="contact-text">
//                   <h3 className="contact-title">Visit Our Office</h3>
//                   <p className="contact-desc">Come see us in person</p>
//                 </div>
//               </div>
//               <div className="office-address">
//                 <p className="address-line">SIWES Unit, Academic Affairs</p>
//                 <p className="address-line">University of Port Harcourt</p>
//                 <p className="address-line">PMB 5323, Port Harcourt</p>
//                 <p className="address-line">Rivers State, Nigeria</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer ref={addToRefs} className="footer">
//         <div className="container">
//           <div className="footer-content">
//             <div className="footer-brand">
//               <div className="footer-logo">
//                 <img src={logo || "/placeholder.svg"} alt="University of Port Harcourt Logo" className="brand-logo" />
//                 <span className="brand-text">SIWES UniPort</span>
//               </div>
//               <p className="footer-desc">
//                 Empowering University of Port Harcourt students through quality industrial work experience.
//               </p>
//             </div>
//             <div className="footer-links">
//               <h4 className="footer-heading">Quick Links</h4>
//               <ul className="footer-list">
//                 <li>
//                   <a href="#" className="footer-link">
//                     About SIWES
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="footer-link">
//                     Student Portal
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="footer-link">
//                     Employer Portal
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="footer-link">
//                     Resources
//                   </a>
//                 </li>
//               </ul>
//             </div>
//             <div className="footer-links">
//               <h4 className="footer-heading">Support</h4>
//               <ul className="footer-list">
//                 <li>
//                   <a href="#" className="footer-link">
//                     Help Center
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="footer-link">
//                     Contact Us
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="footer-link">
//                     Privacy Policy
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="footer-link">
//                     Terms of Use
//                   </a>
//                 </li>
//               </ul>
//             </div>
//             <div className="footer-newsletter">
//               <h4 className="footer-heading">Newsletter</h4>
//               <p className="newsletter-desc">Stay updated with SIWES announcements</p>
//               <div className="newsletter-form">
//                 <input type="email" placeholder="Your email" className="newsletter-input" />
//                 <button className="newsletter-btn">Subscribe</button>
//               </div>
//             </div>
//           </div>
//           <div className="footer-bottom">
//             <p>&copy; 2024 SIWES UniPort. All rights reserved. University of Port Harcourt.</p>
//           </div>
//         </div>
//       </footer>

//       <button onClick={scrollToTop} className="scroll-to-top" aria-label="Scroll to top">
//         <ChevronUp className="scroll-icon" />
//       </button>
//     </div>
//   )
// }

// export default App









// "use client"

// import { useEffect, useRef, useState } from "react"
// import {
//   GraduationCap,
//   Building2,
//   Users,
//   FileText,
//   Phone,
//   Mail,
//   MapPin,
//   ArrowRight,
//   CheckCircle,
//   Target,
//   Network,
//   TrendingUp,
//   Award,
//   Clock,
//   Briefcase,
//   Star,
//   Globe,
//   Shield,
//   Menu,
//   X,
//   ChevronUp,
// } from "lucide-react"
// import "./App.css"

// function App() {
//   const sectionsRef = useRef([])
//   const currentSectionRef = useRef(0)
//   const isScrollingRef = useRef(false)
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

//   useEffect(() => {
//     const handleWheel = (e) => {
//       if (isScrollingRef.current) return

//       e.preventDefault()

//       const direction = e.deltaY > 0 ? 1 : -1
//       const nextSection = currentSectionRef.current + direction

//       if (nextSection >= 0 && nextSection < sectionsRef.current.length) {
//         isScrollingRef.current = true
//         currentSectionRef.current = nextSection

//         sectionsRef.current[nextSection]?.scrollIntoView({
//           behavior: "smooth",
//           block: "start",
//         })

//         setTimeout(() => {
//           isScrollingRef.current = false
//         }, 1000)
//       }
//     }

//     window.addEventListener("wheel", handleWheel, { passive: false })
//     return () => window.removeEventListener("wheel", handleWheel)
//   }, [])

//   const addToRefs = (el) => {
//     if (el && !sectionsRef.current.includes(el)) {
//       sectionsRef.current.push(el)
//     }
//   }

//   const scrollToSection = (sectionIndex) => {
//     if (sectionsRef.current[sectionIndex]) {
//       isScrollingRef.current = true
//       currentSectionRef.current = sectionIndex

//       sectionsRef.current[sectionIndex].scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       })

//       setTimeout(() => {
//         isScrollingRef.current = false
//       }, 1000)

//       setIsMobileMenuOpen(false)
//     }
//   }

//   const scrollToTop = () => {
//     scrollToSection(0)
//   }

//   return (
//     <div className="app-container">
//       {/* Navigation */}
//       <nav className="navbar">
//         <div className="nav-container">
//           <div className="nav-content">
//             <div className="nav-brand">
//               <GraduationCap className="brand-icon" />
//               <span className="brand-text">SIWES UniPort</span>
//             </div>

//             <div className="nav-links-desktop">
//               <button onClick={() => scrollToSection(0)} className="nav-link">
//                 Home
//               </button>
//               <button onClick={() => scrollToSection(1)} className="nav-link">
//                 Who We Serve
//               </button>
//               <button onClick={() => scrollToSection(2)} className="nav-link">
//                 Quick Actions
//               </button>
//               <button onClick={() => scrollToSection(3)} className="nav-link">
//                 Benefits
//               </button>
//               <button onClick={() => scrollToSection(4)} className="nav-link">
//                 Partners
//               </button>
//               <button onClick={() => scrollToSection(5)} className="nav-link">
//                 Contact
//               </button>
//               <button className="login-btn">Login</button>
//             </div>

//             <div className="mobile-menu-btn">
//               <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="hamburger-btn">
//                 {isMobileMenuOpen ? <X className="menu-icon" /> : <Menu className="menu-icon" />}
//               </button>
//             </div>
//           </div>

//           {isMobileMenuOpen && (
//             <div className="mobile-menu">
//               <div className="mobile-menu-content">
//                 <button onClick={() => scrollToSection(0)} className="mobile-nav-link">
//                   Home
//                 </button>
//                 <button onClick={() => scrollToSection(1)} className="mobile-nav-link">
//                   Who We Serve
//                 </button>
//                 <button onClick={() => scrollToSection(2)} className="mobile-nav-link">
//                   Quick Actions
//                 </button>
//                 <button onClick={() => scrollToSection(3)} className="mobile-nav-link">
//                   Benefits
//                 </button>
//                 <button onClick={() => scrollToSection(4)} className="mobile-nav-link">
//                   Partners
//                 </button>
//                 <button onClick={() => scrollToSection(5)} className="mobile-nav-link">
//                   Contact
//                 </button>
//                 <button className="mobile-login-btn">Login</button>
//               </div>
//             </div>
//           )}
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section ref={addToRefs} className="hero-section">
//         <div className="hero-container">
//           <div className="hero-content">
//             <h1 className="hero-title">SIWES UniPort – Accelerating Your Practical Experience</h1>
//             <p className="hero-subtitle">
//               Empowering UniPort students to secure top SIWES attachments and connect with leading employers across
//               Nigeria.
//             </p>
//             <div className="hero-buttons">
//               <button className="btn-primary">
//                 Get Started
//                 <ArrowRight className="btn-icon" />
//               </button>
//               <button className="btn-secondary">Log In</button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Target Groups */}
//       <section ref={addToRefs} className="section">
//         <div className="container">
//           <div className="section-header">
//             <div className="section-title-wrapper">
//               <h2 className="section-title">Who We Serve</h2>
//             </div>
//             <p className="section-subtitle">
//               Connecting students, employers, and institutions for successful SIWES placements
//             </p>
//           </div>
//           <div className="target-groups-grid">
//             {/* Students */}
//             <div className="target-card">
//               <div className="target-icon primary">
//                 <GraduationCap className="icon" />
//               </div>
//               <h3 className="target-title">Students (UniPort)</h3>
//               <p className="target-description">
//                 Already placed? Register with your SCAF details and access exclusive resources.
//               </p>
//               <div className="target-buttons">
//                 <button className="btn-primary-full">Read More</button>
//                 <button className="btn-outline-full">Login</button>
//               </div>
//             </div>

//             {/* Employers */}
//             <div className="target-card">
//               <div className="target-icon secondary">
//                 <Building2 className="icon" />
//               </div>
//               <h3 className="target-title">Employers</h3>
//               <p className="target-description">
//                 Looking to host UniPort SIWES students? Connect with talented future professionals.
//               </p>
//               <div className="target-buttons">
//                 <button className="btn-primary-full">Read More</button>
//                 <button className="btn-outline-full">Login</button>
//               </div>
//             </div>

//             {/* Institution Admin */}
//             <div className="target-card">
//               <div className="target-icon accent">
//                 <Users className="icon" />
//               </div>
//               <h3 className="target-title">Institution Admin</h3>
//               <p className="target-description">
//                 UniPort SIWES Coordinators: Manage placements and student lists efficiently.
//               </p>
//               <div className="target-buttons">
//                 <button className="btn-primary-full">Read More</button>
//                 <button className="btn-outline-full">Login</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Quick Links */}
//       <section ref={addToRefs} className="section alt-bg">
//         <div className="container">
//           <div className="section-header">
//             <div className="section-title-wrapper accent">
//               <h2 className="section-title">Quick Actions</h2>
//             </div>
//             <p className="section-subtitle">Fast-track your SIWES journey with our streamlined processes</p>
//           </div>
//           <div className="quick-actions-grid">
//             <div className="quick-action-card primary">
//               <div className="quick-action-header">
//                 <div className="quick-action-icon primary">
//                   <FileText className="icon" />
//                 </div>
//                 <div className="quick-action-text">
//                   <h3 className="quick-action-title">Request SIWES Attachment</h3>
//                   <p className="quick-action-desc">Students can submit attachment requests</p>
//                 </div>
//               </div>
//               <button className="btn-primary">
//                 Get Started <ArrowRight className="btn-icon" />
//               </button>
//             </div>

//             <div className="quick-action-card secondary">
//               <div className="quick-action-header">
//                 <div className="quick-action-icon secondary">
//                   <Building2 className="icon" />
//                 </div>
//                 <div className="quick-action-text">
//                   <h3 className="quick-action-title">View Employers' Requests</h3>
//                   <p className="quick-action-desc">Browse available placement opportunities</p>
//                 </div>
//               </div>
//               <button className="btn-secondary">
//                 Browse <ArrowRight className="btn-icon" />
//               </button>
//             </div>

//             <div className="quick-action-card accent">
//               <div className="quick-action-header">
//                 <div className="quick-action-icon accent">
//                   <Users className="icon" />
//                 </div>
//                 <div className="quick-action-text">
//                   <h3 className="quick-action-title">Request SIWES Students</h3>
//                   <p className="quick-action-desc">Employers can request student placements</p>
//                 </div>
//               </div>
//               <button className="btn-accent">
//                 Request <ArrowRight className="btn-icon" />
//               </button>
//             </div>

//             <div className="quick-action-card primary">
//               <div className="quick-action-header">
//                 <div className="quick-action-icon primary">
//                   <GraduationCap className="icon" />
//                 </div>
//                 <div className="quick-action-text">
//                   <h3 className="quick-action-title">View Student Requests</h3>
//                   <p className="quick-action-desc">Employers can review student applications</p>
//                 </div>
//               </div>
//               <button className="btn-primary">
//                 Review <ArrowRight className="btn-icon" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* SIWES Benefits */}
//       <section ref={addToRefs} className="section">
//         <div className="container">
//           <div className="section-header">
//             <div className="section-title-wrapper primary">
//               <h2 className="section-title">SIWES Benefits</h2>
//             </div>
//             <p className="section-subtitle">
//               Discover how SIWES transforms your academic journey into real-world expertise
//             </p>
//           </div>

//           <div className="benefits-container">
//             {/* Benefit 1 */}
//             <div className="benefit-row">
//               <div className="benefit-content">
//                 <div className="benefit-icon primary">
//                   <Target className="icon-large" />
//                 </div>
//                 <h3 className="benefit-title">Skills Development</h3>
//                 <p className="benefit-description">
//                   Enhance practical skills in real work environments through hands-on experience. Develop technical
//                   competencies that complement your academic knowledge.
//                 </p>
//               </div>
//               <div className="benefit-visual primary">
//                 <div className="benefit-grid">
//                   <div className="benefit-item">
//                     <CheckCircle className="benefit-item-icon" />
//                     <p className="benefit-item-text">Practical Skills</p>
//                   </div>
//                   <div className="benefit-item">
//                     <TrendingUp className="benefit-item-icon" />
//                     <p className="benefit-item-text">Career Growth</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Benefit 2 */}
//             <div className="benefit-row reverse">
//               <div className="benefit-content">
//                 <div className="benefit-icon secondary">
//                   <Building2 className="icon-large" />
//                 </div>
//                 <h3 className="benefit-title">Industry Exposure</h3>
//                 <p className="benefit-description">
//                   Gain insights into industry practices, standards, and professional workflows. Experience real
//                   workplace dynamics and corporate culture.
//                 </p>
//               </div>
//               <div className="benefit-visual secondary">
//                 <div className="benefit-list">
//                   <div className="benefit-list-item">
//                     <Network className="benefit-list-icon" />
//                     <span className="benefit-list-text">Professional Networking</span>
//                   </div>
//                   <div className="benefit-list-item">
//                     <Star className="benefit-list-icon" />
//                     <span className="benefit-list-text">Excellence Recognition</span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Benefit 3 */}
//             <div className="benefit-row">
//               <div className="benefit-content">
//                 <div className="benefit-icon accent">
//                   <Award className="icon-large" />
//                 </div>
//                 <h3 className="benefit-title">Career Advancement</h3>
//                 <p className="benefit-description">
//                   Open doors to future career opportunities and professional growth. Build a strong foundation for your
//                   professional journey.
//                 </p>
//               </div>
//               <div className="benefit-visual accent">
//                 <div className="benefit-stat">
//                   <div className="stat-number">85%</div>
//                   <p className="stat-text">Students secure jobs within 6 months</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Partners */}
//       <section ref={addToRefs} className="section alt-bg">
//         <div className="container">
//           <div className="section-header">
//             <div className="section-title-wrapper secondary">
//               <h2 className="section-title">Our Trusted Partners</h2>
//             </div>
//             <p className="section-subtitle">Collaborating with leading institutions and organizations nationwide</p>
//           </div>

//           <div className="partners-grid">
//             {/* Featured Partner */}
//             <div className="partner-featured">
//               <div className="partner-featured-icon">
//                 <GraduationCap className="icon-xl" />
//               </div>
//               <h3 className="partner-featured-title">University of Port Harcourt</h3>
//               <p className="partner-featured-desc">Leading institution in academic excellence and innovation</p>
//               <div className="partner-badge">
//                 <span className="badge-text">Primary Partner</span>
//               </div>
//             </div>

//             {/* Medium Partners */}
//             <div className="partner-card medium">
//               <div className="partner-icon secondary">
//                 <Award className="icon" />
//               </div>
//               <h3 className="partner-title">Industrial Training Fund</h3>
//               <p className="partner-desc">Supporting skills development nationwide</p>
//               <div className="partner-tags">
//                 <span className="tag">Skills Development</span>
//                 <span className="tag">Training Support</span>
//               </div>
//             </div>

//             <div className="partner-card small">
//               <div className="partner-icon accent">
//                 <Shield className="icon" />
//               </div>
//               <h3 className="partner-title small">National Universities Commission</h3>
//               <p className="partner-desc small">Education Standards & Quality Assurance</p>
//             </div>

//             {/* Industry Network */}
//             <div className="partner-network">
//               <div className="network-content">
//                 <h3 className="network-title">Industry Partners Network</h3>
//                 <p className="network-desc">Leading employers across various sectors</p>
//                 <div className="network-tags">
//                   <span className="network-tag">Oil & Gas</span>
//                   <span className="network-tag">Engineering</span>
//                   <span className="network-tag">Technology</span>
//                   <span className="network-tag">Manufacturing</span>
//                 </div>
//               </div>
//               <div className="network-icons">
//                 <div className="network-icon">
//                   <Briefcase className="icon" />
//                 </div>
//                 <div className="network-icon">
//                   <Globe className="icon" />
//                 </div>
//               </div>
//             </div>

//             {/* Small Partners */}
//             <div className="partner-card small">
//               <div className="partner-icon primary">
//                 <FileText className="icon" />
//               </div>
//               <h3 className="partner-title small">NBTE</h3>
//               <p className="partner-desc small">National Board for Technical Education</p>
//             </div>

//             <div className="partner-card small">
//               <div className="partner-icon secondary">
//                 <Building2 className="icon" />
//               </div>
//               <h3 className="partner-title small">Corporate Partners</h3>
//               <p className="partner-desc small">Leading private sector organizations</p>
//             </div>

//             <div className="partner-card small">
//               <div className="partner-icon accent">
//                 <Globe className="icon" />
//               </div>
//               <h3 className="partner-title small">International Orgs</h3>
//               <p className="partner-desc small">Global development partnerships</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact */}
//       <section ref={addToRefs} className="section">
//         <div className="container">
//           <div className="section-header">
//             <div className="section-title-wrapper accent">
//               <h2 className="section-title">Contact & Support</h2>
//             </div>
//             <div className="contact-hours">
//               <Clock className="clock-icon" />
//               <span>Available 9 AM – 4 PM (Monday - Friday)</span>
//             </div>
//           </div>

//           <div className="contact-grid">
//             <div className="contact-info">
//               <div className="contact-card primary">
//                 <div className="contact-header">
//                   <div className="contact-icon primary">
//                     <Phone className="icon" />
//                   </div>
//                   <div className="contact-text">
//                     <h3 className="contact-title">Phone Support</h3>
//                     <p className="contact-desc">Direct line to our support team</p>
//                   </div>
//                 </div>
//                 <div className="contact-details">
//                   <p className="contact-detail">+234 84 817 000</p>
//                   <p className="contact-detail">+234 84 817 001</p>
//                 </div>
//               </div>

//               <div className="contact-card secondary">
//                 <div className="contact-header">
//                   <div className="contact-icon secondary">
//                     <Mail className="icon" />
//                   </div>
//                   <div className="contact-text">
//                     <h3 className="contact-title">Email Support</h3>
//                     <p className="contact-desc">Get help via email</p>
//                   </div>
//                 </div>
//                 <div className="contact-details">
//                   <p className="contact-detail">siwes@uniport.edu.ng</p>
//                   <p className="contact-detail">info@siwes.uniport.edu.ng</p>
//                 </div>
//               </div>
//             </div>

//             <div className="contact-office">
//               <div className="office-header">
//                 <div className="contact-icon accent">
//                   <MapPin className="icon" />
//                 </div>
//                 <div className="contact-text">
//                   <h3 className="contact-title">Visit Our Office</h3>
//                   <p className="contact-desc">Come see us in person</p>
//                 </div>
//               </div>
//               <div className="office-address">
//                 <p className="address-line">SIWES Unit, Academic Affairs</p>
//                 <p className="address-line">University of Port Harcourt</p>
//                 <p className="address-line">PMB 5323, Port Harcourt</p>
//                 <p className="address-line">Rivers State, Nigeria</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer ref={addToRefs} className="footer">
//         <div className="container">
//           <div className="footer-content">
//             <div className="footer-brand">
//               <div className="footer-logo">
//                 <GraduationCap className="brand-icon" />
//                 <span className="brand-text">SIWES UniPort</span>
//               </div>
//               <p className="footer-desc">
//                 Empowering University of Port Harcourt students through quality industrial work experience.
//               </p>
//             </div>
//             <div className="footer-links">
//               <h4 className="footer-heading">Quick Links</h4>
//               <ul className="footer-list">
//                 <li>
//                   <a href="#" className="footer-link">
//                     About SIWES
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="footer-link">
//                     Student Portal
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="footer-link">
//                     Employer Portal
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="footer-link">
//                     Resources
//                   </a>
//                 </li>
//               </ul>
//             </div>
//             <div className="footer-links">
//               <h4 className="footer-heading">Support</h4>
//               <ul className="footer-list">
//                 <li>
//                   <a href="#" className="footer-link">
//                     Help Center
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="footer-link">
//                     Contact Us
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="footer-link">
//                     Privacy Policy
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="footer-link">
//                     Terms of Use
//                   </a>
//                 </li>
//               </ul>
//             </div>
//             <div className="footer-newsletter">
//               <h4 className="footer-heading">Newsletter</h4>
//               <p className="newsletter-desc">Stay updated with SIWES announcements</p>
//               <div className="newsletter-form">
//                 <input type="email" placeholder="Your email" className="newsletter-input" />
//                 <button className="newsletter-btn">Subscribe</button>
//               </div>
//             </div>
//           </div>
//           <div className="footer-bottom">
//             <p>&copy; 2024 SIWES UniPort. All rights reserved. University of Port Harcourt.</p>
//           </div>
//         </div>
//       </footer>

//       <button onClick={scrollToTop} className="scroll-to-top" aria-label="Scroll to top">
//         <ChevronUp className="scroll-icon" />
//       </button>
//     </div>
//   )
// }

// export default App














// import Home from "./pages/Home";

// function App() {
//   return <Home />;
// }

// export default App;
