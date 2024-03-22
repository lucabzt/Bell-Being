import * as React from "react";
import { StyleSheet, Image } from "react-native";

const Ellipse1 = () => {
  return (
    <Image
      style={styles.orangeChild}
      contentFit="cover"
      source={require("../../../assets/ellipse-1.png")}
    />
  );
};

const styles = StyleSheet.create({
  orangeChild: {
    width: 375,
    height: 469,
  },
});

export default Ellipse1;
