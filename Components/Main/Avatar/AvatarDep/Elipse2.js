import * as React from "react";
import { StyleSheet, Image } from "react-native";

const Ellipse2 = () => {
  return (
    <Image
      style={styles.whiteChild}
      contentFit="cover"
      source={require("../../../assets/ellipse-2.png")}
    />
  );
};

const styles = StyleSheet.create({
  whiteChild: {
    width: 360,
    height: 454,
  },
});

export default Ellipse2;
