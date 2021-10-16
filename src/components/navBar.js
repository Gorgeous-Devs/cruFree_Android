import React from "react";
import {View, Text, TouchableOpacity} from "react-native";
import navBarStyle from "../styles/navBar";
import Icon from "react-native-vector-icons/FontAwesome";
Icon.loadFont();

const NavBar = props => {
  console.log(props);
  return (
    <View style={navBarStyle.navBar}>
      {/*Home*/}
      <TouchableOpacity>
        <View style={navBarStyle.navButtons}>
          <Icon name="home" size={28} color="#BFCD25" />
        </View>
      </TouchableOpacity>
      {/*Search*/}
      <TouchableOpacity>
        <View style={navBarStyle.navButtons}>
          <Icon name="search" size={28} color="#BFCD25" />
        </View>
      </TouchableOpacity>
      {/*Menu*/}
      <TouchableOpacity>
        <View style={navBarStyle.navButtons}>
          <Icon name="navicon" size={28} color="#BFCD25" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default NavBar;
