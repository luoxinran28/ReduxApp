import React from 'react'
import { StyleSheet, Image, View, TouchableOpacity } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable';

import AppText from './AppText';
import colors from '../config/colors';

const ListItem = ({ title, subtitle, image, onPress, renderRightActions, IconComponent }) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableOpacity
        underlayColor={colors.light}
        onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subtitle}>{subtitle}</AppText>
          </View>
        </View>
      </TouchableOpacity>
    </Swipeable>
  )
}

export default ListItem

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10
  },
  title: {
    fontWeight: 'bold',
    padding: 10,
  },
  subtitle: {
    color: colors.medium,
  }

})
