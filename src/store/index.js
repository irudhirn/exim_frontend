import { configureStore } from "@reduxjs/toolkit";

import productSlice from "./product-slice";
import curThirdBrandSlice from "./curThirdBrand-slice";
import isLoggedInSlice from "./isLoggedIn-slice";
import productCategorySlice from "./product-category-slice";

const Store = configureStore({
  reducer: {
    product: productSlice.reducer,
    curThirdBrand: curThirdBrandSlice.reducer,
    loggedIn: isLoggedInSlice.reducer,
    productCategories: productCategorySlice.reducer
  }
});

export default Store;
