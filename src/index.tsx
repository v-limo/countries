import './index.css'

import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { CssBaseline } from '@mui/material'

import App from './App'
import { store } from './app/store'

ReactDOM.render(
  <Provider store={store}>
    <CssBaseline />
    <App />
  </Provider>,
  document.getElementById('root')
)

export {}
