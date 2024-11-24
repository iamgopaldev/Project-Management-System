const Reducer = (state,action)=>{
  switch (action.type) {
    case 'add_data':
        return{
            ...state,
            data:[...state.data,action.payload]
        }
    case 'delete_data':
        return{
            ...state,
            data:state.data.filter
            ((data)=>data.sno !== action.payload)
        }
    case 'edit_data':
        return{
          ...state,
          data:state.data.map(
            (data,i)=> i === 1? {data,text:action.payload} : data
          )

        }
     
    default:
        return state
  }
}

export default Reducer