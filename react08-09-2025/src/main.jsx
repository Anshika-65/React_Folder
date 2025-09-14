import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import First from './First.jsx'
import Assigment from './Assigment.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Assigment />
  </StrictMode>,
)
