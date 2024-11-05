"use client";
import Bell from "./Bell";
import Chart from "./Chart";
import Clock from "./Clock";
import NotifyAt from "./Notifications/NotifyAt";
import WalletActive from "./Notifications/WalletActive";
import WalletsMove from "./Notifications/WalletsMove";
import NotificationWrapper from "./NotificationWrapper";
import SmallBell from "./SmallBell";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css/navigation";
import Image from "next/image";
import cohorts from "./cohorts.png";
import Eye from "./Eye";
import Vector from "./Vector";
import Testimonial from "./Testimonial";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SignUp from "./SignUp";
import RightArrow from "./RightArrow";
import SideMenuIcon from "./SideMenuIcon";
import { Autoplay } from "swiper/modules";

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

export interface testimonialDetails {
  name: string;
  title: string;
  text: string;
}

const Home = () => {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <div className="w-screen grid lg:grid-cols-[55%_45%] bg-black">
      <div className="relative isolate before:absolute before:inset-0 before:scale-150 before:content-[''] before:-z-10 before:bg-main-gradient py-32 p-8 xl:pl-24 flex flex-col gap-20 overflow-hidden">
        <div className="bg-transparent grid xl:grid-cols-2 gap-10 overflow-hidden">
          <div className="flex flex-col gap-4 text-[#F2F2F2] text-pretty xl:pr-20">
            <Bell />
            <h4 className="text-[31px] font-medium leading-[37.2px] pr-[9px] text-shadow">
              Get notified when a highly correlated whale makes a move
            </h4>
            <p className="text-base font-medium leading-[19.2px] opacity-70">
              Find out when a certain whale moves more than any preset amount
              on-chain or when a dormant whale you care about becomes active.
            </p>
          </div>
          <div className="xl:ml-10 w-fit overflow-x-hidden relative after:pointer-events-none after:z-10 after:opacity-50 after:absolute after:content-[''] after:inset-0 after:bg-overlay h-fit">
            <Swiper
              loop={true}
              spaceBetween={10}
              slidesPerView={2}
              autoplay={{
                delay: 1000,
                pauseOnMouseEnter: true,
              }}
              modules={[Autoplay]}
            >
              <SwiperSlide className="!w-auto">
                <NotificationWrapper ctaText="Save" Icon={SmallBell}>
                  <NotifyAt />
                </NotificationWrapper>
              </SwiperSlide>
              <SwiperSlide className="!w-auto">
                <NotificationWrapper ctaText="check" Icon={Chart}>
                  <WalletsMove />
                </NotificationWrapper>
              </SwiperSlide>
              <SwiperSlide className="!w-auto">
                <NotificationWrapper ctaText="check" Icon={Clock}>
                  <WalletActive />
                </NotificationWrapper>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="grid xl:grid-cols-2 gap-5 xl:pr-20">
          <Image
            src={cohorts}
            alt="cohorts"
            className="rounded-xl shadow-[0px_8px_22px_-6px_rgba(24,39,75,0.12)] row-start-2 xl:row-auto"
            style={{ objectFit: "cover" }}
          />
          <div className="flex flex-col gap-4 text-[#F2F2F2] text-balance xl:pr-20 items-end text-end">
            <Eye />
            <h4 className="text-[31px] font-medium leading-[37.2px] pr-[9px]">
              Watch what the whales are doing
            </h4>
            <p className="text-base font-medium leading-[19.2px] opacity-70">
              All whales are not equal. Know exactly what the whales impacting
              YOUR portfolio are doing.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 xl:pr-20 overflow-hidden">
          <h2 className="text-[25px] text-[#F2F2F2] leading-[30px] font-medium text-end">
            Testimonials
          </h2>
          <div className="h-[1px] w-full bg-[rgba(229,229,230,0.5)] mb-6" />
          <div className="grid xl:grid-flow-col gap-10 xl:items-end place-items-start">
            <Vector />
            <div className="xl:ml-10 h-fit flex row-start-1 xl:row-auto">
              <Swiper loop={true} spaceBetween={10} slidesPerView={2}>
                {TESTIMONIALS.map((testimonial, index) => (
                  <SwiperSlide className="!w-auto" key={index}>
                    <Testimonial details={testimonial} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white hidden lg:flex flex-col justify-center items-center">
        <SignUp />
      </div>
      <div
        className="absolute top-4 right-4 text-white text-4xl lg:hidden block"
        onClick={() => setShowSignUp((prev) => !prev)}
      >
        <SideMenuIcon />
      </div>
      <AnimatePresence>
        {showSignUp && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: "0" }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="bg-white flex flex-col justify-center items-center fixed w-screen h-screen"
          >
            <div
              className="absolute top-4 right-4 lg:hidden block"
              onClick={() => setShowSignUp((prev) => !prev)}
            >
              <RightArrow />
            </div>
            <SignUp />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;
