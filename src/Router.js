import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AllSpace from './component/AllSpace'
import Myspace from './component/MySpace'
import NavBar from './component/NavBar'
import SceneList from './component/SceneList'
import Home from './Router/Home'
import Space from './Router/Space'

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path="/space" element={<Space></Space>}>
            <Route path="myspace" element={<Myspace></Myspace>}></Route>
            <Route path="all" element={<AllSpace></AllSpace>} />
          </Route>
          <Route path="/" element={<Home></Home>}>
            <Route path="myspace" element={<Myspace></Myspace>}>
              {' '}
            </Route>
            <Route path="/" element={<AllSpace></AllSpace>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
