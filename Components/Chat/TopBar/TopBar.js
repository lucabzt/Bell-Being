import * as React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import LevelBar from "./LevelBar";
import FoodGroupText from "./FoodGroupText";
import { Color, Padding } from "../../GlobalStyles";

const TopBar = () => {
  return (
    <SafeAreaView style={styles.topBar}>
      <LevelBar />
      <FoodGroupText />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  topBar: {
    alignSelf: "stretch",
    backgroundColor: Color.colorGray,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
    paddingVertical: 50
  },
});

export default TopBar;
