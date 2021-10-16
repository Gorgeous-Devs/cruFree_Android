import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import navBarStyle from '../styles/navBar';
import Icon from 'react-native-vector-icons/FontAwesome';

const navBar = () => {
  return (
    <View style={navBarStyle.navBar}>
      <TouchableOpacity>
        <View style={navBarStyle.navButtons}>
          <Icon name="home" size={28} color="#fff" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={navBarStyle.navButtons}>
          <Icon name="search" size={28} color="#fff" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={navBarStyle.navButtons}>
          <Icon name="navicon" size={28} color="#fff" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default navBar;
