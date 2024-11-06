"use client";
import "swiper/css/bundle";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SignUp from "./Components/SignUp";
import RightArrow from "./Components/RightArrow";
import SideMenuIcon from "./Components/SideMenuIcon";
import GetNotified from "./Components/GetNotified";
import WatchWhales from "./Components/WatchWhales";
import TestimonialsSection from "./Components/TestimonialsSection";

const Home = () => {
  const [showSignUp, setShowSignUp] = useState(false);
  const toggleShowSignUp = () => {
    setShowSignUp((prev) => !prev);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="w-screen grid lg:grid-cols-[55%_45%] mx-auto"
    >
      <div
        className={
          "pt-20 pb-16 p-8 xl:pl-10 flex flex-col gap-20 overflow-hidden " +
          "relative bg-main-dark isolate before:absolute before:inset-0 before:scale-150 before:content-[''] before:-z-10 before:bg-main-gradient"
        }
      >
        <GetNotified />
        <WatchWhales />
        <TestimonialsSection />
      </div>
      <div className="bg-white hidden lg:flex justify-center items-center">
        <SignUp />
      </div>
      <div
        className="absolute top-10 right-10 text-white text-4xl lg:hidden block"
        onClick={toggleShowSignUp}
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
              className="absolute top-10 right-10 lg:hidden block"
              onClick={toggleShowSignUp}
            >
              <RightArrow />
            </div>
            <SignUp />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Home;
