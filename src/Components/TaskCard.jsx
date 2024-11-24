import React from 'react'
import {MdDelete} from 'react-icons/md'
import { IconContext } from "react-icons"; 

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function TaskCard({data,deleteHandler}) {

  
  return (
    <div>
        <div className='my-3 bg-pink-500 p-1 font-medium  '>
              <div className='  rounded-md bg-pink-500 flex flex-row justify-evenly'  >
                <div>{data.sno}</div>
                <div>{data.name}</div>
                <div>{data.status}</div>
                <div>{data.endtime}</div>
                <div>
                <IconContext.Provider value={{className:'box-border h-6 w-6'}}>
                <button onClick={()=>deleteHandler(data.sno)}>
                    <MdDelete/>
                </button>
                  </IconContext.Provider>

                </div>
              </div>
              <div>

                  <Accordion sx={{ width: '100%' , bgcolor: 'pink' }}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1bh-content"
                      id="panel1bh-header"
                    >
                      <Typography sx={{ width: '100%'}}>
                        Description
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography sx={{fontWeight:'bold'}}>
                        {data.description}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </div>
    </div>
  )
}

export default TaskCard