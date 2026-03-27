import React from "react";
import CardProduct from "@/components/CardProduct";
import SearchBar from "@/components/SearchBar";

export default async function page({ searchParams }) {
  const { q = "" } = await searchParams;
  const res = await fetch(
    "https://homework-api.noevchanmakara.site/api/v1/products",
  );
  const data = await res.json();
  const query = q.trim().toLowerCase();

  const searchProduct = data.payload.filter((product) => {
    const productName = (product.name ?? "").toLowerCase();
    const productDescription = (product.description ?? "").toLowerCase();
    return productName.includes(query) || productDescription.includes(query);
  });
  return (
    <div className="space-y-6 px-5 pt-8">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold text-slate-900">List All Products</h1>
        <SearchBar 
          placeholder="Search products"
        />
      </div>
      {searchProduct.length === 0 ? (
        <p className="text-sm text-slate-500">No products.</p>
      ) : (
        <div className="grid grid-cols-1 gap-4 auto-rows-fr sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {searchProduct.map((product) => (
            <CardProduct key={product.productId} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
