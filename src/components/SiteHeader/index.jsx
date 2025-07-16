import Image from "next/image";

export default function SiteHeader() {
  return (
    <div className="flex justify-center items-center h-[56px] bg-[#FFFFFF] w-full border-b border-[#E8EBF0]">
      <div className="w-[1128px] flex items-center">
        <Image
          className="mr-[49px] cursor-pointer"
          src="/logo.svg"
          alt="logo"
          width={118}
          height={24}
        />
        <div className="mr-[114px] group flex w-96 h-8 px-3 py-1.5 items-center gap-3 shrink-0 rounded-md border border-transparent shadow-[0px_1px_2px_0px_rgba(153,161,176,0.16),0px_0px_0px_1px_rgba(17,38,66,0.08)] backdrop-blur-[6px]">
          <Image src="/search.svg" alt="search" width={16} height={16} />
          <input
            type="text"
            placeholder="Поиск игр и приложений..."
            maxLength="30"
            className="w-80 text-[#36394A] font-inter text-sm font-normal leading-5 outline-none border-none bg-transparent placeholder:text-[#9E9DA4] group-hover:placeholder:text-[#6E7076]"
          />
        </div>
        <div className="cursor-pointer flex items-center gap-1 h-5 justify-center w-25 mr-4">
          <span className="text-[#6E7076] text-sm font-normal leading-5">
            Поддержка
          </span>
          <Image src="/chevron.svg" alt="chevron" width={16} height={16} />
        </div>
        <div className="flex items-center gap-1 h-5 justify-center w-[77px] mr-4 cursor-pointer">
          <span className="text-[#6E7076] text-sm font-normal leading-5">
            Русский
          </span>
          <Image src="/chevron.svg" alt="chevron" width={16} height={16} />
        </div>
        <div className="flex items-center gap-1 h-5 justify-center w-[49px] mr-6 cursor-pointer">
          <span className="text-[#6E7076] text-sm font-normal leading-5">
            RUB
          </span>
          <Image src="/chevron.svg" alt="chevron" width={16} height={16} />
        </div>
        <button className="hover:bg-[#FAFAFA] active:opacity-40 cursor-pointer flex mr-[9px] h-8 px-3 py-1 justify-center items-center gap-1.5 rounded-md bg-gradient-to-b from-transparent to-[rgba(193,199,208,0.02)] bg-white shadow-[0px_1px_2px_0px_rgba(164,172,185,0.24),0px_0px_0px_1px_rgba(18,55,105,0.08)]">
          <span className="text-[#36394A] text-center text-sm font-medium leading-5">
            Вход
          </span>
        </button>
        <button className="-mb-[0.5px] h-[32px] w-[114px] cursor-pointer inline-flex px-4 py-1 justify-center items-center gap-1.5 rounded-md bg-[#4E75FF] shadow-[0px_1px_2px_0px_rgba(57,89,204,0.50),0px_0px_0px_1px_#4665D2] border border-[#6385FF] hover:bg-[#2850DC] active:opacity-40">
          <span className="text-white text-center  text-sm not-italic font-medium leading-5 ">
            Регистрация
          </span>
        </button>
      </div>
    </div>
  );
}
