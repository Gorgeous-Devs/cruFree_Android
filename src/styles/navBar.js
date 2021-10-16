import {StyleSheet, Dimensions} from "react-native";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const navBarStyle = StyleSheet.create({
  navBar: {
    height: windowHeight / 14,
    width: windowWidth,
    backgroundColor: "#25B960",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  navButtons: {
    height: windowHeight / 14,
    width: windowWidth / 8,
    // backgroundColor: "#BFCD25",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default navBarStyle;
