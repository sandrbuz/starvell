"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function ComplaintPopup({ isOpen, onClose }) {
  const [textareaValue, setTextareaValue] = useState("");
  const [isComplaintDropdownOpen, setIsComplaintDropdownOpen] = useState(false);
  const [isComplaintVisible, setIsComplaintVisible] = useState(false);
  const [textareaHeight, setTextareaHeight] = useState(110);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const complaintDropdownRef = useRef(null);
  const textareaRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        complaintDropdownRef.current &&
        !complaintDropdownRef.current.contains(event.target)
      ) {
        setIsComplaintVisible(false);
        setTimeout(() => setIsComplaintDropdownOpen(false), 300);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) {
      setIsComplaintDropdownOpen(false);
      setIsComplaintVisible(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setIsPopupVisible(true), 10);
    } else {
      setIsPopupVisible(false);
    }
  }, [isOpen]);

  const handleResizeStart = (e) => {
    e.preventDefault();
    const startY = e.clientY;
    const startHeight = textareaHeight;

    const handleMouseMove = (e) => {
      const deltaY = e.clientY - startY;
      const newHeight = Math.max(110, startHeight + deltaY);
      setTextareaHeight(newHeight);
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 transition-all duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      style={{
        backgroundColor: isPopupVisible ? "rgba(0, 0, 0, 0.24)" : "transparent",
        backdropFilter: isPopupVisible ? "blur(2px)" : "none",
        transition: "background-color 300ms ease, backdrop-filter 300ms ease",
      }}
      onClick={isOpen ? onClose : undefined}
    >
      <div
        className={`pt-[24px] pl-[23px] pb-[22px] pr-[23px] bg-white w-[488px] rounded-2xl border border-[#E8EBF0] shadow-[0px_16px_32px_-12px_rgba(14,18,27,0.02)] relative transition-all duration-300 transform ${
          isPopupVisible
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-8 scale-95"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="active:bg-[#FFFFFF] absolute w-12 h-12 flex-shrink-0 rounded-lg border-[0.75px] border-[#E8EBF0] bg-white shadow-[0px_16px_32px_-12px_rgba(14,18,27,0.02)] flex items-center justify-center cursor-pointer hover:bg-[#FAFAFA] transition-all duration-200 ease-out"
          style={{ top: "-0.05rem", right: "-4.1rem" }}
          onClick={onClose}
        >
          <Image
            src="/close.svg"
            alt="Close"
            width={24}
            height={24}
            className="flex-shrink-0"
          />
        </button>
        <h1 className="text-[#36394A] text-xl not-italic font-semibold leading-7">
          Жалоба на 0xHearts.com
        </h1>
        <div className="w-[269px] flex-shrink-0 text-[#6E7076] text-sm not-italic font-normal leading-5 mt-6">
          Причина жалобы
        </div>
        <div className="relative mt-1" ref={complaintDropdownRef}>
          <div
            className={`flex w-[440px] px-3 py-2 items-center gap-2 rounded-lg cursor-pointer ${
              isComplaintVisible
                ? "bg-[#F7F7F7] shadow-[inset_0_0_0_1px_#D4D7DD]"
                : "shadow-[inset_0_0_0_1px_#E8EBF0]"
            }`}
            onClick={() => {
              if (!isComplaintDropdownOpen) {
                setIsComplaintDropdownOpen(true);
                setTimeout(() => setIsComplaintVisible(true), 10);
              } else {
                setIsComplaintVisible(false);
                setTimeout(() => setIsComplaintDropdownOpen(false), 300);
              }
            }}
          >
            <span
              className={`flex-1 text-base not-italic font-normal leading-6 ${
                isComplaintVisible
                  ? "text-[#9E9DA4]"
                  : "text-[#9E9DA4] hover:text-[#6E7076]"
              }`}
            >
              Выберите причину жалобы
            </span>
            <Image
              src="/chevron.svg"
              alt="Dropdown"
              width={17}
              height={16}
              className={`w-[17px] h-4 transition-transform duration-200 ${
                isComplaintVisible ? "rotate-180" : ""
              }`}
            />
          </div>
          {isComplaintDropdownOpen && (
            <div
              className={`absolute top-full mt-[7px] w-[440px] bg-white rounded-lg shadow-[0px_4px_16px_0px_rgba(14,18,27,0.08)] border border-[#E8EBF0] z-10 transition-all duration-300 transform ${
                isComplaintVisible
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
                        setIsComplaintVisible(false);
                        setTimeout(
                          () => setIsComplaintDropdownOpen(false),
                          300
                        );
                      }}
                    >
                      <span
                        className="text-[#36394A] text-base not-italic font-normal leading-6"
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
        <div className="text-[#6E7076] text-sm not-italic font-normal leading-5 mt-4">
          Опишите проблему
        </div>
        <div
          className="relative w-full mt-1 border border-[#E8EBF0] rounded-lg flex flex-col"
          style={{ height: `${textareaHeight}px` }}
        >
          <textarea
            ref={textareaRef}
            placeholder="Введите ваш текст"
            className="hover:placeholder:text-[#6E7076] text-[#36394A] w-full flex-1 pt-[7px] px-2.5 resize-none bg-transparent outline-none text-[#36394A] text-base not-italic font-normal leading-6 placeholder:text-[#9E9DA4] border-none"
            style={{
              height: "72px",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
            maxLength={200}
            value={textareaValue}
            onChange={(e) => setTextareaValue(e.target.value)}
          />
          <div className="flex justify-end items-center gap-1 px-2.5 pb-2">
            <span className="text-[#9E9DA4] text-right text-xs not-italic font-medium leading-[18px] tracking-[0.24px] uppercase">
              {textareaValue.length}/200
            </span>
            <Image
              src="/icon-for-textaria.svg"
              alt="Resize"
              width={12}
              height={12}
              className="cursor-nw-resize hover:opacity-70 transition-opacity duration-200"
              onMouseDown={handleResizeStart}
            />
          </div>
        </div>
        <div className="text-[#6E7076] text-sm not-italic font-normal leading-5 mt-[15px]">
          Доказательства
        </div>
        <div className="relative h-[116px] hover:bg-[#FAFAFA] active:bg-[#FFFFFF] rounded-lg group transition-all duration-200 ease-out">
          <div
            style={{
              backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='8' ry='8' stroke='rgba(158, 157, 164, 1)' stroke-width='2' stroke-dasharray='7.6%2c 12' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")`,
              borderRadius: "8px",
            }}
            className="flex px-[27px] py-[16px] flex-col justify-center items-center gap-3 self-stretch rounded-lg mt-1"
          >
            <Image
              src="/upload-cloud.svg"
              alt="Upload"
              width={24}
              height={24}
            />
            <div className="flex flex-col items-center gap-1 self-stretch">
              <span className="text-[#36394A] group-active:text-[#AFB0B7] text-center text-base not-italic font-medium leading-6 transition-all duration-200 ease-out">
                Выберите файл или перетащите его сюда
              </span>
              <span className="text-[#6E7076]  text-center text-sm not-italic font-normal leading-5">
                JPEG или PNG до 5 MB
              </span>
            </div>
          </div>
        </div>
        <div className="flex gap-2 mt-5">
          <button className="cursor-pointer hover:bg-[#FAFAFA] active:opacity-40 flex w-[216px] h-10 px-3 py-1 justify-center items-center gap-1.5 flex-shrink-0 rounded-lg bg-gradient-to-b from-transparent to-[rgba(193,199,208,0.02)] bg-white shadow-[0px_1px_2px_0px_rgba(164,172,185,0.24),0px_0px_0px_1px_rgba(18,55,105,0.08)]">
            <span className="text-[#36394A]  text-center text-base not-italic font-medium leading-6">
              Мне нужна поддержка
            </span>
          </button>
          <button className="cursor-pointer flex w-[216px] h-10 px-3 py-1 justify-center items-center gap-1.5 flex-shrink-0 rounded-lg  bg-[#4E75FF] shadow-[0px_1px_2px_0px_rgba(57,89,204,0.50),0px_0px_0px_1px_#4665D2] border border-[#6385FF] hover:bg-[#2850DC] active:opacity-40">
            <span className="text-white text-center text-base not-italic font-medium leading-6">
              Пожаловаться
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
