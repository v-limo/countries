import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useSelector } from 'react-redux'

import countriesReducer from '../features/countries/countriesSlice'
import darkModeReducer from '../features/darkMode/darkModeSlice'

export const store = configureStore({
  reducer: {
    countries: countriesReducer,
    darkMode: darkModeReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
