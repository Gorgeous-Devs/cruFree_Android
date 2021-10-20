import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
import {router} from "./router";

const RouteContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={router[0].title}
        screenOptions={{
          headerShown: false,
        }}>
        {router.map(item => (
          <Stack.Screen
            key={item.key}
            name={item.title}
            component={item.component}
            options={item.options}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RouteContainer;
