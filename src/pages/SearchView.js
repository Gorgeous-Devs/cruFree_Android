import React from "react";
import {Box, Text} from "../components/base";
import {SafeAreaView, StatusBar, View} from "react-native";
import {colors} from "../utils/theme";

export default function SearchView() {
  return (
    <SafeAreaView style={{flex: 1, backgrounColor: "red"}}>
      <StatusBar
        animated={true}
        backgroundColor={colors.main}
        barStyle="light-content"
        showHideTransition="slide"
      />
      <Box width="100%" height={200} bg={colors.main}>
        <Text>AAAA</Text>
      </Box>
    </SafeAreaView>
  );
}
