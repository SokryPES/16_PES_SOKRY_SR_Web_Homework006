import React from 'react'
import { Calendar , Eye , UsersRound} from 'lucide-react';
import Link from 'next/link';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default async function ListUserComponents({ q = "" }) {
    const res = await fetch(
        "https://homework-api.noevchanmakara.site/api/v1/customers"
    );
    const customers = await res.json();
    const query = q.trim().toLowerCase();
    const filteredCustomers = customers.payload.filter((customer) => {
      const firstName = (customer.firstName ?? "").toLowerCase();
      const lastName = (customer.lastName ?? "").toLowerCase();
      const fullName = `${firstName} ${lastName}`.trim();

      return (
        firstName.includes(query) ||
        lastName.includes(query) ||
        fullName.includes(query)
      );
    });
    

  return (
    <div className='mt-5'>
      
      {filteredCustomers.length === 0 ? (
        <div className="text-sm text-slate-500 h-[70vh] w-full flex items-center justify-center">
          <div className="text-center">
            <UsersRound  className="size-20 mx-auto" />
            <h2 className="text-xl text-black">No customers found.</h2>
            <p className="text-slate-500">We can't find any customers matching &quot; {q} &quot;.</p>
            <Link href="/customers" >
              <button className="cursor-pointer text-blue-500 text-center underline mt-3">Clear Search</button>
            </Link>
          </div>
        </div>
      ) : (
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
        {filteredCustomers.map((customer) => (
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
            <TableCell className="text-center">
              <Link
                href={`/customers/${customer.customerId}`}
                className="inline-flex items-center rounded-lg px-3 py-1.5 text-sm font-semibold transition border border-slate-300 hover:bg-slate-300"
              >
                <Eye className="size-4 me-2" />
                View Detail
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      
    </Table>
      )}


    </div>
  )
}
