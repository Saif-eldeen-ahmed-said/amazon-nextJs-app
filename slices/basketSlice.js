import { createSlice } from "@reduxjs/toolkit";

const initialState={
    items:[],
}

export const basketSlice=createSlice({
    name:"basket",
    initialState,
    reducers :{
        addToBasket:(state,action)=>{
            state.items=[...state.items,action.payload];
        },
        removeBasket:(state,action)=>{
        //     let newitemsarray = [...state.items];
        // const remove=state.items.findIndex(item=> item.id === action.payload)

        //     if(remove >= 0) {
        //     newitemsarray.splice(remove,1);
        //     } else {
        //         console.warn("hello peter");
        //     }
        //     state.items=newitemsarray
            // state.items.splice(state.items.findIndex((item) => item.id === action.payload), 1);
            const itemId = action.payload.title;
            const array =state.items.findIndex((item)=>item.title === itemId)
            const newArray=[...state.items]
                console.log(newArray.splice(array,1))
            if(array) {

            }

        }
}
});

export const {addToBasket , removeBasket} =basketSlice.actions

export const selectitems = (state)=>state.basket?.items;
export const selectTotal =(state)=>state.basket.items.reduce((total,item)=> total + item.price , 0 )

export default basketSlice.reducer