import React from 'react'
import { useContext } from 'react'
import Lottie from 'lottie-react'
import { DataContext } from './Context'
import checkyourteam from "../Animations/checkyourteam.json"
import nothingfound from "../Animations/nothingfound.json"
import TaskCard from './TaskCard'




function TaskAssigned({ selected }) {

  const deleteHandler=(sno)=>{

    dispatch({type:'delete_data',payload:sno})
  }


  // const data = [{sno:1,name: 'Gangadhar',status:'',description:'',endtime:'' }, {sno:2,name: 'Teja',status:'',description:'',endtime:'' }, {sno:3,name: 'Neeraj Kumar',status:'',description:'',endtime:'' }]

  const {data,dispatch} = useContext(DataContext)

  return (
    <div className='flex flex-col justify-center'>
      {
        data.length > 0 ?
          data.filter((data) => {
            if (selected === "") {
              return data
            }
            return data.name.toLowerCase().includes(selected.toLowerCase());

          }).map((data,index) => {
            return (
              <TaskCard key={index} data={data} deleteHandler={deleteHandler}/>
              
            )
          }): <Lottie animationData={nothingfound} loop={true} />

      }

      <><div className=' flex flex-row justify-center'>
        <h3 className=' text-2xl text-green-500'>Check Your Team's Progress</h3>
        <Lottie className=' basis-1/2' animationData={checkyourteam} loop={true} />
      </div></>



    </div>
  )
}

export default TaskAssigned