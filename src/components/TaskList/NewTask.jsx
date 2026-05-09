import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className='h-full w-72 bg-blue-400 rounded-xl shrink-0 p-5'>
 <div className='flex justify-between p-5 items-center'>
      <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>{data.category}</h3>
      <h4 className='text-sm'> {data.date}</h4>
     </div>
 <h2 className='mt-5 font-semibold text-2xl'>{data.title}</h2>
 <p className='mt-2 text-sm'>{data.description}</p>
  <div className='mt-4'>
 <button className='bg-blue-500 text-sm p-4'>AcceptTask</button>
  </div>
     </div>
  )
}

export default NewTask
