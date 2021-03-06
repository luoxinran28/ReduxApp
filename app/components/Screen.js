import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'

import Constants from 'expo-constants';

const Screen = ({ children, style }) => {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={style}>
        {children}
      </View>
    </SafeAreaView>
  )
}

export default Screen

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  }
})
