import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

const Logo = () => (
  <View>
    <Text style={logoStyles.logoText}>
      CruFree
    </Text>
  </View>
)

const logoStyles = StyleSheet.create({
  logoText: {
    fontSize: 36,
    fontFamily: 'Roboto',
    color: '#FFFFFF',
    fontWeight: '700'
  }
})

export default Logo;
