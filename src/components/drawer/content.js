// @flow
import React from 'react';
import { 
  StyleSheet,
  ScrollView,
  Image,
  View,
  Text
} from 'react-native';
import { DrawerItems, SafeAreaView } from 'react-navigation';

export default CustomDrawerContentComponent = (props) => (
  <ScrollView>
    <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
      <View style={ styles.topContainer }>
        <View style={ styles.topContent }>
          <Image
            source={require('beGlammed/assets/images/sample_facebook.jpg')}
            style={ styles.profileImage }
          />
          <Text style={{ textAlign: 'center' }}>Andrew!</Text>
        </View>
      </View>
      <DrawerItems {...props} />
      <View style={ styles.socialIconsContainer }>

      </View>
    </SafeAreaView>
  </ScrollView>
)

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  topContainer: {
    height: '25%',
    width: '100%',
    alignContent: 'center',
    justifyContent: 'center'
  },
  topContent: {
    width: '100%',
    alignContent: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  profileImage: {
    height: 100,
    width: 100,
    borderRadius: 50,
    alignSelf: 'center'
  },
  socialIconsContainer: {
    width: '100%'
  }
})