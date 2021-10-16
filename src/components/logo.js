import React from "react";
import {View, Text, StyleSheet, Dimensions} from "react-native";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const Logo = ({isNav}) => (
  <View>
    <Text style={[logoStyles.logoText], isNav ? logoStyles.navLogoText: ''}>CruFree</Text>
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
    color: "#FFFFFF",
    fontWeight: "700",
  },
  navLogoText: {
    fontSize: 24,
    color: "#FFFFFF",
    fontWeight: "700",
  }
});

export default Logo;
