/* @flow */
import { combineReducers } from 'redux'
import { NavigationActions } from 'react-navigation'
import { AppNavigator } from '../components'
  
const recurseNavState = ({ key, routes }, state, newState = {}) => {
  newState[key] = ( key in state ) ? state[key] : {}
  if( !!routes ) {
    for( let route of routes ) {
      newState = { ...newState, ...recurseNavState( route, state, newState )}
    }
  }
  return newState
}

const initialNavState = AppNavigator.router.getStateForAction(NavigationActions.init())
const nav = (state = { state: initialNavState, history: {}}, action) => {
  let nextState = state.state
  let history = state.history
  switch (action.type) {
    // case `LOGIN_SUCCESS`:
    //   nextState = AppNavigator.router.getStateForAction( NavigationActions.navigate({ routeName: 'Home' }), state.state )
    //   history = recurseNavState( nextState, state.history )
    //   break
    // case `LOGOUT_SUCCESS`:
    //   nextState = initialNavState
    //   history = {}
    //   break
    case 'Navigation/NAVIGATE':
    case 'Navigation/BACK':
    case 'Navigation/RESET':
    case 'Navigation/SET_PARAMS':
      nextState = AppNavigator.router.getStateForAction( action, state.state )
      history = recurseNavState( nextState, state.history )
      break
    case 'CACHE_STATE':
      history = { ...history }
      history[ action.key ] = {
        ...history[ action.key ],
        ...action.state
      }
      break
    default:
      return state
  }
  return {
    state: nextState,
    history
  }
}

const testReducer = (state: any = {}, { type, payload }: any) => {
  switch(type){
    case 'TEST':
        console.log(payload)
        alert(payload)
        return state
    case 'LOGIN_SUCCESSFUL':
        alert('LOGIN_SUCCESSFUL ' + payload)
        return state
    case 'LOGOUT_SUCCESSFUL':
        alert('LOGOUT_SUCCESSFUL ' + payload)
        return state
    default:
        return state
  }
}

export const appReducer = combineReducers({
  nav,
  testReducer,
})
