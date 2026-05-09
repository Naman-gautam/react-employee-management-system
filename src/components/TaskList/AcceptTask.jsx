import React from 'react'

const AcceptTask = ({data}) => {
  
  return (
     <div className='h-full w-72 bg-red-400 rounded-xl shrink-0 p-5'>
 <div className='flex justify-between p-5 items-center'>
      <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>{data.category}</h3>
      <h4 className='text-sm'> {data.date}</h4>
     </div>
 <h2 className='mt-5 font-semibold text-2xl'>{data.title}</h2>
 <p className='mt-2 text-sm'>{data.description}</p>
 <div className='flex justify-between mt-4 gap-2'>
    <button className='bg-green-500 py-1 px-2 text-sm'>Mark as completed</button>
    <button  className='bg-red-500 py-1 px-2 text-sm'>Marked as failed</button>
 </div>
     </div>
  )
}

export default AcceptTask
