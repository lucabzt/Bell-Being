import * as React from "react";
import { StyleSheet, Image } from "react-native";

const TreeIcon = () => {
  return (
    <Image
      style={styles.treeIcon}
      contentFit="cover"
      source={require("../../../assets/tree.png")}
    />
  );
};

const styles = StyleSheet.create({
  treeIcon: {
    position: "absolute",
    top: 146,
    left: 138,
    width: 115,
    height: 173,
    zIndex: 2,
  },
});

export default TreeIcon;
