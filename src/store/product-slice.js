import { createSlice } from "@reduxjs/toolkit";

// prettier-ignore
const productSlice = createSlice({
    name: 'product',
    initialState: { id: '', name: '', img: '', page: '', desc: '', details: ''},
    reducers: {
        changeProduct(state, action){
            // console.log(action.payload);       
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.img = action.payload.img;
            state.page = action.payload.page;
            state.desc = action.payload.desc;
            state.details = action.payload.details;
        },
    }
})

export const productActions = productSlice.actions;

export default productSlice;
