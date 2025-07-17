"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { tabs } from "../constants";

export default function ProductListHeader({
  activeTab,
  setActiveTab,
  onSellButtonClick,
}) {
  const [isDeliveryDropdownOpen, setIsDeliveryDropdownOpen] = useState(false);
  const [isDeliveryVisible, setIsDeliveryVisible] = useState(false);
  const deliveryDropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        deliveryDropdownRef.current &&
        !deliveryDropdownRef.current.contains(event.target)
      ) {
        setIsDeliveryVisible(false);
        setTimeout(() => setIsDeliveryDropdownOpen(false), 300);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-1">
        {tabs.map((tab, idx) => (
          <button
            key={tab.id}
            className={`cursor-pointer inline-flex h-9 px-3 py-1 justify-center items-center gap-1.5 flex-shrink-0 rounded-md hover:bg-[#DEE6FF] active:bg-[#BECCFE] active:text-white ${
              tab.id === activeTab
                ? "bg-[#5C80FD] text-white hover:bg-[#DEE6FF] hover:text-[#5C80FD] active:bg-[#BECCFE] active:text-white"
                : "bg-[#F2F5FF] text-[#5C80FD] active:text-white"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span className="text-center text-sm not-italic font-medium leading-5 mr-[1px]">
              {tab.label}
            </span>
          </button>
        ))}

        <div className="relative" ref={deliveryDropdownRef}>
          <div
            className={`flex px-3 py-2 items-center gap-2 rounded-lg cursor-pointer w-[167px] ${
              isDeliveryVisible
                ? "bg-[#F7F7F7] shadow-[inset_0_0_0_1px_#D4D7DD]"
                : "shadow-[inset_0_0_0_1px_#E8EBF0]"
            }`}
            onClick={() => {
              if (!isDeliveryDropdownOpen) {
                setIsDeliveryDropdownOpen(true);
                setTimeout(() => setIsDeliveryVisible(true), 10);
              } else {
                setIsDeliveryVisible(false);
                setTimeout(() => setIsDeliveryDropdownOpen(false), 300);
              }
            }}
          >
            <span
              className={`text-sm not-italic font-normal leading-5 flex-1 ${
                isDeliveryVisible
                  ? "text-[#9E9DA4]"
                  : "text-[#36394A] hover:text-[#6E7076]"
              }`}
            >
              Способ доставки
            </span>
            <Image
              src="/chevron.svg"
              alt="Chevron"
              width={16}
              height={16}
              className={`transition-transform duration-200 ${
                isDeliveryVisible ? "rotate-180" : ""
              }`}
            />
          </div>

          {isDeliveryDropdownOpen && (
            <div
              className={`absolute top-full mt-[7px] w-[167px] bg-white rounded-lg shadow-[0px_4px_16px_0px_rgba(14,18,27,0.08)] border border-[#E8EBF0] z-10 transition-all duration-300 transform ${
                isDeliveryVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-2"
              }`}
            >
              <div className="p-1 flex flex-col gap-1">
                {["Пункт меню", "Пункт меню", "Пункт меню", "Пункт меню"].map(
                  (item, index) => (
                    <div
                      key={index}
                      className="p-2 hover:bg-[#F7F7F7] cursor-pointer rounded-lg transition-all duration-200 ease-out"
                      onClick={() => {
                        setIsDeliveryVisible(false);
                        setTimeout(() => setIsDeliveryDropdownOpen(false), 300);
                      }}
                    >
                      <span
                        className="text-[#36394A] text-sm not-italic font-normal leading-5"
                        style={{
                          fontFeatureSettings:
                            "'ss11' on, 'cv09' on, 'liga' off, 'calt' off",
                        }}
                      >
                        {item}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      <button
        className="cursor-pointer inline-flex px-4 py-[7px] justify-center items-center gap-1.5 rounded-lg bg-[#4E75FF] shadow-[0px_1px_2px_0px_rgba(57,89,204,0.50),0px_0px_0px_1px_#4665D2] border border-[#6385FF] hover:bg-[#2850DC] active:opacity-40"
        onClick={onSellButtonClick}
      >
        <span className="text-white text-center  text-sm not-italic font-medium leading-5 ">
          Продать Blox Fruits
        </span>
      </button>
    </div>
  );
}
