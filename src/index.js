import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import Home from './components/Home'
import '../src/styles/app.css' 
import configureStore from './store/configureStore'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'


const store = configureStore()

const history = createHistory()

const location = history.location

const unlisten = history.listen((location, action) => {
  console.log(action, location.pathname, location.state)
})

render(
  <Provider store={store}>
  	<BrowserRouter>
    	<Switch>
		  <Route exact path='/' component={App}/>
		  
		  <Route path='/home' component={Home}/>
		</Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

export default store;