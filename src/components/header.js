import React from "react";
import {View, Text, TouchableOpacity} from 'react-native';
import headerStyle from "../styles/header";
import Logo from "./logo";

const Header = () => {
  return (
    <View style={headerStyle.headerMain}>
      <TouchableOpacity>
        <Text>
          Back
        </Text>
      </TouchableOpacity>
      <Logo size={20}/>
    </View>
  )
}

export default Header;
