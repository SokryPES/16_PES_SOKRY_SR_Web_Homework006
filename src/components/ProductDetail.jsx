"use client";

import { useState } from "react";
import {
  Heart,
  Minus,
  Plus,
  ShoppingCart,
  Share2,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ProductDetail({ product }) {
  const [data, setData] = useState(1);

  const addItem = () => setData((prev) => prev + 1);
  const undoItem = () => setData((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <section className="w-full bg-[#f4f4f6] p-4 flex justify-center">
      <div className=" rounded-4xl border border-[#e4eaef] bg-[#f8fafc] grid grid-cols-2">
        <div className="relative min-h-90 border-b border-[#e4eaef] p-6 md:border-b-0 md:border-r md:p-8">
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <span className="inline-flex rounded-full bg-[#0f1a3b] px-3 py-1 text-[10px] font-extrabold  text-white uppercase">
                New Arrival
              </span>
              <span className="block w-fit rounded-full bg-[#cbeefe] px-3 py-1 text-[10px] font-bold  text-[#00a8d4] uppercase">
                Free Shipping
              </span>
            </div>

            <div>
              <Heart className="size-4 mb-3" />

              <Share2 className="size-4" />
            </div>
          </div>

          <div className="mt-10 rounded-2xl bg-[#ececef] p-6 shadow-2xl">
            <Image
              src={
                product.imageUrl ??
                "https://i.pinimg.com/736x/b5/03/d9/b503d9c5311213d636bdbb347d697d54.jpg"
              }
              alt={product.name}
              className="w-full h-[350px] object-cover rounded-lg hover:rotate-2 duration-300 "
              width={300}
              height={350}
            />
          </div>
        </div>

        <div className="p-10">
          <Link href="/products">
            <button className="cursor-pointer inline-flex items-center gap-2 text-xs font-bold tracking-[0.13em] text-[#91a0b6] uppercase transition hover:text-[#5d6f89]">
              <ArrowLeft className="size-3" />
              Back to Product
            </button>
          </Link>

          <p className="mt-8 text-[11px] font-bold tracking-[0.28em] text-[#00a7d6] uppercase">
            Premium Experience
          </p>

          <h1 className="mt-3 text-4xl font-black leading-[0.95] text-black">
            {product.name}
          </h1>

          <div className="mt-6 flex items-end gap-3">
            <span className="text-5xl font-black tracking-tight text-[#0d1637]">
              ${product.price}
            </span>
            <div className="pb-1">
              <p className="text-sm font-bold text-[#b1bbc8] line-through">
                ${product.price}
              </p>
              <p className="text-xs font-black tracking-wide text-[#05b38a] uppercase">
                Save 20% today
              </p>
            </div>
          </div>

          <div className="mt-7 border-l-3 border-[#7fd9ef] pl-4 text-lg text-[#6f7f95]">
            {product.description}
          </div>

          <div className="mt-7">
            <p className="text-[10px] font-bold tracking-[0.18em] text-[#a0acc0] uppercase">
              Select Quantity
            </p>
            <div className="mt-3 inline-flex items-center gap-5 rounded-2xl bg-[#edf1f5] px-4 py-3">
              <button
                type="button"
                onClick={undoItem}
                className="rounded-md p-1 text-[#1a2942] transition hover:bg-white"
                
              >
                <Minus className="size-4" />
              </button>
              <span className="min-w-3 text-center text-xl font-bold text-[#0d1637]">
                {data}
              </span>
              <button
                type="button"
                onClick={addItem}
                className="rounded-md p-1 text-[#1a2942] transition hover:bg-white"
                
              >
                <Plus className="size-4" />
              </button>
            </div>
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <button className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-[#0f1a3b] px-8 text-sm font-bold text-white shadow-2xl transition hover:bg-[#091f62] cursor-pointer ">
              <ShoppingCart className="size-4" />
              Add to Cart
            </button>
            <button className="inline-flex h-12 items-center justify-center rounded-2xl border border-[#dbe2ea] bg-white px-8 text-sm font-bold text-[#41516a] transition hover:border-[#7abdff] hover:bg-[#7abdff] cursor-pointer">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
