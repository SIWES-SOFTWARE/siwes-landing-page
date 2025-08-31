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

export default function HomePage() {
  const sectionsRef = useRef([]);
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

      // Close mobile menu after navigation
      setIsMobileMenuOpen(false)
    }
  }

  const scrollToTop = () => {
    scrollToSection(0)
  }

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Navigation */}
      <nav className="bg-white border-b border-border fixed top-0 z-50 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground">SIWES UniPort</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <button
                onClick={() => scrollToSection(0)}
                className="text-foreground hover:text-primary transition-colors text-sm"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection(1)}
                className="text-foreground hover:text-primary transition-colors text-sm"
              >
                Who We Serve
              </button>
              <button
                onClick={() => scrollToSection(2)}
                className="text-foreground hover:text-primary transition-colors text-sm"
              >
                Quick Actions
              </button>
              <button
                onClick={() => scrollToSection(3)}
                className="text-foreground hover:text-primary transition-colors text-sm"
              >
                Benefits
              </button>
              <button
                onClick={() => scrollToSection(4)}
                className="text-foreground hover:text-primary transition-colors text-sm"
              >
                Partners
              </button>
              <button
                onClick={() => scrollToSection(5)}
                className="text-foreground hover:text-primary transition-colors text-sm"
              >
                Contact
              </button>
              <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors text-sm">
                Login
              </button>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-foreground hover:text-primary transition-colors p-2"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden bg-white border-t border-border">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <button
                  onClick={() => scrollToSection(0)}
                  className="block w-full text-left px-3 py-2 text-foreground hover:text-primary hover:bg-muted transition-colors rounded-md"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection(1)}
                  className="block w-full text-left px-3 py-2 text-foreground hover:text-primary hover:bg-muted transition-colors rounded-md"
                >
                  Who We Serve
                </button>
                <button
                  onClick={() => scrollToSection(2)}
                  className="block w-full text-left px-3 py-2 text-foreground hover:text-primary hover:bg-muted transition-colors rounded-md"
                >
                  Quick Actions
                </button>
                <button
                  onClick={() => scrollToSection(3)}
                  className="block w-full text-left px-3 py-2 text-foreground hover:text-primary hover:bg-muted transition-colors rounded-md"
                >
                  Benefits
                </button>
                <button
                  onClick={() => scrollToSection(4)}
                  className="block w-full text-left px-3 py-2 text-foreground hover:text-primary hover:bg-muted transition-colors rounded-md"
                >
                  Partners
                </button>
                <button
                  onClick={() => scrollToSection(5)}
                  className="block w-full text-left px-3 py-2 text-foreground hover:text-primary hover:bg-muted transition-colors rounded-md"
                >
                  Contact
                </button>
                <button className="w-full bg-primary text-primary-foreground px-3 py-2 rounded-lg hover:bg-primary/90 transition-colors text-sm mt-2">
                  Login
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        ref={addToRefs}
        className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center pt-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              SIWES UniPort – Accelerating Your Practical Experience
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
              Empowering UniPort students to secure top SIWES attachments and connect with leading employers across
              Nigeria.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
                Get Started
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="bg-secondary text-secondary-foreground px-8 py-3 rounded-lg text-lg font-semibold hover:bg-secondary/90 transition-colors">
                Log In
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Target Groups */}
      <section ref={addToRefs} className="min-h-screen bg-background flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-20 pt-8">
            <div className="inline-block bg-gradient-to-r from-primary/10 to-secondary/10 px-8 py-4 rounded-2xl border border-primary/20 mb-4">
              <h2 className="text-3xl font-bold text-foreground">Who We Serve</h2>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Connecting students, employers, and institutions for successful SIWES placements
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Students */}
            <div className="bg-card border border-border rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-4">Students (UniPort)</h3>
              <p className="text-muted-foreground mb-6">
                Already placed? Register with your SCAF details and access exclusive resources.
              </p>
              <div className="space-y-3">
                <button className="w-full bg-primary text-primary-foreground py-3 px-4 rounded-lg hover:bg-primary/90 transition-colors">
                  Read More
                </button>
                <button className="w-full border border-border text-foreground py-3 px-4 rounded-lg hover:bg-muted transition-colors">
                  Login
                </button>
              </div>
            </div>

            {/* Employers */}
            <div className="bg-card border border-border rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building2 className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-4">Employers</h3>
              <p className="text-muted-foreground mb-6">
                Looking to host UniPort SIWES students? Connect with talented future professionals.
              </p>
              <div className="space-y-3">
                <button className="w-full bg-primary text-primary-foreground py-3 px-4 rounded-lg hover:bg-primary/90 transition-colors">
                  Read More
                </button>
                <button className="w-full border border-border text-foreground py-3 px-4 rounded-lg hover:bg-muted transition-colors">
                  Login
                </button>
              </div>
            </div>

            {/* Institution Admin */}
            <div className="bg-card border border-border rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-4">Institution Admin</h3>
              <p className="text-muted-foreground mb-6">
                UniPort SIWES Coordinators: Manage placements and student lists efficiently.
              </p>
              <div className="space-y-3">
                <button className="w-full bg-primary text-primary-foreground py-3 px-4 rounded-lg hover:bg-primary/90 transition-colors">
                  Read More
                </button>
                <button className="w-full border border-border text-foreground py-3 px-4 rounded-lg hover:bg-muted transition-colors">
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links - Card Grid Layout */}
      <section ref={addToRefs} className="min-h-screen bg-muted/30 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-20 pt-8">
            <div className="inline-block bg-gradient-to-r from-accent/10 to-primary/10 px-8 py-4 rounded-2xl border border-accent/20 mb-4">
              <h2 className="text-3xl font-bold text-foreground">Quick Actions</h2>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Fast-track your SIWES journey with our streamlined processes
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/20 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-primary/20 p-3 rounded-full">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Request SIWES Attachment</h3>
                  <p className="text-muted-foreground">Students can submit attachment requests</p>
                </div>
              </div>
              <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center gap-2">
                Get Started <ArrowRight className="h-5 w-5" />
              </button>
            </div>

            <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 border-2 border-secondary/20 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-secondary/20 p-3 rounded-full">
                  <Building2 className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">View Employers' Requests</h3>
                  <p className="text-muted-foreground">Browse available placement opportunities</p>
                </div>
              </div>
              <button className="bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors flex items-center gap-2">
                Browse <ArrowRight className="h-5 w-5" />
              </button>
            </div>

            <div className="bg-gradient-to-br from-accent/10 to-accent/5 border-2 border-accent/20 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-accent/20 p-3 rounded-full">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Request SIWES Students</h3>
                  <p className="text-muted-foreground">Employers can request student placements</p>
                </div>
              </div>
              <button className="bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors flex items-center gap-2">
                Request <ArrowRight className="h-5 w-5" />
              </button>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/20 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-primary/20 p-3 rounded-full">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">View Student Requests</h3>
                  <p className="text-muted-foreground">Employers can review student applications</p>
                </div>
              </div>
              <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center gap-2">
                Review <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SIWES Benefits - Alternating Feature Layout */}
      <section ref={addToRefs} className="min-h-screen bg-background flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-20 pt-8">
            <div className="inline-block bg-gradient-to-r from-primary/10 to-secondary/10 px-8 py-4 rounded-2xl border border-primary/20 mb-4">
              <h2 className="text-3xl font-bold text-foreground">SIWES Benefits</h2>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover how SIWES transforms your academic journey into real-world expertise
            </p>
          </div>

          {/* Benefit 1 - Left aligned */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="bg-gradient-to-br from-primary/10 to-primary/20 w-20 h-20 rounded-2xl flex items-center justify-center mb-6">
                <Target className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Skills Development</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Enhance practical skills in real work environments through hands-on experience. Develop technical
                competencies that complement your academic knowledge.
              </p>
            </div>
            <div className="lg:w-1/2 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/20">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/50 rounded-lg p-4 text-center">
                  <CheckCircle className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">Practical Skills</p>
                </div>
                <div className="bg-white/50 rounded-lg p-4 text-center">
                  <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">Career Growth</p>
                </div>
              </div>
            </div>
          </div>

          {/* Benefit 2 - Right aligned */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2">
              <div className="bg-gradient-to-br from-secondary/10 to-secondary/20 w-20 h-20 rounded-2xl flex items-center justify-center mb-6">
                <Building2 className="h-10 w-10 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Industry Exposure</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Gain insights into industry practices, standards, and professional workflows. Experience real workplace
                dynamics and corporate culture.
              </p>
            </div>
            <div className="lg:w-1/2 bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-2xl p-8 border border-secondary/20">
              <div className="space-y-4">
                <div className="flex items-center gap-3 bg-white/50 rounded-lg p-3">
                  <Network className="h-6 w-6 text-secondary" />
                  <span className="font-medium">Professional Networking</span>
                </div>
                <div className="flex items-center gap-3 bg-white/50 rounded-lg p-3">
                  <Star className="h-6 w-6 text-secondary" />
                  <span className="font-medium">Excellence Recognition</span>
                </div>
              </div>
            </div>
          </div>

          {/* Benefit 3 - Left aligned */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="bg-gradient-to-br from-accent/10 to-accent/20 w-20 h-20 rounded-2xl flex items-center justify-center mb-6">
                <Award className="h-10 w-10 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Career Advancement</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Open doors to future career opportunities and professional growth. Build a strong foundation for your
                professional journey.
              </p>
            </div>
            <div className="lg:w-1/2 bg-gradient-to-br from-accent/5 to-accent/10 rounded-2xl p-8 border border-accent/20 text-center">
              <div className="bg-white/50 rounded-xl p-6">
                <div className="text-3xl font-bold text-accent mb-2">85%</div>
                <p className="text-sm text-muted-foreground">Students secure jobs within 6 months</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Trusted Partners - Masonry/Bento Grid Layout */}
      <section ref={addToRefs} className="min-h-screen bg-muted/20 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-20 pt-8">
            <div className="inline-block bg-gradient-to-r from-secondary/10 to-accent/10 px-8 py-4 rounded-2xl border border-secondary/20 mb-4">
              <h2 className="text-3xl font-bold text-foreground">Our Trusted Partners</h2>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Collaborating with leading institutions and organizations nationwide
            </p>
          </div>

          {/* Large featured partner */}
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 auto-rows-fr">
            <div className="md:col-span-2 lg:col-span-3 md:row-span-2 bg-gradient-to-br from-primary/10 to-primary/20 border-2 border-primary/30 rounded-2xl p-8 flex flex-col justify-center items-center text-center hover:shadow-xl transition-all duration-300">
              <div className="bg-primary/20 w-24 h-24 rounded-full flex items-center justify-center mb-6">
                <GraduationCap className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">University of Port Harcourt</h3>
              <p className="text-muted-foreground">Leading institution in academic excellence and innovation</p>
              <div className="mt-4 bg-primary/10 px-4 py-2 rounded-full">
                <span className="text-sm font-medium text-primary">Primary Partner</span>
              </div>
            </div>

            {/* Medium partners */}
            <div className="md:col-span-2 lg:col-span-2 bg-white border border-border rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Industrial Training Fund</h3>
              <p className="text-sm text-muted-foreground">Supporting skills development</p>
            </div>

            <div className="md:col-span-2 lg:col-span-1 bg-white border border-border rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="bg-accent/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-bold text-foreground text-sm mb-2">National Universities Commission</h3>
              <p className="text-xs text-muted-foreground">Education Standards & Quality Assurance</p>
            </div>

            {/* Industry Partners Network */}
            <div className="md:col-span-4 lg:col-span-3 bg-gradient-to-r from-secondary/10 to-accent/10 border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex-1">
                  <h3 className="font-bold text-foreground mb-2">Industry Partners Network</h3>
                  <p className="text-sm text-muted-foreground mb-3">Leading employers across various sectors</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-white/50 px-3 py-1 rounded-full text-xs font-medium">Oil & Gas</span>
                    <span className="bg-white/50 px-3 py-1 rounded-full text-xs font-medium">Engineering</span>
                    <span className="bg-white/50 px-3 py-1 rounded-full text-xs font-medium">Technology</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="bg-white/50 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-secondary" />
                  </div>
                  <div className="bg-white/50 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Globe className="h-6 w-6 text-accent" />
                  </div>
                </div>
              </div>
            </div>

            {/* Small partners */}
            <div className="bg-white border border-border rounded-xl p-4 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground text-sm mb-1">NBTE</h3>
              <p className="text-xs text-muted-foreground">Technical Education Board</p>
            </div>

            <div className="bg-white border border-border rounded-xl p-4 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="bg-secondary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Building2 className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="font-bold text-foreground text-sm mb-1">Corporate Partners</h3>
              <p className="text-xs text-muted-foreground">Private Sector Leaders</p>
            </div>

            <div className="bg-white border border-border rounded-xl p-4 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="bg-accent/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Globe className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-bold text-foreground text-sm mb-1">International Orgs</h3>
              <p className="text-xs text-muted-foreground">Global Partnerships</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Support - Interactive Layout */}
      <section ref={addToRefs} className="min-h-screen bg-background flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16 pt-8">
            <div className="inline-block bg-gradient-to-r from-accent/10 to-primary/10 px-8 py-4 rounded-2xl border border-accent/20 mb-4">
              <h2 className="text-3xl font-bold text-foreground">Contact & Support</h2>
            </div>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Clock className="h-5 w-5" />
              <span>Available 9 AM – 4 PM (Monday - Friday)</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary/20 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">Phone Support</h3>
                    <p className="text-muted-foreground">Direct line to our support team</p>
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-foreground font-medium">+234 84 817 000</p>
                  <p className="text-foreground font-medium">+234 84 817 001</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-secondary/10 to-secondary/5 border border-secondary/20 rounded-xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-secondary/20 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">Email Support</h3>
                    <p className="text-muted-foreground">Get help via email</p>
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-foreground font-medium">siwes@uniport.edu.ng</p>
                  <p className="text-foreground">info@siwes.uniport.edu.ng</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 rounded-xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-accent/20 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">Visit Our Office</h3>
                  <p className="text-muted-foreground">Come see us in person</p>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-foreground font-medium">SIWES Unit, Academic Affairs</p>
                <p className="text-foreground">University of Port Harcourt</p>
                <p className="text-foreground">PMB 5323, Port Harcourt</p>
                <p className="text-foreground">Rivers State, Nigeria</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer ref={addToRefs} className="min-h-screen bg-secondary text-secondary-foreground flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <GraduationCap className="h-8 w-8 text-primary" />
                <span className="text-xl font-bold">SIWES UniPort</span>
              </div>
              <p className="text-secondary-foreground/80 mb-4">
                Empowering University of Port Harcourt students through quality industrial work experience.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-secondary-foreground/80">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    About SIWES
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Student Portal
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Employer Portal
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Resources
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-secondary-foreground/80">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Terms of Use
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Newsletter</h4>
              <p className="text-secondary-foreground/80 mb-4">Stay updated with SIWES announcements</p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-3 py-2 rounded-lg bg-white text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-secondary-foreground/20 pt-8 text-center text-secondary-foreground/60">
            <p>&copy; 2024 SIWES UniPort. All rights reserved. University of Port Harcourt.</p>
          </div>
        </div>
      </footer>

      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-primary text-primary-foreground p-3 rounded-full shadow-lg hover:bg-primary/90 transition-all duration-300 hover:scale-110 z-40"
        aria-label="Scroll to top"
      >
        <ChevronUp className="h-6 w-6" />
      </button>
    </div>
  )
}
