import React from 'react'
import { ArrowRight } from "lucide-react";
const RightContent = (props) => {
  return (
    <div className="absolute top-0 lef-0 h-full w-full p-8 flex flex-col justify-between">
        <h1 className='bg-white text-xl font-bold rounded-full h-12 w-12 flex justify-center items-center'>{props.id+1}</h1>
        <div>
          <p className='text-lg leading-relaxed text-gray-300 mb-14'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores aut
            deleniti delectus culpa reprehenderit quae!
          </p>
          <div className='flex justify-between'>
            <button className='bg-blue-500 text-white font-normal px-7 py-2 rounded-full'>{props.tag}</button>
            <button className='bg-blue-500 text-white font-normal px-4 py-2 rounded-full'>
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
  )
}

export default RightContent
