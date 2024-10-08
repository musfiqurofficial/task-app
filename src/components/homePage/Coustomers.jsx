import SliderCard from "./Slider";

const Coustomers = () => {
  return (
    <div className="px-4 sm:px-0 py-[100px] mx-auto sm:max-w-xl md:max-w-full lg:max-w-[1170px]">
      <h1 className="text-[54px] font-semibold text-center w-[60%] mx-auto leading-[65.35px]">
        What Customers are Saying About us
      </h1>
      <p className="text-center mt-[24px]">
        Our commitment to quality, sustainability, and customer satisfaction
        remains unwavering.
      </p>
      <div>
        <SliderCard />
      </div>
    </div>
  );
};

export default Coustomers;
