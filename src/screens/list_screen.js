import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  // Without Key, the list will not work properly (Key must be a string and must be unique)
  const friends = [
    //===> first method of using key <<<====
    // { name: "Friend #1", key: "1" },
    // { name: "Friend #2", key: "1" },
    // { name: "Friend #3",  key: "3" },
    // { name: "Friend #4", key: "4" },
    // { name: "Friend #5", key: "5" },
    // { name: "Friend #6", key: "6" },
    // { name: "Friend #7", key: "7" },

    // second method of using key
    { name: "Friend #1", age: 20 },
    { name: "Friend #2", age: 25 },
    { name: "Friend #3", age: 30 },
    { name: "Friend #4", age: 40 },
    { name: "Friend #5", age: 50 },
    { name: "Friend #6", age: 60 },
    { name: "Friend #7", age: 70 },
  ];

  return (
    <FlatList
      // horizontal // (This will make the list horizontal)
      // showsHorizontalScrollIndicator={false} // (This will hide the horizontal scroll indicator)
      showsVerticalScrollIndicator={false} // (This will hide the vertical scroll indicator)
      // keyExtractor is another way of using key
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 20,
  },
});

export default ListScreen;
