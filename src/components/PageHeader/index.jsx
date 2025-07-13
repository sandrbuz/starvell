"use client";

import { useState } from "react";
import { categories } from "../constants";

export default function PageHeader() {
  const [selectedCategory, setSelectedCategory] = useState("blox-fruits");

  return (
    <div className="max-w-[680px]">
      <h1 className="text-[#36394A] text-2xl not-italic font-semibold leading-8">
        Робуксы Roblox
      </h1>
      <p className="text-[#6E7076] text-base not-italic font-normal leading-6 mt-1">
        Какой-то длинный текст, связанный с SEO-оптимизацией относительно данной
        категории, на которую вы сейчас смотрите. Какой-то длинный текст,
        связанный с SEO-оптимизацией относительно данной категории, на которую
        вы сейчас смотрите.
      </p>
      <div className="flex flex-wrap gap-2  mt-6 mb-[23px]">
        {categories.map((category) => {
          const isSelected = category.id === selectedCategory;
          return (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`cursor-pointer flex h-8 px-3 py-1 justify-center items-center gap-1.5 rounded-md transition-colors duration-150 hover:bg-[#DEE6FF] active:bg-[#BECCFE] active:text-white
                ${
                  isSelected
                    ? "bg-[#5C80FD] text-white hover:bg-[#DEE6FF] hover:text-[#5C80FD] active:bg-[#BECCFE] active:text-white"
                    : "bg-[#F2F5FF] text-[#5C80FD]"
                }
              `}
            >
              <div className="text-center text-sm not-italic font-medium leading-5">
                {category.name}
              </div>
              <div className="text-center text-[10px] not-italic font-semibold leading-5 tracking-[0.8px]">
                {category.count}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
