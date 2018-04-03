// @flow
import React from 'react';
import { DrawerNavigator } from 'react-navigation'
import DrawerContent from './content'
import HomeScreen from '../home'
import ProfileScreen from '../profile'
import BookingsScreen from '../bookings'
import StylebookScreen from '../stylebook'
import CreditsScreen from '../credits'
import InviteScreen from '../invite'
import PaymentsScreen from '../payments'
import NotificationsScreen from '../notifications'
import ContactScreen from '../contact'
import FAQScreen from '../faq'

import DummyScreen from '../test'

const drawer = DrawerNavigator({
  Home: {
    screen: HomeScreen
  },
  Profile: { 
    screen: ProfileScreen
  },
  Bookings: {
    screen: BookingsScreen
  },
  Stylebook: {
    screen: StylebookScreen
  },
  Credits: {
    screen: CreditsScreen
  },
  Invite: {
    screen: InviteScreen
  },
  Payments: {
    screen: PaymentsScreen
  },
  Notifications: {
    screen: NotificationsScreen
  },
  Contact: {
    screen: ContactScreen
  },
  FAQ: {
    screen: FAQScreen
  }
  
}, { 
  initialRouteName: 'Home',
  contentComponent: props => (<DrawerContent { ...props } />),
  navigationOptions: {
    header: null
  }
})

export default drawer