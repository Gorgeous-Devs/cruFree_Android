import React from "react";
import {colors, sizes} from "../../utils/theme";
import {Box, Text} from "../base";
import {Image} from "react-native";
import logo from "../../assets/images/CrueFree.png";
import {SearchInput} from "../elements";

export default function SearchHead() {
  return (
    <>
      <Box
        width="100%"
        height="35%"
        bg={colors.main}
        position="relative"
        py={2}
        zIndex={9999}>
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
    </>
  );
}
