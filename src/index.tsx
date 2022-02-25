import ReactDOM from 'react-dom'
import { CssBaseline } from '@mui/material'

import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './app/store'

ReactDOM.render(
  <Provider store={store}>
    <CssBaseline />
    <App />
  </Provider>,
  document.getElementById('root')
)

export {}
