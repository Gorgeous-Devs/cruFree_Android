import React from "react";
import {Box, Input, Button} from "../base";
import {colors, sizes} from "../../utils/theme";
import {Search} from "../icons";

export default function SearchInput() {
  return (
    <>
      <Box
        bg={colors.white}
        flexDirection="row"
        alignItems="center"
        width="90%"
        borderRadius={sizes.radius.normal}
        height={62}
        mx="auto"
        style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.32,
          shadowRadius: 5.46,

          elevation: 9,
        }}>
        <Button height="100%" width="15%">
          <Search color={colors.icons} />
        </Button>
        <Input
          placeholder="Search..."
          width="85%"
          height="100%"
          color={colors.text}
        />
      </Box>
    </>
  );
}
