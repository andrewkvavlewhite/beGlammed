// @flow
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import {
  StackNavigator,
  SafeAreaView
} from 'react-navigation'

class HomeComponent extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
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
      <SafeAreaView style={styles.container}>
        <View style={ styles.optionContainer }>
          <Image
            source={require('beGlammed/assets/images/book_appointment.jpg')}
            style={{ height: '100%', width: '100%', position: 'absolute', flex: 1 }}
            resizeMode={'cover'}
          />
          <Text style={ styles.optionText }>
            BOOK HAIR, MAKEUP & NAILS
          </Text>
        </View>
        <View style={ styles.optionContainer }>
          <Image
            source={require('beGlammed/assets/images/bridal.jpg')}
            style={{ height: '100%', width: '100%', position: 'absolute', flex: 1 }}
            resizeMode={'cover'}
          />
          <View style={{
            flex: 1,
            width: '100%',
            height: '100%',
            backgroundColor: '#000',
            opacity: 0.5,
            position: 'absolute'
          }}></View>
          <Text style={ styles.optionText }>
            BOOK BRIDAL
          </Text>
        </View>
        <View style={ styles.optionContainer }>
          <Image
            source={require('beGlammed/assets/images/recent_bookings.png')}
            style={{ height: '100%', width: '100%', position: 'absolute', flex: 1 }}
            resizeMode={'cover'}
          />
          <Text style={ styles.optionText }>
            RECENT BOOKINGS
          </Text>
        </View>
        <View style={ styles.optionContainer }>
          <Image
            source={require('beGlammed/assets/images/refer_friend.jpg')}
            style={{ height: '100%', width: '100%', position: 'absolute', flex: 1 }}
            resizeMode={'cover'}
          />
          <View style={{
            flex: 1,
            width: '100%',
            height: '100%',
            backgroundColor: '#000',
            opacity: 0.4,
            position: 'absolute'
          }}></View>
          <Text style={ styles.optionText }>
            REFER A FRIEND & SAVE
          </Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  optionContainer: {
    flex: 1,
    borderWidth: 2,
    borderColor: 'white',
    alignContent: 'center',
    justifyContent: 'center'
  },
  optionText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20
  }
});

export default StackNavigator({
  Main: { 
    screen: HomeComponent
  }
}, { 
  initialRouteName: 'Main'
}) 