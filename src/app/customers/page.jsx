import React from 'react'
import ListUserComponents from '@/components/ListUserComponents';
import SearchBar from '@/components/SearchBar';

export default async function page({ searchParams }) {
  const { q = "" } = await searchParams;

  return (
    <div className='space-y-6 px-5 pt-8'>
      <div className='flex justify-between'>
        <h1 className='font-bold text-3xl'>List of All Customers</h1>
        <SearchBar
          placeholder='Search customers '
        />
      </div>
      <ListUserComponents q={q} />
    </div>
  )
}
