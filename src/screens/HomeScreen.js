import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}>Hi There ooooo</Text>
      <Button
        color={"red"}
        style={styles.button}
        onPress={() => props.navigation.navigate("Components")}
        title="GO to Components"
      />
      {/* // This works like gesture handler */}
      <TouchableOpacity onPress={() => props.navigation.navigate("List")}>
        <Text>Go List Demo</Text>
        <Text>Go List Demo</Text>
        <Text>Go List Demo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
