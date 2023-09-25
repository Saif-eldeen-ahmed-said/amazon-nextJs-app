import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
}

export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addToBasket: (state, action) => {
            const array = [...state.items, action.payload];
            const index = state.items.findIndex(
                (item) => item.title === action.payload.title
            )
            if (index >= 0) {
                array.splice(index, 1)
            }
            state.items = array

        },
        removeBasket: (state, action) => {
            let index = state.items.findIndex(
                (item) => item.title === action.payload.title
            )
            let newbasket = [...state.items];

            if (index >= 0) {
                newbasket.splice(index, 1)
            }
            else {
                console.warn("error this item is not available");
            }

            state.items = newbasket

        }
        , increaseQuantity: (state, action) => {
            const theIndex = state.items.find(
                (item) => item.title === action.payload.title
            )

            const theQuan = state.items.find(
                (item) => item.quantity == action.payload.quantity
            )
            const momo = action.payload.mount + 1
            const tearr = [...state.items];

            if (theIndex && momo <= 10) {
                theQuan.quantity = momo
            }

            state.items = tearr
        },
        decreaseQuantity: (state, action) => {
            const theIndex = state.items.find(
                (item) => item.title === action.payload.title
            )
            const theQuan = state.items.find(
                (item) => item.quantity == action.payload.quantity
            )
            const momo = action.payload.mount - 1
            const thearr = [...state.items];

            if (theIndex && momo >= 1) {
                theQuan.quantity = momo
            }

            state.items = thearr
        }
    }
});

export const { addToBasket, removeBasket, increaseQuantity, decreaseQuantity } = basketSlice.actions

export const selectitems = (state) => state.basket?.items;
export const selectTotal = (state) => state.basket.items.reduce((total, item) => total + (item.price * item.quantity), 0)

export default basketSlice.reducer