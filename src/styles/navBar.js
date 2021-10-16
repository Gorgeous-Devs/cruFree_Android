import {StyleSheet, Dimensions} from "react-native";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const navBarStyle = StyleSheet.create({
  navBar: {
    height: windowHeight * 0.08,
    width: windowWidth,
    backgroundColor: "#25B960",
    // backgroundColor: 'red',
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  navButtons: {
    height: windowHeight * 0.08,
    width: windowWidth / 8,
    // backgroundColor: "#BFCD25",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default navBarStyle;
