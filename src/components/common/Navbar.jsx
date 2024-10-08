import { useState } from "react";
import logoIcon from "../../assets/images/CodeSandbox.png";
import logoText from "../../assets/images/CodeLearn.png";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/"); 

  const handleLinkClick = (link) => {
    setActiveLink(link);
    if (isMenuOpen) {
      setIsMenuOpen(false); 
    }
  };

  return (
    <div className="bg-[#1b0c4d] text-white sticky top-0 z-50">
      <div className="px-4 sm:px-0 mx-auto sm:max-w-xl md:max-w-full lg:max-w-[1170px]">
        <div className="relative flex items-center justify-between h-[80px]">
          <a
            href="/"
            aria-label="Company"
            title="Company"
            className="inline-flex items-center"
          >
            <div className="flex justify-center items-center gap-[6px]">
              <img src={logoIcon} alt="" className="w-auto h-[54px]" />
              <img src={logoText} alt="" className="w-[179px] " />
            </div>
          </a>
          <ul className="flex items-center hidden space-x-[30px] lg:flex">
            <li>
              <a
                href="/"
                aria-label="Home"
                title="Home"
                onClick={() => handleLinkClick("/")}
                className={`font-medium tracking-wide hover:text-[#EAE34A] transition-colors duration-200 text-[18px] ${
                  activeLink === "/" ? "text-[#EAE34A]" : ""
                }`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/course"
                aria-label="Course"
                title="Course"
                onClick={() => handleLinkClick("/course")}
                className={`font-medium tracking-wide hover:text-[#EAE34A] transition-colors duration-200 text-[18px] ${
                  activeLink === "/course" ? "text-[#EAE34A]" : ""
                }`}
              >
                Course
              </a>
            </li>
            <li>
              <a
                href="/about"
                aria-label="About us"
                title="About us"
                onClick={() => handleLinkClick("/about")}
                className={`font-medium tracking-wide hover:text-[#EAE34A] transition-colors duration-200 text-[18px] ${
                  activeLink === "/about" ? "text-[#EAE34A]" : ""
                }`}
              >
                About us
              </a>
            </li>
            <li>
              <a
                href="/pricing"
                aria-label="Pricing"
                title="Pricing"
                onClick={() => handleLinkClick("/pricing")}
                className={`font-medium tracking-wide hover:text-[#EAE34A] transition-colors duration-200 text-[18px] ${
                  activeLink === "/pricing" ? "text-[#EAE34A]" : ""
                }`}
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="/contact"
                aria-label="Contact"
                title="Contact"
                onClick={() => handleLinkClick("/contact")}
                className={`font-medium tracking-wide hover:text-[#EAE34A] transition-colors duration-200 text-[18px] ${
                  activeLink === "/contact" ? "text-[#EAE34A]" : ""
                }`}
              >
                Contact
              </a>
            </li>
          </ul>
          <ul className="flex items-center hidden space-x-[10px] lg:flex">
            <li>
              <a
                href="/login"
                className="bg-[#EAE34A] text-[20px] font-[500] py-[12px] px-[20px] rounded-[4px] text-[#1B0C4D]"
                aria-label="Login"
                title="Login"
              >
                Login
              </a>
            </li>
            <li>
              <a
                href="/signup"
                className="bg-[#37266F] text-[20px] font-[500] py-[12px] px-[20px] rounded-[4px] text-white"
                aria-label="Sign up"
                title="Sign up"
              >
                Sign up
              </a>
            </li>
          </ul>
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 " viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <a
                        href="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                      >
                        <svg
                          className="w-8 text-deep-purple-accent-400"
                          viewBox="0 0 24 24"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          stroke="currentColor"
                          fill="none"
                        >
                          <rect x="3" y="1" width="7" height="12" />
                          <rect x="3" y="17" width="7" height="6" />
                          <rect x="14" y="1" width="7" height="6" />
                          <rect x="14" y="11" width="7" height="12" />
                        </svg>
                        <span className="ml-2 text-xl font-bold tracking-wide  uppercase">
                          Company
                        </span>
                      </a>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 " viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <a
                          href="/"
                          aria-label="Our product"
                          title="Our product"
                          className="font-medium tracking-wide  transition-colors duration-200 text-[18px]"
                        >
                          Product
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          aria-label="Our product"
                          title="Our product"
                          className="font-medium tracking-wide  transition-colors duration-200 text-[18px]"
                        >
                          Features
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          aria-label="Product pricing"
                          title="Product pricing"
                          className="font-medium tracking-wide  transition-colors duration-200 text-[18px]"
                        >
                          Pricing
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          aria-label="About us"
                          title="About us"
                          className="font-medium tracking-wide  transition-colors duration-200 text-[18px]"
                        >
                          About us
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                          aria-label="Sign up"
                          title="Sign up"
                        >
                          Sign up
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
