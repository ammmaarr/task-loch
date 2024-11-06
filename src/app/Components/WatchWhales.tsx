import Image from "next/image";
import cohorts from "@/app/Images/cohorts.png";
import Eye from "./Eye";

const WatchWhales = () => {
  return (
    <div className="grid xl:grid-cols-2 gap-10">
      <Image
        src={cohorts}
        alt="cohorts"
        className="rounded-xl shadow-[0px_8px_22px_-6px_rgba(24,39,75,0.12)] row-start-2 xl:row-auto"
        style={{ objectFit: "cover" }}
      />
      <div className="flex flex-col gap-4 text-[#F2F2F2] text-pretty xl:pr-10 items-end text-end justify-self-end sm:max-w-[60ch]">
        <Eye />
        <h4 className="text-[31px] font-medium leading-[37.2px] pr-[9px]">
          Watch what the whales are doing
        </h4>
        <p className="text-base font-medium leading-[19.2px] opacity-70">
          All whales are not equal. Know exactly what the whales impacting YOUR
          portfolio are doing.
        </p>
      </div>
    </div>
  );
};

export default WatchWhales;
