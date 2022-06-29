import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './component/NavBar'
import { Home } from './Home'

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home></Home>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
