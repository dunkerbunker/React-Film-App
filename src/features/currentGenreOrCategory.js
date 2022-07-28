import { createSlice } from "@reduxjs/toolkit";

export const genreOrCategory = createSlice({
    name: "genreOrCategory",
    initialState: {
         genreOrCategoryName: "",
         page: 1,
         searchQuery: "",
    },
    reducers: {
        selectGenteOrCategory: (state, action) => {
            state.genreOrCategoryName = action.payload;
        }
    },
});

export const { selectGenteOrCategory } = genreOrCategory.actions;

export default genreOrCategory.reducer;