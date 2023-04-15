import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { Alert, Box, Container, Snackbar, Typography } from '@mui/material'

import { Countries } from '../components/Countries'
import { Loading } from '../components/Loading'
import { Search } from '../components/Search'
import { TableHead } from '../components/TableHead'
import { selectCountries } from '../features/countries/countriesSlice'

export const Home = () => {
  const { countries, error, isLoading, searchedCountries } = useSelector(selectCountries)

  let searched = countries?.filter((c) => searchedCountries?.indexOf(c?.name?.official) !== -1)
  let notFoundCountries = searchedCountries[0] === 'Filtered Empty' || false

  return (
    <Container maxWidth="lg" className="App" sx={{ minHeight: '100vh' }}>
      <Search />
      <TableHead />
      <Box>
        {isLoading && <Loading />}
        {countries && searched?.length === 0 && !notFoundCountries && (
          <Countries countries={countries} />
        )}
        {countries && searched?.length !== 0 && <Countries countries={searched} />}
        {countries && notFoundCountries && (
          <Snackbar open={notFoundCountries} autoHideDuration={6000}>
            <Alert severity="info">'No countries found'!</Alert>
          </Snackbar>
        )}
        {error && (
          <Typography variant="body2" color="primary">
            Something went wrong <Link to={'/'}> Go back home</Link>
          </Typography>
        )}
      </Box>
    </Container>
  )
}
