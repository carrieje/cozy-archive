import React from 'react'
import { Route, Switch, Redirect, HashRouter } from 'react-router-dom'

import Sidebar from './Sidebar'
import Index from './Views/Index'

const App = ({ children }) => (
  <HashRouter>
    <div className='app-wrapper o-layout--2panes'>
      <Sidebar />
      <main className='app-content'>
        <Switch>
          <Route path='/index' component={Index} />
          <Redirect from='/' to='/index' />
          <Redirect from='*' to='/index' />
        </Switch>
      </main>
    </div>
  </HashRouter>
)

export default App
