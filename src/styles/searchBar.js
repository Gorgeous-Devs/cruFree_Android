import {StyleSheet} from "react-native";

const searchBarStyle = StyleSheet.create({
  sbWrapper: {
    width: "90%",

    margin: 16,
    fontSize: 18,
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 5,
  },
  sbInput: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    paddingLeft: 15,
    paddingRight: 15,
    color: "#000",
  },
  sbButton: {
    position: "absolute",
    right: 0,
    top: 0,
    height: "100%",
    width: 45,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default searchBarStyle;
