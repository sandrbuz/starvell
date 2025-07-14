import Image from "next/image";
import { useState } from "react";
import { getStarIcon, getRatingStyles } from "../utils";

export default function ProductRow({ product, index, descriptionRef, isLast }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  return (
    <tr
      key={product.id}
      className={`h-[76px] ${!isLast ? "border-b border-[#E8EBF0]" : ""}`}
    >
      <td ref={descriptionRef} className="align-middle">
        <div
          className={`flex items-center h-[67px] w-[656px] -ml-2.5 rounded-l-lg ${
            isActive ? "bg-white" : isHovered ? "bg-[#FAFAFA]" : ""
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onMouseDown={() => setIsActive(true)}
          onMouseUp={() => setIsActive(false)}
        >
          <div className="text-sm min-h-[59px] pr-8 py-2 pl-2 overflow-hidden">
            <div className="description-text w-[616px] text-[#36394A] text-base not-italic font-normal leading-6 line-clamp-2">
              {product.description}
            </div>
          </div>
        </div>
      </td>

      <td className="align-middle">
        <div
          className={`flex items-center h-[67px] w-[280px] ${
            isActive ? "bg-white" : isHovered ? "bg-[#FAFAFA]" : ""
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onMouseDown={() => setIsActive(true)}
          onMouseUp={() => setIsActive(false)}
        >
          <div className="text-sm min-h-[59px] py-2 flex gap-1">
            <Image
              src={product.seller.avatar}
              alt="avatar"
              width={30}
              height={30}
              className="h-[30px] w-[30px]"
            />
            <div className="flex flex-col">
              <div className="flex gap-1 items-center">
                <div className="text-[#36394A] text-base not-italic font-medium leading-6">
                  {product.seller.name}
                </div>
                <div
                  className="h-[22px] flex px-1 py-0.5 justify-center items-center gap-0.5 rounded-md"
                  style={getRatingStyles(product.seller.rating)}
                >
                  <div className="flex w-[19px] h-[18px] flex-col justify-center text-center text-xs not-italic font-semibold leading-[18px]">
                    {product.seller.rating}
                  </div>
                  <Image
                    src={getStarIcon(product.seller.rating)}
                    alt="star"
                    width={12}
                    height={12}
                  />
                </div>
              </div>
              <div className="self-stretch text-[#6E7076] text-xs not-italic font-normal leading-[18px]">
                {product.seller.accountAge} на сайте,{" "}
                {product.seller.reviewsCount}
              </div>
            </div>
          </div>
        </div>
      </td>

      <td className="align-middle text-right">
        <div
          className={`flex items-center h-[67px] w-[120px] pr-3.5 justify-end ${
            isActive ? "bg-white" : isHovered ? "bg-[#FAFAFA]" : ""
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onMouseDown={() => setIsActive(true)}
          onMouseUp={() => setIsActive(false)}
        >
          <div className="min-h-[59px] py-2 text-[#36394A] text-base not-italic font-normal leading-6">
            {product.amount}
          </div>
        </div>
      </td>

      <td className="align-middle text-right">
        <div
          className={`flex items-center h-[67px] w-[140px] -mr-5 rounded-r-lg justify-end ${
            isActive ? "bg-white" : isHovered ? "bg-[#FAFAFA]" : ""
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onMouseDown={() => setIsActive(true)}
          onMouseUp={() => setIsActive(false)}
        >
          <div className="min-h-[59px] py-2 pr-2 flex flex-col gap-1">
            <div className="pr-[2px] text-[#36394A] text-right text-base not-italic font-semibold leading-6">
              {product.price} ₽
            </div>
            {product.withIcons && (
              <div className="flex justify-end gap-1">
                <Image
                  src="/lightning.svg"
                  alt="lightning"
                  width={12}
                  height={12}
                />
                <Image src="/pin.svg" alt="pin" width={12} height={12} />
              </div>
            )}
          </div>
        </div>
      </td>
    </tr>
  );
}
