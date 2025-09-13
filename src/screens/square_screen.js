import React, { useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/color_counter";

const reducer = (state, action) => {
  // state === { red: number, green: number, blue: number }
  // action === {colorTocChange: 'red' | 'green' | 'blue', amount: 15 | -15}
  switch (action.colorToChange) {
    case "red":
      return { ...state, red: state.red + action.amount };
    case "green":
      return { ...state, green: state.green + action.amount };
    case "blue":
      return { ...state, blue: state.blue + action.amount };
    default:
      return state;
  }
};

const SquareScreen = () => {
  let increaseIndex = 15;
  const [state, dispatch] = useReducer(reducer, {
    red: 0,
    green: 0,
    blue: 0,
  });

  const { red, green, blue } = state;
  console.log(state); //{ red: 0, green: 0, blue: 0 }

  return (
    <View>
      <ColorCounter
        onIncrease={() =>
          dispatch({ colorToChange: "red", amount: increaseIndex })
        }
        onDecrease={() =>
          dispatch({ colorToChange: "red", amount: -1 * increaseIndex })
        }
        color="Red"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ colorToChange: "green", amount: increaseIndex })
        }
        onDecrease={() =>
          dispatch({ colorToChange: "green", amount: -1 * increaseIndex })
        }
        color="Green"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ colorToChange: "blue", amount: increaseIndex })
        }
        onDecrease={() =>
          dispatch({ colorToChange: "blue", amount: -1 * increaseIndex })
        }
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
