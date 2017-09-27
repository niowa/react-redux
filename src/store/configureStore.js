import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

import mySaga from '../sagas'


export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(sagaMiddleware))
  sagaMiddleware.run(mySaga);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers')
      store.replaceReducer(nextRootReducer)
    })
  }
  let test = store.getState(); 

  store.subscribe(() => {
    test = store.getState();
    console.log(test);
    
  });

  
  // for (let a in test) {
  //   console.log('storeInto ' + a);
  // }

  return store
}