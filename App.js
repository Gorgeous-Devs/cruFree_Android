import React from 'react';
import {
  View,
} from 'react-native';
import Home from "./src/pages/Home";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductDetail from "./src/pages/ProductDetail";
import Logo from "./src/components/logo";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator  initialRouteName="Home">
          <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />
          <Stack.Screen options={{
            title: null,
            headerStyle: {
              backgroundColor: '#25B960',
            },
            headerRight: (props) => <Logo {...props} />,
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} name="Detail" component={ProductDetail} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
