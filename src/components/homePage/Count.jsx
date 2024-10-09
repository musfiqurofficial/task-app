import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import fram1 from "../../assets/images/Frame.png";
import fram2 from "../../assets/images/Combined Shape.png";
import fram3 from "../../assets/images/Combined Shape (1).png";
import fram4 from "../../assets/images/Group.png";

export default function Count() {
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div className="bg-[#2B0D57] text-white" ref={ref}>
      <div className="px-4 sm:px-0 py-[100px] mx-auto sm:max-w-xl md:max-w-full lg:max-w-[1170px]">
        <div className="flex flex-row justify-around items-center gap-10">
          <div className="text-center">
            <div className="rounded-full w-[90px] h-[90px] bg-[#E7FF7A] flex justify-center items-center">
              <img src={fram1} alt="" className="w-auto h-[40px]" />
            </div>
            <h1 className="text-[48px] font-semibold mb-[10px] mt-[20px]">
              {inView && <CountUp start={0} end={360} duration={2} />}+
            </h1>
            <p className="text-[#B7AACC] text-[24px]">Teachers</p>
          </div>
          <div className="text-center">
            <div className="rounded-full w-[90px] h-[90px] bg-[#FF8FDF] flex justify-center items-center">
              <img src={fram2} alt="" className="w-auto h-[40px]" />
            </div>
            <h1 className="text-[48px] font-semibold mb-[10px] mt-[20px]">
              {inView && <CountUp start={0} end={30} duration={2.5} />}K+
            </h1>
            <p className="text-[#B7AACC] text-[24px]">Students</p>
          </div>
          <div className="text-center">
            <div className="rounded-full w-[90px] h-[90px] bg-[#FF5BB4] flex justify-center items-center">
              <img src={fram3} alt="" className="w-auto h-[40px]" />
            </div>
            <h1 className="text-[48px] font-semibold mb-[10px] mt-[20px]">
              {inView && <CountUp start={0} end={8} duration={2} />}K+
            </h1>
            <p className="text-[#B7AACC] text-[24px]">Lessons</p>
          </div>
          <div className="text-center">
            <div className="rounded-full w-[90px] h-[90px] bg-[#FF8787] flex justify-center items-center">
              <img src={fram4} alt="" className="w-auto h-[25px]" />
            </div>
            <h1 className="text-[48px] font-semibold mb-[10px] mt-[20px]">
              {inView && <CountUp start={0} end={200} duration={1.5} />}
            </h1>
            <p className="text-[#B7AACC] text-[24px]">Partners</p>
          </div>
          <div className="text-center">
            <div className="rounded-full w-[90px] h-[90px] bg-[#65FBD5] flex justify-center items-center">
              <img src={fram1} alt="" className="w-auto h-[40px]" />
            </div>
            <h1 className="text-[48px] font-semibold mb-[10px] mt-[20px]">
              {inView && <CountUp start={0} end={60} duration={2} />}+
            </h1>
            <p className="text-[#B7AACC] text-[24px]">Success</p>
          </div>
        </div>
      </div>
    </div>
  );
}
