import * as React from "react";
import { Text, StyleSheet, SafeAreaView, Image } from "react-native";
import { FontSize, FontFamily, Color, Padding } from "../../GlobalStyles";

const FoodGroupText = () => {
  return (
    <SafeAreaView style={styles.foodgrouptext}>
      <Text style={styles.bellFoodGroup}> Bell Food Group</Text>
      <Image
        style={styles.pastedImageRemovebgPreviewIcon}
        contentFit="cover"
        source={require("../../../assets/pasted-imageremovebgpreview-1.png")}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bellFoodGroup: {
    fontSize: FontSize.size_xl,
    fontWeight: "800",
    fontFamily: FontFamily.interExtraBold,
    color: Color.colorWhitesmoke_100,
    textAlign: "left",
  },
  pastedImageRemovebgPreviewIcon: {
    width: 47,
    height: 42,
  },
  foodgrouptext: {
    flex: 1,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_9xs,
    marginLeft: 34,
  },
});

export default FoodGroupText;
