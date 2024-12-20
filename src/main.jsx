//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import { BrowserRouter} from 'react-router-dom'
import { WishlistProvider } from './Context/WishlistContext'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <WishlistProvider>
    <App />
  </WishlistProvider>,
  </BrowserRouter>
)
