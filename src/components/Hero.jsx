// components/Hero.jsx
import { ArrowRight } from "lucide-react"

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden pt-16">
            {/* Overlay for text readability */}
            <div className="absolute inset-0 bg-black/40"></div>
            {/* Optional subtle pattern overlay */}
            <div className="absolute inset-0 bg-[url('/siwes-landing-hero.jpg')] bg-no-repeat bg-fixed bg-cover opacity-50"></div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-accent-500 to-purple-600 bg-clip-text text-transparent mb-6 leading-tight drop-shadow-lg">
                        SIWES UniPort
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed max-w-3xl mx-auto drop-shadow-md">
                        Accelerating Your Practical Experience – Empowering UniPort students to secure top SIWES attachments and connect with leading employers across Nigeria.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                            href="https://siwes.uniport.edu.ng/student"
                            className="group flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-accent-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                        >
                            Get Started
                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="absolute inset-0 bg-black/80"></div>
        </section>
    )
}