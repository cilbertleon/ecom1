import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories: [],
    mainMenu: [],
};

export const counterSlice = createSlice({
    name: "header",
    initialState,
    reducers: {
        storeCategories: (state, action) => {
            state.categories = action.payload;
        },
        storeMainMenu: (state, action) => {
            state.mainMenu = action.payload;
        }
    },
});

// Action creators are generated for each case reducer function
export const { storeCategories, storeMainMenu } =
    counterSlice.actions;

export default counterSlice.reducer;