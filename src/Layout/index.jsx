import { Heading } from '@chakra-ui/react'
import React from 'react'
import { Outlet } from 'react-router'
import { Navbar } from '../components/Navbar'

export const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}
