import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isCartVisible: false
}

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        toggle(state) {
            state.isCartVisible = !state.isCartVisible;
        },
    }
})

export default uiSlice.reducer;
export const uiActions = uiSlice.actions;
