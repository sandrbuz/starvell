"use client";

import { useState } from "react";

export default function ProductsTable() {
  const [products, setProducts] = useState([
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

  return <div className="mt-2">table</div>;
}
