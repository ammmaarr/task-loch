import { Swiper, SwiperSlide } from "swiper/react";
import Vector from "./Vector";
import { FreeMode } from "swiper/modules";
import Testimonial from "./Testimonial";

const TESTIMONIALS = [
  {
    name: "Shiv S",
    title: "Co-Founder Magik Labs",
    text: "Managing my own portfolio is helpful and well designed. What’s really interesting is watching the whales though. No one else has made whale tracking so simple.",
  },
  {
    name: "Jack F",
    title: "Ex Blackrock PM",
    text: "Love how Loch integrates portfolio analytics and whale watching into one unified app.",
  },
  {
    name: "Yash P",
    title: "Research, 3poch Crypto Hedge Fund",
    text: "I use Loch everyday now. I don't think I could analyze crypto whale trends markets without it. I'm addicted!",
  },
];

const TestimonialsSection = () => {
  return (
    <div className="flex flex-col gap-4 xl:pr-20">
      <h2 className="text-[25px] text-[#F2F2F2] leading-[30px] font-medium text-end">
        Testimonials
      </h2>
      <div className="h-[1px] w-full bg-[rgba(229,229,230,0.5)] mb-6" />
      <div className="grid xl:grid-flow-col gap-10 xl:items-end place-items-start">
        <Vector />
        <div className="xl:ml-10 xl:-mr-10 h-fit flex row-start-1 xl:row-auto w-full overflow-hidden">
          <Swiper
            loop={true}
            spaceBetween={10}
            slidesPerView={2.2}
            freeMode={true}
            modules={[FreeMode]}
            breakpoints={{
              1: {
                slidesPerView: 1.1,
              },
              450: {
                slidesPerView: 2.2,
              },
            }}
          >
            {TESTIMONIALS.concat(TESTIMONIALS).map((testimonial, index) => (
              <SwiperSlide className={"!w-auto"} key={index}>
                <Testimonial details={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
