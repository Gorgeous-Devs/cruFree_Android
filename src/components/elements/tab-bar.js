import React from "react";
import {Box, Button} from "../base";
import {Search, Home, Info} from "../icons";

export default function TabBar({state, descriptors, navigation}) {
  return (
    <Box bg="blue" flexDirection="row">
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];

        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return label === "Search" ? (
          <Box
            key={label}
            bg="white"
            flexDirection="row"
            justifyContent="center">
            <Button bg="green" onPress={onPress}>
              <Search color="red" />
            </Button>
          </Box>
        ) : (
          <Button key={label} onPress={onPress} borderWidth={1}>
            {label === "Home" && <Home color={isFocused ? "red" : "black"} />}
            {label === "Info" && <Info color={isFocused ? "red" : "black"} />}
          </Button>
        );
      })}
    </Box>
  );
}
