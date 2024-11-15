import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const DrinkList = ({ drinks }: any) => {
    return (
        <ul className='grid sm:grid-cols-2 gap-6 mt-6'>
            {drinks.map((drink: any) => {
                return <li key={drink.idDrink}>
                    <Link href={`/drinks/${drink.idDrink}`}
                    className='text-xl font-medium'>
                        <div className='relative h-48 mb-4'>
                            <Image src={drink.strDrinkThumb} fill sizes='(max-width:768px) 100vw, (max-width:1200px) 50 vw' alt='drink.strDrink' className='rounded-md object-cover'/>

                        </div>
                        {drink.strDrink}
                    </Link>
                </li>
            })}
        </ul>
    )
}

export default DrinkList
// import Link from 'next/link'
// import React from 'react'

// const DrinkList = ({ drinks }: any) => {
//     return (
//         <ul className='menu menu-vertical pl-0'>
//             {drinks.map((drink: any) => {
//                 return <li key={drink.idDrink}>
//                     <Link href={`/drinks/${drink.idDrink}`}
//                     className='text-xl font-medium'>
//                         {drink.strDrink}
//                     </Link>
//                 </li>
//             })}
//         </ul>
//     )
// }

// export default DrinkList