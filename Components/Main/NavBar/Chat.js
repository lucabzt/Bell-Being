import * as React from "react";
import { StyleSheet, Text, SafeAreaView, Image, TouchableOpacity } from "react-native";
import { FontSize, FontFamily, Color, Padding } from "../../GlobalStyles";

const Chat = ({setPage}) => {
  return (
    <TouchableOpacity onPress={() => setPage(1)}>
        <SafeAreaView style={styles.chat}>
            <Image
                style={styles.treeIcon1}
                contentFit="cover"
                source={require("../../../assets/tree-icon1.png")}
            />
            <Text style={styles.main}>Main</Text>
        </SafeAreaView>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  treeIcon1: {
    flex: 1,
    maxWidth: "100%",
    maxHeight: "100%",
    width: "100%",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  main: {
    fontSize: FontSize.size_xl,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorBlack,
    textAlign: "center",
    alignSelf: "stretch",
  },
  chat: {
    alignSelf: "stretch",
    alignItems: "center",
    paddingHorizontal: Padding.p_8xs,
    paddingVertical: Padding.p_6xs,
    overflow: "hidden",
    minWidth: 60,
    minHeight: 90
  },
});

export default Chat;
