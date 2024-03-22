import * as React from "react";
import { StyleSheet, View, Image, Touchable } from "react-native";
import { Padding } from "../../GlobalStyles";
import { useState, useEffect } from "react";

const Avatar = ({n}) => {
    if (n > 8 || n < 1) {
        n = 1;
    }
    // useEffect(() => {
    //     // This sets up an interval that updates `n` every 1000 milliseconds
    //     const intervalId = setInterval(() => {
    //         setN((prevN) => (prevN === 8 ? 1 : prevN + 1));
    //     }, 1000);

    //     // Cleanup function to clear the interval when the component unmounts
    //     return () => clearInterval(intervalId);
    // }, []); // Empty dependency array means this effect runs only on mount
    // for (let i = 0; i < 100; i++) {
    //     for (let j = 1; j < 9; j++) {
    //         setN(j);
    //         setTimeout(1000);
    //     }
    // }
  
    let treeSource;
    switch(n) {
      case 1:
        treeSource = require('../../../assets/trees/tree1.png');
        break;
      case 2:
        treeSource = require('../../../assets/trees/tree2.png');
        break;
      case 3:
        treeSource = require('../../../assets/trees/tree3.png');
        break;
      case 4:
        treeSource = require('../../../assets/trees/tree4.png');
        break;
      case 5:
        treeSource = require('../../../assets/trees/tree5.png');
        break;
      case 6:
        treeSource = require('../../../assets/trees/tree6.png');
        break;
      case 7:
        treeSource = require('../../../assets/trees/tree7.png');
        break;
      case 8:
        treeSource = require('../../../assets/trees/tree8.png');
        break;
      default:
        treeSource = require('../../../assets/trees/tree1.png');
    }
  
    return (
        <Image
            style={styles.avatar}
            resizeMode="cover"
            source={treeSource}
        />
    );
  };

const styles = StyleSheet.create({
  avatar: {
    height: 500,
    width: 400,
  },
});

export default Avatar;