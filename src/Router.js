import React, { useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

export default function Router() {
  return (
    <>
      <Wrap>
        <BrowserRouter>
          <Switch>
            <Route path="/">
              <Sidebar />
              <Home />
            </Route>
          </Switch>
        </BrowserRouter>
      </Wrap>
    </>
  )
}
