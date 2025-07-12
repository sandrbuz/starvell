import ProductListToolbar from "./ProductListToolbar";
import ProductsTable from "./ProductsTable";

export default function ProductList() {
  return (
    <div className="mt-4">
      <ProductListToolbar />
      <ProductsTable />
    </div>
  );
}
