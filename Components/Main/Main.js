import * as React from "react";
import { StyleSheet, View } from "react-native";
import TopBar from "./TopBar/TopBar";
import { Color } from "../GlobalStyles";
import Avatar from "./Avatar/Avatar";
import NavBar from "./NavBar/NavBar";

const Main = ({setP, sc}) => {
  return (
    <View style={styles.mainPage}>
      <TopBar />
      <Avatar n={sc}/>
      <NavBar set={setP}/>
    </View>
  );
};

const styles = StyleSheet.create({
  mainPage: {
    display: "flex",
    backgroundColor: "#ededed",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
});

export default Main;