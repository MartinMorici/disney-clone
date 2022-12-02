import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    photo:""
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserName: (state, action) => {
            state.name = action.payload;
        },
        setUserPhoto: (state, action) => {
            state.photo = action.payload
        },
        setSignOut: (state, action) => {
            state.name = null;
        }
    }
})

export const { setUserName, setUserPhoto, setSignOut} = userSlice.actions
export default userSlice.reducer