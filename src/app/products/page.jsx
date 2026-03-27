import React from "react";
import CardProduct from "@/components/CardProduct";
import SearchBar from "@/components/SearchBar";
import { Box } from "lucide-react";
import Link from "next/link";

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
        <div className="text-sm text-slate-500 h-[70vh] w-full flex items-center justify-center">
          <div className="text-center">
            <Box className="size-20 mx-auto" />
            <h2 className="text-xl text-black">No products found.</h2>
            <p className="text-slate-500">We can't find any products matching &quot; {q} &quot;.</p>
            <Link href="/products" >
              <button className="cursor-pointer text-blue-500 text-center underline mt-3">Clear Search</button>
            </Link>
          </div>
        </div>
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
