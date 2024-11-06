import React from "react";
import { testimonialDetails } from "../interfaces";

const Testimonial: React.FC<{ details: testimonialDetails }> = ({
  details,
}) => {
  return (
    <div className="bg-white bg-card-gradient p-5 flex flex-col gap-[14px] rounded-[8.4px] xl:h-[136px] xl:w-[60ch] w-[300px] h-full text-black">
      <div className="flex gap-2 items-center">
        <h5 className="font-semibold text-base leading-[19.2px] text-main-dark text-nowrap">
          {details.name}
        </h5>
        <h6 className="text-[#96979A] font-medium text-[13px] leading-[15.6px]">
          {details.title}
        </h6>
      </div>
      <label className="font-medium text-base leading-[19.2px] text-[#1D2129]">
        “{details.text}”
      </label>
    </div>
  );
};

export default Testimonial;
