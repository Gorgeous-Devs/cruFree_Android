import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
const Stack = createNativeStackNavigator();
import {router, tabBarRouter} from "./router";

import TabBar from "../components/elements/tab-bar";

const Tab = createBottomTabNavigator();

const RouteContainer = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Search"
        tabBar={props => <TabBar {...props} />}>
        {tabBarRouter.map(route => (
          <Tab.Screen
            key={route.id}
            name={route.title}
            component={route.component}
            options={route.options}
          />
        ))}
      </Tab.Navigator>

      {/*<Stack.Navigator*/}
      {/*  initialRouteName={router[0].title}*/}
      {/*  screenOptions={{*/}
      {/*    headerShown: false,*/}
      {/*  }}>*/}
      {/*  {router.map(item => (*/}
      {/*    <Stack.Screen*/}
      {/*      key={item.key}*/}
      {/*      name={item.title}*/}
      {/*      component={item.component}*/}
      {/*      options={item.options}*/}
      {/*    />*/}
      {/*  ))}*/}
      {/*</Stack.Navigator>*/}
    </NavigationContainer>
  );
};

export default RouteContainer;
