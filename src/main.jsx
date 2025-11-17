import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import { router } from './page/Router.jsx'
import AuthProvider from './page/AuthProvider/AuthProvider.jsx'
import ThemeProvider from './components/ThemeProvider/ThemeProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
       <AuthProvider>
       <RouterProvider router={router} />
       </AuthProvider>
       </ThemeProvider>

  </StrictMode>,
)
