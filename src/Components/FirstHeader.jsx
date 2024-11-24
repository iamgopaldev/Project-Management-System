import React from 'react'
import {FaPlus,FaUserPlus,FaPenFancy,FaHome} from 'react-icons/fa'
import { IconContext } from "react-icons";  



function FirstHeader({isShow,setIsShow,isShow1,setIsShow1,isShow2,setIsShow2,setSelected}) {
  return (
    <div>
        <div className=' flex flex-row justify-between p-3'>
            <div className='text-3xl text-slate-800 font-medium'>
                <h3>
                    Tasks
                </h3>
            </div>
            <div>
            <IconContext.Provider value={{ className: ' box-border h-12 w-12 p-2 border-4 flex flex-row justify-around' }}>

                <button onClick={()=>setSelected("")}>
                    <FaHome/>
                </button>

                <button onClick={()=>setIsShow1(!isShow1)}>
                    <FaUserPlus/>
                </button>

                <button onClick={()=>setIsShow(!isShow)}>
                    <FaPlus/>
                </button>

                <button onClick={()=>setIsShow2(!isShow2)}>
                    <FaPenFancy/>
                </button>
                
            </IconContext.Provider>
            </div>
        </div>
    </div>
  )
}

export default FirstHeader