import verifyIcon from "../../assets/images/Vector.png";
import videoIcon from "../../assets/images/Play.png";
import startIcon from "../../assets/images/Star 3.png";
import crowd from "../../assets/images/Group 1000006823.png";
import capterra from "../../assets/images/Group 1000006824.png";
import get from "../../assets/images/Group 1000006826.png";
import ellipse from "../../assets/images/Ellipse 74.png";
import img1 from "../../assets/images/image 1201.png";
import img2 from "../../assets/images/image 1198.png";
import img3 from "../../assets/images/portrait-handsome-young-man-with-crossed-arms-removebg-preview.png";

export default function Hero() {
  return (
    <div className="bg-[#160A3A] text-white overflow-hidden relative ">
      <div className="px-4 sm:px-0 py-[100px] mx-auto sm:max-w-xl md:max-w-full lg:max-w-[1170px] h-[90vh] flex items-center  ">
        <div className="grid grid-cols-2 gap-20">
          <div className="">
            <div className="max-w-xl mb-[36px]">
              <div className="mb-[50px]">
                <p
                  className="inline-flex py-[6px] px-[24px] rounded-[8px] justify-center items-center gap-2"
                  style={{
                    background: "linear-gradient(to right, #241457, #4F2BBD)",
                  }}
                >
                  <img src={verifyIcon} alt="" className="w-auto h-[19px]" />
                  Verified by Coursera
                </p>
              </div>
              <h2 className="max-w-lg mb-[31px] text-[70px] font-[600] tracking-tight sm:leading-none">
                Learn Code
                <br className="hidden md:block" />
                From top
                <span className="inline-block underline text-[#EAE34A] pl-2">
                  Coder
                </span>
              </h2>
              <p className="text-base md:text-lg">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using
              </p>
            </div>
            <div className="flex flex-col items-center md:flex-row mb-[36px]">
              <ul className="flex items-center space-x-[10px] lg:flex">
                <li>
                  <button
                    className="bg-[#EAE34A] text-[20px] font-[500] py-[12px] px-[20px] rounded-[4px] text-[#1B0C4D]"
                    aria-label="Login"
                    title="Login"
                  >
                    Get Started
                  </button>
                </li>
                <li>
                  <button
                    className="bg-[#37266F] text-[20px] font-[500] py-[12px] px-[20px] rounded-[4px] text-white flex justify-center items-center gap-2"
                    aria-label="Sign up"
                    title="Sign up"
                  >
                    <img src={videoIcon} alt="" className="w-auto h-[20px]" />
                    How it works
                  </button>
                </li>
              </ul>
            </div>
            <div className="flex justify-start items-center gap-1 mb-[20px]">
              <img src={startIcon} alt="" className="w-auto h-[20px]" />
              <img src={startIcon} alt="" className="w-auto h-[20px]" />
              <img src={startIcon} alt="" className="w-auto h-[20px]" />
              <img src={startIcon} alt="" className="w-auto h-[20px]" />
              <img src={startIcon} alt="" className="w-auto h-[20px]" />
              <span className="pl-2">Based on 10,000+ reviews on</span>
            </div>
            <div className="flex justify-start items-center gap-4">
              <img src={crowd} alt="" className="w-auto h-[20px]" />
              <img src={capterra} alt="" className="w-auto h-[20px]" />
              <img src={get} alt="" className="w-auto h-[20px]" />
            </div>
          </div>
          <div className="relative z-30">
            <div className="grid grid-cols-3 gap-[20px]">
              <div
                className="h-[459px] w-full rounded-full overflow-hidden relative  mt-[30%]"
                style={{
                  background: "linear-gradient(to bottom, #98FDE3, #3E3761)",
                }}
              >
                <center className="text-black mt-14">
                  <h3 className="text-[22px] font-semibold">Zillio Moniel</h3>
                  <p>Data Engineer</p>
                </center>
                <img
                  src={img1}
                  alt=""
                  className="w-full h-auto absolute bottom-0"
                />
              </div>
              <div
                className="h-[459px] w-full rounded-full overflow-hidden relative mt-[70%]"
                style={{
                  background: "linear-gradient(to bottom, #DCB1FF, #221644)",
                }}
              >
                <center className="text-black mt-14">
                  <h3 className="text-[22px] font-semibold">Lissa Kie</h3>
                  <p>React Engineer</p>
                </center>
                <img
                  src={img2}
                  alt=""
                  className="w-full h-auto absolute bottom-0"
                />
              </div>
              <div
                className="h-[459px] w-full rounded-full overflow-hidden relative"
                style={{
                  background: "linear-gradient(to bottom, #85ACFF, #3E3761)",
                }}
              >
                <center className="text-black mt-14">
                  <h3 className="text-[22px] font-semibold">Killan James</h3>
                  <p>Laravel Engineer</p>
                </center>
                <img
                  src={img3}
                  alt=""
                  className="w-full h-auto absolute bottom-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[50%] right-0 transform -translate-y-1/2">
        <img src={ellipse} alt="" className="w-auto h-[800px]" />
      </div>
    </div>
  );
}
