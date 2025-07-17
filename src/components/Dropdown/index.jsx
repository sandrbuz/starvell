"use client";

import { useState, useRef, useEffect } from "react";

export default function Dropdown({
  trigger,
  items,
  selectedValue,
  onSelect,
  selectable = true,
  className = "",
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const dropdownRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsVisible(false);
        setTimeout(() => setIsOpen(false), 300);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleTriggerClick = () => {
    if (!isOpen) {
      setIsOpen(true);
      setTimeout(() => setIsVisible(true), 10);
    } else {
      setIsVisible(false);
      setTimeout(() => setIsOpen(false), 200);
    }
  };

  const handleItemClick = (item) => {
    if (selectable && onSelect) {
      onSelect(item);
    }
    setIsVisible(false);
    setTimeout(() => setIsOpen(false), 300);
  };

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <div
        ref={triggerRef}
        onClick={handleTriggerClick}
        className="cursor-pointer"
      >
        {typeof trigger === "function" ? trigger(isVisible) : trigger}
      </div>

      {isOpen && (
        <div
          className={`absolute top-full right-0 mt-6 flex min-w-[168px] p-1 flex-col items-start gap-1 rounded-lg border border-[#E8EBF0] bg-white shadow-[0px_16px_32px_-12px_rgba(14,18,27,0.10)] z-50 transition-all duration-300 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          <ul className="w-full">
            {items.map((item, index) => (
              <li
                key={index}
                onClick={() => handleItemClick(item)}
                className="flex w-full p-2 items-center gap-2 rounded-lg bg-white cursor-pointer hover:bg-[#F8F9FA] active:opacity-40 transition-colors"
              >
                <span className="text-[#36394A] text-sm font-normal leading-5 whitespace-nowrap">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
