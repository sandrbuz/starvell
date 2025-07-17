"use client";

import Image from "next/image";
import { useState } from "react";
import Dropdown from "../Dropdown";

export default function SiteHeader() {
  const [selectedSupport, setSelectedSupport] = useState("Поддержка");
  const [selectedLanguage, setSelectedLanguage] = useState("Русский");
  const [selectedCurrency, setSelectedCurrency] = useState("RUB");
  const [supportHover, setSupportHover] = useState(false);
  const [languageHover, setLanguageHover] = useState(false);
  const [currencyHover, setCurrencyHover] = useState(false);

  const supportItems = ["Правила", "База знаний", "Написать в поддержку"];

  const allLanguages = ["Русский", "English"];
  const allCurrencies = ["RUB", "EUR", "USD"];

  const languageItems = allLanguages.filter(
    (lang) => lang !== selectedLanguage
  );
  const currencyItems = allCurrencies.filter(
    (curr) => curr !== selectedCurrency
  );
  return (
    <div className="flex justify-center items-center h-[56px] bg-[#FFFFFF] w-full border-b border-[#E8EBF0]">
      <div className="w-[1128px] flex items-center">
        <Image
          className="mr-[49px] cursor-pointer"
          src="/logo.svg"
          alt="logo"
          width={118}
          height={24}
        />
        <div className="mr-[114px] relative">
          <input
            type="search"
            placeholder="Поиск игр и приложений..."
            maxLength="30"
            className="w-96 h-8 pl-10 pr-3 py-1.5 rounded-md border border-transparent shadow-[0px_1px_2px_0px_rgba(153,161,176,0.16),0px_0px_0px_1px_rgba(17,38,66,0.08)] backdrop-blur-[6px] text-[#36394A] font-inter text-sm font-normal leading-5 outline-none bg-transparent placeholder:text-[#9E9DA4] hover:placeholder:text-[#6E7076] transition-colors [&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none"
          />
          <Image
            src="/search.svg"
            alt="search"
            width={16}
            height={16}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
          />
        </div>
        <Dropdown
          trigger={(isOpen) => (
            <div
              className="flex items-center gap-1 h-5 justify-center w-25 group"
              onMouseEnter={() => setSupportHover(true)}
              onMouseLeave={() => setSupportHover(false)}
            >
              <span
                className={`text-sm font-normal leading-5 transition-colors ${
                  isOpen
                    ? "text-[#36394A]"
                    : "text-[#6E7076] group-hover:text-[#36394A]"
                }`}
              >
                {selectedSupport}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className={`transition-all duration-200 ${
                  isOpen ? "rotate-180" : "rotate-0"
                }`}
              >
                <path
                  d="M5.12013 6.55994L8.00013 9.43994L10.8801 6.55994"
                  stroke={isOpen || supportHover ? "#000000" : "#666D80"}
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ transition: "stroke 0.2s ease" }}
                />
              </svg>
            </div>
          )}
          items={supportItems}
          selectedValue={selectedSupport}
          onSelect={setSelectedSupport}
          selectable={false}
          className="mr-4"
        />
        <Dropdown
          trigger={(isOpen) => (
            <div
              className="flex items-center gap-1 h-5 justify-center w-[77px] group"
              onMouseEnter={() => setLanguageHover(true)}
              onMouseLeave={() => setLanguageHover(false)}
            >
              <span
                className={`text-sm font-normal leading-5 transition-colors ${
                  isOpen
                    ? "text-[#36394A]"
                    : "text-[#6E7076] group-hover:text-[#36394A]"
                }`}
              >
                {selectedLanguage}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className={`transition-all duration-200 ${
                  isOpen ? "rotate-180" : "rotate-0"
                }`}
              >
                <path
                  d="M5.12013 6.55994L8.00013 9.43994L10.8801 6.55994"
                  stroke={isOpen || languageHover ? "#000000" : "#666D80"}
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ transition: "stroke 0.2s ease" }}
                />
              </svg>
            </div>
          )}
          items={languageItems}
          selectedValue={selectedLanguage}
          onSelect={setSelectedLanguage}
          className="mr-4"
        />
        <Dropdown
          trigger={(isOpen) => (
            <div
              className="flex items-center gap-1 h-5 justify-center w-[49px] group"
              onMouseEnter={() => setCurrencyHover(true)}
              onMouseLeave={() => setCurrencyHover(false)}
            >
              <span
                className={`text-sm font-normal leading-5 transition-colors ${
                  isOpen
                    ? "text-[#36394A]"
                    : "text-[#6E7076] group-hover:text-[#36394A]"
                }`}
              >
                {selectedCurrency}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className={`transition-all duration-200 ${
                  isOpen ? "rotate-180" : "rotate-0"
                }`}
              >
                <path
                  d="M5.12013 6.55994L8.00013 9.43994L10.8801 6.55994"
                  stroke={isOpen || currencyHover ? "#000000" : "#666D80"}
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ transition: "stroke 0.2s ease" }}
                />
              </svg>
            </div>
          )}
          items={currencyItems}
          selectedValue={selectedCurrency}
          onSelect={setSelectedCurrency}
          className="mr-6"
        />
        <button className="hover:bg-[#FAFAFA] active:opacity-40 cursor-pointer flex mr-[9px] h-8 px-3 py-1 justify-center items-center gap-1.5 rounded-md bg-gradient-to-b from-transparent to-[rgba(193,199,208,0.02)] bg-white shadow-[0px_1px_2px_0px_rgba(164,172,185,0.24),0px_0px_0px_1px_rgba(18,55,105,0.08)]">
          <span className="text-[#36394A] text-center text-sm font-medium leading-5">
            Вход
          </span>
        </button>
        <button className="-mb-[0.5px] h-[32px] w-[114px] cursor-pointer inline-flex px-4 py-1 justify-center items-center gap-1.5 rounded-md bg-[#4E75FF] shadow-[0px_1px_2px_0px_rgba(57,89,204,0.50),0px_0px_0px_1px_#4665D2] border border-[#6385FF] hover:bg-[#2850DC] active:opacity-40">
          <span className="text-white text-center  text-sm not-italic font-medium leading-5 ">
            Регистрация
          </span>
        </button>
      </div>
    </div>
  );
}
