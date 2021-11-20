import React, {useState, useEffect} from "react";
import {
  SafeAreaView,
  StatusBar,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import isDarkColor from "is-dark-color";
import {SearchHead} from "../components/partials";
import {Box, Button, Text} from "../components/base";
import {colors, sizes} from "../utils/theme";
import {get} from "../service/get";

export default function SearchView() {
  const [baseCategories, setBaseCategories] = useState([]);
  const [loader, setLoader] = useState(false);

  const getCategories = () => {
    setLoader(true);
    get("base_categories")
      .then(response => {
        if (response.status) {
          setBaseCategories(response.datas);
        }
        setLoader(false);
      })
      .catch(error => {
        console.error(error);
        setLoader(false);
      });
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        animated={true}
        backgroundColor={colors.main}
        barStyle="light-content"
        showHideTransition="slide"
      />
      <SearchHead />

      {loader ? (
        <Box mt={50}>
          <ActivityIndicator size={55} color={colors.main} />
        </Box>
      ) : (
        <>
          <ScrollView>
            <Box flexDirection="row" pt="40px" flexWrap="wrap" flex={1}>
              {baseCategories.map(item => (
                <Box key={item.id} width="50%" p={2}>
                  <Button
                    p={2}
                    minHeight={100}
                    borderRadius={sizes.radius.normal}
                    borderWidth={1}
                    borderColor={colors.grey}
                    style={{
                      backgroundColor: item.color_code
                        ? item.color_code
                        : colors.text,
                    }}>
                    <Text
                      color={
                        item.color_code
                          ? isDarkColor(item.color_code)
                            ? colors.white
                            : colors.text
                          : colors.white
                      }
                      textAlign="center"
                      fontWeight="bold"
                      fontSize={sizes.fontsize.normal}>
                      {item.name}
                    </Text>
                  </Button>
                </Box>
              ))}
            </Box>
          </ScrollView>
        </>
      )}
    </SafeAreaView>
  );
}
