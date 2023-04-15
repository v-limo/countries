import { useSelector } from 'react-redux'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import { Paper, ThemeProvider } from '@mui/material'

import { selectDarkmode } from './features/darkMode/darkModeSlice'
import { CountryDetails } from './pages/CountryDetails'
import { Fevourite } from './pages/Fevourite'
import { Home } from './pages/Home'
import Layout from './pages/Layout'
import NoMatch from './pages/NoMatch'
import { Visited } from './pages/Visited'
import { darkTheme, lightTheme } from './theme'

const App = () => {
  const { darkMode: mode } = useSelector(selectDarkmode)
  const theme = mode ? darkTheme : lightTheme

  return (
    <ThemeProvider theme={theme}>
      <Paper sx={{ minHeight: '100vh' }}>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="fevorite" element={<Fevourite />} />
              <Route path="visited" element={<Visited />} />
              <Route path="countries/:official" element={<CountryDetails />} />
              <Route path="*" element={<NoMatch />} />
            </Route>
          </Routes>
        </Router>
      </Paper>
    </ThemeProvider>
  )
}

export default App
