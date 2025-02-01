import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Auth from './tokenStore/Auth.jsx'
import { ToastContainer } from 'react-toastify';
import CartProvider from './Pages/CartProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth>
    <CartProvider>
      <App />
      
    <ToastContainer
    position="top-right"
autoClose={1000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"

// styling the fontsize of toast 
bodyClassName="toastBody"
    />
    </CartProvider>
    </Auth>
  </StrictMode>,
)