import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './containers/App'
import Home from './components/Home'
import Page from './components/Page'


export const routes = (
  <div>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='/login' component={Page}/>
    </Route>
    <Route path='*' component={NotFound} />
  </div>
)