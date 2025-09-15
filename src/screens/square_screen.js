import React, { useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/color_counter";

const reducer = (state, action) => {
  // state === { red: number, green: number, blue: number }
  // action === {colorTocChange: 'red' | 'green' | 'blue', amount: 15 | -15}
  // action === {type: 'change_red' | 'change_green' | 'change_blue', payload: 15 | -15}
  switch (action.type) {
    case "change_red":
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };
    case "change_green":
      return state.green + action.payload > 255 ||
        state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };
    case "change_blue":
      return state.blue + action.payload > 255 ||
        state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };
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
          dispatch({ type: "change_red", payload: increaseIndex })
        }
        onDecrease={() =>
          dispatch({ type: "change_red", payload: -1 * increaseIndex })
        }
        color="Red"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ type: "change_green", payload: increaseIndex })
        }
        onDecrease={() =>
          dispatch({ type: "change_green", payload: -1 * increaseIndex })
        }
        color="Green"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ type: "change_blue", payload: increaseIndex })
        }
        onDecrease={() =>
          dispatch({ type: "change_blue", payload: -1 * increaseIndex })
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
