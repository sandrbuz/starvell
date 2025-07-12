"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProductListToolbar() {
  const [activeTab, setActiveTab] = useState("Все");
  const [isOnlineOnly, setIsOnlineOnly] = useState(false);
  const [isInstantDelivery, setIsInstantDelivery] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [textareaValue, setTextareaValue] = useState("");

  const [tabs, setTabs] = useState([
    { label: "Все" },
    { label: "Бели" },
    { label: "Аккаунты" },
    { label: "Предметы" },
    { label: "VIP-сервер" },
    { label: "Услуги" },
    { label: "Гайды" },
  ]);

  return (
    <div className="font-[Inter]">
      {/* верхний блок с табами и кнопкой*/}
      <div className="flex justify-between items-center">
        <div className="flex gap-1">
          {tabs.map((tab, idx) => (
            <button
              key={idx}
              className={`inline-flex h-9 px-3 py-1 justify-center items-center gap-1.5 flex-shrink-0 rounded-lg ${
                tab.label === activeTab
                  ? "bg-[#5C80FD]"
                  : "bg-[rgba(92,128,253,0.08)]"
              }`}
              onClick={() => setActiveTab(tab.label)}
            >
              <span
                className={`text-center font-[Inter] text-sm not-italic font-medium leading-5 ${
                  tab.label === activeTab ? "text-white" : "text-[#5C80FD]"
                }`}
              >
                {tab.label}
              </span>
            </button>
          ))}
          {/* Селект способ доставки */}
          <div className="flex px-3 py-2 items-center gap-2 rounded-lg shadow-[inset_0_0_0_1px_#E8EBF0]">
            <span className="text-[#36394A] font-[Inter] text-sm not-italic font-normal leading-5">
              Способ доставки
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M5.11988 6.56006L7.99988 9.44006L10.8799 6.56006"
                stroke="#666D80"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <button
          className="inline-flex px-4 py-2 justify-center items-center gap-1.5 rounded-lg bg-[#4E75FF] shadow-[0px_1px_2px_0px_rgba(57,89,204,0.50),0px_0px_0px_1px_#4665D2] border border-[#6385FF]"
          onClick={() => setIsPopupOpen(true)}
        >
          <span className="text-white text-center  text-sm not-italic font-medium leading-5">
            Продать Blox Fruits
          </span>
        </button>
      </div>
      {/* нижний блок с чекбоксами и инпутом*/}
      <div className="flex gap-1 mt-[7px]">
        <div className="flex px-3 py-2 items-center gap-2 rounded-lg shadow-[inset_0_0_0_1px_#E8EBF0]">
          <span className="text-[#36394A] font-[Inter] text-sm not-italic font-normal leading-5">
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
          <span className="text-[#36394A] font-[Inter] text-sm not-italic font-normal leading-5">
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
            className="flex-1 text-[#36394A] font-[Inter] text-sm not-italic font-normal leading-5 bg-transparent border-none outline-none placeholder:text-[#9E9DA4]"
          />
          <Image src="/search.svg" alt="Search" width={16} height={16} />
        </div>
      </div>

      {/* Popup */}
      {isPopupOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.24)",
            backdropFilter: "blur(2px)",
          }}
          onClick={() => setIsPopupOpen(false)}
        >
          <div
            className="pt-[23px] pl-[22px] pr-[22px] bg-white w-[488px]  rounded-2xl border border-[#E8EBF0] shadow-[0px_16px_32px_-12px_rgba(14,18,27,0.02)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Содержимое popup */}
            <h1 className="text-[#36394A] font-[Inter] text-xl not-italic font-semibold leading-7">
              Жалоба на 0xHearts.com
            </h1>
            {/* Лейбл */}
            <div className="w-[269px] flex-shrink-0 text-[#6E7076] font-[Inter] text-sm not-italic font-normal leading-5 mt-6">
              Причина жалобы
            </div>
            {/* Селект */}
            <div className="flex w-full px-3 py-2 items-center gap-2 rounded-lg shadow-[inset_0_0_0_1px_#E8EBF0] mt-1">
              <span className="w-[392px] flex-shrink-0 text-[#9E9DA4] font-[Inter] text-base not-italic font-normal leading-6">
                Выберите причину жалобы
              </span>
              <Image
                src="/chevron.svg"
                alt="Dropdown"
                width={17}
                height={16}
                className="w-[17px] h-4"
              />
            </div>

            {/* Лейбл для textarea */}
            <div className="text-[#6E7076] font-[Inter] text-sm not-italic font-normal leading-5 mt-4">
              Опишите проблему
            </div>

            {/* Textarea */}
            <div className="relative w-full mt-1">
              <textarea
                placeholder="Введите ваш текст"
                className="text-[#36394A] w-full min-h-[110px]  py-2 px-2.5 resize-y bg-transparent border border-[#E8EBF0] outline-none text-[#36394A] font-[Inter] text-base not-italic font-normal leading-6 placeholder:text-[#9E9DA4] rounded-lg"
                maxLength={200}
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                value={textareaValue}
                onChange={(e) => setTextareaValue(e.target.value)}
              />
              {/* Счетчик */}
              <div className="absolute bottom-2 right-2.5 mb-1 mr-4">
                <span className="text-[#9E9DA4] text-right font-[Inter] text-xs not-italic font-medium leading-[18px] tracking-[0.24px] uppercase">
                  {textareaValue.length}/200
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
