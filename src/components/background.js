import React from 'react';
import {
  View,
} from 'react-native';

import backgroundStyle from '../styles/background';
import SearchBar from './searchBar';
import Logo from "./logo";

const Background = () =>
 (
   <View style={backgroundStyle.bgStyle}>
     <Logo/>
     <SearchBar/>
  </View>
 );

export default Background;
