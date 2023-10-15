import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import VisibilityOffTwoToneIcon from '@mui/icons-material/VisibilityOffTwoTone'
import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone'
import { Box, IconButton } from '@mui/material'

import { toggleFavourite, toggleVisit } from '../features/countries/countriesSlice'
import { CountryTypes } from '../features/countries/types'
import { isVisited } from '../services/_isVisited'

type CountryProps = {
  countries: CountryTypes[]
}

export const FavouriteCountries = ({ countries }: CountryProps) => {
  const dispatch = useDispatch()

  const handleFavorite = (name: string) => {
    dispatch(toggleFavourite(name))
  }

  const handleVisited = (name: string) => {
    dispatch(toggleVisit(name))
  }

  return (
    <Box>
      {countries?.map((country: CountryTypes) => (
        <Box
          key={country?.name?.official}
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
          <Box sx={{ maxHeight: '100%' }}>
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
          <Box>{country?.capital || 'N/A'}</Box>
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
            <DeleteOutlineOutlinedIcon sx={{ color: 'red' }} />
          </IconButton>
        </Box>
      ))}
    </Box>
  )
}
