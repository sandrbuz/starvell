"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import ProductRow from "./ProductRow";

const SortIconDefault = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    className="w-3 h-4"
  >
    <path
      d="M3.93137 5C3.32555 5 3.02265 5 2.88238 4.8802C2.76068 4.77626 2.69609 4.62033 2.70865 4.46077C2.72312 4.27688 2.93731 4.06269 3.36569 3.63431L5.43431 1.56569C5.63232 1.36768 5.73133 1.26867 5.84549 1.23158C5.94591 1.19895 6.05409 1.19895 6.15451 1.23158C6.26867 1.26867 6.36768 1.36768 6.56569 1.56569L8.63432 3.63432C9.06269 4.06269 9.27688 4.27688 9.29135 4.46077C9.30391 4.62033 9.23932 4.77626 9.11762 4.8802C8.97735 5 8.67445 5 8.06863 5H3.93137Z"
      fill="#6E7076"
    />
    <path
      d="M3.93137 7C3.32555 7 3.02265 7 2.88238 7.1198C2.76068 7.22374 2.69609 7.37967 2.70865 7.53923C2.72312 7.72312 2.93731 7.93731 3.36569 8.36569L5.43431 10.4343C5.63232 10.6323 5.73133 10.7313 5.84549 10.7684C5.94591 10.8011 6.05409 10.8011 6.15451 10.7684C6.26867 10.7313 6.36768 10.6323 6.56569 10.4343L8.63432 8.36568C9.06269 7.93731 9.27688 7.72312 9.29135 7.53923C9.30391 7.37967 9.23932 7.22374 9.11762 7.1198C8.97735 7 8.67445 7 8.06863 7H3.93137Z"
      fill="#6E7076"
    />
  </svg>
);

const SortIconDown = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    className="w-3 h-4 pb-0.5"
  >
    <path
      d="M3.93137 7C3.32555 7 3.02265 7 2.88238 7.1198C2.76068 7.22374 2.69609 7.37967 2.70865 7.53923C2.72312 7.72312 2.93731 7.93731 3.36569 8.36569L5.43431 10.4343C5.63232 10.6323 5.73133 10.7313 5.84549 10.7684C5.94591 10.8011 6.05409 10.8011 6.15451 10.7684C6.26867 10.7313 6.36768 10.6323 6.56569 10.4343L8.63432 8.36568C9.06269 7.93731 9.27688 7.72312 9.29135 7.53923C9.30391 7.37967 9.23932 7.22374 9.11762 7.1198C8.97735 7 8.67445 7 8.06863 7H3.93137Z"
      fill="#6E7076"
    />
  </svg>
);

const SortIconUp = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    className="w-3 h-4 mt-1"
  >
    <path
      d="M3.93137 5C3.32555 5 3.02265 5 2.88238 4.8802C2.76068 4.77626 2.69609 4.62033 2.70865 4.46077C2.72312 4.27688 2.93731 4.06269 3.36569 3.63431L5.43431 1.56569C5.63232 1.36768 5.73133 1.26867 5.84549 1.23158C5.94591 1.19895 6.05409 1.19895 6.15451 1.23158C6.26867 1.26867 6.36768 1.36768 6.56569 1.56569L8.63432 3.63432C9.06269 4.06269 9.27688 4.27688 9.29135 4.46077C9.30391 4.62033 9.23932 4.77626 9.11762 4.8802C8.97735 5 8.67445 5 8.06863 5H3.93137Z"
      fill="#6E7076"
    />
  </svg>
);

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
        "🍩 / Рейд Теста - Куплю и пройду рейд Теста - РЕЙДЫ ТЕСТА - МЕСТО ТЕСТА - ДОУЧ - 🍩, Услуги",
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
      description: "💛Фрукт Будда 💛 🟡Buddha Fruit🟡, Предметы, Трейд",
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
      description: "🧠spirit fruit | Спирит | фрукт Спирит🧠, Предметы, Трейд",
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
      description: "🟦Rumble Fruit🟦Фрукт Грохот, Предметы, Трейд",
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
      description: "🐘 Фрукт Мамонта 🐘 Мамонт/Mammoth 🐘, Предметы, Трейд",
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
        "🔑 🔪  Заспавню и убью катакури в1 / Получение бледного шарфа / бледный шарф  🔪 🔑, Услуги",
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
        "👾Призову / Убью(если надо) рип индру / активирую все плиты / Rip_indra / rip_indra / выбью чашу👾, Услуги",
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
        "🔑👑 Заспавню и убью катакури в2 / Получение рейда теста / миррор фрактал / зеркальный фрактал /👑🔑, Услуги",
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
        "⚔️ КУПЛЮ И ПРОЙДУ ЛО - БОСС ЛО - ЛО - РЕЙД ЛО - ЧИП ЛО - БУСТ - RAID LO - LO - ⚔️, Услуги",
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
      description: "Вандо, Услуги",
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
      description: "✨🍀Прокачка LvL цена за 1 уровень🍀✨, Услуги",
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
        "💝Набор 3 в 1 Покупка Легендарных мечей 💝 wando / shisui / saddi / ТТК / TTK / Вандо / Шисуи/ Садди, Услуги",
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
  const [tallRows, setTallRows] = useState(new Set());
  const [amountSort, setAmountSort] = useState("default");
  const [priceSort, setPriceSort] = useState("default");

  const handleAmountSort = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (amountSort === "default") {
      setAmountSort("down");
    } else if (amountSort === "down") {
      setAmountSort("up");
    } else {
      setAmountSort("default");
    }
  };

  const handlePriceSort = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (priceSort === "default") {
      setPriceSort("down");
    } else if (priceSort === "down") {
      setPriceSort("up");
    } else {
      setPriceSort("default");
    }
  };

  const getAmountSortIcon = () => {
    switch (amountSort) {
      case "down":
        return <SortIconDown />;
      case "up":
        return <SortIconUp />;
      default:
        return <SortIconDefault />;
    }
  };

  const getPriceSortIcon = () => {
    switch (priceSort) {
      case "down":
        return <SortIconDown />;
      case "up":
        return <SortIconUp />;
      default:
        return <SortIconDefault />;
    }
  };

  useEffect(() => {
    const newTallRows = new Set();

    descriptionRefs.current.forEach((tdRef, index) => {
      if (tdRef) {
        const descriptionDiv = tdRef.querySelector(".description-text");
        if (descriptionDiv) {
          const lineHeight = 24;
          if (descriptionDiv.scrollHeight > lineHeight * 1.5) {
            tdRef.style.height = "81px";
            newTallRows.add(index);
          }
        }
      }
    });

    setTallRows(newTallRows);
  }, []);

  return (
    <div className="mt-[31px]">
      <div className="flex mb-1 gap-6">
        <div className="w-[617px] text-[#6E7076] text-sm font-normal not-italic leading-5">
          Описание
        </div>
        <div className="w-[228px] text-[#6E7076] text-sm font-normal not-italic leading-5">
          Продавец
        </div>
        <div className="w-[108px] flex justify-end items-center">
          <div
            className="cursor-pointer flex items-center gap-1 select-none"
            onClick={handleAmountSort}
          >
            <span className="cursor-pointer text-[#6E7076] text-right text-sm not-italic font-normal leading-5">
              Наличие
            </span>
            {getAmountSortIcon()}
          </div>
        </div>
        <div className="w-[103px] flex justify-end items-center">
          <div
            className="cursor-pointer flex items-center gap-1 select-none"
            onClick={handlePriceSort}
          >
            <span className="cursor-pointer text-[#6E7076] text-right text-sm not-italic font-normal leading-5">
              Цена
            </span>
            {getPriceSortIcon()}
          </div>
        </div>
      </div>

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
              isTallRow={tallRows.has(index)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
