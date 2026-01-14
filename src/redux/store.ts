import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./features/auth/authApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import authReducer from "@/redux/features/auth/authSlice";

export const store = configureStore({
    reducer: {
        auth:authReducer ,
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware)
});

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
