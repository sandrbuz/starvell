import ProductListToolbar from "./ProductListToolbar";
import ProductsTable from "./ProductsTable";

export default function ProductList() {
  return (
    <div className="mt-4">
      <ProductListToolbar />
      <ProductsTable />
      <button className="mt-[15px] w-full flex h-10 py-1 px-3 justify-center items-center gap-1.5 self-stretch rounded-lg border border-[#E8EBF0] hover:bg-[#FAFAFA] active:bg-[#FFFFFF] active:border-[#F6F7F9]">
        <span className="text-[#36394A] text-center text-base font-medium leading-6 active:text-[#AFB0B7]">
          Показать больше предложений
        </span>
      </button>
    </div>
  );
}
