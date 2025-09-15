import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const reducer = (state, action) => {
  // state === { count: number }
  // action === {type: 'increase' | 'decrease', payload: 1 | -1}
  switch (action.type) {
    case "increase":
      return {
        ...state,
        count: state.count + action.payload,
      };
    case "decrease":
      return state.count - action.payload < 0
        ? state
        : { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};

const CounterScreen = () => {
  let increaseIndex = 1;
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const { count } = state;
  console.log(state); //{ count: 0 }
  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          dispatch({ type: "increase", payload: increaseIndex });
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          dispatch({ type: "decrease", payload: increaseIndex });
        }}
      />
      <Text>Counter count - {count}</Text>
    </View>
  );
};

export default CounterScreen;
