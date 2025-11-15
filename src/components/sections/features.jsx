import React from 'react'
import { products } from '../../products'

export const Features = () => {
    const featureImage = products[2].imageUrl;
  return (
<>
    <div  className='flex flex-col md:flex-row justify-center items-center md:items-start space-y-6 md:space-y-0 md:space-x-10 p-10 bg-(--secondary-color) text-(--text-color)'>
        <div>

            <img src={featureImage} alt="featured laptop" className=' rounded-2xl' />
        </div>
        <div className=' text-2xl my-1 md:text-3xl lg:mt-23 space-y-4'>
            <h2 className='font-bold'>Find the perfect laptop for your needs</h2>
            <br/>
            <p>Browse our curated selection of laptops — from ultraportables to powerful workstations — chosen for reliability, performance, and value.</p>
                <ul>
                    <li>
                        • Fast SSD storage and responsive performance
                    </li>
                    <li>
                        • Long battery life for work on the go
                    </li>
                    <li>
                        • Lightweight, durable designs
                    </li>
                    <li>
                        • Warranty and reliable customer support
                    </li>
                </ul>
                 
           

        </div>
    </div>
</>
  )
}
