import * as React from "react";
import { Text, StyleSheet, Safe, SafeAreaView } from "react-native";
import { FontSize, FontFamily, Color, Padding } from "../../GlobalStyles";

const Progress = () => {
  return (
    <SafeAreaView style={styles.progress}>
      <Text style={styles.xp}>200XP</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  xp: {
    fontSize: 15,
    fontWeight: "800",
    fontFamily: FontFamily.interExtraBold,
    color: Color.colorBlack,
    textAlign: "center",
  },
  progress: {
    flex: 1,
    backgroundColor: Color.colorTomato,
    width: 85,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Progress;
