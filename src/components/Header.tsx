import { Link } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import { Badge, Button } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import RemoveRedEyeSharpIcon from '@mui/icons-material/RemoveRedEyeSharp'
import { useDispatch, useSelector } from 'react-redux'

import { selectCountries } from '../features/countries/countriesSlice'
import {
  selectDarkmode,
  toggleDarkMode,
} from '../features/darkMode/darkModeSlice'
import LightModeIcon from '@mui/icons-material/LightMode'

export default function Bar() {
  let { visited, fevourite } = useSelector(selectCountries)
  let { darkMode } = useSelector(selectDarkmode)
  let dispatch = useDispatch()

  return (
    <AppBar sx={{ backgroundColor: 'background.default' }}>
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <Link to='/'>
          <HomeIcon />
        </Link>

        <Link to='/visited'>
          <Badge badgeContent={visited?.length} color='primary'>
            <RemoveRedEyeSharpIcon sx={{ cursor: 'pointer' }} />
          </Badge>
        </Link>
        <Link to='/fevorite'>
          <Badge badgeContent={fevourite?.length} color='primary'>
            <FavoriteIcon sx={{ color: 'red', cursor: 'pointer' }} />
          </Badge>
        </Link>
        <Button onClick={() => dispatch(toggleDarkMode())}>
          {!darkMode ? <DarkModeIcon /> : <LightModeIcon />}
        </Button>
      </Toolbar>
    </AppBar>
  )
}
