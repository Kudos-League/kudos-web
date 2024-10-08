import React, { useState } from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";
import PostMicroCard from "./PostMicroCard";

// Example data structure
const initialCommunities = [
  {
    id: "1",
    name: "I'm giving some stuff",
    type: "gift",
    description: "SUPER COOL!",
  },
  {
    id: "2",
    name: "I want some stuff",
    type: "request",
    description: "GIMME GIMME",
  },
];

export default function PostMicroContainer() {
  const [communities, setCommunities] = useState(initialCommunities);
  const [loading, setLoading] = useState(false);


  return (
    <View style={styles.container}>
      <FlatList
        data={communities}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PostMicroCard
            name={item.name}
            type={item.type}
            description={item.description}
            tags={["tag1", "tag2", "tag3"]}
          />
        )}
        onEndReachedThreshold={0.1}
        showsVerticalScrollIndicator={true}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />} // Add space between each item
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10, // Add padding to the container for a consistent layout
    width: "100%",
  },
})