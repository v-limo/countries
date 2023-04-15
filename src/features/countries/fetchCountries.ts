import { createAsyncThunk } from '@reduxjs/toolkit'

import API from '../../api'
import { CountryTypes } from './types'

export const fetchCountries = createAsyncThunk(
  'countries/fetchCountries',
  async () => {
    const response = await API.get('/all')
    let data: CountryTypes[] = await response.data
    return data
  }
)
