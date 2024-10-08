import fram1 from "../../assets/images/Frame.png";
import fram2 from "../../assets/images/Combined Shape.png";
import fram3 from "../../assets/images/Combined Shape (1).png";
import fram4 from "../../assets/images/Group.png";

export default function Count() {
  return (
    <div className="bg-[#2B0D57] text-white">
      <div className="px-4 sm:px-0 py-[100px] mx-auto sm:max-w-xl md:max-w-full lg:max-w-[1170px]">
        <div className="flex flex-row justify-around items-center gap-10">
          <div className="text-center">
            <div className="rounded-full w-[90px] h-[90px] bg-[#E7FF7A] flex justify-center items-center">
              <img src={fram1} alt="" className="w-auto h-[40px]" />
            </div>
            <h1 className="text-[48px] font-semibold mb-[10px] mt-[20px]">
              360+
            </h1>
            <p className="text-[#B7AACC] text-[24px]">Teachers</p>
          </div>
          <div className="text-center">
            <div className="rounded-full w-[90px] h-[90px] bg-[#FF8FDF] flex justify-center items-center">
              <img src={fram2} alt="" className="w-auto h-[40px]" />
            </div>
            <h1 className="text-[48px] font-semibold mb-[10px] mt-[20px]">
              30K+
            </h1>
            <p className="text-[#B7AACC] text-[24px]">Students</p>
          </div>
          <div className="text-center">
            <div className="rounded-full w-[90px] h-[90px] bg-[#FF5BB4] flex justify-center items-center">
              <img src={fram3} alt="" className="w-auto h-[40px]" />
            </div>
            <h1 className="text-[48px] font-semibold mb-[10px] mt-[20px]">
              8K+
            </h1>
            <p className="text-[#B7AACC] text-[24px]">Lessons</p>
          </div>
          <div className="text-center">
            <div className="rounded-full w-[90px] h-[90px] bg-[#FF8787] flex justify-center items-center">
              <img src={fram4} alt="" className="w-auto h-[25px]" />
            </div>
            <h1 className="text-[48px] font-semibold mb-[10px] mt-[20px]">
              200
            </h1>
            <p className="text-[#B7AACC] text-[24px]">Partners</p>
          </div>
          <div className="text-center">
            <div className="rounded-full w-[90px] h-[90px] bg-[#65FBD5] flex justify-center items-center">
              <img src={fram1} alt="" className="w-auto h-[40px]" />
            </div>
            <h1 className="text-[48px] font-semibold mb-[10px] mt-[20px]">
              60+
            </h1>
            <p className="text-[#B7AACC] text-[24px]">Success</p>
          </div>
        </div>
      </div>
    </div>
  );
}
