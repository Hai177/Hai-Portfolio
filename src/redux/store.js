import { configureStore } from "@reduxjs/toolkit";
import currenSectionSlice from "./slice";

const store=configureStore({
    reducer:{
        currenSection:currenSectionSlice.reducer
    }
})
export default store
