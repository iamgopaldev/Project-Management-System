import React, { useContext, useState } from 'react'
import { DataContext1 } from './Context1'


function AddUser({setIsShow1}) {
    const {data1,setData1} = useContext(DataContext1)
    const [name,setName] = useState("")
    const [password,setPassword] = useState("")
    const submitHandler= (e)=> {
        e.preventDefault();
        var found = data1.find(e=>e.name===name);
        if(name === "" || password===""){
            alert("Enter All Details")
        }
        else if(found != null){
            alert("User Alredy Exists or Change User Name")
        }
        else{
            setIsShow1(false)
            const newData = {
                name,
                password
            }
            
            setData1([...data1,newData]);
            setName("")
            setPassword("")
        }
            

    }

  return (
    <div>
        <div className='p-3'>
            <form onSubmit={submitHandler}>
                <label>User Name : </label>
                <input type='text' placeholder='User Name'value={name} onChange={(e)=>setName(e.target.value)}/>
                <label>Password : </label>
                <input type='password' placeholder='Password'value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <input className=' cursor-pointer' type="submit" />
            </form>
        </div>
    </div>
  )
}

export default AddUser