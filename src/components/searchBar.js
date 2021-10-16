import React, {useState} from "react";
import {View, TextInput, TouchableOpacity} from "react-native";
import searchBarStyle from "../styles/searchBar";
import {Search} from "./icons";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <View style={searchBarStyle.sbWrapper}>
      <TextInput
        style={searchBarStyle.sbInput}
        placeholder="Search..."
        placeholderTextColor="#ccc"
        value={searchValue}
        onChangeText={e => setSearchValue(e)}
      />
      <TouchableOpacity
        style={searchBarStyle.sbButton}
        onPress={() => {
          console.log("Search : ", searchValue);
        }}>
        <Search color="#7f8c8d" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
