import Link from "next/link";
import Image from "next/image";

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const fetchDrink = async (id:any) => {
    //await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await fetch(`${url}${id}`)
  
    if (!response.ok) {
      throw new Error('Failed to fetch drink')
    }
  
    return await response.json()    
  }

const SingleDrinkPage = async ({params} : any)  => {
    const { id } = await params
    const drink = await fetchDrink(id);
    const title = drink?.drinks[0]?.strDrink;
    const img = drink?.drinks[0]?.strDrinkThumb;
    const instructions = drink?.drinks[0]?.strInstructions;
    console.log(drink)

  return (
    <div>
        <Link href='/drinks' className="btn btn-primary mt-8 mb-12">
            назад к напиткам
        </Link>
        <Image src={img} width={300} height={300} className="w-48 h-48 rounded-lg shadow-lg mb-4" priority alt={title}></Image>
        
        <h1 className="text-4xl mb-8">
            {title}

        </h1>
        <h1 className="text-4xl mb-8">


            {instructions}
        </h1>
    </div>
  )
}

export default SingleDrinkPage