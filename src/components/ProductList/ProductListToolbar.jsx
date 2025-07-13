"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import ComplaintPopup from "./ComplaintPopup";

export default function ProductListToolbar() {
  const [activeTab, setActiveTab] = useState("all");
  const [isOnlineOnly, setIsOnlineOnly] = useState(false);
  const [isInstantDelivery, setIsInstantDelivery] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isDeliveryDropdownOpen, setIsDeliveryDropdownOpen] = useState(false);
  const deliveryDropdownRef = useRef(null);

  // Закрытие дропдауна при клике вне его
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        deliveryDropdownRef.current &&
        !deliveryDropdownRef.current.contains(event.target)
      ) {
        setIsDeliveryDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [tabs, setTabs] = useState([
    { id: "all", label: "Все" },
    { id: "beli", label: "Бели" },
    { id: "accounts", label: "Аккаунты" },
    { id: "items", label: "Предметы" },
    { id: "vip-server", label: "VIP-сервер" },
    { id: "services", label: "Услуги" },
    { id: "guides", label: "Гайды" },
  ]);

  return (
    <div>
      {/* верхний блок с табами и кнопкой*/}
      <div className="flex justify-between items-center">
        <div className="flex gap-1">
          {tabs.map((tab, idx) => (
            <button
              key={tab.id}
              className={`inline-flex h-9 px-3 py-1 justify-center items-center gap-1.5 flex-shrink-0 rounded-md hover:bg-[#DEE6FF] active:bg-[#BECCFE] active:text-white ${
                tab.id === activeTab
                  ? "bg-[#5C80FD] text-white hover:bg-[#DEE6FF] hover:text-[#5C80FD] active:bg-[#BECCFE] active:text-white"
                  : "bg-[#F2F5FF] text-[#5C80FD] active:text-white"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className="text-center text-sm not-italic font-medium leading-5">
                {tab.label}
              </span>
            </button>
          ))}

          {/* Селект способ доставки */}
          <div className="relative" ref={deliveryDropdownRef}>
            <div
              className={`flex px-3 py-2 items-center gap-2 rounded-lg cursor-pointer w-[167px] ${
                isDeliveryDropdownOpen
                  ? "bg-[#F7F7F7] shadow-[inset_0_0_0_1px_#D4D7DD]"
                  : "shadow-[inset_0_0_0_1px_#E8EBF0]"
              }`}
              onClick={() => setIsDeliveryDropdownOpen(!isDeliveryDropdownOpen)}
            >
              <span
                className={`text-sm not-italic font-normal leading-5 flex-1 ${
                  isDeliveryDropdownOpen ? "text-[#9E9DA4]" : "text-[#36394A]"
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
                  isDeliveryDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </div>

            {/* Дропдаун */}
            {isDeliveryDropdownOpen && (
              <div className="absolute top-full mt-[7px] w-[167px] bg-white rounded-lg shadow-[0px_4px_16px_0px_rgba(14,18,27,0.08)] border border-[#E8EBF0] z-10">
                <div className="p-1 flex flex-col gap-1">
                  {["Пункт меню", "Пункт меню", "Пункт меню", "Пункт меню"].map(
                    (item, index) => (
                      <div
                        key={index}
                        className="p-2 hover:bg-[#F7F7F7] cursor-pointer transition-colors rounded-lg"
                        onClick={() => {
                          setIsDeliveryDropdownOpen(false);
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
          className="cursor-pointer inline-flex px-4 py-[7px] justify-center items-center gap-1.5 rounded-lg bg-[#4E75FF] shadow-[0px_1px_2px_0px_rgba(57,89,204,0.50),0px_0px_0px_1px_#4665D2] border border-[#6385FF] hover:bg-[#2850DC] active:bg-[#B9C8FF] active:border-[#B5C1ED] active:shadow-[0px_1px_2px_0px_rgba(192,206,255,0.50),0px_0px_0px_1px_#C0CEFF]"
          onClick={() => setIsPopupOpen(true)}
        >
          <span className="text-white text-center  text-sm not-italic font-medium leading-5 ">
            Продать Blox Fruits
          </span>
        </button>
      </div>

      {/* нижний блок с чекбоксами и инпутом*/}
      <div className="flex gap-1 mt-[7px]">
        <div className="flex px-3 py-2 items-center gap-2 rounded-lg shadow-[inset_0_0_0_1px_#E8EBF0]">
          <span className="text-[#36394A] text-sm not-italic font-normal leading-5">
            Только продавцы онлайн
          </span>
          <div
            className={`relative w-7 h-4 rounded-full cursor-pointer transition-colors duration-200 ${
              isOnlineOnly ? "bg-[#4E75FE]" : "bg-[#E8EBF0]"
            }`}
            onClick={() => setIsOnlineOnly(!isOnlineOnly)}
          >
            <div
              className={`absolute top-0.5 w-3 h-3 bg-white rounded-full shadow-sm transition-transform duration-200 ${
                isOnlineOnly ? "translate-x-3.5" : "translate-x-0.5"
              }`}
            />
          </div>
        </div>
        <div className="flex px-3 py-2 items-center gap-2 rounded-lg shadow-[inset_0_0_0_1px_#E8EBF0]">
          <Image src="/lightning.svg" alt="Lightning" width={12} height={12} />
          <span className="text-[#36394A] text-sm not-italic font-normal leading-5">
            Моментальная доставка
          </span>
          <div
            className={`relative w-7 h-4 rounded-full cursor-pointer transition-colors duration-200 ${
              isInstantDelivery ? "bg-[#4E75FE]" : "bg-[#E8EBF0]"
            }`}
            onClick={() => setIsInstantDelivery(!isInstantDelivery)}
          >
            <div
              className={`absolute top-0.5 w-3 h-3 bg-white rounded-full shadow-sm transition-transform duration-200 ${
                isInstantDelivery ? "translate-x-3.5" : "translate-x-0.5"
              }`}
            />
          </div>
        </div>

        {/* Блок с поиском */}
        <div className="flex px-3 py-2 items-center gap-2 rounded-lg shadow-[inset_0_0_0_1px_#E8EBF0] w-[317px]">
          <input
            type="text"
            placeholder="Поиск по описанию лота..."
            className="flex-1 text-[#36394A] text-sm not-italic font-normal leading-5 bg-transparent border-none outline-none placeholder:text-[#9E9DA4]"
          />
          <Image src="/search.svg" alt="Search" width={16} height={16} />
        </div>
      </div>

      {/* Popup */}
      <ComplaintPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </div>
  );
}
