import logoIcon from "../../assets/images/CodeSandbox.png";
import logoText from "../../assets/images/CodeLearn.png";
import { useState } from "react";

function Footer() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  const handleLinkClick = (link) => {
    setActiveLink(link);
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };
  return (
    <footer className="bg-[#160A3A] text-[white]">
      <div className="px-4 sm:px-0 py-[70px] mx-auto sm:max-w-xl md:max-w-full lg:max-w-[1170px]">
        <div className="grid grid-cols-10">
          <div className="col-span-3">
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
          </div>
          <div className="col-span-4">
            <ul className="flex items-center hidden space-x-[30px] lg:flex">
              <li>
                <a
                  href="/teacher"
                  aria-label="Teacher"
                  title="Teacher"
                  onClick={() => handleLinkClick("/teacher")}
                  className={` tracking-wide hover:text-[#EAE34A] transition-colors duration-200 text-[18px] ${
                    activeLink === "/teacher" ? "text-[#EAE34A]" : ""
                  }`}
                >
                  Teacher
                </a>
              </li>
              <li>
                <a
                  href="/course"
                  aria-label="Course"
                  title="Course"
                  onClick={() => handleLinkClick("/course")}
                  className={` tracking-wide hover:text-[#EAE34A] transition-colors duration-200 text-[18px] ${
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
                  className={` tracking-wide hover:text-[#EAE34A] transition-colors duration-200 text-[18px] ${
                    activeLink === "/about" ? "text-[#EAE34A]" : ""
                  }`}
                >
                  Scholarship
                </a>
              </li>
              <li>
                <a
                  href="/pricing"
                  aria-label="Pricing"
                  title="Pricing"
                  onClick={() => handleLinkClick("/pricing")}
                  className={` tracking-wide hover:text-[#EAE34A] transition-colors duration-200 text-[18px] ${
                    activeLink === "/pricing" ? "text-[#EAE34A]" : ""
                  }`}
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-3 space-y-2">
            <h3 className="text-[16px] font-bold">Stay up to date</h3>
            <p className="font-normal text-[14px] text-[#CFD1D6] w-[50%] pt-2 pb-[37px]">
              Stay Informed On How You Can Make a Difference
            </p>
            <div className="space-y-[10px]">
              <input
                type="email"
                placeholder="Your email address"
                className="w-[80%] bg-[#31215F] rounded-full h-[30px] px-3 py-5 outline-none border-none"
              />
              <button className="bg-[#EAE34A] text-[#31215F] px-[18px] py-[7px] rounded-full">
                Submit
              </button>
            </div>
          </div>
        </div>
        <div>
          <span className="text-[14px] font-semibold tracking-[10px]">CONTACT</span>
          <p className="text-[#EAE34A] font-bold text-[14px]">hollocode@gmail.com</p>
        </div>
        <center>
          <p className=" text-[12px] ">
            Copyright©codelearn 2021. All rights reserved
          </p>
        </center>
      </div>
    </footer>
  );
}

export default Footer;
