import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import BlogContext from "../context/BlogContext";

const IndexScreen = ({ navigation }) => {
  const blogPosts = useContext(BlogContext);
  return (
    <View>
      <Text>IndexScreen</Text>
      <FlatList
        data={blogPosts}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;
