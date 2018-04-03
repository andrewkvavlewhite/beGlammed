/* @flow */
import React, { Component } from 'react'
// import { Observable } from 'rxjs' // TODO: remove and import functions per file
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { default as AppWithNavigationState, navigationMiddleware } from './components'
import { appReducer } from './reducers'
// import EpicMiddleware from './middleware'
// import './middleware/realm'
// import { logger } from 'redux-logger' // TODO: Remove redux-logger from project

// import Reactotron from 'reactotron-react-native'

// export const store = Reactotron.createStore(
export const store = createStore(
  appReducer,
  compose(
    applyMiddleware( navigationMiddleware ),
    // applyMiddleware( EpicMiddleware )
  )
)

export default class App extends Component {
  render() {
    return (
        <Provider store={store} >
          <AppWithNavigationState />
        </Provider>
    );
  }
}