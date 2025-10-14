// components/Partners.jsx
import { GraduationCap, Award, Shield, Briefcase, Globe, FileText, Building2 } from "lucide-react"

export default function Partners() {
  return (
    <section id="partners" className="py-20 bg-gray-50 rounded-t-4xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Trusted Partners</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Collaborating with leading institutions and organizations nationwide
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Featured Partner */}
          <div className="md:col-span-2 lg:col-span-4 bg-white rounded-2xl p-8 border border-gray-200 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              {/* <GraduationCap className="w-8 h-8 text-blue-600" /> */}
              <img src="/uniPort_Logo.png" alt="University of Port Harcourt logo" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">University of Port Harcourt</h3>
            <p className="text-gray-600 mb-4">Leading institution in academic excellence and innovation</p>
            <span className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">Primary Partner</span>
          </div>
          {/* Medium Partners */}
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="w-10 h-10 bg-accent-50 rounded-xl flex items-center justify-center mb-3">
              <Award className="w-5 h-5 text-accent-500" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Industrial Training Fund</h3>
            <p className="text-gray-600 text-sm mb-3">Supporting skills development nationwide</p>
            <div className="flex flex-wrap gap-1 justify-center">
              <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">Skills Development</span>
              <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">Training Support</span>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="size-10 bg-accent-50 rounded-lg flex items-center justify-center mb-2">
              <Shield className="size-4 text-accent-500" />
            </div>
            <h3 className="font-medium text-gray-900 text-sm mb-1">National Universities Commission</h3>
            <p className="text-gray-600 text-xs">Education Standards & Quality Assurance</p>
          </div>
          {/* Industry Network */}
          <div className="md:col-span-2 lg:col-span-2 bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Industry Partners Network</h3>
                <p className="text-gray-600 mb-4">Leading employers across various sectors</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Oil & Gas</span>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Engineering</span>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Technology</span>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Manufacturing</span>
                </div>
              </div>
              <div className="flex justify-center space-x-4">
                <div className="w-12 h-12 bg-accent-50 rounded-xl flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-accent-500" />
                </div>
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                  <Globe className="w-6 h-6 text-gray-600" />
                </div>
              </div>
            </div>
          </div>
          {/* Small Partners */}
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="size-10 bg-accent-50 rounded-lg flex items-center justify-center mb-2">
              <FileText className="size-4 text-accent-500" />
            </div>
            <h3 className="font-medium text-gray-900 text-sm mb-1">NBTE</h3>
            <p className="text-gray-600 text-xs">National Board for Technical Education</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="size-10 bg-accent-50 rounded-lg flex items-center justify-center mb-2">
              <Building2 className="w-4 h-4 text-accent-500" />
            </div>
            <h3 className="font-medium text-gray-900 text-sm mb-1">Corporate Partners</h3>
            <p className="text-gray-600 text-xs">Leading private sector organizations</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="size-10 bg-accent-50 rounded-lg flex items-center justify-center mb-2">
              <Globe className="w-4 h-4 text-accent-500" />
            </div>
            <h3 className="font-medium text-gray-900 text-sm mb-1">International Orgs</h3>
            <p className="text-gray-600 text-xs">Global development partnerships</p>
          </div>
        </div>
      </div>
    </section>
  )
}