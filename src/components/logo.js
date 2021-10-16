import React from "react";
import {View, Text, StyleSheet, Dimensions} from "react-native";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const Logo = () => (
  <View>
    <Text style={logoStyles.logoText}>CruFree</Text>
  </View>
);

const logoStyles = StyleSheet.create({
  logoContainer: {
    height: (windowHeight * 10) / 100,
    width: windowWidth,
    backgroundColor: "red",
  },
  logoText: {
    fontSize: 36,
    fontFamily: "Roboto",
    color: "#FFFFFF",
    fontWeight: "700",
  },
});

export default Logo;
