import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const logo = "https://i.ibb.co.com/p7C637g/logo.png";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  // Add useEffect to handle screen resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { to: "/", title: "Home", text: "Home", icon: "🏠" },
    { to: "/about", title: "About Us", text: "About", icon: "ℹ️" },
    { to: "/services", title: "Our Services", text: "Services", icon: "🔧" },
    { to: "/blog", title: "Blog Posts", text: "Blog", icon: "📝" },
    { to: "/contact", title: "Contact Us", text: "Contact", icon: "📞" },
  ];

  const commonElements = {
    search: {
      title: "Search",
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6 transition-transform hover:scale-110'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
          />
        </svg>
      ),
    },
    cart: {
      to: "/cart",
      title: "View Cart",
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6 transition-transform hover:scale-110'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
          />
        </svg>
      ),
      badge: "0",
    },
    cta: [
      {
        to: "/booking",
        title: "Book Appointment",
        text: "Appointment",
        className:
          "px-2 lg:px-6 py-2.5 text-red-600 hover:text-white hover:bg-red-600 transition-all duration-300 border-2 border-red-500 rounded-full font-semibold",
      },
      {
        to: "/login",
        title: user ? "Logout" : "Login to Account",
        text: user ? "Logout" : "Login",
        onClick: user
          ? () => {
              logOut()
                .then(() => {
                  navigate("/login");
                })
                .catch((err) => console.log(err));
            }
          : null,
        className:
          "px-6 py-2.5 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 transition-all duration-300 hover:shadow-lg",
      },
    ],
  };

  const renderIconButton = ({ title, icon, to, badge, className }) =>
    to ? (
      <Link
        to={to}
        title={title}
        className={`text-gray-700 hover:text-red-600 transition duration-300 relative ${
          className || ""
        }`}
      >
        {icon}
        {badge && (
          <span className='absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs'>
            {badge}
          </span>
        )}
      </Link>
    ) : (
      <button
        title={title}
        className='text-gray-700 hover:text-red-600 transition duration-300'
      >
        {icon}
      </button>
    );

  // Update the rendering of CTA buttons to handle onClick
  const renderCtaButton = (button) => {
    if (button.onClick) {
      return (
        <button
          key={button.text}
          onClick={button.onClick}
          title={button.title}
          className={`${button.className} text-sm lg:text-base px-4 lg:px-6 py-2`}
        >
          {button.text}
        </button>
      );
    }
    return (
      <Link
        key={button.to}
        to={button.to}
        title={button.title}
        className={`${button.className} text-sm lg:text-base px-4 lg:px-6 py-2`}
      >
        {button.text}
      </Link>
    );
  };

  return (
    <>
      <nav className='fixed top-0 z-[100] w-full'>
        <div className='backdrop-blur-md bg-white/90 mx-2 sm:mx-4 md:mx-6 lg:mx-30 rounded-b-2xl shadow-lg'>
          <div className='container mx-auto px-5 max-w-7xl'>
            <div className='flex justify-between h-20'>
              {/* Logo */}
              <Link
                to='/'
                title='Car Doctor Home'
                className='transition-transform hover:scale-105'
              >
                <img
                  src={logo}
                  alt='Car Doctor Logo'
                  className='h-10 sm:h-12 mt-4 md:mt-2 md:h-14 lg:h-16'
                />
              </Link>

              {/* Navigation Links */}
              <div className='hidden md:flex items-center space-x-2 lg:space-x-8 mr-1 lg:mr-2'>
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    title={link.title}
                    className='group flex items-center space-x-1 text-gray-700 hover:text-red-600 transition-all duration-300'
                  >
                    <span className='opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                      {link.icon}
                    </span>
                    <span className='font-medium'>{link.text}</span>
                  </Link>
                ))}
              </div>

              {/* Right side buttons */}
              <div className='hidden md:flex items-center space-x-1 lg:space-x-4'>
                {renderIconButton(commonElements.search)}
                {renderIconButton(commonElements.cart)}
                {commonElements.cta.map(renderCtaButton)}
              </div>

              {/* Mobile menu button */}
              <button className='md:hidden p-3' onClick={() => setIsOpen(true)}>
                <svg
                  className='h-6 w-6'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path d='M4 6h16M4 12h16M4 18h16'></path>
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
                        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          {/* Close Button */}
          <button
            title='Close Menu'
            onClick={() => setIsOpen(false)}
            className='absolute top-4 right-4 text-gray-700 hover:text-red-600 focus:outline-none'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>

          {/* Mobile Menu Content with improved styling */}
          <div className='flex flex-col px-6 py-16 space-y-6'>
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                title={link.title}
                className='group flex items-center space-x-3 text-gray-700 hover:text-red-600 transition-all duration-300 pb-2 border-b border-red-500/30 relative'
                onClick={() => setIsOpen(false)}
              >
                <span>{link.icon}</span>
                <span className='font-medium'>{link.text}</span>
                <span className='absolute bottom-0 left-0 w-full h-[2px] bg-red-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300'></span>
              </Link>
            ))}

            <div className='flex items-center space-x-4 pt-4 pb-2 border-b border-red-500/30 relative'>
              {renderIconButton(commonElements.search)}
              {renderIconButton(commonElements.cart)}
              <span className='absolute bottom-0 left-0 w-full h-[2px] bg-red-500'></span>
            </div>

            <div className='flex flex-col space-y-3 pt-4'>
              {commonElements.cta.map(renderCtaButton)}
            </div>
          </div>
        </div>

        {/* Improved overlay with blur effect */}
        <div
          onClick={() => setIsOpen(false)}
          className={`
                        fixed inset-0 backdrop-blur-sm bg-black/20 z-40
                        transition-all duration-500 ease-in-out
                        ${
                          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                        }
                    `}
        ></div>
      </nav>
      {/* Add a spacer div to push content down */}
      <div className='h-20'></div>
    </>
  );
};

export default NavBar;
