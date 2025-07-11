"use client";

import { useState } from "react";

export default function PageHeader() {
  const [categories, setCategories] = useState([
    { name: "Робуксы", count: 395 },
    { name: "Подарочные карты", count: 1193 },
    { name: "Донат робуксов (паки)", count: 777 },
    { name: "Premium", count: 1193 },
    { name: "VIP-сервер", count: 395 },
    { name: "Аккаунты", count: 1193 },
    { name: "Скины", count: 777 },
    { name: "Prime Gaming", count: 395 },
    { name: "Studio", count: 1193 },
    { name: "Прочее", count: 395 },
    { name: "Adopt Me", count: 1193 },
    { name: "Anime Defenders", count: 777 },
    { name: "Arm Wrestle Simulator", count: 1193 },
    { name: "ASTD", count: 395 },
    { name: "Blade Ball", count: 1193 },
    { name: "Blox Fruits", count: 777 },
    { name: "Da Hood", count: 395 },
    { name: "GPO", count: 1193 },
    { name: "Jailbreak", count: 777 },
    { name: "Jujutsu Shenanigans", count: 395 },
    { name: "King Legacy", count: 1193 },
    { name: "MM2", count: 777 },
    { name: "Pet Simulator 99", count: 1193 },
    { name: "Pet Simulator X", count: 395 },
    { name: "Project Slayers", count: 1193 },
    { name: "Toilet Tower Defense", count: 777 },
    { name: "Tower Defense Simulator", count: 395 },
    { name: "YBA", count: 1193 },
    { name: "Прочие игры", count: 777 },
  ]);

  return (
    <div className="max-w-[680px]">
      <h1 className="text-[#36394A] font-inter text-2xl not-italic font-semibold leading-8">
        Робуксы Roblox
      </h1>
      <p className="text-[#6E7076] font-inter text-base not-italic font-normal leading-6 mt-1">
        Какой-то длинный текст, связанный с SEO-оптимизацией относительно данной
        категории, на которую вы сейчас смотрите. Какой-то длинный текст,
        связанный с SEO-оптимизацией относительно данной категории, на которую
        вы сейчас смотрите.
      </p>
      <div className="flex flex-wrap gap-2 my-6">
        {categories.map((category) => (
          <button
            key={category.name}
            className="flex h-8 px-3 py-1 justify-center items-center gap-1.5 rounded-md bg-[rgba(92,128,253,0.08)] text-[#5C80FD]"
          >
            <div>{category.name}</div>
            <div>{category.count}</div>
          </button>
        ))}
      </div>
    </div>
  );
}
