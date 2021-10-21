import React from "react";
import {SafeAreaView, StatusBar, Image} from "react-native";
import {Box, Text} from "../components/base";
import {SearchInput} from "../components/elements";
import {colors, sizes} from "../utils/theme";
import logo from "../assets/images/CrueFree.png";

export default function SearchView() {
  return (
    <SafeAreaView style={{flex: 1, backgrounColor: "red"}}>
      <StatusBar
        animated={true}
        backgroundColor={colors.main}
        barStyle="light-content"
        showHideTransition="slide"
      />
      <Box
        width="100%"
        height="35%"
        bg={colors.main}
        position="relative"
        py={2}>
        <Box alignItems="center">
          <Image source={logo} resizeMode="contain" style={{height: 170}} />
          <Text
            color={colors.white}
            fontSize={sizes.fontsize.xl}
            fontWeight="bold">
            CrueFree
          </Text>
        </Box>
        <Box position="absolute" mx="auto" width="100%" bottom={-30}>
          <SearchInput />
        </Box>
      </Box>
    </SafeAreaView>
  );
}
