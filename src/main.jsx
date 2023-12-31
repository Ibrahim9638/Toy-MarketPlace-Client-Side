import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <div className='bg-[#ecf4fb]'>
      <div className='max-w-6xl mx-auto'>
    <RouterProvider router={router} />
    </div>
      </div>
    
    </AuthProvider>
  </React.StrictMode>,
)
