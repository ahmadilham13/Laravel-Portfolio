import ReactDOM from 'react-dom/client'

import '../css/global.css'
import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Page from './routes'

ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Page />
        </BrowserRouter>
    </StrictMode>
)