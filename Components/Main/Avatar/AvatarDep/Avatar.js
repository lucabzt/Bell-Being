import * as React from "react";
import { StyleSheet, View } from "react-native";
import Orange from "./Orange";
import White from "./White";
import Tree from "./Tree";
import { Padding } from "../../GlobalStyles";

const Avatar = () => {
  return (
    <View style={styles.avatar}>
      <Orange />
      <White />
      <Tree />
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    display: "flex",
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "row",
    /* paddingHorizontal: Padding.p_6xs, */
    paddingVertical: 0,
    paddingHorizontal: 0,
    /* marginTop: 120, */
  },
  test: {
    color: "black",
    fontSize: 200,
  },
});

export default Avatar;
