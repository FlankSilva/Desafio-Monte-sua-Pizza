import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import Home from './pages/Home/Home'
import Assembly from './pages/Assembly/Assembly'

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact/>
      <Route component={Assembly} path="/assembly" />
    </BrowserRouter>
  )
}

export default Routes