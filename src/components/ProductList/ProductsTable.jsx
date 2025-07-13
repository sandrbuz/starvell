"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function ProductsTable() {
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
      description: "🤑🔥🕘Аренда Вип Сервера | 24 часа🕒🔥🤑, VIP-сервер",
      seller: "0xHearts.com",
      stock: "322",
      price: "0.64 ₽",
    },
    {
      id: 2,
      description:
        "❤ФРУКТ СПИРИТ, СПИРИТ, БЛОКС ФРУКТ, SPIRIT💛💢, Предметы, Трейд",
      seller: "IgorDunʼdenkoff",
      stock: "∞",
      price: "0.63 ₽",
    },
    {
      id: 3,
      description:
        "🤲Куплю и пройду рейд БУДДЫ - БУДДА РЕЙД - БУДА - место будды - Рейды буды - BUDDHA RAID - 🤲, Услуги",
      seller: "Dendi",
      stock: "4 556",
      price: "0.60 ₽",
    },
    {
      id: 4,
      description:
        "🍩 / Рейд Теста - Куплю и пройду рейд Теста - РЕЙДЫ ТЕСТА - МЕСТО ТЕСТА - ДОУЧ - 🍩, Услуги",
      seller: "Dendi",
      stock: "4 556",
      price: "0.60 ₽",
    },
    {
      id: 5,
      description: "🟦Rumble Fruit🟦Фрукт Грохот, Предметы, Трейд",
      seller: "Dendi",
      stock: "4 556",
      price: "0.60 ₽",
    },
    {
      id: 6,
      description: "🐘 Фрукт Мамонта 🐘 Мамонт/Mammoth 🐘, Предметы, Трейд",
      seller: "Dendi",
      stock: "4 556",
      price: "0.60 ₽",
    },
    {
      id: 7,
      description: "💛Фрукт Будда 💛 🟡Buddha Fruit🟡, Предметы, Трейд",
      seller: "Dendi",
      stock: "4 556",
      price: "0.60 ₽",
    },
    {
      id: 8,
      description: "💛Фрукт Будда 💛 🟡Buddha Fruit🟡, Предметы, Трейд",
      seller: "Dendi",
      stock: "4 556",
      price: "0.60 ₽",
    },
    {
      id: 9,
      description:
        "🔑👑 Заспавню и убью катакури в2 / Получение рейда теста / миррор фрактал / зеркальный фрактал /👑🔑, Услуги",
      seller: "Dendi",
      stock: "4 556",
      price: "0.60 ₽",
    },
    {
      id: 10,
      description:
        "⚔️ КУПЛЮ И ПРОЙДУ ЛО - БОСС ЛО - ЛО - РЕЙД ЛО - ЧИП ЛО - БУСТ - RAID LO - LO - ⚔️, Услуги",
      seller: "Dendi",
      stock: "4 556",
      price: "0.60 ₽",
    },
    {
      id: 11,
      description:
        "🔑👑 Заспавню и убью катакури в2 / Получение рейда теста / миррор фрактал / зеркальный фрактал /👑🔑, Услуги",
      seller: "Dendi",
      stock: "4 556",
      price: "0.60 ₽",
    },
    {
      id: 12,
      description:
        "🔑👑 Заспавню и убью катакури в2 / Получение рейда теста / миррор фрактал / зеркальный фрактал /👑🔑, Услуги",
      seller: "Dendi",
      stock: "4 556",
      price: "0.60 ₽",
    },
    {
      id: 13,
      description: "Вандо, Услуги",
      seller: "Dendi",
      stock: "4 556",
      price: "0.60 ₽",
    },
    {
      id: 14,
      description: "✨🍀Прокачка LvL цена за 1 уровень🍀✨, Услуги",
      seller: "Dendi",
      stock: "4 556",
      price: "0.60 ₽",
    },
    {
      id: 15,
      description:
        "💝Набор 3 в 1 Покупка Легендарных мечей 💝 wando / shisui / saddi / ТТК / TTK / Вандо / Шисуи/ Садди, Услуги",
      seller: "Dendi",
      stock: "4 556",
      price: "0.60 ₽",
    },
  ];

  return (
    <div className="mt-[31px] font-[Inter]">
      {/* Заголовки таблицы */}
      <div className="flex mb-1 gap-6">
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
            <tr
              key={product.id}
              className={`h-[76px] ${
                index !== products.length - 1 ? "border-b border-gray-200" : ""
              }`}
            >
              {/* Описание */}
              <td
                ref={(el) => (descriptionRefs.current[index] = el)}
                className="align-middle "
              >
                <div className="text-sm min-h-[59px] line-clamp-2">
                  <div className="description-text w-[616px] text-[#36394A] font-[Inter] text-base not-italic font-normal leading-6">
                    {product.description}
                  </div>
                </div>
              </td>

              {/* Продавец */}
              <td className="align-middle">
                <div className="text-sm min-h-[59px] py-2">
                  {product.seller}
                </div>
              </td>

              {/* Наличие */}
              <td className="align-middle text-right">
                <div className="text-sm min-h-[59px] py-2">{product.stock}</div>
              </td>

              {/* Цена */}
              <td className="align-middle text-right">
                <div className="text-sm min-h-[59px] py-2">{product.price}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
