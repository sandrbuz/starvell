"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import ProductRow from "./ProductRow";

export default function ProductsTable() {
  const [products, setProducts] = useState([
    {
      id: 1,
      description: "🤑🔥🕘Аренда Вип Сервера | 24 часа🕒🔥🤑, VIP-сервер",
      seller: {
        name: "0xHearts.com",
        avatar: "/user-ava-def.svg",
        rating: "1.0",
        accountAge: "3 года",
        reviewsCount: "4288 отзывов",
      },
      amount: 322,
      price: 0.64,
      withIcons: true,
    },
    {
      id: 2,
      description:
        "❤ФРУКТ СПИРИТ, СПИРИТ, БЛОКС ФРУКТ, SPIRIT💛💢, Предметы, Трейд",
      seller: {
        name: "IgorDun4enkoff",
        avatar: "/igor-ava.svg",
        rating: "2.0",
        accountAge: "1 год",
        reviewsCount: "45 отзывов",
      },
      amount: "∞",
      price: 0.63,
      withIcons: false,
    },
    {
      id: 3,
      description:
        "🤲Куплю и пройду рейд БУДДЫ - БУДДА РЕЙД - БУДА - место будды - Рейды буды - BUDDHA RAID - 🤲, Услуги",
      seller: {
        name: "Dendi",
        avatar: "/user-ava-def.svg",
        rating: "3.0",
        accountAge: "2 дня",
        reviewsCount: "4 отзыва",
      },
      amount: 4556,
      price: 0.6,
      withIcons: false,
    },
    {
      id: 4,
      description:
        "🤲Куплю и пройду рейд БУДДЫ - БУДДА РЕЙД - БУДА - место будды - Рейды буды - BUDDHA RAID - 🤲, Услуги",
      seller: {
        name: "Dendi",
        avatar: "/user-ava-def.svg",
        rating: "4.0",
        accountAge: "2 дня",
        reviewsCount: "4 отзыва",
      },
      amount: 4556,
      price: 0.6,
      withIcons: false,
    },
    {
      id: 5,
      description:
        "🤲Куплю и пройду рейд БУДДЫ - БУДДА РЕЙД - БУДА - место будды - Рейды буды - BUDDHA RAID - 🤲, Услуги",
      seller: {
        name: "Dendi",
        avatar: "/user-ava-def.svg",
        rating: "5.0",
        accountAge: "2 дня",
        reviewsCount: "4 отзыва",
      },
      amount: 4556,
      price: 0.6,
      withIcons: false,
    },
    {
      id: 6,
      description:
        "🤲Куплю и пройду рейд БУДДЫ - БУДДА РЕЙД - БУДА - место будды - Рейды буды - BUDDHA RAID - 🤲, Услуги",
      seller: {
        name: "Dendi",
        avatar: "/user-ava-def.svg",
        rating: "5.0",
        accountAge: "2 дня",
        reviewsCount: "4 отзыва",
      },
      amount: 4556,
      price: 0.6,
      withIcons: false,
    },
    {
      id: 7,
      description:
        "🤲Куплю и пройду рейд БУДДЫ - БУДДА РЕЙД - БУДА - место будды - Рейды буды - BUDDHA RAID - 🤲, Услуги",
      seller: {
        name: "Dendi",
        avatar: "/user-ava-def.svg",
        rating: "5.0",
        accountAge: "2 дня",
        reviewsCount: "4 отзыва",
      },
      amount: 4556,
      price: 0.6,
      withIcons: false,
    },
    {
      id: 8,
      description:
        "🤲Куплю и пройду рейд БУДДЫ - БУДДА РЕЙД - БУДА - место будды - Рейды буды - BUDDHA RAID - 🤲, Услуги",
      seller: {
        name: "Dendi",
        avatar: "/user-ava-def.svg",
        rating: "5.0",
        accountAge: "2 дня",
        reviewsCount: "4 отзыва",
      },
      amount: 4556,
      price: 0.6,
      withIcons: false,
    },
    {
      id: 9,
      description:
        "🤲Куплю и пройду рейд БУДДЫ - БУДДА РЕЙД - БУДА - место будды - Рейды буды - BUDDHA RAID - 🤲, Услуги",
      seller: {
        name: "Dendi",
        avatar: "/user-ava-def.svg",
        rating: "5.0",
        accountAge: "2 дня",
        reviewsCount: "4 отзыва",
      },
      amount: 4556,
      price: 0.6,
      withIcons: false,
    },
    {
      id: 10,
      description:
        "🤲Куплю и пройду рейд БУДДЫ - БУДДА РЕЙД - БУДА - место будды - Рейды буды - BUDDHA RAID - 🤲, Услуги",
      seller: {
        name: "Dendi",
        avatar: "/user-ava-def.svg",
        rating: "5.0",
        accountAge: "2 дня",
        reviewsCount: "4 отзыва",
      },
      amount: 4556,
      price: 0.6,
      withIcons: false,
    },
    {
      id: 11,
      description:
        "🤲Куплю и пройду рейд БУДДЫ - БУДДА РЕЙД - БУДА - место будды - Рейды буды - BUDDHA RAID - 🤲, Услуги",
      seller: {
        name: "Dendi",
        avatar: "/user-ava-def.svg",
        rating: "5.0",
        accountAge: "2 дня",
        reviewsCount: "4 отзыва",
      },
      amount: 4556,
      price: 0.6,
      withIcons: false,
    },
    {
      id: 12,
      description:
        "🤲Куплю и пройду рейд БУДДЫ - БУДДА РЕЙД - БУДА - место будды - Рейды буды - BUDDHA RAID - 🤲, Услуги",
      seller: {
        name: "Dendi",
        avatar: "/user-ava-def.svg",
        rating: "5.0",
        accountAge: "2 дня",
        reviewsCount: "4 отзыва",
      },
      amount: 4556,
      price: 0.6,
      withIcons: false,
    },
    {
      id: 13,
      description:
        "🤲Куплю и пройду рейд БУДДЫ - БУДДА РЕЙД - БУДА - место будды - Рейды буды - BUDDHA RAID - 🤲, Услуги",
      seller: {
        name: "Dendi",
        avatar: "/user-ava-def.svg",
        rating: "5.0",
        accountAge: "2 дня",
        reviewsCount: "4 отзыва",
      },
      amount: 4556,
      price: 0.6,
      withIcons: false,
    },
    {
      id: 14,
      description:
        "🤲Куплю и пройду рейд БУДДЫ - БУДДА РЕЙД - БУДА - место будды - Рейды буды - BUDDHA RAID - 🤲, Услуги",
      seller: {
        name: "Dendi",
        avatar: "/user-ava-def.svg",
        rating: "5.0",
        accountAge: "2 дня",
        reviewsCount: "4 отзыва",
      },
      amount: 4556,
      price: 0.6,
      withIcons: false,
    },
    {
      id: 15,
      description:
        "🤲Куплю и пройду рейд БУДДЫ - БУДДА РЕЙД - БУДА - место будды - Рейды буды - BUDDHA RAID - 🤲, Услуги",
      seller: {
        name: "Dendi",
        avatar: "/user-ava-def.svg",
        rating: "5.0",
        accountAge: "2 дня",
        reviewsCount: "4 отзыва",
      },
      amount: 4556,
      price: 0.6,
      withIcons: false,
    },
  ]);
  const descriptionRefs = useRef([]);

  useEffect(() => {
    descriptionRefs.current.forEach((tdRef) => {
      if (tdRef) {
        const descriptionDiv = tdRef.querySelector(".description-text");
        if (descriptionDiv) {
          const lineHeight = 24; // фиксировано из leading-6
          if (descriptionDiv.scrollHeight > lineHeight * 1.5) {
            tdRef.style.height = "80px";
          }
        }
      }
    });
  }, []);

  return (
    <div className="mt-[31px]">
      {/* Заголовки таблицы */}
      <div className="flex mb-1 gap-6">
        <div className="w-[616px] text-[#6E7076] text-sm font-normal not-italic leading-5">
          Описание
        </div>
        <div className="w-[232px] text-[#6E7076] text-sm font-normal not-italic leading-5">
          Продавец
        </div>
        <div className="w-[104px] flex justify-end items-center gap-1">
          <span className="text-[#6E7076] text-right text-sm not-italic font-normal leading-5">
            Наличие
          </span>
          <Image src="/icon-sort.svg" alt="sort" width={12} height={12} />
        </div>
        <div className="w-[104px] flex justify-end items-center gap-1">
          <span className="text-[#6E7076] text-right text-sm not-italic font-normal leading-5">
            Цена
          </span>
          <Image src="/icon-sort.svg" alt="sort" width={12} height={12} />
        </div>
      </div>

      {/* Таблица */}
      <table
        className="bg-white rounded-lg mt-1"
        style={{ width: "1128px", tableLayout: "fixed" }}
      >
        <colgroup>
          <col style={{ width: "640px" }} />
          <col style={{ width: "256px" }} />
          <col style={{ width: "104px" }} />
          <col style={{ width: "128px" }} />
        </colgroup>
        <tbody>
          {products.map((product, index) => (
            <ProductRow
              key={product.id}
              product={product}
              index={index}
              descriptionRef={(el) => (descriptionRefs.current[index] = el)}
              isLast={index === products.length - 1}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
