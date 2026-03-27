import Image from "next/image";
import ProductHomepageCardComponent from "@/components/ProductHomepageCardComponent";
import CustomerHomepageCardComponent from "@/components/CustomerHomepageCardComponent";

export default async function Home() {
  const res = await fetch(
    "https://homework-api.noevchanmakara.site/api/v1/customers"
  );
  const customers = await res.json(); 
  return (
    <div className="flex items-center justify-center h-full gap-6">
      <ProductHomepageCardComponent/>
      <CustomerHomepageCardComponent customers={customers.payload} /> 
    </div>
  );
}
