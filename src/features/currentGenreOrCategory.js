import { createSlice } from "@reduxjs/toolkit";

export const genreOrCategory = createSlice({
    name: "genreOrCategory",
    initialState: {
         genreIdOrCategoryName: "",
         page: 1,
         searchQuery: "",
    },
    reducers: {
        selectGenteOrCategory: (state, action) => {
            state.genreIdOrCategoryName = action.payload;
            state.searchQuery = "";
        },
        searchMovie: (state, action) => {
            state.searchQuery = action.payload;
        }
    },
});

export const { selectGenteOrCategory, searchMovie } = genreOrCategory.actions;

export default genreOrCategory.reducer;