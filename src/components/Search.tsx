import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { Box, TextField } from '@mui/material'

import { EmptySearchCountry, SearchCountry } from '../features/countries/countriesSlice'

export const Search = () => {
  const [searchText, setSearchText] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    if (searchText) {
      dispatch(SearchCountry(searchText))
    } else {
      dispatch(EmptySearchCountry())
    }
  }, [dispatch, searchText])

  return (
    <Box
      sx={{
        mt: 8
      }}>
      <TextField
        name="countries"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setSearchText(e.target.value?.trim().toLowerCase())
        }}
        label="Search the countries ..."
        placeholder="Search the countries by common, official or capital cities etc"
        margin="normal"
        size="medium"
        value={searchText}
        sx={{ width: '70%', height: '100%' }}
      />
    </Box>
  )
}
