import React from "react";
import {View, Text, Image, StyleSheet, TouchableOpacity} from "react-native";
import NavBar from "../components/navBar";
import productDetailStyle from "../styles/productDetail";

const ProductDetail = ({route}) => {
  return (
    <View style={productDetailStyle.productDetailWrapper}>
      <View style={styles.productDetailContainer}>
        <Image style={{height: '50%', width: '100%'}} source={{
          uri: 'https://img.letgo.com/images/48/48/fe/6c/4848fe6c6ffc63ccc8e19d6c3323880c.jpg',
        }}/>
        <View>
          <View>
            <Text>Name:</Text>
            <Text>Description:</Text>
          </View>
            <TouchableOpacity>
              <Text>
                TopVendor
              </Text>
              <Text>
                Vendor
              </Text>
            </TouchableOpacity>
        </View>
        <Text style={{position: 'absolute', right: 10, bottom: 10, color: '#25B960', fontWeight: '700'}}>
          cruelty free
        </Text>
      </View>
      <NavBar/>
    </View>
  )
}

const styles = StyleSheet.create({
  productDetailContainer: {
    margin: 20,
    padding: 30,
    backgroundColor: '#EBEBEB',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 5,
    height: '80%',
    position: 'relative'
  },
})

export default ProductDetail;
