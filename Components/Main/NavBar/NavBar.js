import * as React from "react";
import { StyleSheet, View } from "react-native";
import Track from "./Track";
import Chat from "./Chat";
import Main from "./Main";
import { Color, Padding } from "../../GlobalStyles";

const NavBar = ({set}) => {
  return (
    <View style={styles.navbar}>
      <Track setPage = {set}/>
      <Chat setPage = {set}/>
      <Main setPage = {set}/>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    alignSelf: "stretch",
    backgroundColor: Color.colorGray,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 60,
    paddingHorizontal: Padding.p_29xl,
    paddingVertical: 10,
    minHeight: 115,
  },
});

export default NavBar;
