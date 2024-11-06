const NotifyAt = () => {
  return (
    <div className="flex flex-col gap-[14px]">
      <h4 className="text-main-dark text-sm font-medium leading-[16.8px] w-4/5">
        We’ll be sending notifications to you here
      </h4>
      <input
        type="email"
        id="email"
        placeholder="hello@gmail.com"
        className="bg-white px-[11.2px] py-[8.4px] rounded-lg text-[9.1px] text-main-dark"
      />
    </div>
  );
};

export default NotifyAt;
