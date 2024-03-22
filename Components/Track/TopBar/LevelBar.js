import * as React from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import Progress from "./Progress";
import { Color, Padding } from "../../GlobalStyles";

const LevelBar = () => {
  return (
    <View style={styles.levelBar}>
      <Progress />
    </View>
  );
};

const styles = StyleSheet.create({
  levelBar: {
    alignSelf: "stretch",
    backgroundColor: Color.colorWhitesmoke_100,
    width: 118,
    overflow: "hidden",
    marginLeft: 20,
  },
});

export default LevelBar;