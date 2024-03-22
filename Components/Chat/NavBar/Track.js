import * as React from "react";
import { StyleSheet, Text, SafeAreaView, Image, TouchableOpacity } from "react-native";
import { FontSize, FontFamily, Color, Padding } from "../../GlobalStyles";

const Track = ({setPage}) => {
  return (
    <TouchableOpacity onPress={() => setPage(2)}>
        <SafeAreaView style={styles.track}>
            <Image
                style={styles.trackIcon1}
                contentFit="cover"
                source={require("../../../assets/track-icon1.png")}
            />
            <Text style={styles.chat}>Track</Text>
        </SafeAreaView>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  trackIcon1: {
    flex: 1,
    maxWidth: "100%",
    maxHeight: "100%",
    width: "100%",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  chat: {
    fontSize: FontSize.size_xl,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorBlack,
    textAlign: "center",
    alignSelf: "stretch",
  },
  track: {
    alignSelf: "stretch",
    alignItems: "center",
    paddingHorizontal: Padding.p_8xs,
    paddingVertical: Padding.p_6xs,
    overflow: "hidden",
    minWidth: 60,
    minHeight: 90
  },
});

export default Track;
