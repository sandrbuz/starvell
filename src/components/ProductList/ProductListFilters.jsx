"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProductListFilters() {
  const [isOnlineOnly, setIsOnlineOnly] = useState(false);
  const [isInstantDelivery, setIsInstantDelivery] = useState(false);

  return (
    <div className="flex gap-1 mt-[7px]">
      <div
        className="flex px-3 py-2 items-center gap-2 rounded-lg shadow-[inset_0_0_0_1px_#E8EBF0] cursor-pointer"
        onClick={() => setIsOnlineOnly(!isOnlineOnly)}
      >
        <span className="text-[#36394A] text-sm not-italic font-normal leading-5">
          Только продавцы онлайн
        </span>
        <div
          className={`relative w-7 h-4 rounded-full transition-colors duration-200 ${
            isOnlineOnly ? "bg-[#4E75FE]" : "bg-[#E8EBF0]"
          }`}
        >
          <div
            className={`absolute top-0.5 w-3 h-3 bg-white rounded-full shadow-sm transition-transform duration-200 ${
              isOnlineOnly ? "translate-x-3.5" : "translate-x-0.5"
            }`}
          />
        </div>
      </div>
      <div
        className="flex px-3 py-2 items-center gap-2 rounded-lg shadow-[inset_0_0_0_1px_#E8EBF0] cursor-pointer"
        onClick={() => setIsInstantDelivery(!isInstantDelivery)}
      >
        <Image src="/lightning.svg" alt="Lightning" width={12} height={12} />
        <span className="text-[#36394A] text-sm not-italic font-normal leading-5">
          Моментальная доставка
        </span>
        <div
          className={`relative w-7 h-4 rounded-full transition-colors duration-200 ${
            isInstantDelivery ? "bg-[#4E75FE]" : "bg-[#E8EBF0]"
          }`}
        >
          <div
            className={`absolute top-0.5 w-3 h-3 bg-white rounded-full shadow-sm transition-transform duration-200 ${
              isInstantDelivery ? "translate-x-3.5" : "translate-x-0.5"
            }`}
          />
        </div>
      </div>
      <div className="relative">
        <input
          type="search"
          placeholder="Поиск по описанию лота..."
          className="w-[317px] pl-3 pr-10 py-2 rounded-lg shadow-[inset_0_0_0_1px_#E8EBF0] text-[#36394A] text-sm not-italic font-normal leading-5 bg-transparent border-none outline-none placeholder:text-[#9E9DA4] hover:placeholder:text-[#6E7076] [&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none"
        />
        <Image
          src="/search.svg"
          alt="Search"
          width={16}
          height={16}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
        />
      </div>
    </div>
  );
}
