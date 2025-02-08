import { TTestimonial } from "@/utils/types/globalTypes";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import Image from "next/image";

interface IProps {
  testimonial: TTestimonial;
}

const TestimonialCard = ({ testimonial }: IProps) => {
  const { image, desc, rating, name, position } = testimonial;
  return (
    <div className="flex flex-col md:flex-row w-full md:w-[80%] mx-auto">
      {/* Left Div */}
      <div className="w-full md:w-[20%] flex justify-center md:justify-between">
        <div className="flex items-center justify-center ">
          <Image
            src={image}
            alt="Testimonial Image"
            width={140}
            height={140}
            className="w-[140px] h-[140px] z-10 "
          />
        </div>
        <div className="h-full relative hidden md:flex items-center ">
          <div className="absolute w-[25px] h-[2px] pColor top-[50%] right-0"></div>
          <div className="w-[1px] h-[150px] pColor"></div>
        </div>
      </div>

      {/* Right Div */}
      <div className="w-full md:w-[80%]  flex flex-col gap-5 px-5 mt-10 md:mt-0">
        <div className="text-center text-[18px] pText">{desc}</div>
        <div className="flex justify-center md:justify-between">
          <div>
            <Rating style={{ maxWidth: 120 }} value={rating} />
          </div>
          <div></div>
        </div>
        <div className="flex flex-col items-center justify-center text-[20px]">
          <h1 className=" font-bold pText">{name}</h1>
          <p className="pText">{position}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
