import { createSlice } from "@reduxjs/toolkit";    // 1- importamos createSlice

const initialState = {
    movies: [],
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
        }
    }
})

export default movieSlice.reducer
export const { setMovies, setIsLoading } = movieSlice.actions  
                                  