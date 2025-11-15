import React from 'react'

export const Best = () => {
  return (
    <div className='flex flex-col justify-center items-center space-y-6 p-10 bg-(--primary-color) text-(--text-color) lg:flex-row lg:space-x-10 lg:space-y-0'>
        <div className='space-y-4 max-w-lg text-center lg:text-left'>
            <h3 className='font-bold capitalize text-2xl'>
                The best laptops around you 😉
            </h3>
            <p className='font-medium capitalize text-md '>
                We offer a wide range of high-performance laptops for work, study, and play. From ultraportable notebooks to powerful workstations, our selection includes trusted brands and the latest specs so you can find the perfect machine for your needs. Browse models with fast SSDs, long battery life, and vivid displays — all backed by reliable support.
            </p>
        </div>
        <div>
            <img src="https://i.pinimg.com/1200x/d0/b3/09/d0b3093286d057c49d00d79d847e206f.jpg" alt="best laptops" className='rounded-2xl ' />
        </div>
    </div>
  )
}
