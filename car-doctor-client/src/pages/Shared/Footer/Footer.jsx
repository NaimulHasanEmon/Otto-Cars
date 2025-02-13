import { Link } from 'react-router-dom';

const logo = 'https://i.ibb.co.com/p7C637g/logo.png';

const Footer = () => {
    return (
        <footer className="bg-neutral-900 text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div>
                        <img src={logo} alt="Car Doctor Logo" className="h-16 mb-4" />
                        <p className="text-gray-400">
                            Your trusted partner in automotive care. Providing reliable service since 2000.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
                            <li><Link to="/services" className="text-gray-400 hover:text-white">Services</Link></li>
                            <li><Link to="/booking" className="text-gray-400 hover:text-white">Book Appointment</Link></li>
                            <li><Link to="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>123 Auto Street, Car City</li>
                            <li>Phone: (555) 123-4567</li>
                            <li>Email: info@cardoctor.com</li>
                            <li>Hours: Mon-Sat: 8:00 AM - 6:00 PM</li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Newsletter</h3>
                        <p className="text-gray-400 mb-4">Subscribe for updates and special offers</p>
                        <div className="flex flex-col space-y-2">
                            <input 
                                type="email" 
                                placeholder="Enter your email"
                                className="px-4 py-2 bg-gray-800 text-white rounded focus:outline-none"
                            />
                            <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-300">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-center md:text-left">
                            © {new Date().getFullYear()} Car Doctor. All rights reserved.
                        </p>
                        <div className="flex space-x-4 mt-4 md:mt-0">
                            <a href="#" className="text-gray-400 hover:text-white">
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
