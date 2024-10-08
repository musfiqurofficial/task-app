/* eslint-disable react/prop-types */

import Slider from "react-slick";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

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

  const NextArrow = ({ onClick }) => (
    <div
      className="absolute top-1/2 -right-10 transform -translate-y-1/2 border border-[#4B44BB] hover:bg-[#4B44BB] rounded-full cursor-pointer z-20 w-8 h-8 flex justify-center items-center text-[#7c29e9] hover:text-[white]"
      onClick={onClick}
    >
      <MdOutlineKeyboardArrowRight className="w-5 h-5" />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div
      className="absolute top-1/2 -left-10 transform -translate-y-1/2 border border-[#4B44BB] hover:bg-[#4B44BB] rounded-full cursor-pointer z-20 w-8 h-8 flex justify-center items-center text-[#7c29e9] hover:text-[white]"
      onClick={onClick}
    >
      <MdOutlineKeyboardArrowLeft className="w-5 h-5" />
    </div>
  );

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="mt-10">
      <div className="relative">
        <Slider {...settings}>
          {sliderCont.map((image) => (
            <div
              key={image.id}
              className="!rounded-[20px] border-[1px] p-[40px] hover:shadow-2xl bg-white"
            >
              <div className="flex justify-between items-start">
                <div className="border border-gray-300 bg-slate-50 rounded-full w-[58px] h-[58px] overflow-hidden">
                  <img
                    src={img1}
                    alt=""
                    className="w-20 h-auto object-center"
                  />
                </div>
                <img src={vector} alt="" className="w-auto h-[58px]" />
              </div>
              <h4 className="text-[20px] font-medium mt-1">Joe Root</h4>
              <p className="text-[14px]">Marketing Specialist</p>
              <div className="flex justify-start items-center gap-1 my-[10px]">
                <img src={startIcon} alt="" className="w-auto h-[20px]" />
                <img src={startIcon} alt="" className="w-auto h-[20px]" />
                <img src={startIcon} alt="" className="w-auto h-[20px]" />
                <img src={startIcon} alt="" className="w-auto h-[20px]" />
                <img src={startIcon} alt="" className="w-auto h-[20px]" />
              </div>
              <p className="text-[14px]">
                “The ease of use, quality of coffee, and the outstanding
                customer support make with Corfeel choice for all things
                coffee.&quot;
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SliderCard;
