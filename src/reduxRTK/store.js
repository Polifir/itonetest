import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { servicesApi } from "../Test2/api/servicesApi";
import calendarSlice from "../Test3/api/calendarApi";


const rootReducer = combineReducers({
    [servicesApi.reducerPath]: servicesApi.reducer,
    [calendarSlice.reducerPath]: calendarSlice.reducer,
})

export const store = configureStore({

       reducer: rootReducer,
    middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(servicesApi.middleware)
})