import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import Home from './pages/Home/Home'
import Paste from './pages/Paste/Paste'
import Filling from './pages/Filling/Filling'
import EndPage from './pages/EndPage/EndPage'

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact/>
      <Route component={Paste} path="/past" />
      <Route component={Filling} path="/filling" />
      <Route component={EndPage} path="/endpage" />
    </BrowserRouter>
  )
}

export default Routes