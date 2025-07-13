import Image from "next/image";

// Функция для определения иконки звездочки по рейтингу
function getStarIcon(rating) {
  const numRating = parseFloat(rating);
  if (numRating >= 5.0) return "/star-green.svg";
  if (numRating >= 4.0) return "/star-yellow.svg";
  if (numRating >= 3.0) return "/star-orange.svg";
  return "/star-red.svg";
}

// Функция для определения стилей блока рейтинга
function getRatingStyles(rating) {
  const numRating = parseFloat(rating);
  if (numRating >= 5.0)
    return {
      backgroundColor: "rgba(29, 180, 98, 0.08)",
      color: "#1DB462",
    };
  if (numRating >= 4.0)
    return {
      backgroundColor: "rgba(255, 229, 0, 0.08)",
      color: "#E1B000",
    };
  if (numRating >= 3.0)
    return {
      backgroundColor: "rgba(255, 142, 38, 0.08)",
      color: "#FF8E26",
    };
  return {
    backgroundColor: "rgba(255, 92, 92, 0.08)",
    color: "#FF5C5C",
  };
}

export default function ProductRow({ product, index, descriptionRef, isLast }) {
  return (
    <tr
      key={product.id}
      className={`h-[76px] hover:bg-[#FAFAFA] ${
        !isLast ? "border-b border-[#E8EBF0]" : ""
      }`}
    >
      {/* Описание */}
      <td ref={descriptionRef} className="align-middle">
        <div className="text-sm min-h-[59px] pr-6 py-2 overflow-hidden">
          <div className="description-text w-[616px] text-[#36394A] text-base not-italic font-normal leading-6 line-clamp-2">
            {product.description}
          </div>
        </div>
      </td>

      {/* Продавец */}
      <td className="align-middle">
        <div className="text-sm min-h-[59px] py-2 flex gap-1">
          <Image
            src={product.seller.avatar}
            alt="avatar"
            width={28}
            height={28}
            className="h-7 w-7"
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
      </td>

      {/* Наличие */}
      <td className="align-middle text-right">
        <div className="min-h-[59px] py-2 text-[#36394A] text-base not-italic font-normal leading-6">
          {product.amount}
        </div>
      </td>

      {/* Цена */}
      <td className="align-middle text-right">
        <div className=" min-h-[59px] py-2 flex flex-col gap-1">
          <div className=" text-[#36394A] text-right text-base not-italic font-semibold leading-6">
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
      </td>
    </tr>
  );
}
