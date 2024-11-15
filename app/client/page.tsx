"use client";

import { useState } from 'react'

const ClientPage = () => {
  const [count, setCount] = useState(0)
  console.log('client component')
  return (
    <div>
      <h1 className='text-7xl font-bold mb-4'>{count}</h1>
      <button className='btn btn-primary' onClick={()=>setCount(count + 1)}>Увеличить</button>
    </div>
   
  )
}

export default ClientPage