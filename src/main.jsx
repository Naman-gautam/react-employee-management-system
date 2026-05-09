import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Authcontext from './context/authcontext.jsx'
import Taskcontext from './context/taskcontext.jsx'


createRoot(document.getElementById('root')).render(
  

    <Authcontext>
<App />
    </Authcontext>

  
 
  
  

   
 
)
