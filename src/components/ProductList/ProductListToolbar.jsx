"use client";

import { useState } from "react";
import ComplaintPopup from "./ComplaintPopup";
import ProductListHeader from "./ProductListHeader";
import ProductListFilters from "./ProductListFilters";

export default function ProductListToolbar() {
  const [activeTab, setActiveTab] = useState("all");
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div>
      <ProductListHeader
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onSellButtonClick={() => setIsPopupOpen(true)}
      />
      <ProductListFilters />
      <ComplaintPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </div>
  );
}
