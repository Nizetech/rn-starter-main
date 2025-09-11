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
    { name: "Friend #1" },
    { name: "Friend #2" },
    { name: "Friend #3" },
    { name: "Friend #4" },
    { name: "Friend #5" },
    { name: "Friend #6" },
    { name: "Friend #7" },
  ];

  return (
    <FlatList
      // keyExtractor is another way of using key
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return <Text style={styles.textStyle}>{item.name}</Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;
