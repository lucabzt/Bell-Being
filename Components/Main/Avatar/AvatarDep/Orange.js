import * as React from "react";
import { StyleSheet, View } from "react-native";
import Ellipse1 from "./Elipse1";

const Orange = () => {
  return (
    <View style={styles.orange}>
      <Ellipse1 />
    </View>
  );
};

const styles = StyleSheet.create({
  orange: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "row",
    zIndex: 0,
  },
});

export default Orange;