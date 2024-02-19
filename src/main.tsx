import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import ReactDOM from 'react-dom/client'
import { Shop } from './page/Shop';
import App from './App.tsx'
import React from 'react'
import { GlobalStyle } from './styles/globo.ts';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/shop',
    element: <Shop />
}
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
     <Auth0Provider
      domain="dev-0a0zt12rbqhp01w3.us.auth0.com"
      clientId="DvaE9CDAPVxYf0XFuN6dwTz5Syz3Heeg"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <RouterProvider router={router}>
      </RouterProvider>
    </Auth0Provider>,
  </React.StrictMode>,
)
