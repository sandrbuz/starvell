"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function ComplaintPopup({ isOpen, onClose }) {
  const [textareaValue, setTextareaValue] = useState("");
  const [isComplaintDropdownOpen, setIsComplaintDropdownOpen] = useState(false);
  const [textareaHeight, setTextareaHeight] = useState(110);
  const complaintDropdownRef = useRef(null);
  const textareaRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        complaintDropdownRef.current &&
        !complaintDropdownRef.current.contains(event.target)
      ) {
        setIsComplaintDropdownOpen(false);
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
      className={`fixed inset-0 flex items-center justify-center z-50 popup-overlay ${
        isOpen ? "show" : ""
      }`}
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.24)",
        backdropFilter: "blur(2px)",
      }}
      onClick={isOpen ? onClose : undefined}
    >
      <div
        className="popup-content pt-[24px] pl-[23px] pb-[22px] pr-[23px] bg-white w-[488px] rounded-2xl border border-[#E8EBF0] shadow-[0px_16px_32px_-12px_rgba(14,18,27,0.02)] relative"
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
            className={`flex w-[439px] px-3 py-2 items-center gap-2 rounded-lg cursor-pointer ${
              isComplaintDropdownOpen
                ? "bg-[#F7F7F7] shadow-[inset_0_0_0_1px_#D4D7DD]"
                : "shadow-[inset_0_0_0_1px_#E8EBF0]"
            }`}
            onClick={() => setIsComplaintDropdownOpen(!isComplaintDropdownOpen)}
          >
            <span
              className={`flex-1 text-base not-italic font-normal leading-6 ${
                isComplaintDropdownOpen
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
                isComplaintDropdownOpen ? "rotate-180" : ""
              }`}
            />
          </div>
          <div
            className={`dropdown-menu absolute top-full mt-[7px] w-[440px] bg-white rounded-lg shadow-[0px_4px_16px_0px_rgba(14,18,27,0.08)] border border-[#E8EBF0] z-10 ${
              isComplaintDropdownOpen ? "show" : ""
            }`}
          >
            <div className="p-1 flex flex-col gap-1">
              {["Пункт меню", "Пункт меню", "Пункт меню", "Пункт меню"].map(
                (item, index) => (
                  <div
                    key={index}
                    className="p-2 hover:bg-[#F7F7F7] cursor-pointer rounded-lg transition-all duration-200 ease-out"
                    onClick={() => {
                      setIsComplaintDropdownOpen(false);
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
        <div className="text-[#6E7076] text-sm not-italic font-normal leading-5 mt-[16px]">
          Доказательства
        </div>
        <div className="flex px-[27px] py-[15px] flex-col justify-center items-center gap-3 self-stretch rounded-lg border border-dashed border-[#9E9DA4] mt-1">
          <Image src="/upload-cloud.svg" alt="Upload" width={24} height={24} />
          <div className="flex flex-col items-center gap-1 self-stretch">
            <span className="text-[#36394A] text-center text-base not-italic font-medium leading-6">
              Выберите файл или перетащите его сюда
            </span>
            <span className="text-[#6E7076] text-center text-sm not-italic font-normal leading-5">
              JPEG или PNG до 5 MB
            </span>
          </div>
        </div>
        <div className="flex gap-2 mt-5">
          <button className="cursor-pointer group flex w-[216px] h-10 px-3 py-1 justify-center items-center gap-1.5 flex-shrink-0 rounded-lg shadow-[0px_1px_2px_0px_rgba(164,172,185,0.24),0px_0px_0px_1px_rgba(18,55,105,0.08)] hover:bg-[#FAFAFA] active:bg-white active:shadow-[0px_1px_2px_0px_rgba(164,172,185,0.16),0px_0px_0px_1px_rgba(18,55,105,0.05)]">
            <span className="text-[#36394A] group-active:text-[#AFB0B7] text-center text-base not-italic font-medium leading-6">
              Мне нужна поддержка
            </span>
          </button>
          <button className="cursor-pointer flex w-[216px] h-10 px-3 py-1 justify-center items-center gap-1.5 flex-shrink-0 rounded-lg border border-[#6385FF] bg-[#4E75FF] shadow-[0px_1px_2px_0px_rgba(57,89,204,0.50),0px_0px_0px_1px_#4665D2] hover:bg-[#2850DC] active:bg-[#B9C8FF] active:border-[#B5C1ED] active:shadow-[0px_1px_2px_0px_rgba(192,206,255,0.50),0px_0px_0px_1px_#C0CEFF]">
            <span className="text-white text-center text-base not-italic font-medium leading-6">
              Пожаловаться
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
