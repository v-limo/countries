import {
  Container,
  Button,
  Typography,
  Card,
  CardContent,
  CardActions,
  CardHeader,
  IconButton,
  CardMedia,
} from '@mui/material'
import _ from 'lodash'
import { Box } from '@mui/system'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Loading } from '../components/Loading'
import { useSelector, useDispatch } from 'react-redux'
import {
  selectCountries,
  taggleFevoutite,
} from '../features/countries/countriesSlice'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { isFevourite } from '../services/isFevourite'

export const CountryDetails = () => {
  const { official } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { countries, isLoading, error } = useSelector(selectCountries)
  let country = countries?.find((c) => c?.name?.official === official)
  return (
    <Container
      sx={{
        minHeight: '80vh',
        maxWidth: '1092px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h3>{official}</h3>
      {isLoading && <Loading />}
      {_.isEmpty(country) || (
        <Card
          sx={{
            maxWidth: '700px',
          }}
        >
          <CardHeader
            action={
              <IconButton
                onClick={() =>
                  dispatch(taggleFevoutite(country?.name?.official as string))
                }
                sx={{
                  '&:hover': {
                    padding: 1.2,
                  },
                }}
              >
                <FavoriteIcon
                  sx={{
                    color: isFevourite(country?.name?.official as string)
                      ? 'red'
                      : 'primary',
                  }}
                />
              </IconButton>
            }
            title={country?.name?.official}
            subheader={country?.name?.common}
          />
          <CardMedia
            component='img'
            width='100%'
            image={country?.flags?.png || country?.flags?.svg}
            alt={country?.name?.common}
          />
          <CardContent>
            <Typography variant='body2' color='text.secondary'>
              Region : {country?.region}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              SubRegion : {country?.subregion}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Population:{' '}
              {country?.population
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </Typography>
            <Typography variant='body2' color='text.secondary'></Typography>
          </CardContent>
          <CardActions disableSpacing>
            <Button
              component='a'
              startIcon={<ArrowBackIcon fontSize='small' />}
              sx={{ mt: 3 }}
              variant='contained'
              onClick={() => navigate('/')}
            >
              Go back to Homepage
            </Button>
          </CardActions>
        </Card>
      )}

      {(error || _.isEmpty(country)) && (
        <Box
          sx={{
            minHeight: '90vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography variant='body1' color='primary'>
            Something went wrong Go back home
          </Typography>
          <Button
            component='a'
            startIcon={<ArrowBackIcon fontSize='small' />}
            sx={{ mt: 3 }}
            variant='contained'
            onClick={() => navigate('/')}
          >
            Go back to Homepage
          </Button>
        </Box>
      )}
    </Container>
  )
}
