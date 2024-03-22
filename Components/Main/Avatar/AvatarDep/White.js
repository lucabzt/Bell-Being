import * as React from "react";
import { StyleSheet, View } from "react-native";
import Ellipse2 from "./Elipse2";

const White = () => {
  return (
    <View style={styles.white}>
      <Ellipse2 />
    </View>
  );
};

const styles = StyleSheet.create({
  white: {
    position: "absolute",
    top: 6,
    left: 15,
    flexDirection: "row",
    zIndex: 1,
  },
});

export default White;
