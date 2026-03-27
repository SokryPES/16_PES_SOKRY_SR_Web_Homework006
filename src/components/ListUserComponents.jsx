import React from 'react'
import { Calendar } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default async function ListUserComponents() {
    const res = await fetch(
        "https://homework-api.noevchanmakara.site/api/v1/customers"
    );
    const customers = await res.json();
    

  return (
    <div className='px-5 mt-5'>
      <div className='flex justify-between'>
        <h1 className='font-bold text-2xl'>List of All Customers</h1>
        <h1>Total Customers: {customers.payload.length}</h1>
      </div>

        <Table className={"shadow-2xl p-4 "}>
      <TableHeader>
        <TableRow>
          <TableHead>Customer Name</TableHead>
          <TableHead>Birth Date</TableHead>
          <TableHead className="text-center">Money Spent</TableHead>
          <TableHead className="text-center">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {customers.payload.map((customer) => (
          <TableRow key={customer.customerId}>
            <TableCell >
                <h2 className="text-xl font-semibold">{customer.firstName} {customer.lastName}</h2>
                <p className='uppercase text-slate-500'>ID : {customer.customerId}</p>
            </TableCell>
            <TableCell className={"flex gap-x-1  "}><Calendar size={18}/> {customer.birthDate}</TableCell>
            <TableCell className="text-center text-green-500 text-md font-bold ">
                <span className="bg-green-100 px-2 py-1 rounded-lg">
                    ${customer.moneySpent}
                </span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      
    </Table>


    </div>
  )
}
