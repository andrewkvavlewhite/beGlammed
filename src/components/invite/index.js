// @flow
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class Test extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Invite Friends',
    headerTitle: (
      <View style={{ flex: 1, alignContent: 'center', justifyContent: 'center',  }}>
      <Image
        source={require('beGlammed/assets/images/beglammedlogo.png')}
        style={{ height: 30, alignSelf: 'center' }}
        resizeMode={'contain'}
      />
      </View>
    ),
    headerLeft: null
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});