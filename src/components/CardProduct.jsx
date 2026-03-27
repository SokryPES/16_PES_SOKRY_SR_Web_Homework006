import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function CardProduct({ product }) {
  return (
    <div className="h-full"> 
      <div className="shadow-xl rounded-xl h-full flex flex-col">
        <Image
          src={product.imageUrl ?? 'https://i.pinimg.com/736x/b3/b6/fc/b3b6fcce4b4ef0827a0088d08f9730d2.jpg'}
          alt={product.name}
          className="w-full h-48 object-cover rounded-lg"
          width={500}
          height={300}
        />
        <div className="p-2 flex-1 flex flex-col"> 
          <div className="flex justify-between items-center">
            <div>
              <span className="uppercase text-xs font-bold">flahship seriese</span>
            <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
            </div>
              <h2 className="font-bold text-xl">${product.price}</h2>
          </div>
          <p className="text-gray-700 line-clamp-2 mt-2 flex-1">{product.description}</p>
          <Link href={`/products/${product.productId}`}>
            <Button className="cursor-pointer mt-4 w-full bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700 transition-colors duration-300">
              View Product <ArrowUpRight />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
