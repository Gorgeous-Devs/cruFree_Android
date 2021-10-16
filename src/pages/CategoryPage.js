import React from "react";
import {View, Text, ScrollView, SafeAreaView} from "react-native";
import categoryStyles from "../styles/categorypage";
import NavBar from "../components/navBar";
import Icon from "react-native-vector-icons/FontAwesome";
import Logo from "../components/logo";
import SearchBar from "../components/searchBar";
import ProductWrapper from "../components/productWrapper";

// DUMMY DATA
const data = [
  {
    id: 1,
    title: "Beauty",
  },
  {
    id: 2,
    title: "Beauty",
  },
  {
    id: 3,
    title: "Beauty",
  },
  {
    id: 4,
    title: "Beauty",
  },
  {
    id: 5,
    title: "Beauty",
  },
  {
    id: 6,
    title: "Beauty",
  },
  {
    id: 7,
    title: "Beauty",
  },
  {
    id: 8,
    title: "Beauty",
  },
  {
    id: 9,
    title: "Beauty",
  },
  {
    id: 10,
    title: "Beauty",
  },
  {
    id: 11,
    title: "Beauty",
  },
];

const CategoryPage = () => {
  return (
    <SafeAreaView style={categoryStyles.mainView}>
      <View style={categoryStyles.header}>
        <View style={categoryStyles.headerNav}>
          <Icon name="arrow-left" size={24} color="#fff" />
          <Logo isNav={true} />
        </View>
        <View styled={categoryStyles.headerTextContainer}>
          <Text style={categoryStyles.headerText}>Bebek Urunleri</Text>
        </View>
        <View style={categoryStyles.headerSearch}>
          <SearchBar />
        </View>
      </View>
      <ScrollView style={categoryStyles.content}>
        <Text>Category Page</Text>
        <ProductWrapper 
          topVendor="Avon Kozmetik?"
          vendor="Vendor"
          name="Bi tane ruj"
          description="Pek hos olmayan deneyler"
          cruelty="cruelty free"
        />
      </ScrollView>
      <NavBar />
    </SafeAreaView>
  );
};

export default CategoryPage;
