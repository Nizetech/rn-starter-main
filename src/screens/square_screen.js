import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/color_counter";

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  let increaseIndex = 15;
  console.log(`Red ==>${red}`, `Green ==>${green}`, `Blue ==>${blue}`);
  const setColor = (color, change) => {
    // color =='red' || color =='green' || color =='blue'
    // change === +15, -15
    switch (color) {
      case "red":
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        break;
      case "green":
        green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change);
        break;
      case "blue":
        blue + change > 255 || blue + change < 0
          ? null
          : setBlue(blue + change);
        break;
      default:
        null;
    }
  };
  ``;
  return (
    <View>
      <ColorCounter
        onIncrease={() => setColor("red", increaseIndex)}
        onDecrease={() => setColor("red", -1 * increaseIndex)}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => setColor("green", increaseIndex)}
        onDecrease={() => setColor("green", -1 * increaseIndex)}
        color="Green"
      />
      <ColorCounter
        onIncrease={() => setColor("blue", increaseIndex)}
        onDecrease={() => setColor("blue", -1 * increaseIndex)}
        color="Blue"
      />
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      ></View>
    </View>
  );
};

export default SquareScreen;
