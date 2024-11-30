import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Immport Roboto Font de Material UI
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// Import reset CSS de MUI
import { CssBaseline } from '@mui/material';

import './index.css'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <CssBaseline/>
      <App />
  </StrictMode>,
)
