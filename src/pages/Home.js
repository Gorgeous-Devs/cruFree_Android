import React from "react";
import {View, StyleSheet, ScrollView} from "react-native";
import Background from "../components/background";
import Box from "../components/box";
import NavBar from "../components/navBar";
import boxWrapperStyle from "../styles/boxWrapper";

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

const Home = () => {
  return (
    <View style={{height: "100%"}}>
      <Background />
      <ScrollView
        style={boxWrapperStyle.boxWrapper}
        contentContainerStyle={{
          flexDirection: "row",
          flexGrow: 1,
          flexWrap: "wrap",
        }}>
        {data.map(elem => (
          <Box key={elem.id} category={elem.title} />
        ))}
      </ScrollView>
      <NavBar />
    </View>
  );
};
export default Home;
