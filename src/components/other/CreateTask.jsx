import React, { useState } from 'react'

const CreateTask = () => {
  const[title,setTaskTitle]=useState('');
  const[taskDesc,settaskDesc]=useState('');
  const[taskDate,settaskdate]=useState('');
  const[assignto,settassignto]=useState('');
  const[category,setcategory]=useState('');

  // const[task,setnewtask]=useState({});

 function submithandler(e) {
  e.preventDefault();

  const newTask = {
    title,
    taskDesc,
    taskDate,
    category,
    active: false,
    newTask: true,
    failed: false,
    completed: false,
  };

  const data = JSON.parse(localStorage.getItem("employee"));

  data.forEach((elem) => {
    if (assignto === elem.firstname) {
      elem.tasks.push(newTask);

      if (newTask.active) {
        elem.taskNumbers.active += 1;
      }

      if (newTask.newTask) {
        elem.taskNumbers.newTask += 1;
      }

      if (newTask.failed) {
        elem.taskNumbers.failed += 1;
      }

      if (newTask.completed) {
        elem.taskNumbers.completed += 1;
      }
    }
  });

  localStorage.setItem("employee", JSON.stringify(data));

  console.log(data);

  setTaskTitle("");
  settaskDesc("");
  settaskdate("");
  settassignto("");
  setcategory("");
}
  return (
     <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
  <form onSubmit={submithandler}  className='flex w-full justify-between items-center flex-wrap'>
    <div className='w-1/2'>
    <div >
      <h3 className='text-sm text-gray-300 mb-0.5'>Task Title </h3>
      <input type="text" value={title} onChange={(e)=>{
        setTaskTitle(e.target.value);
      }} className='text-sm py-1 px-2 rounded outline-none bg-transparent border-2 border-gray-400 w-4/5 mb-4'placeholder='Make a UI Design'   />
    </div>
    <div>
      <h3  className='text-sm text-gray-300 mb-0.5'>Date</h3>
      <input type="date" value={taskDate} onChange={(e)=>{
        settaskdate(e.target.value)
      }} className='text-sm py-1 px-2 rounded outline-none bg-transparent border-2 border-gray-400 w-4/5 mb-4' />
    </div>
    <div>
      <h3  className='text-sm text-gray-300 mb-0.5'>Asign to</h3>
      <input type="text" value={assignto} onChange={(e)=>{
        settassignto(e.target.value);
      }} className='text-sm py-1 px-2 rounded outline-none bg-transparent border-2 border-gray-400 w-4/5 mb-4' placeholder='employee name'/>
    </div>
    <div>
      <h3  className='text-sm text-gray-300 mb-0.5'>category</h3>
      <input type="text" value={category} onChange={(e)=>{
        setcategory(e.target.value);
      }} className='text-sm py-1 px-2 rounded outline-none bg-transparent border-2 border-gray-400 w-4/5 mb-4' placeholder='desgign,dev,etc'/>
    </div>
    </div>

    <div className='w-1/3 flex flex-col items-start  '>
      <h3 className='text-sm text-gray-300 mb-0.5'>Desrciption</h3>
     <textarea value={taskDesc} onChange={(e)=>{
       settaskDesc(e.target.value);
     }} name="" id="" className='w-full h-44 py-2 px-4 outline-none bg-transparent border-2'></textarea>
      <button className='bg-emerald-400 px-2 py-2 text-gray-100 w-full mt-2'>Create task</button>
    </div>
  </form>
      </div>
  )
}

export default CreateTask
