import React from 'react'
import Headr from '../other/Headr'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'

const AdminDashboard = ({data}) => {
  return (
    <div className='h-screen w-full p-7'>
      <Headr data={data}/>
      <CreateTask/>
      <AllTask/>
    </div>
  )
}

export default AdminDashboard
