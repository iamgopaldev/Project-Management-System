import React, { useContext, useState } from 'react'
import { DataContext } from './Context'
import { DataContext1 } from './Context1'

function AddTask({setIsShow,setSelected}) {
    //const {data,setData} = useContext(DataContext)
    const {dispatch} = useContext(DataContext)
    const {data1} = useContext(DataContext1)
    const [name,setName] = useState("")
    const [sno,setSno] = useState("")
    const [status,setStatus] = useState("")
    const [description,setDescription] = useState("")
    const [endtime,setendtime] = useState("")
    const submitHandler= (e)=> {
        e.preventDefault();

        if(sno==="" || name==="" || status==="" || description==="" || endtime===""){
            alert("Enter All Details")
        }
        else{
        
        var found = data1.find(e=>e.name===name);
        if(found != null){
            const newData = {
                sno,
                name,
                status,
                description,
                endtime
            }
            
            
           // setData([...data,newData]);
            dispatch({type:'add_data',payload:newData})
            setSelected(name)
            setName("")
            setSno("")
            setStatus("")
            setDescription("")
            setendtime("")
            setIsShow(false)
        }
        else{
            setName("")
            setSno("")
            setStatus("")
            setDescription("")
            setendtime("")
            alert("Create User First And Try Again")
        }
        

    }
       
    }

  return (
    <div>
        <div className='p-3'>
            <form onSubmit={submitHandler}>
                <label>Task No : </label>
                <input type='number' placeholder='Task No'value={sno} onChange={(e)=>setSno(e.target.value)}/>
                <label>Name : </label>
                <input type='text' placeholder='Name'value={name} onChange={(e)=>setName(e.target.value)}/>
                <br/>
                <label>Description : </label>
                <textarea cols="50" rows="2" value={description} onChange={(e)=>setDescription(e.target.value)}/>
                <br/>
                <label>End Date : </label>
                <input type='Date' value={endtime} onChange={(e)=>setendtime(e.target.value)}/>
                <label>Status</label>
                <select value={status} onChange={(e)=>setStatus(e.target.value)}>
                    <option>Select</option>
                    <option value='Start'>Start</option>
                    <option value='End'>End</option>
                    <option value='InProgress'>InProgress</option>
                </select>
                <br/>
                <input className=' cursor-pointer' type='submit'/>
            </form>
        </div>
    </div>
  )
}

export default AddTask