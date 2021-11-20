import React from "react";
import {Box, Button, Text} from "../base";
import {colors, sizes} from "../../utils/theme";

export default function BrandProdCard({title, description}) {
  return (
    <Button
      bg={colors.white}
      width="90%"
      borderRadius={sizes.radius.normal}
      flexDirection="row">
      <Box p={3} flexDirection="row">
        <Box width={4} height={40} bg={colors.grey} mr={2} />
        <Box>
          <Text color={colors.text} fontWeight="boold">
            Brand or Prod Name
          </Text>
          <Text color={colors.icons}>Brand or Prod Description</Text>
        </Box>
      </Box>
      <Box p={2} ml="auto">
        <Box size={52} bg={colors.grey} />
      </Box>
    </Button>
  );
}
