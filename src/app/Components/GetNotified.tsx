import { Swiper, SwiperSlide } from "swiper/react";
import Bell from "./Bell";
import NotificationWrapper from "./NotificationWrapper";
import SmallBell from "./SmallBell";
import NotifyAt from "./Notifications/NotifyAt";
import Chart from "./Chart";
import WalletsMove from "./Notifications/WalletsMove";
import Clock from "./Clock";
import WalletActive from "./Notifications/WalletActive";
import { Autoplay } from "swiper/modules";

const NOTIFICATIONS = [
  {
    ctaText: "Save",
    Icon: SmallBell,
    children: <NotifyAt />,
  },
  {
    ctaText: "check",
    Icon: Chart,
    children: <WalletsMove />,
  },
  {
    ctaText: "check",
    Icon: Clock,
    children: <WalletActive />,
  },
];

const GetNotified = () => {
  return (
    <div className="bg-transparent grid xl:grid-cols-2 gap-10">
      <div className="flex flex-col gap-4 text-[#F2F2F2] text-pretty xl:pr-10 sm:max-w-[60ch]">
        <Bell />
        <h4 className="text-[31px] font-medium leading-[37.2px] pr-[9px] text-shadow">
          Get notified when a highly correlated whale makes a move
        </h4>
        <p className="text-base font-medium leading-[19.2px] opacity-70">
          Find out when a certain whale moves more than any preset amount
          on-chain or when a dormant whale you care about becomes active.
        </p>
      </div>
      <div className="xl:ml-10 xl:-mr-10 overflow-x-hidden relative after:pointer-events-none after:z-10 after:opacity-50 after:absolute after:content-[''] after:inset-0 after:bg-overlay h-fit rounded-lg">
        <Swiper
          loop={true}
          spaceBetween={10}
          slidesPerView={2.2}
          autoplay={{
            delay: 1000,
            pauseOnMouseEnter: true,
          }}
          modules={[Autoplay]}
          breakpoints={{
            1: {
              slidesPerView: 1.1,
            },
            450: {
              slidesPerView: 2.2,
            },
          }}
        >
          {NOTIFICATIONS.concat(NOTIFICATIONS).map((item, index) => (
            <SwiperSlide key={index} className={"xl:!w-fit"}>
              <NotificationWrapper ctaText={item.ctaText} Icon={item.Icon}>
                {item.children}
              </NotificationWrapper>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default GetNotified;
