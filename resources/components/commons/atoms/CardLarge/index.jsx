import React from "react";
import RoundedImg from "../../atoms/RoundedImg";

const CardLarge = ({ img, text, index }) => {
  return (
    <div className="relative flex h-46 w-full justify-between rounded-4xl p-4 shadow-2xl">
      <img
        src={img}
        alt="img"
        className="absolute top-0 left-0 z-0 h-full w-full rounded-4xl object-cover shadow-md"
      />
      <div className="relative z-1 flex flex-col items-start justify-between gap-2 text-left text-white">
        <p>{index}</p>
        <p className="max-w-[140px] text-xs leading-3">{text}</p>
        <button className="cursor-pointer rounded-full border-2 bg-white px-4 py-1 text-xs font-semibold text-(--text-color-black) hover:bg-(--bg-secondary-cray)">
          MORE
        </button>
      </div>
      <button className="relative z-1 mt-auto h-8 cursor-pointer truncate overflow-hidden rounded-[20px] border border-white/20 bg-white/10 px-5 py-1 text-center text-sm font-semibold whitespace-nowrap text-white shadow-md backdrop-blur-sm transition-transform duration-300 ease-in-out hover:scale-100 hover:bg-white/20">
        Discover More
      </button>

      <div className="relative z-1 flex">
        {[1, 2, 3, 4].map((_, index) => (
          <RoundedImg key={index} src="/images/profile.jpg" index={index} />
        ))}
      </div>
    </div>
  );
};
export default CardLarge;
