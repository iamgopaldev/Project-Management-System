import React, { useState } from 'react'
import {useContext} from 'react'
import { DataContext1 } from './Context1'
import Lottie from 'lottie-react'
import nothingfound from "../Animations/nothingfound.json"
import makingproduct from "../Animations/makingproduct.json"

function UserNameBox({selected,setSelected}) {


  const {data1} = useContext(DataContext1)
  const [search,setSearch] = useState("")
  return (
    <div className='flex flex-col justify-center'>
      <h1 className='my-5 text-xl text-blue-800 font-bold'>Team Members</h1>
      <input type='text' className=' box-border p-1 border-4' value={search} placeholder='SEARCH FOR YOUR TEAM MEMBERS PROGRESS ' onChange={(e)=>{setSearch(e.target.value)}}/>
      
      {
        data1.length > 0 ?
        data1.filter((data)=>{
          if(search === ""){
            return data;
          }
          return data.name.toLowerCase().includes(search.toLowerCase());
        })
        .map((data,index)=>{
          return(
            <button onClick={()=>{setSelected(data.name)}} value={selected} 
                className=' my-3 rounded-md bg-green-600 font-medium text-white active:bg-pink-600 focus:outline-none focus:ring focus:ring-green-700 ' key={index} >{data.name}</button>
          )
        }) : <Lottie animationData={nothingfound} loop={true} />

        
        
      }

      <Lottie animationData={makingproduct} loop={true} />
      
      
   
      
    </div>
  )
}

export default UserNameBox