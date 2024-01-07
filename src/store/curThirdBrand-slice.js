import { createSlice } from "@reduxjs/toolkit";
// {id: 'e1', name: 'Brand 1', img: 'event2.webp',  relatedImgs: ['event2.webp', 'event1.webp', 'event3.webp', 'event4.webp',], desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, facere quos saepe dolore odio tempora repellat iure.', url: ''},

const curThirdBrandSlice = createSlice({
    name: "thirdPartyBrand",
    initialState: {id: '', name: '', img: "", relatedImgs: [], desc: "", url: ''},
    reducers: {
        setThirdBrand(state, action){
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.img = action.payload.img;
            state.relatedImgs = action.payload.relatedImgs;
            state.desc = action.payload.desc;
            state.url = action.payload.url;
        }
    }
});

export const curThrdBrandActions = curThirdBrandSlice.actions;

export default curThirdBrandSlice;