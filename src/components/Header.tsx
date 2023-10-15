import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import DarkModeIcon from '@mui/icons-material/DarkMode'
import FavoriteIcon from '@mui/icons-material/Favorite'
import HomeIcon from '@mui/icons-material/Home'
import LightModeIcon from '@mui/icons-material/LightMode'
import RemoveRedEyeSharpIcon from '@mui/icons-material/RemoveRedEyeSharp'
import { Badge, Box, Button, Typography } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'

import { selectCountries } from '../features/countries/countriesSlice'
import { selectDarkmode, toggleDarkMode } from '../features/darkMode/darkModeSlice'

export default function Bar() {
  const { visited, favourite } = useSelector(selectCountries)

  const { darkMode } = useSelector(selectDarkmode)
  const dispatch = useDispatch()

  return (
    <AppBar sx={{ backgroundColor: 'background.default' }}>
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignContent: 'center',
          alignItems: 'center'
        }}
      >
        <Link to="/" color="text.primary" vocab="none">
          <Typography
            sx={{
              display: 'flex',
              justifyContent: 'center',
              textDecoration: 'none',
              color: 'text.primary',
              fontWeight: 'bold',
              fontSize: '1.5rem',
              // remove the underline
              '&:hover': {
                textDecoration: 'none'
              }
            }}
            variant="h6"
          >
            My Countries
          </Typography>
        </Link>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignContent: 'center',
            alignItems: 'center',
            padding: '0 10px',
            flexWrap: 'nowrap',
            gap: '30px'
          }}
        >
          <Link to="/">
            <HomeIcon />
          </Link>
          <Link to="/visited">
            <Badge badgeContent={visited?.length} color="primary">
              <RemoveRedEyeSharpIcon sx={{ cursor: 'pointer' }} />
            </Badge>
          </Link>
          <Link to="/fevorite">
            <Badge badgeContent={favourite?.length} color="primary">
              <FavoriteIcon sx={{ color: 'red', cursor: 'pointer' }} />
            </Badge>
          </Link>
          <Button onClick={() => dispatch(toggleDarkMode())}>
            {!darkMode ? <DarkModeIcon /> : <LightModeIcon />}
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
