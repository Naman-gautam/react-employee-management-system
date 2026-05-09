import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className='h-full w-72 bg-yellow-400 rounded-xl shrink-0 p-5'>
 <div className='flex justify-between p-5 items-center'>
      <h3 className='bg-red-600 px-3 py-1 rounded text-sm'> {data.category}</h3>
      <h4 className='text-sm'>  {data.date}</h4>
     </div>
 <h2 className='mt-5 font-semibold text-2xl'> {data.title}</h2>
 <p className='mt-3 text-sm'> {data.decsription}</p>
 <div className='mt-4'> 
  <button className='p-4 bg-pink-500 text-sm'>failed</button>
 </div>
     </div>
  )
}

export default FailedTask
