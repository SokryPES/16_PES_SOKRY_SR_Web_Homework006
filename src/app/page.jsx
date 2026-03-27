import Image from "next/image";
import ProductHomepageCardComponent from "@/components/ProductHomepageCardComponent";
import CustomerHomepageCardComponent from "@/components/CustomerHomepageCardComponent";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-full gap-6">
      <ProductHomepageCardComponent/>
      <CustomerHomepageCardComponent/> 
    </div>
  );
}
