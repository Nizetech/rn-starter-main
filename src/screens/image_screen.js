import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetail from "../components/image_detail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="Mountain"
        img={require("../../assets/mountain.jpg")}
        score={8}
      />
      <ImageDetail
        title="Beach"
        img={require("../../assets/beach.jpg")}
        score={9}
      />
      <ImageDetail
        title="Forest"
        img={require("../../assets/forest.jpg")}
        score={7}
      />
    </View>
  );
};

export default ImageScreen;
