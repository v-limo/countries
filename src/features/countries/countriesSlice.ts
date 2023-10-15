import _ from 'lodash'

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '../../app/store'
import { fetchCountries } from './fetchCountries'
import { CountryTypes } from './types'

export interface CountriesState {
  countries: CountryTypes[]
  isLoading: boolean
  error: boolean
  visited: string[]
  favourite: string[]
  searchedCountries: string[]
}

const initialState = {
  countries: [],
  isLoading: false,
  error: false,
  visited: JSON.parse(localStorage.getItem('visited') as string) || [],
  favourite: JSON.parse(localStorage.getItem('favourite') as string) || [],
  searchedCountries: []
} as CountriesState

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    toggleVisit: (state, { payload }: PayloadAction<string>) => {
      const index = state.visited.indexOf(payload)
      if (index === -1) {
        state.visited.push(payload)
      } else {
        state.visited.splice(index, 1)
      }
      localStorage.setItem('visited', JSON.stringify(state.visited))
    },

    toggleFavourite: (state, { payload }: PayloadAction<string>) => {
      const index = state.favourite.indexOf(payload)
      if (index === -1) {
        state.favourite.push(payload)
      } else {
        state.favourite.splice(index, 1)
      }
      localStorage.setItem('favourite', JSON.stringify(state.favourite))
    },

    sortBy: (state, { payload }: PayloadAction<string>) => {
      if (payload === 'name') {
        state.countries = _.sortBy(state.countries, (c) => c?.name?.official)
      } else if (payload === 'region') {
        state.countries = _.sortBy(state.countries, (c) => c?.region)
      } else if (payload === 'capital') {
        state.countries = _.sortBy(state.countries, (c) => c?.capital)
      } else if (payload === 'population') {
        state.countries = _.sortBy(state.countries, (c) => c?.population)
      } else if (payload === 'visited') {
        const visited = state.countries.filter(
          (c) => state.visited?.indexOf(c?.name?.official) !== -1
        )
        const notVisited = state.countries.filter(
          (c) => state.visited?.indexOf(c?.name?.official) === -1
        )
        state.countries = [...visited, ...notVisited]
      } else if (payload === 'favourite') {
        const favourite = state.countries.filter(
          (c) => state.favourite?.indexOf(c?.name?.official) !== -1
        )
        const notFavourite = state.countries.filter(
          (c) => state.favourite?.indexOf(c?.name?.official) === -1
        )

        state.countries = [...favourite, ...notFavourite]
      }
    },

    SearchCountry: (state, { payload }) => {
      const filteredCountries = state.countries?.filter(
        (c) =>
          c?.name?.common?.toLowerCase()?.includes(payload) ||
          c?.name?.official.toLowerCase()?.includes(payload) ||
          c?.capital?.[0].toLowerCase()?.includes(payload)
      )

      if (filteredCountries.length === 0) {
        state.searchedCountries = ['Filtered Empty']
      } else {
        state.searchedCountries = []
        filteredCountries.map((c) => {
          const index = state.searchedCountries?.indexOf(c?.name?.official)
          if (index === -1) {
            state.searchedCountries?.push(c?.name?.official)
          }
          return null
        })
      }
    },

    EmptySearchCountry: (state) => {
      if (state.searchedCountries.length > 0) {
        state.searchedCountries = []
      }
    }
  },

  extraReducers: (builder) => {
    builder.addCase(fetchCountries.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchCountries.fulfilled, (state, { payload }) => {
      state.countries = payload
      state.isLoading = false
    })
    builder.addCase(fetchCountries.rejected, (state) => {
      state.isLoading = false
      state.error = true
    })
  }
})

export const { toggleVisit, toggleFavourite, sortBy, SearchCountry, EmptySearchCountry } =
  countriesSlice.actions
export const selectCountries = (state: RootState) => state.countries
export default countriesSlice.reducer
