import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: "user",
    initialState: null, // Use null directly

    reducers: {
        addUser: (state, action) => {
            return action.payload;
        },
        removeUser: (state, action) => {
            return null;
        }
    }
});

// Correctly export actions
export const { addUser, removeUser } = userSlice.actions; 
export default userSlice.reducer;
