import _ from 'lodash'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { Box, Button, Container, Typography } from '@mui/material'

import { FevouriteCountries } from '../components/FevouriteCountries'
import { Loading } from '../components/Loading'
import { TableHead } from '../components/TableHead'
import { selectCountries } from '../features/countries/countriesSlice'

export const Fevourite = () => {
  const { countries: data, isLoading, fevourite } = useSelector(selectCountries)
  const countries = data?.filter((c) => fevourite?.indexOf(c?.name?.official) !== -1)
  const navigate = useNavigate()

  return (
    <Container maxWidth="lg" sx={{ minHeight: '100vh' }}>
      <Typography variant="h6" color="initial">
        Fevourites countries
      </Typography>
      <TableHead />
      {isLoading && <Loading />}
      {countries && <FevouriteCountries countries={countries} />}
      {_.isEmpty(countries) && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            minHeight: '90vh',
            alignItems: 'center'
          }}>
          <Typography variant="body1" color="primary">
            It seem theres is no fevourite countries at the moment
          </Typography>
          <Button
            component="a"
            startIcon={<ArrowBackIcon fontSize="small" />}
            sx={{ mt: 3 }}
            variant="contained"
            onClick={() => navigate('/')}>
            Go back to Homepage
          </Button>
        </Box>
      )}
    </Container>
  )
}
