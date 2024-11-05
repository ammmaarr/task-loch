const WalletsMove = () => {
  return (
    <div className="flex flex-col gap-[14.6px] text-main-dark text-[11.2px] leading-[13.44px] font-medium">
      <h5>Notify me when any wallets move more than</h5>
      <select className="bg-[rgba(229,229,230,0.5)]">
        <option>$1,000.00</option>
        <option>$2,000.00</option>
        <option>$3,000.00</option>
        <option>$4,000.00</option>
      </select>
    </div>
  );
};

export default WalletsMove;
