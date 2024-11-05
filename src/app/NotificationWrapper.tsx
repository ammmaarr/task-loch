import React from "react";

const NotificationWrapper: React.FC<{
  Icon: React.FC;
  ctaText: string;
  children: React.ReactNode;
}> = ({ Icon, ctaText, children }) => {
  return (
    <div className="bg-white bg-card-gradient p-[14px] flex flex-col gap-[14px] rounded-[8.4px] xl:w-[189.7px] xl:h-[171.5px] h-[160px]">
      <div className="flex justify-between items-start">
        <Icon />
        {ctaText === "check" ? (
          <input type="checkbox" className="mt-1 cursor-pointer" />
        ) : (
          <button className="bg-transparent text-main-dark mt-1 text-[9.1px] leading-[10.92px] font-semibold">
            {ctaText}
          </button>
        )}
      </div>
      <div className="flex-1 items-end flex">{children}</div>
    </div>
  );
};

export default NotificationWrapper;
