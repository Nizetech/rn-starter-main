import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentScreen = () => {
  const name = <Text style={styles.subTextStyle}>My name is Fortune</Text>;
  const friends = ["Friend #1", "Friend #2", "Friend #3"];
  const greeting = "Good morning";
  return (
    <View>
      <Text style={styles.textStyle}>Getting started with React Native!</Text>
      {name}
      <Text>{greeting}</Text>
      {friends.map((friend) => {
        return <Text>{friend}</Text>;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
  subTextStyle: {
    fontSize: 20,
  },
});

export default ComponentScreen;
