import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { GlobalStyles } from './assets/styles/global.tsx'
import { ThemeProvider } from 'styled-components'
import theme from './assets/styles/theme.ts'
import TranslateProvider from './contexts/TranslateContext.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <TranslateProvider>
        <App />
      </TranslateProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
