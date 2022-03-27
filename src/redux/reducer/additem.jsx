 const initialValue = []

const additem = (state=initialValue,action) =>{
   switch(action.type){
     case 'ADDITEM': 
     return [
         ...state,action.payload
     ]

     case 'DELETITEM' : 
     return state = state.filter((x) =>{
           return x.id !== action.payload.id
     } )



     default: return state
   }


   
}

export default additem
