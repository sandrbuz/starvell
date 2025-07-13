import InfoSection from "@/components/InfoSection";
import PageHeader from "@/components/PageHeader";
import ProductList from "@/components/ProductList";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-[1256px]  border border-[#E8EBF0] bg-white rounded-2xl py-10 px-16 relative my-6">
      <Image
        src="/roblox-avatar.png"
        alt="Roblox character"
        width={418}
        height={418}
        className="absolute top-0 right-0 object-contain"
      />

      <div className=" flex flex-col">
        <PageHeader />
        <hr className="h-px w-full bg-[#E8EBF0] border-0 m-0 p-0" />
        <ProductList />
        <hr className="h-px w-full bg-[#E8EBF0] border-0 m-0 p-0 mt-[39px]" />

        <InfoSection />
      </div>
    </div>
  );
}
