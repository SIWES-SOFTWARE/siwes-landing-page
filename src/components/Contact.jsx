// components/Contact.jsx
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white rounded-t-4xl -mt-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact & Support</h2>
          <div className="flex items-center justify-center space-x-2 text-gray-600 mb-4">
            <Clock className="w-5 h-5" />
            <span>Available 9 AM – 4 PM (Monday - Friday)</span>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Phone */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-white border border-accent-50 rounded-xl flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-accent-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Phone Support</h3>
                    <p className="text-gray-600">Direct line to our support team</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-700 font-mono">+234 84 817 000</p>
                  <p className="text-gray-700 font-mono">+234 84 817 001</p>
                </div>
              </div>
              {/* Email */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-white border border-accent-50 rounded-xl flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-accent-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Email Support</h3>
                    <p className="text-gray-600">Get help via email</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-700 font-mono break-all">siwes@uniport.edu.ng</p>
                  <p className="text-gray-700 font-mono break-all">info@siwes.uniport.edu.ng</p>
                </div>
              </div>
            </div>
          </div>
          {/* Office */}
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-white border border-accent-50 rounded-xl flex items-center justify-center mr-4">
                <MapPin className="w-6 h-6 text-accent-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Visit Our Office</h3>
                <p className="text-gray-600">Come see us in person</p>
              </div>
            </div>
            <div className="space-y-1 text-sm">
              <p className="text-gray-700">SIWES Unit, Academic Affairs</p>
              <p className="text-gray-700">University of Port Harcourt</p>
              <p className="text-gray-700">PMB 5323, Port Harcourt</p>
              <p className="text-gray-700">Rivers State, Nigeria</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}