import React from 'react';
import {
  StyleSheet,
  Dimensions,
} from 'react-native';

const { width, height } = Dimensions.get('window');

const productWrapperStyles = StyleSheet.create({
  productWrapper: {
    backgroundColor: 'red',
    width: width,
    height: height * 0.15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imgContainer : {
    backgroundColor: 'blue',
    height: height * 0.15,
    width: width * 0.3,
  },
  details: {
    backgroundColor: 'green',
    height: height * 0.15,
    width: width * 0.3,
  },
  crueltyContainer : {
    backgroundColor: 'yellow',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    height: height * 0.15,
    width: width * 0.3,
  },
  crueltyText: {
    height: height * 0.15,
    width: width * 0.3,
    display: 'flex',
    justifyContent: 'flex-end',
  },
});

export default productWrapperStyles;