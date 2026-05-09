import React from 'react'

const TaskNumber = ({data}) => {
  return (
    <div className='flex screen justify-between gap-5 mt-10'>
      <div className='rounded-xl w-[45%] py-6 px-9 bg-red-400'>
    <h2 className='text-3xl font-semibold'>{data.taskNumbers.newTask}</h2>
    <h3 className='text-xl font-semibold'>New Task</h3>
      </div>
       <div className='rounded-xl w-[45%] py-6 px-9 bg-blue-400'>
    <h2 className='text-3xl font-semibold'>{data.taskNumbers.completed}</h2>
    <h3 className='text-xl font-semibold'>complete task</h3>
      </div>
       <div className='rounded-xl w-[45%] py-6 px-9 bg-green-400'>
    <h2 className='text-3xl font-semibold'>{data.taskNumbers.active}</h2>
    <h3 className='text-xl font-semibold'>Accept task</h3>
      </div>
         <div className='rounded-xl w-[45%] py-6 px-9 bg-blue-400'>
    <h2 className='text-3xl font-semibold'>{data.taskNumbers.failed}</h2>
    <h3 className='text-xl font-semibold'>failed task</h3>
      </div>
    </div>
  )
}

export default TaskNumber
