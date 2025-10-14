// components/Instructions.jsx
import { GraduationCap, Building2 } from "lucide-react"

export default function Instructions() {
    const studentSteps = [
        { num: 1, title: "Register Your Account", desc: "Set up your profile with your student ID and academic credentials" },
        { num: 2, title: "Complete the Master List Form", desc: "Enter your educational background, skills, and placement preferences" },
        { num: 3, title: "Download Your IT Letter", desc: "Generate and retrieve your official Industrial Training letter" },
        { num: 4, title: "Search for Placements", desc: "Explore and apply to suitable SIWES opportunities in your discipline" },
        { num: 5, title: "Submit the Placement List Form", desc: "Track your application progress and liaise with potential employers" },
    ]

    // const employerSteps = [
    //     { num: 1, title: "Company Registration", desc: "Register your organization and verify company details" },
    //     { num: 2, title: "Post Opportunities", desc: "Create detailed SIWES placement listings with requirements" },
    //     { num: 3, title: "Review Applications", desc: "Browse student profiles and select suitable candidates" },
    //     { num: 4, title: "Manage Placements", desc: "Coordinate with students and provide progress feedback" },
    // ]

    return (
        <section id="instructions" className="py-20 bg-white rounded-t-4xl -mt-2">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Use Our Platform</h2>
                    <p className="text-xl text-gray-600">Step-by-step guide for students and employers to get started</p>
                </div>
                <div className="flex justify-center  gap-12">
                    {/* Students */}
                    <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-white border border-accent-50 rounded-xl flex items-center justify-center mr-4">
                                <GraduationCap className="w-6 h-6 text-accent-500" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold text-gray-900">For Students</h3>
                                <p className="text-gray-600">Get started with your SIWES program</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            {studentSteps.map((step, idx) => (
                                <div key={step.num} className="flex items-start space-x-4">
                                    <div className="w-8 h-8 bg-accent-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                                        {idx + 1}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">{step.title}</h4>
                                        <p className="text-gray-600">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Employers */}
                    {/* <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mr-4">
                                <Building2 className="w-6 h-6 text-indigo-600" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold text-gray-900">For Employers</h3>
                                <p className="text-gray-600">Host talented UniPort students</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            {employerSteps.map((step) => (
                                <div key={step.num} className="flex items-start space-x-4">
                                    <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                                        {step.num}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">{step.title}</h4>
                                        <p className="text-gray-600">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    )
}