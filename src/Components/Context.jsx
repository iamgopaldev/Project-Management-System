import {createContext, useReducer} from 'react'
import Reducer from './Reducer';

export const DataContext = createContext();

const initialState={
    data : [{sno:1,name: 'Gangadhar',status:'Start',description:'Database Management',endtime:'2022-08-10' },
            {sno:2,name: 'Teja',status:'InProgress',description:'Front End',endtime:'2022-08-10' },
            {sno:3,name: 'Neeraj Kumar',status:'End',description:'Backend',endtime:'2022-08-10' },
            {sno:5,name: 'Nithin',status:'Start',description:'Human Resource',endtime:'2022-08-10' }
        ],
    loading:true,
}

export const DataContextProvider = ({children}) =>{
    // const [data,setData] = useState([{sno:1,name: 'Gangadhar',status:'Start',description:'Database Management',endtime:'2022-08-10' },
    //                                  {sno:2,name: 'Teja',status:'InProgress',description:'Front End',endtime:'2022-08-10' },
    //                                  {sno:3,name: 'Neeraj Kumar',status:'End',description:'Backend',endtime:'2022-08-10' }]);

    const [state,dispatch] = useReducer(Reducer,initialState)

    
    return(
        <DataContext.Provider value={
            //{data,setData}
        {
            data : state.data,
            loading : state.loading,
            dispatch
        }

        }>
            {children}
        </DataContext.Provider>
    )
}
