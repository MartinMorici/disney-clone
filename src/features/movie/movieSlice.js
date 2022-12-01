import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: [],
    featured: [],
    isLoading: false
}

const movieSlice = createSlice({ 
    name: 'movie',                    
    initialState,
    reducers: {
        setMovies: (state,action) => {
            state.movies = action.payload
        },
        setIsLoading: (state,action) => {
            state.isLoading = action.payload
        },
        setFeatured: (state,action) => {
            state.featured = action.payload
        }
    }
})

export default movieSlice.reducer
export const { setMovies, setIsLoading, setFeatured } = movieSlice.actions  
                                  