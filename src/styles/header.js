import {StyleSheet, Dimensions} from "react-native";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const headerStyle = StyleSheet.create({
  headerMain: {
    backgroundColor: "#25B960",
    height: windowHeight / 8,
    display: "flex",
    flexDirection: 'row',
    alignItems: "flex-end",
    justifyContent: "space-between",
    paddingHorizontal: windowWidth/20,
    paddingVertical: windowHeight/25
  },
});

export default headerStyle;
