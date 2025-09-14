import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Dropdown from './Dropdown'

// import Loop from './Loop.jsx'
// import {Students,App} from './Students.jsx'
import Dropdown from './Dropdown.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Dropdown />
   
  </StrictMode>,
)
