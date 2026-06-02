import { createSlice } from "@reduxjs/toolkit";
const initialState ={
    items : [],
}

const cartSlice = createSlice({
    name : "cart",
    initialState,

    reducers:{
        addToCard: (state, action) => {
            state.items.push(action.payload)
        },

        removeFromeCart: (state, action)=>{        
            state.items=state.items.filter
        (
            item=>item.id !==action.payload
        )        
      },
    },
})
export const {addToCard,removeFromeCart}=cartSlice.actions
export default cartSlice.reducer