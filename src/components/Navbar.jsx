"use client"
import { useState, useEffect } from "react"
import { Menu, X, ChevronDown } from "lucide-react"

export default function Navbar({ isMobileMenuOpen, setIsMobileMenuOpen }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > window.innerHeight)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const mainLinks = [
        { href: "#home", text: "Home" },
        { href: "#who-we-serve", text: "Who We Serve" },
        { href: "#benefits", text: "Benefits" },
        { href: "#partners", text: "Partners" },
        { href: "#contact", text: "Contact" },
    ]

    const dropdownLinks = [
        { href: "#directors-message", text: "Director's Message" },
        { href: "#instructions", text: "Instructions" },
        { href: "#quick-actions", text: "Quick Actions" },
    ]

    const allNavLinks = [
        ...mainLinks,
        ...dropdownLinks,
    ]

    const handleMobileLinkClick = () => {
        setIsMobileMenuOpen(false)
    }

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen)
    }

    const linkTextColor = isScrolled ? 'text-black' : 'text-gray-300'
    const navBgColor = isScrolled ? 'bg-white' : 'bg-accent'
    const navBorderColor = isScrolled ? 'border-gray-200' : 'border-white/10'
    const hamburgerColor = isScrolled ? 'text-black' : 'text-gray-300'
    const dropdownBtnColor = isScrolled ? 'text-black' : 'text-gray-300'
    const dropdownBtnHover = isScrolled ? 'hover:text-gray-900' : 'hover:text-accent-500'

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 ${navBgColor} backdrop-blur-md border-b ${navBorderColor} shadow-sm transition-colors duration-300`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center space-x-2">
                        <a href="#home">
                            <img src="/logo.png" alt="UniPort Logo" className="h-8 w-13" />
                        </a>
                        {/* <span className="text-xl font-bold text-gray-900">SIWES UniPort</span> */}
                    </div>
                    <div className="hidden md:flex items-center space-x-4 relative">
                        {mainLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className={`${linkTextColor} hover:bg-accent-50 hover:text-accent-500 p-2 rounded-lg transition-colors`}
                            >
                                {link.text}
                            </a>
                        ))}
                        <div className="relative">
                            <button
                                onClick={toggleDropdown}
                                className={`${dropdownBtnColor} ${isDropdownOpen ? "bg-accent-50 text-accent-500" : ""} flex items-center ${dropdownBtnHover} hover:bg-accent-50 p-2 rounded-lg transition-colors`}
                            >
                                More
                                <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                            </button>
                            {isDropdownOpen && (
                                <div className="absolute top-full right-0 mt-2 bg-white shadow-lg rounded-lg py-2 z-50 w-64 border border-gray-200">
                                    {dropdownLinks.map((link) => (
                                        <a
                                            key={link.href}
                                            href={link.href}
                                            className="block px-4 py-2 text-gray-600 hover:bg-accent-50 hover:text-accent-500 transition-colors"
                                            onClick={() => setIsDropdownOpen(false)}
                                        >
                                            {link.text}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                        <a
                            href="https://siwes.uniport.edu.ng/student"
                            target="_blank"
                            className="px-4 py-2 bg-accent-500 text-white rounded-lg hover:bg-accent-500/90 transition-colors font-medium"
                        >
                            Login
                        </a>
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className={`p-2 ${hamburgerColor} hover:bg-white hover:text-accent-500 rounded-md ${isMobileMenuOpen ? "!text-accent-500 bg-white" : ""}`}
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>
            {isMobileMenuOpen && (
                <div className="md:hidden bg-transparent border-t border-gray-200">
                    <div className="py-4 space-y-2">
                        {allNavLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={handleMobileLinkClick}
                                className={`block w-full text-left ${linkTextColor} hover:bg-white hover:text-accent-500 px-4 py-2`}
                            >
                                {link.text}
                            </a>
                        ))}

                        <div className="px-4">
                            <a
                                target="_blank"
                                href="https://siwes.uniport.edu.ng/student"
                                onClick={handleMobileLinkClick}
                                className="block w-full px-4 py-2  bg-accent-500 text-white rounded-lg hover:bg-accent-500/90 text-center font-medium"
                            >
                                Login
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}