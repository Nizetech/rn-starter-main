import React from "react";
import { View, Text, Image } from "react-native";

const ImageDetail = ({ title, img, score }) => {
  return (
    <View>
      <Image source={img} />
      <Text>{title} </Text>
      <Text>Image score -{score} </Text>
    </View>
  );
};

export default ImageDetail;
