import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router'
import { initRouter } from './Routes'
import theme from './Theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      {localStorage.setItem('chakra-ui-color-mode', 'dark')}
      <RouterProvider router={ initRouter } />
    </ChakraProvider>
  </React.StrictMode>,
)
