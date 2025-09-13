import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hi There ooooo</Text>
      <Button
        color={"red"}
        style={styles.button}
        onPress={() => navigation.navigate("Components")}
        title="GO to Components"
      />
      {/* // This works like gesture handler */}
      {/* <TouchableOpacity
        onPress={() => props.navigation.navigate("List")}>
        <Text>Go List Demo</Text>
      </TouchableOpacity> */}
      <Button
        color={"blue"}
        style={styles.button}
        onPress={() => navigation.navigate("List")}
        title="GO to List Demo"
      />
      <Button
        color={"green"}
        style={styles.button}
        onPress={() => navigation.navigate("Image")}
        title="GO to Image Demo"
      />
      <Button
        color={"purple"}
        style={styles.button}
        onPress={() => navigation.navigate("Counter")}
        title="GO to Counter Demo"
      />
      <Button
        color={"orange"}
        style={styles.button}
        onPress={() => navigation.navigate("Color")}
        title="GO to Color Demo"
      />
      <Button
        color={"pink"}
        style={styles.button}
        onPress={() => navigation.navigate("Square")}
        title="GO to Square Demo"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
