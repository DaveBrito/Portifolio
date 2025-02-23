import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import CssBaseline from '@mui/material/CssBaseline/CssBaseline'
import ThemeProvider from '@mui/material/styles/ThemeProvider'
import theme from './theme.ts'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <CssBaseline />
      
    </ThemeProvider>
  </React.StrictMode>,
)
