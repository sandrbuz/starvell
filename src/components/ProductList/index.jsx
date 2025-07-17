import ProductListToolbar from "./ProductListToolbar";
import ProductsTable from "./ProductsTable";

export default function ProductList() {
  return (
    <div className="mt-4">
      <ProductListToolbar />
      <ProductsTable />
      <button className="hover:bg-[#FAFAFA] active:opacity-40 cursor-pointer mt-[15px] text-[#36394A] w-full flex h-10 py-1 px-3 justify-center items-center gap-1.5 self-stretch rounded-lg bg-gradient-to-b from-transparent to-[rgba(193,199,208,0.02)] bg-white shadow-[0px_1px_2px_0px_rgba(164,172,185,0.24),0px_0px_0px_1px_rgba(18,55,105,0.08)]">
        <span className=" text-center text-base font-medium leading-6">
          Показать больше предложений
        </span>
      </button>
    </div>
  );
}
