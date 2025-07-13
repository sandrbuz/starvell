import ProductListToolbar from "./ProductListToolbar";
import ProductsTable from "./ProductsTable";

export default function ProductList() {
  return (
    <div className="mt-4">
      <ProductListToolbar />
      <ProductsTable />
      <button className="mt-[15px] text-[#36394A] w-full flex h-10 py-1 px-3 justify-center items-center gap-1.5 self-stretch rounded-lg border border-[#E8EBF0] hover:bg-[#FAFAFA] active:bg-[#FFFFFF] active:border-[#F6F7F9] active:text-[#AFB0B7] shadow-[0px_0.5px_1px_0px_rgba(0,0,0,0.08)]">
        <span className=" text-center text-base font-medium leading-6">
          Показать больше предложений
        </span>
      </button>
    </div>
  );
}
