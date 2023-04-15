import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router'

import { Box } from '@mui/material'

import { Footer } from '../components/Footer'
import Header from '../components/Header'
import { selectCountries } from '../features/countries/countriesSlice'
import { fetchCountries } from '../features/countries/fetchCountries'

function Layout() {
  const dispatch = useDispatch()
  const { countries } = useSelector(selectCountries)

  useEffect(() => {
    if (Object.keys(countries).length === 0) {
      dispatch(fetchCountries())
    }
  }, [countries, dispatch])

  return (
    <Box>
      <Header />
      <Outlet />
      <Footer />
    </Box>
  )
}
export default Layout
