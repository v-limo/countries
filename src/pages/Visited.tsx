import _ from 'lodash'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { Button, Container, Typography } from '@mui/material'
import { Box } from '@mui/system'

import { Loading } from '../components/Loading'
import { TableHead } from '../components/TableHead'
import { VisitedCountries } from '../components/VisitedCountries'
import { selectCountries } from '../features/countries/countriesSlice'

export const Visited = () => {
  let { countries: data, isLoading, visited } = useSelector(selectCountries)
  let countries = data?.filter((c) => visited?.indexOf(c?.name?.official) !== -1)
  const navigate = useNavigate()
  return (
    <Container maxWidth="lg" sx={{ minHeight: '90vh' }}>
      <Typography variant="h6" color="initial">
        Visited Countries
      </Typography>
      <TableHead />
      {isLoading && <Loading />}
      {countries && <VisitedCountries countries={countries} />}
      {_.isEmpty(countries) && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '90vh'
          }}
        >
          <Typography variant="body1" color="primary">
            It seem theres is no visited countries at the moment
          </Typography>
          <Button
            component="a"
            startIcon={<ArrowBackIcon fontSize="small" />}
            sx={{ mt: 3 }}
            variant="contained"
            onClick={() => navigate('/')}
          >
            Go back to Homepage
          </Button>
        </Box>
      )}
    </Container>
  )
}
