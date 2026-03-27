import React from "react";
import CardProduct from "@/components/CardProduct";

export default async function page() {
  const res = await fetch(
    "https://homework-api.noevchanmakara.site/api/v1/products",
  );
  const data = await res.json();
  console.log(data);
  return (
    <div>
      <div className="grid grid-cols-4 gap-4 ps-5 mt-10 auto-rows-fr">
        {data.payload.map((product) => (
          <CardProduct key={product.productId} product={product} />
        ))}
      </div>
    </div>
  );
}
