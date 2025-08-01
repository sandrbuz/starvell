import Image from "next/image";

export default function SiteFooter() {
  return (
    <div className="flex w-full justify-center bg-[#ffffff] h-[180px] border-t border-[#E8EBF0] pt-[31px]">
      <div className="w-[1128px] flex">
        <div className="mr-22">
          <Image
            className="cursor-pointer"
            src="/logo.svg"
            alt="logo"
            width={118}
            height={24}
          />
          <p className="text-[#6E7076] text-sm font-normal leading-5 w-[296px] mt-3">
            © 2024 STARVELL, лучший маркетплейс цифровых товаров и услуг
          </p>
          <p className="text-[#6E7076] text-sm font-normal leading-5 w-[296px] mt-2">
            Дизайн сделан в 0xHearts.com
          </p>
        </div>
        <div className="flex w-[232px] flex-col items-start gap-2 mr-[300px]">
          <h4 className="text-[#33363E] text-base font-medium leading-6 self-stretch">
            Поддержка
          </h4>
          <ul className="list-none p-0 m-0 flex flex-col gap-1">
            <li className="text-[#6E7076] text-sm font-normal leading-5 w-[232px] cursor-pointer hover:text-[#2f2f31] active:opacity-40">
              Написать в поддержку
            </li>
            <li className="text-[#6E7076] text-sm font-normal leading-5 w-[232px] cursor-pointer hover:text-[#2f2f31] active:opacity-40">
              Политика конфиденциальности
            </li>
            <li className="text-[#6E7076] text-sm font-normal leading-5 w-[232px] cursor-pointer hover:text-[#2f2f31] active:opacity-40">
              Пользовательское соглашение
            </li>
          </ul>
        </div>
        <div className="flex gap-3 w-11 h-11">
          <Image
            src="/icon-social-tg3.svg"
            alt="socials"
            width={44}
            height={44}
            className="w-[44px] h-[44px] cursor-pointer transition-all duration-300 hover:[filter:drop-shadow(0px_0px_12px_rgba(164,219,240,0.5))] active:opacity-40"
          />
          <Image
            src="/icon-social-ds.svg"
            alt="socials"
            width={44}
            height={44}
            className="w-[44px] h-[44px] cursor-pointer transition-all duration-300 hover:[filter:drop-shadow(0px_0px_12px_rgba(180,185,240,0.5))] active:opacity-40"
          />
          <Image
            src="/icon-social-vk.svg"
            alt="socials"
            width={44}
            height={44}
            className="w-[44px] h-[44px] cursor-pointer transition-all duration-300 hover:[filter:drop-shadow(0px_0px_12px_rgba(160,180,210,0.5))] active:opacity-40"
          />
          <Image
            src="/icon-social-yt.svg"
            alt="socials"
            width={44}
            height={44}
            className="w-[44px] h-[44px] cursor-pointer transition-all duration-300 hover:[filter:drop-shadow(0px_0px_12px_rgba(220,160,170,0.4))] active:opacity-40"
          />
        </div>
      </div>
    </div>
  );
}
