import { configureStore } from '@reduxjs/toolkit';
import movieSlice from './features/movie/movieSlice';
import userSlice from './features/user/userSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';
const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const reducer = combineReducers({
  movie: movieSlice,
  user: userSlice
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
