import { createSlice } from "@reduxjs/toolkit";

const currenSectionSlice=createSlice({
    name:"currentSection",
    initialState:"Home",
    reducers:{
        setCurrentSection:(state,action)=> action.payload
    }
})
export const {setCurrentSection}=currenSectionSlice.actions
export default currenSectionSlice