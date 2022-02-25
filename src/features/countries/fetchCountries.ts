import { createAsyncThunk } from '@reduxjs/toolkit'
import { CountryTypes } from './types'
import API from './../../api'
export const fetchCountries = createAsyncThunk(
  'countries/fetchCountries',
  async () => {
    const response = await API.get('/all')
    let data: CountryTypes[] = await response.data
    return data
  }
)   