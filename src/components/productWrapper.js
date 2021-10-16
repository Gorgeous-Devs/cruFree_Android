import React from "react";
import {View, Text, Image, TouchableOpacity} from "react-native";
import productWrapperStyles from "../styles/productWrapper";

const ProductWrapper = ({topVendor, vendor, name, description, cruelty}) => {
  return (
    <View style={productWrapperStyles.productWrapper}>
      <View style={productWrapperStyles.imgContainer}>
        <Text> BOX 1</Text>
      </View>
      <View style={productWrapperStyles.details}>
        <Text>{topVendor}</Text>
        <Text>{vendor}</Text>
        <Text>{name}</Text>
        <Text>{description}</Text>
      </View>
      <View style={productWrapperStyles.crueltyContainer}>
        <View style={productWrapperStyles.crueltyText}>
          <Text>{cruelty}</Text>
        </View>
      </View>
    </View>
  );
};

export default ProductWrapper;
