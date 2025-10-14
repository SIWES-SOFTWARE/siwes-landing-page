// components/Benefits.jsx
import { Target, Building2, Award, CheckCircle, TrendingUp, Network, Star } from "lucide-react"

export default function Benefits() {
    const benefits = [
        {
            icon: Target,
            title: "Skills Development",
            desc: "Enhance practical skills in real work environments through hands-on experience. Develop technical competencies that complement your academic knowledge.",
            color: "blue",
            items: [
                { icon: CheckCircle, text: "Practical Skills" },
                { icon: TrendingUp, text: "Career Growth" }
            ]
        },
        {
            icon: Building2,
            title: "Industry Exposure",
            desc: "Gain insights into industry practices, standards, and professional workflows. Experience real workplace dynamics and corporate culture.",
            color: "indigo",
            items: [
                { icon: Network, text: "Professional Networking" },
                { icon: Star, text: "Excellence Recognition" }
            ]
        },
        {
            icon: Award,
            title: "Career Advancement",
            desc: "Open doors to future career opportunities and professional growth. Build a strong foundation for your professional journey.",
            color: "green",
            stat: "85%"
        }
    ]

    return (
        <section id="benefits" className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">SIWES Benefits</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Discover how SIWES transforms your academic journey into real-world expertise
                    </p>
                </div>
                <div className="space-y-4 md:space-y-16">
                    {benefits.map((benefit, index) => (
                        <article className="grid md:grid-cols-2">
                            {(index + 1) % 2 === 0 && <div />}
                            <div key={index} className={`relative backdrop-blur-3xl overflow-hidden grid md:grid-cols-2 gap-12 border border-gray-100 p-8 rounded-2xl items-center`}>
                                <div className={index % 2 === 1 ? 'order-2 md:order-1' : ''}>
                                    <div className={`w-16 h-16 bg-accent-500 rounded-2xl flex items-center justify-center mb-6`}>
                                        <benefit.icon className={`w-8 h-8 text-white`} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {benefit.desc}
                                    </p>
                                </div>
                                <div className={index % 2 === 1 ? 'order-1 md:order-2' : ''}>
                                    {benefit.stat ? (
                                        <div className="text-center bg-green-50 p-8 rounded-2xl">
                                            <div className="text-4xl font-bold text-green-600 mb-2">{benefit.stat}</div>
                                            <p className="text-gray-700">Students secure jobs within 6 months</p>
                                        </div>
                                    ) : (
                                        <div className="space-y-3">
                                            {benefit.items.map((item, i) => (
                                                <div key={i} className={`flex items-center space-x-3 p-4 bg-${benefit.color}-50 rounded-xl`}>
                                                    <item.icon className={`w-5 h-5 text-${benefit.color}-600 flex-shrink-0`} />
                                                    <span className="text-gray-700 font-medium">{item.text}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <div className={`hidden md:block blur-2xl size-20 rounded-full bg-accent-100 absolute 
                                ${index === 0 ? "bottom-0 right-0" : index === 2 ? "top-0 right-0" : "bottom-1/2 left-0"}`} />
                            </div>
                            {(index + 1) % 2 > 0 && <div />}
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}