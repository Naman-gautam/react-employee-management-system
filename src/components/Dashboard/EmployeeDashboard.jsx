import React from 'react'
import Headr from '../other/Headr'
import TaskNumber from '../other/TaskNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({data}) => {
 
  return (
<div className='p-10 bg-[#1C1C1C] h-screen'>
    <Headr  data={data}/>
    <TaskNumber data={data}/>
    <TaskList data={data} />
</div>
  )
}

export default EmployeeDashboard
