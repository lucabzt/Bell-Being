import * as React from "react";
import { StyleSheet, View } from "react-native";
import TopBar from "./TopBar/TopBar";
import { Color } from "../GlobalStyles";
import Tracker from "./Tracker/Tracker";
import NavBar from "./NavBar/NavBar";

const Track = ({setP, setN, n}) => {
  return (
    <View style={styles.mainPage}>
      <TopBar />
      <Tracker setN={setN} n={n}/>
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

export default Track;