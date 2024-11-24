import React, {  useState } from 'react'
//import { DataContext } from './Context'

function EditTask({setIsShow2}) {
   // const {data,setData} = useContext(DataContext)
    const [status1,setStatus1] = useState("")
    const [sno1,setSno1] = useState("")
    const submitHandler=(e)=>{
      e.preventDefault()
      console(sno1);

    }
  return (
    <div>
        <form onSubmit={submitHandler}>
            <label>Task Number</label>
            <input type='number' placeholder='Task No'value={sno1} onChange={(e)=>setSno1(e.target.value)}/>
            <label>Status</label>
            <select value={status1} onChange={(e)=>setStatus1(e.target.value)}>
                    <option value="">Select</option>
                    <option value='Start'>Start</option>
                    <option value='End'>End</option>
                    <option value='InProgress'>InProgress</option>
                </select>
                <input className=' cursor-pointer' type='submit'/>
        </form>
    </div>
  )
}

export default EditTask