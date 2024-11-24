import React, { useState } from 'react'
import AddTask from './AddTask'
import AddUser from './AddUser'
import EditTask from './EditTask'
import FirstHeader from './FirstHeader'
import TaskAssigned from './TasksAssigned'
import UserNameBox from './UserNameBox'


function Dashboard() {
  const [selected,setSelected] = useState("")
  const [isShow, setIsShow] = React.useState(false);
  const [isShow1, setIsShow1] = React.useState(false);
  const [isShow2, setIsShow2] = React.useState(false);
  return (
   <div>
     <div className='flex flex-row justify-center align-middle' >
       <div className='basis-1/4 p-3 bg-blue-200'>
        <UserNameBox selected={selected} setSelected={setSelected}/>
       </div>
       <div className='basis-3/4'>
       <div className=" text-3xl font-bold">
        Project Management System
       </div>
        <FirstHeader isShow={isShow} setIsShow={setIsShow} isShow1={isShow1} setIsShow1={setIsShow1} isShow2={isShow2} setIsShow2={setIsShow2} setSelected={setSelected} />
        {
          isShow1 ? <AddUser setIsShow1={setIsShow1}/> : <></>
        }
        {
          isShow ? <AddTask setIsShow={setIsShow} setSelected={setSelected}/> : <></>
        }
         {
          isShow2 ? <EditTask setIsShow2={setIsShow2}/> : <></>
        }
        <TaskAssigned selected={selected}/>
       </div>
     </div>
   </div>
    
  )
}

export default Dashboard