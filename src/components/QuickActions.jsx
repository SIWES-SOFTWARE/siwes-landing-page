// components/QuickActions.jsx
import { FileText, Building2, Users, GraduationCap, ArrowRight } from "lucide-react"

export default function QuickActions() {
  const actions = [
    { icon: FileText, title: "Request SIWES Attachment", desc: "Students can submit attachment requests", color: "blue", text: "Get Started" },
    { icon: Building2, title: "View Employers' Requests", desc: "Browse available placement opportunities", color: "indigo", text: "Browse" },
    { icon: Users, title: "Request SIWES Students", desc: "Employers can request student placements", color: "green", text: "Request" },
    { icon: GraduationCap, title: "View Student Requests", desc: "Employers can review student applications", color: "purple", text: "Review" },
  ]

  return (
    <section id="quick-actions" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Actions</h2>
          <p className="text-xl text-gray-600">Fast-track your SIWES journey with our streamlined processes</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {actions.map((action, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className={`w-10 h-10 ${action.color === 'blue' ? 'bg-blue-100 text-blue-600' : action.color === 'indigo' ? 'bg-indigo-100 text-indigo-600' : action.color === 'green' ? 'bg-green-100 text-green-600' : 'bg-purple-100 text-purple-600'} rounded-xl flex items-center justify-center mr-3 flex-shrink-0`}>
                  <action.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{action.title}</h3>
                  <p className="text-gray-600 text-sm">{action.desc}</p>
                </div>
              </div>
              <button className={`w-full py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2 ${
                action.color === 'blue' ? 'bg-blue-600 text-white hover:bg-blue-700' :
                action.color === 'indigo' ? 'bg-indigo-600 text-white hover:bg-indigo-700' :
                action.color === 'green' ? 'bg-green-600 text-white hover:bg-green-700' :
                'bg-purple-600 text-white hover:bg-purple-700'
              }`}>
                <span>{action.text}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}