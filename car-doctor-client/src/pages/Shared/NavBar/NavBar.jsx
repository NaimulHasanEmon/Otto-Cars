import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const logo = 'https://i.ibb.co.com/p7C637g/logo.png';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Add useEffect to handle screen resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const navLinks = [
        { to: "/", title: "Home", text: "Home", icon: "🏠" },
        { to: "/about", title: "About Us", text: "About", icon: "ℹ️" },
        { to: "/services", title: "Our Services", text: "Services", icon: "🔧" },
        { to: "/blog", title: "Blog Posts", text: "Blog", icon: "📝" },
        { to: "/contact", title: "Contact Us", text: "Contact", icon: "📞" }
    ];

    const commonElements = {
        search: {
            title: "Search",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transition-transform hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            )
        },
        cart: {
            to: "/cart",
            title: "View Cart",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transition-transform hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            badge: "0"
        },
        cta: [
            {
                to: "/booking",
                title: "Book Appointment",
                text: "Appointment",
                className: "px-6 py-2.5 text-red-600 hover:text-white hover:bg-red-600 transition-all duration-300 border-2 border-red-500 rounded-full font-semibold"
            },
            {
                to: "/login",
                title: "Login to Account",
                text: "Login",
                className: "px-6 py-2.5 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 transition-all duration-300 hover:shadow-lg"
            }
        ]
    };

    const renderIconButton = ({ title, icon, to, badge, className }) => (
        to ? (
            <Link to={to} title={title} className={`text-gray-700 hover:text-red-600 transition duration-300 relative ${className || ''}`}>
                {icon}
                {badge && <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">{badge}</span>}
            </Link>
        ) : (
            <button title={title} className="text-gray-700 hover:text-red-600 transition duration-300">
                {icon}
            </button>
        )
    );

    return (
        <>
            <nav className="fixed w-full top-0 z-[100]">
                <div className="backdrop-blur-md bg-white/90 shadow-lg">
                    <div className="container mx-auto px-4 md:px-6 max-w-[1200px]">
                        <div className="flex justify-between items-center h-20">
                            {/* Logo */}
                            <Link to="/" title="Car Doctor Home" className="transition-transform hover:scale-105">
                                <img src={logo} alt="Car Doctor Logo" className="h-10 sm:h-12 md:h-14 lg:h-16" />
                            </Link>

                            {/* Navigation Links */}
                            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.to}
                                        to={link.to}
                                        title={link.title}
                                        className="group flex items-center space-x-1 text-gray-700 hover:text-red-600 transition-all duration-300"
                                    >
                                        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">{link.icon}</span>
                                        <span className="font-medium">{link.text}</span>
                                    </Link>
                                ))}
                            </div>

                            {/* Right side buttons */}
                            <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
                                {renderIconButton(commonElements.search)}
                                {renderIconButton(commonElements.cart)}
                                {commonElements.cta.map((button) => (
                                    <Link
                                        key={button.to}
                                        to={button.to}
                                        title={button.title}
                                        className={`${button.className} text-sm lg:text-base px-4 lg:px-6 py-2`}
                                    >
                                        {button.text}
                                    </Link>
                                ))}
                            </div>

                            {/* Mobile menu button */}
                            <button
                                className="md:hidden p-2"
                                onClick={() => setIsOpen(true)}
                            >
                                <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Dropdown with improved styling */}
                <div 
                    className={`
                        md:hidden fixed top-0 right-0 h-full w-72 bg-white shadow-2xl z-50
                        transform transition-transform duration-500 ease-in-out
                        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
                    `}
                >
                    {/* Close Button */}
                    <button 
                        title="Close Menu"
                        onClick={() => setIsOpen(false)}
                        className="absolute top-4 right-4 text-gray-700 hover:text-red-600 focus:outline-none"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Mobile Menu Content with improved styling */}
                    <div className="flex flex-col px-6 py-16 space-y-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                title={link.title}
                                className="group flex items-center space-x-3 text-gray-700 hover:text-red-600 transition-all duration-300 pb-2 border-b border-red-500/30 relative"
                                onClick={() => setIsOpen(false)}
                            >
                                <span>{link.icon}</span>
                                <span className="font-medium">{link.text}</span>
                                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-red-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                            </Link>
                        ))}
                        
                        <div className="flex items-center space-x-4 pt-4 pb-2 border-b border-red-500/30 relative">
                            {renderIconButton(commonElements.search)}
                            {renderIconButton(commonElements.cart)}
                            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-red-500"></span>
                        </div>

                        <div className="flex flex-col space-y-3 pt-4">
                            {commonElements.cta.map((button) => (
                                <Link
                                    key={button.to}
                                    to={button.to}
                                    title={button.title}
                                    className={button.className + " text-center"}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {button.text}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Improved overlay with blur effect */}
                <div 
                    onClick={() => setIsOpen(false)}
                    className={`
                        fixed inset-0 backdrop-blur-sm bg-black/20 z-40
                        transition-all duration-500 ease-in-out
                        ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
                    `}
                ></div>
            </nav>
            {/* Add a spacer div to push content down */}
            <div className="h-20"></div>
        </>
    );
};

export default NavBar;
