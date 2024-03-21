import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "./AddSlice";

const addstore = configureStore({
    reducer:{
        AddReducer : TodoSlice,
    }
})

export default addstore