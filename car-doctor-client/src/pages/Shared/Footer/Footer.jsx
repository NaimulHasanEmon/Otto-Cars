import { Link } from 'react-router-dom';

const logo = 'https://i.ibb.co.com/p7C637g/logo.png';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-b from-neutral-900 to-black text-white pt-20 pb-10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Company Info */}
                    <div>
                        <img src={logo} alt="Car Doctor Logo" className="h-20 mb-6 transform hover:scale-105 transition duration-300" />
                        <p className="text-gray-300 leading-relaxed">
                            Your trusted partner in automotive care. Providing premium service and excellence since 2000. We make your car care journey seamless and reliable.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-2xl font-bold mb-6 pb-1 relative group">
                            Quick Links
                            <span className="absolute bottom-0 left-0 w-0 h-1 bg-red-600 group-hover:w-16 transition-all duration-300"></span>
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/about" className="text-gray-300 hover:text-red-500 transition-colors duration-300 flex items-center">
                                    <span className="mr-2">→</span> About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" className="text-gray-300 hover:text-red-500 transition-colors duration-300 flex items-center">
                                    <span className="mr-2">→</span> Services
                                </Link>
                            </li>
                            <li>
                                <Link to="/booking" className="text-gray-300 hover:text-red-500 transition-colors duration-300 flex items-center">
                                    <span className="mr-2">→</span> Book Appointment
                                </Link>
                            </li>
                            <li>
                                <Link to="/blog" className="text-gray-300 hover:text-red-500 transition-colors duration-300 flex items-center">
                                    <span className="mr-2">→</span> Blog
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-2xl font-bold mb-6 pb-1 relative group">
                            Contact Us
                            <span className="absolute bottom-0 left-0 w-0 h-1 bg-red-600 group-hover:w-16 transition-all duration-300"></span>
                        </h3>
                        <ul className="space-y-4 text-gray-300">
                            <li className="flex items-center">
                                <i className="fas fa-map-marker-alt text-red-500 mr-3"></i>
                                123 Auto Street, Car City
                            </li>
                            <li className="flex items-center">
                                <i className="fas fa-phone text-red-500 mr-3"></i>
                                (555) 123-4567
                            </li>
                            <li className="flex items-center">
                                <i className="fas fa-envelope text-red-500 mr-3"></i>
                                info@cardoctor.com
                            </li>
                            <li className="flex items-center">
                                <i className="fas fa-clock text-red-500 mr-3"></i>
                                Mon-Sat: 8:00 AM - 6:00 PM
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-2xl font-bold mb-6 pb-1 relative group">
                            Newsletter
                            <span className="absolute bottom-0 left-0 w-0 h-1 bg-red-600 group-hover:w-16 transition-all duration-300"></span>
                        </h3>
                        <p className="text-gray-300 mb-6">Stay updated with our latest news and special offers</p>
                        <div className="flex flex-col space-y-3">
                            <input 
                                type="email" 
                                placeholder="Enter your email"
                                className="px-4 py-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300"
                            />
                            <button className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transform hover:-translate-y-1 transition duration-300 flex items-center justify-center">
                                <span>Subscribe</span>
                                <i className="fas fa-paper-plane ml-2"></i>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 mt-16 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-300 text-center md:text-left">
                            © {new Date().getFullYear()} Car Doctor. All rights reserved.
                        </p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <a href="#" className="text-gray-300 hover:text-red-500 transform hover:scale-125 transition duration-300">
                                <i className="fab fa-facebook-f text-xl"></i>
                            </a>
                            <a href="#" className="text-gray-300 hover:text-red-500 transform hover:scale-125 transition duration-300">
                                <i className="fab fa-twitter text-xl"></i>
                            </a>
                            <a href="#" className="text-gray-300 hover:text-red-500 transform hover:scale-125 transition duration-300">
                                <i className="fab fa-instagram text-xl"></i>
                            </a>
                            <a href="#" className="text-gray-300 hover:text-red-500 transform hover:scale-125 transition duration-300">
                                <i className="fab fa-youtube text-xl"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
