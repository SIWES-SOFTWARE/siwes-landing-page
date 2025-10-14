// components/Footer.jsx
export default function Footer() {
    const quickLinks = [
        { text: "About SIWES", href: "https://www.siwes.itf.gov.ng/" },
        { text: "Student Portal", href: "https://siwes.uniport.edu.ng/student/" },
        { text: "Admin Portal", href: "https://siwes.uniport.edu.ng/admin/" },
        { text: "Coordinator", href: "https://siwes.uniport.edu.ng/coordinator/" },
        { text: "Supervisor", href: "https://siwes.uniport.edu.ng/supervisor/" }
    ]
    const supportLinks = [
        // { text: "Help Center", href: "https://siwes.uniport.edu.ng/help-center" },
        { text: "Contact Us", href: "#contact" },
        // { text: "Privacy Policy", href: "https://siwes.uniport.edu.ng/privacy-policy" },
        // { text: "Terms of Use", href: "https://siwes.uniport.edu.ng/terms-of-use" }
    ]

    return (
        <footer className="bg-accent-900 text-white py-12 rounded-t-xl">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <img src="/logo.png" alt="UniPort Logo" className="h-6 " />
                            <span className="text-lg font-bold">SIWES UniPort</span>
                        </div>
                        <p className="text-gray-400 leading-relaxed">
                            Empowering University of Port Harcourt students through quality industrial work experience.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.text}>
                                    <a href={link.href} target="_blank" className="text-gray-400 hover:text-white transition-colors">{link.text}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Support</h4>
                        <ul className="space-y-2">
                            {supportLinks.map((link) => (
                                <li key={link.text}>
                                    <a href={link.href} className="text-gray-400 hover:text-white transition-colors">{link.text}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* <div>
                        <h4 className="font-semibold mb-4">Newsletter</h4>
                        <p className="text-gray-400 mb-4 text-sm">Stay updated with SIWES announcements</p>
                        <div className="flex flex-col gap-2">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-500"
                            />
                            <button className="px-6 py-2 bg-accent-500 text-white rounded-lg hover:bg-accent-500/90 transition-colors font-medium">
                                Subscribe
                            </button>
                        </div>
                    </div> */}
                </div>
                <div className="border-t border-gray-800 pt-6 text-center text-gray-400">
                    <p>&copy; 2024 SIWES UniPort. All rights reserved. University of Port Harcourt.</p>
                </div>
            </div>
        </footer>
    )
}