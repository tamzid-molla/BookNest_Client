import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
    name: string;
    email: string;
    _id: string;
    token: string;
    message: string;
}

interface AuthState {
    user: User | null;
}

const initialState: AuthState = {
    user: null
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
        },
        clearUser: (state) => {
            state.user = null;
        }
    }
});

export default authSlice.reducer;
export const { setUser,clearUser} = authSlice.actions;