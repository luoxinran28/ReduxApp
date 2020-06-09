import React, {useState} from 'react'
import { StyleSheet, FlatList, View } from 'react-native'

import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import ListItemSeparator from '../components/ListItemSeparator';
import ListItemDeleteAction from './ListItemDeleteAction';
import Icon from '../components/Icon';

const initialMessages = [
  { id: 1, title: 'T1', description: 'D1', image: require('../assets/mosh.jpg')},
  { id: 2, title: 'T2', description: 'D2', image: require('../assets/mosh.jpg')},
  { id: 3, title: 'T3', description: 'D3', image: require('../assets/mosh.jpg')},
]

const MessagesScreen = () => {

  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter(m => m.id !== message.id));
  }

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={message => message.id.toString()}
        renderItem={({ item }) =>
          <ListItem
            title={item.title}
            subtitle={item.description}
            image={item.image}
            onPress={() => console.log("Pressed")}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />)}
            IconComponent={
              <Icon
              name="email"
              size={50}
              backgroundColor="red"
              iconColor="white"
            /> }
          />}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => { 
          setMessages([{ id: 3, title: 'T3', description: 'D3', image: require('../assets/mosh.jpg')}]);
        }}
      />
    </Screen>
  )
}

export default MessagesScreen

const styles = StyleSheet.create({
  
})
