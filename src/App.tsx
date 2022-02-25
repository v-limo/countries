import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Paper, ThemeProvider } from '@mui/material'

import { Home } from './pages/Home'
import { Visited } from './pages/Visited'
import { CountryDetails } from './pages/CountryDetails'
import NoMatch from './pages/NoMatch'
import { Fevourite } from './pages/Fevourite'
import Layout from './pages/Layout'
import { useSelector } from 'react-redux'
import { selectDarkmode } from './features/darkMode/darkModeSlice'
import { darkTheme, lightTheme } from './theme'

const App = () => {

  let { darkMode: mode } = useSelector(selectDarkmode)
  const theme = mode ? darkTheme : lightTheme
  
  return (
    <ThemeProvider theme={theme}>
      <Paper sx={{ minHeight: '100vh' }}>
        <Router>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='fevorite' element={<Fevourite />} />
              <Route path='visited' element={<Visited />} />
              <Route path='countries/:official' element={<CountryDetails />} />
              <Route path='*' element={<NoMatch />} />
            </Route>
          </Routes>
        </Router>
      </Paper>
    </ThemeProvider>
  )
}

export default App
