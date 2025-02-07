import { configureStore } from "@reduxjs/toolkit";
import { strangerThingsAPI } from "./api";


export const store = configureStore({
    reducer: {
        [strangerThingsAPI.reducerPath]: strangerThingsAPI.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(strangerThingsAPI.middleware),    
});

export type RootState = ReturnType<typeof store.getState>;
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;