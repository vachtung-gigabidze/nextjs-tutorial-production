import Link from 'next/link'
import React from 'react'

const HomePage = () => {
  return (
    <div>
      <h1 className='text-5xl mb-8 font-bold'>

      Next.js обучение
      </h1>
      <Link href='/about' className='btn btn-accent'>начнем</Link>
      </div>
  )
}

export default HomePage