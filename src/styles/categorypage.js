import React from "react";
import {StyleSheet, Dimensions} from "react-native";

const {width, height} = Dimensions.get("window");

const categoryStyles = StyleSheet.create({
  mainView: {
    width: width,
    height: height,
    backgroundColor: "#25B960",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  header: {
    width: width,
    height: height * 0.3,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#25B960",
  },
  headerNav: {
    padding: 10,
    width: width,
    height: height * 0.3 * 0.3,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#25B960",
  },
  headerTextContainer: {
    width: width,
    height: height * 0.3 * 0.3,
    // backgroundColor: '#BDDC89',
    backgroundColor: "#25B960",
  },
  headerText: {
    fontSize: 36,
    color: "#fff",
  },
  headerSearch: {
    // backgroundColor: "#D75951",
    backgroundColor: "#25B960",

    width: width,
    height: height * 0.3 * 0.4,
  },
  content: {
    padding: 20,
    width: width,
    height: height * 0.62,
    // backgroundColor: "#cecece",
    backgroundColor: '#BDDC89',
  },
});

export default categoryStyles;
