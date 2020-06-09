import React from 'react'
import { StyleSheet, ImageBackground, View, Image, Text } from 'react-native'

import colors from '../config/colors';
import AppButton from "../components/AppButton";
import Card from '../components/Card';
import ListingDetailsScreen from '../components/ListingDetailsScreen';
import ViewImageScreen from './ViewImageScreen';
import MessagesScreen from './MessagesScreen';
import AccountScreen from './AccountScreen';
import ListingsScreen from './ListingsScreen';


const WelcomeScreen = () => {
  return (
    <ListingsScreen />
    // <AccountScreen />
    // <MessagesScreen />
    // <View style={{
    //   backgroundColor: '#f8f4f4',
    //   padding: 20,
    //   paddingTop: 100,
    // }}>
    //   {/* <Card
    //     title='first title'
    //     subtitle='$100'
    //     image={require('../assets/jacket.jpg')}
    //   /> */}
    //   <ListingDetailsScreen />
    // </View>
    // <ImageBackground
    //   blurRadius={10}
    //   style={styles.background}
    //   source={require('../assets/background.jpg')}>
    //   <View style={styles.logoContainer}>
    //     <Image style={styles.logo} source={require('../assets/logo-red.png')} />
    //     <Text style={styles.tagline}>Sell what you don't need</Text>
    //   </View>

    //   <View style={styles.buttonsContainer}>
    //     <AppButton title="Login" onPress={() => console.log('clicked')}></AppButton>
    //     <AppButton title="Register" color="secondary" onPress={() => console.log('clicked')}></AppButton>
    //     <View style={styles.registerButton}></View>
    //   </View>
    // </ImageBackground>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  buttonsContainer: {
    padding: 20,
    width: '100%'
  },
  tagline: {
    fontSize: 25,
    fontWeight: '600',
    paddingVertical: 20,
  }
})
