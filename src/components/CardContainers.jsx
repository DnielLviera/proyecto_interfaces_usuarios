import React from 'react'
import Card from "./Card"
import { products } from "../mockData/products"

const CardContainers = () => {

  return (
    <section className="flex flex-wrap gap-4 place-content-around my-8 h-screen">
        {
            products.map(product =>{
                return(
                    <Card key={product.id}
                        {...product}
                    />
                )
            })
        }
    </section>
  )
}

export default CardContainers