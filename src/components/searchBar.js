import React, {useState} from "react";
import {View, TextInput} from "react-native";
import searchBarStyle from "../styles/searchBar";

const SearchBar = () => {
  const [searchVal, setSearchVal] = useState("");
  return (
    <View style={searchBarStyle.sbWrapper}>
      <TextInput
        placeholder="Search..."
        placeholderTextColor="#000"
        value={searchVal}
        onChange={e => setSearchVal(e.target.value)}
      />
    </View>
  );
};

export default SearchBar;
