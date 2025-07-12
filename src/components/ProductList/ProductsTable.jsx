"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProductsTable() {
  const [products1, setProducts1] = useState([
    {
      description: "🤑🔥🕘Аренда Вип Сервера | 24 часа🕒🔥🤑, VIP-сервер",
      seller: {
        name: "0xHearts.com",
        avatar: "",
        rating: 5.0,
        accountAge: 3,
        reviewsCount: 4288,
      },
      amount: 322,
      price: 0.64,
      withIcons: true,
    },
    {
      description: "🤑🔥🕘Аренда Вип Сервера | 24 часа🕒🔥🤑, VIP-сервер",
      seller: {
        name: "0xHearts.com",
        avatar: "",
        rating: 5.0,
        accountAge: 3,
        reviewsCount: 4288,
      },
      amount: 322,
      price: 0.64,
      withIcons: true,
    },
    {
      description: "🤑🔥🕘Аренда Вип Сервера | 24 часа🕒🔥🤑, VIP-сервер",
      seller: {
        name: "0xHearts.com",
        avatar: "",
        rating: 5.0,
        accountAge: 3,
        reviewsCount: 4288,
      },
      amount: 322,
      price: 0.64,
      withIcons: true,
    },
  ]);
  // Пока используем произвольные данные для тестирования
  const products = [
    {
      id: 1,
      description: "🔥🎯Аренда Вип Сервера | 24 часа🔥🎯, VIP-сервер",
      seller: "0xHearts.com",
      stock: "322",
      price: "0.64 ₽",
    },
    {
      id: 2,
      description:
        "🌟ФРУКТ СПИРИТ, СПИРИТ, БЛОКС ФРУКТ, SPIRIT🌟🎯, Предметы, Трейд",
      seller: "IgorDunʼdenkoff",
      stock: "∞",
      price: "0.63 ₽",
    },
    {
      id: 3,
      description:
        "😺Куплю и продаю рейд БУДДЫ - БУДДА РЕЙД - БУДА - место будды - Рейды буды - BUDDHA RAID😺🎯, Услуги",
      seller: "Dendi",
      stock: "4 556",
      price: "0.60 ₽",
    },
  ];

  return (
    <div className="mt-[31px] font-[Inter]">
      {/* Заголовки таблицы */}
      <div className="flex mb-3 gap-6">
        <div className="w-[616px] text-[#6E7076] font-[Inter] text-sm font-normal not-italic leading-5">
          Описание
        </div>
        <div className="w-[232px] text-[#6E7076] font-[Inter] text-sm font-normal not-italic leading-5">
          Продавец
        </div>
        <div className="w-[104px] flex justify-end items-center gap-1">
          <span className="text-[#6E7076] text-right font-[Inter] text-sm not-italic font-normal leading-5">
            Наличие
          </span>
          <Image src="/icon-sort.svg" alt="sort" width={12} height={12} />
        </div>
        <div className="w-[104px] flex justify-end items-center gap-1">
          <span className="text-[#6E7076] text-right font-[Inter] text-sm not-italic font-normal leading-5">
            Цена
          </span>
          <Image src="/icon-sort.svg" alt="sort" width={12} height={12} />
        </div>
      </div>

      {/* Строки таблицы */}
      <div className="bg-white rounded-lg">
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`flex items-center h-[60px] ${
              index !== products.length - 1 ? "border-b border-gray-200" : ""
            }`}
          >
            {/* Описание */}
            <div className="w-[616px] px-4">
              <div className="text-sm text-gray-900 line-clamp-2">
                {product.description}
              </div>
            </div>

            {/* Продавец */}
            <div className="w-[232px] px-4">
              <div className="text-sm text-gray-900">{product.seller}</div>
            </div>

            {/* Наличие */}
            <div className="w-[104px] px-4">
              <div className="text-sm text-gray-900">{product.stock}</div>
            </div>

            {/* Цена */}
            <div className="w-[104px] px-4">
              <div className="text-sm text-gray-900 font-medium">
                {product.price}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
