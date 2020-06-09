import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import Screen from "../components/Screen";
import ListItemSeparator from "../components/ListItemSeparator";
import Card from "../components/Card";
import AppTextInput from "../components/AppTextInput";
import AppPicker from "../components/AppPicker";
import colors from "../config/colors";

const listings = [
  {
    id: 1,
    title: "Red jacket for sale",
    price: 100,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch in great condition",
    price: 200,
    image: require("../assets/couch.jpg"),
  },
  {
    id: 3,
    title: "Chair in nice price",
    price: 20,
    image: require("../assets/chair.jpg"),
  },
];

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

export default function ListingsScreen() {
  const [category, setCategory] = useState(categories[0]);

  return (
    <Screen style={styles.screen}>
      <AppPicker
        items={categories}
        icon="apps"
        placeholder="Category"
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
      />
      <AppTextInput icon="email" placeholder="Email" />
      <FlatList
        data={listings}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={ListItemSeparator}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subtitle={"$" + item.price}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});
