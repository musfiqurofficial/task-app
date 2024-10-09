/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import vector from "../../assets/images/Vector (1).png";
import img1 from "../../assets/images/image 1201.png";
import img2 from "../../assets/images/image 1198.png";
import img3 from "../../assets/images/portrait-handsome-young-man-with-crossed-arms-removebg-preview.png";
import startIcon from "../../assets/images/Star 3.png";

const SliderCard = () => {
  const sliderCont = [
    {
      id: 1,
      src: img1,
      name: "Joe Root",
      title: "Marketing Specialist",
      description:
        "“The ease of use, quality of coffee, and the outstanding customer support make with Corfeel choice for all things coffee.&quot;",
    },
    {
      id: 2,
      src: img2,
      name: "Joe Root",
      title: "Marketing Specialist",
      description:
        "“The ease of use, quality of coffee, and the outstanding customer support make with Corfeel choice for all things coffee.&quot;",
    },
    {
      id: 3,
      src: img3,
      name: "Joe Root",
      title: "Marketing Specialist",
      description:
        "“The ease of use, quality of coffee, and the outstanding customer support make with Corfeel choice for all things coffee.&quot;",
    },
    {
      id: 4,
      src: img1,
      name: "Joe Root",
      title: "Marketing Specialist",
      description:
        "“The ease of use, quality of coffee, and the outstanding customer support make with Corfeel choice for all things coffee.&quot;",
    },
    {
      id: 5,
      src: img3,
      name: "Joe Root",
      title: "Marketing Specialist",
      description:
        "“The ease of use, quality of coffee, and the outstanding customer support make with Corfeel choice for all things coffee.&quot;",
    },
  ];

  return (
    <div className="relative my-14">
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={3}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        loop={true}
      >
        {sliderCont.map((image) => (
          <SwiperSlide key={image.id}>
            <div className="!rounded-[20px] border-[1px] p-[40px] bg-white transform transition-transform duration-300 hover:scale-110">
              <div className="flex justify-between items-start">
                <div className="border border-gray-300 bg-slate-50 rounded-full w-[58px] h-[58px] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.name}
                    className="w-20 h-auto object-center"
                  />
                </div>
                <img src={vector} alt="" className="w-auto h-[58px]" />
              </div>
              <h4 className="text-[20px] font-medium mt-1">{image.name}</h4>
              <p className="text-[14px]">{image.title}</p>
              <div className="flex justify-start items-center gap-1 my-[10px]">
                <img src={startIcon} alt="" className="w-auto h-[20px]" />
                <img src={startIcon} alt="" className="w-auto h-[20px]" />
                <img src={startIcon} alt="" className="w-auto h-[20px]" />
                <img src={startIcon} alt="" className="w-auto h-[20px]" />
                <img src={startIcon} alt="" className="w-auto h-[20px]" />
              </div>
              <p className="text-[14px]">{image.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-next absolute top-[55%] -right-12 transform -translate-y-[55%] border hover:text-white border-[#4B44BB] hover:bg-[#4B44BB] z-30 bg-blue-60 w-10 h-10 rounded-full"></div>
      <div className="swiper-button-prev absolute top-[55%] -left-12 transform -translate-y-[55%] border hover:text-white border-[#4B44BB] hover:bg-[#4B44BB] z-30 bg-blue-60 w-10 h-10 rounded-full"></div>
    </div>
  );
};

export default SliderCard;
