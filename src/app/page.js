import InfoSection from "@/components/InfoSection";
import PageHeader from "@/components/PageHeader";
import ProductList from "@/components/ProductList";

export default function Home() {
  return (
    // main container
    <div className="w-[1256px]  border border-[#E8EBF0] bg-white rounded-2xl py-10 px-16">
      {/* child container*/}
      <div className="bg-gray-100  flex flex-col">
        <PageHeader />
        <hr className="border-b border-[#E8EBF0]" />
        {/* <ProductList /> */}
        {/* <InfoSection /> */}
      </div>
    </div>
  );
}
