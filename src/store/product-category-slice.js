import { createSlice } from "@reduxjs/toolkit";

const productCategorySlice = createSlice({
  name: "productCategories",
  initialState: { categories: [] },
  reducers: {
    categoriesOp(state, action) {
      console.log(action.payload);
      state.categories = action.payload;
      console.log(state.categories);
    }
  }
});

export const productCategoryActions = productCategorySlice.actions;

export default productCategorySlice;
