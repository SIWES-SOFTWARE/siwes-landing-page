// components/WhoWeServe.jsx
import { GraduationCap, Building2, Users } from "lucide-react"

export default function WhoWeServe() {
    const targets = [
        {
            icon: GraduationCap,
            title: "Students (UniPort)",
            desc: "Already placed? Register with your SCAF details and access exclusive resources.",
            color: "blue",
            href: "https://siwes.uniport.edu.ng/student"
        },
        {
            icon: Building2,
            title: "Coordinators",
            desc: "Manage and oversee SIWES student activities with ease. Access tools to approve placements, assign supervisors, and track student progress.",
            color: "indigo",
            href: "https://siwes.uniport.edu.ng/coordinator"
        },
        {
            icon: Users,
            title: "SIWES Supervisors",
            desc: "Oversee assigned students during their SIWES program. Monitor performance, provide guidance, and submit evaluation reports seamlessly.",
            color: "green",
            href: "https://siwes.uniport.edu.ng/supervisor"
        },
        {
            icon: Users,
            title: "Institution Admin",
            desc: "Manage institutional SIWES operations, monitor placements, and generate insightful reports.",
            color: "purple",
            href: "https://siwes.uniport.edu.ng/admin"
        }
    ]

    return (
        <section id="who-we-serve" className="py-20 bg-gray-50 rounded-t-4xl">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Who We Serve</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Connecting students, employers, and institutions for successful SIWES placements
                    </p>
                </div>
                <div className="overflow-x-auto scrollbar-hide">
                    <div className="flex gap-6 p-4 snap-x snap-mandatory">
                        {targets.map((target, index) => (
                            <div key={index} className="flex flex-col flex-shrink-0 justify-between w-80 snap-center bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
                                <section>
                                    <div className={`w-12 h-12 bg-accent-50 rounded-xl flex items-center justify-center mb-4`}>
                                        <target.icon className={`w-6 h-6 text-accent-500`} />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{target.title}</h3>
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        {target.desc}
                                    </p>
                                </section>

                                <a
                                    href={target.href}
                                    className="w-full py-2 px-4 border bg-accent-500 text-white border-gray-300 rounded-lg hover:bg-accent-500/90 transition-colors block text-center"
                                >
                                    Get Started
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}