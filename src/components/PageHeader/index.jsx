"use client";

import { useState } from "react";

export default function PageHeader() {
  const [selectedCategory, setSelectedCategory] = useState("blox-fruits");
  const [categories, setCategories] = useState([
    { id: "robux", name: "Робуксы", count: 395 },
    { id: "gift-cards", name: "Подарочные карты", count: 1193 },
    { id: "robux-packs", name: "Донат робуксов (паки)", count: 777 },
    { id: "premium", name: "Premium", count: 1193 },
    { id: "vip-server", name: "VIP-сервер", count: 395 },
    { id: "accounts", name: "Аккаунты", count: 1193 },
    { id: "skins", name: "Скины", count: 777 },
    { id: "prime-gaming", name: "Prime Gaming", count: 395 },
    { id: "studio", name: "Studio", count: 1193 },
    { id: "other", name: "Прочее", count: 395 },
    { id: "adopt-me", name: "Adopt Me", count: 1193 },
    { id: "anime-defenders", name: "Anime Defenders", count: 777 },
    { id: "arm-wrestle-simulator", name: "Arm Wrestle Simulator", count: 1193 },
    { id: "astd", name: "ASTD", count: 395 },
    { id: "blade-ball", name: "Blade Ball", count: 1193 },
    { id: "blox-fruits", name: "Blox Fruits", count: 777 },
    { id: "da-hood", name: "Da Hood", count: 395 },
    { id: "gpo", name: "GPO", count: 1193 },
    { id: "jailbreak", name: "Jailbreak", count: 777 },
    { id: "jujutsu-shenanigans", name: "Jujutsu Shenanigans", count: 395 },
    { id: "king-legacy", name: "King Legacy", count: 1193 },
    { id: "mm2", name: "MM2", count: 777 },
    { id: "pet-simulator-99", name: "Pet Simulator 99", count: 1193 },
    { id: "pet-simulator-x", name: "Pet Simulator X", count: 395 },
    { id: "project-slayers", name: "Project Slayers", count: 1193 },
    { id: "toilet-tower-defense", name: "Toilet Tower Defense", count: 777 },
    {
      id: "tower-defense-simulator",
      name: "Tower Defense Simulator",
      count: 395,
    },
    { id: "yba", name: "YBA", count: 1193 },
    { id: "other-games", name: "Прочие игры", count: 777 },
  ]);

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
              className={`flex h-8 px-3 py-1 justify-center items-center gap-1.5 rounded-md transition-colors duration-150 hover:bg-[#DEE6FF] active:bg-[#BECCFE] active:text-white
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
