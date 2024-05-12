import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import FavoriteIcon from '@mui/icons-material/Favorite'
import VisibilityOffTwoToneIcon from '@mui/icons-material/VisibilityOffTwoTone'
import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone'
import { Box, IconButton } from '@mui/material'

import { RootState } from '../app/store'
import { toggleFavourite, toggleVisit } from '../features/countries/countriesSlice'
import { CountryTypes } from '../features/countries/types'

type CountryProps = {
  country: CountryTypes
}

export const Country = ({ country }: CountryProps) => {
  const dispatch = useDispatch()
  const state = useSelector((state: RootState) => state.countries)

  const handleFavorite = (name: string) => {
    dispatch(toggleFavourite(name))
  }

  const handleVisited = (name: string) => {
    dispatch(toggleVisit(name))
  }

  const isFavourite = (name: string) => {
    return state.favourite.includes(name)
  }

  const isVisited = (name: string) => {
    return state.visited.includes(name)
  }

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: '0.7fr 1.5fr 0.9fr 1.4fr 0.8fr 0.7fr 0.25fr',
        flexWrap: 'nowrap',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderBottom: 0.5,
        minHeight: '100px',
        cursor: 'pointer'
      }}
    >
      <Box sx={{ maxHeight: '100%', mx: '10px' }}>
        <img
          src={country?.flags?.svg || country?.flags?.png}
          alt={country?.name?.common}
          loading="lazy"
          width="100%"
        />
      </Box>

      <Link
        to={`/countries/${country?.name?.official}`}
        style={{ textDecoration: 'none', color: 'secondary' }}
      >
        <Box
          sx={{
            textDecoration: 'none',
            cursor: 'pointer',
            color: 'secondary'
          }}
        >
          {country?.name?.common}
        </Box>
      </Link>

      <Box>{country?.region}</Box>
      {country?.capital ? (
        country.capital.map((capital) => <Box key={capital}>{capital}</Box>)
      ) : (
        <Box>N/A</Box>
      )}
      <Box>
        {country?.population >= 1000000 && `~${(country?.population / 1000000).toFixed(2)} M`}
        {country?.population > 1000 &&
          country?.population < 1000000 &&
          `~${(country?.population / 1000).toFixed(2)} K`}
        {country?.population <= 1000 && `${country?.population}`}
      </Box>
      <IconButton onClick={() => handleVisited(country?.name?.official)}>
        {isVisited(country?.name?.official) ? (
          <VisibilityTwoToneIcon />
        ) : (
          <VisibilityOffTwoToneIcon />
        )}
      </IconButton>
      <IconButton
        onClick={() => handleFavorite(country?.name?.official)}
        sx={{
          '&:hover': {
            padding: 1.1
          }
        }}
      >
        <FavoriteIcon color={isFavourite(country?.name?.official) ? 'error' : 'disabled'} />
      </IconButton>
    </Box>
  )
}
