/* @flow */
import React from 'react'
import { StackNavigator, addNavigationHelpers } from 'react-navigation'
import { 
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware
} from 'react-navigation-redux-helpers'
import { connect } from 'react-redux'
import DrawerScreen from './drawer'

export const AppNavigator = StackNavigator({
  Main: { 
    screen: DrawerScreen
  }
}, { 
  initialRouteName: 'Main', 
  navigationOptions: {
    header: null
  }
}) 


export const navigationMiddleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav.state,
)

const addListener = createReduxBoundAddListener("root")

const AppWithNavigationState = ({ nav,
                                  dispatch  }) => (
                                    
<AppNavigator
  navigation={ addNavigationHelpers({ dispatch, state: nav.state, addListener })} />)

const mapStateToProps = ({  nav,
                            groups }) => ({  nav,
                                              groups })

export default connect(mapStateToProps)(AppWithNavigationState);