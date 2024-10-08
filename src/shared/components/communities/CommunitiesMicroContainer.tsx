import React, { useState } from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";
import CommunitiesMicroCard from "./CommunitiesMicroCard";

// Example data structure
const initialCommunities = [
  {
    id: "1",
    name: "r/hiking",
    members: "2.1M",
    online: "53",
    description: "The hikers' subreddit.",
  },
  {
    id: "2",
    name: "r/cycling",
    members: "1.5M",
    online: "120",
    description: "Cyclists unite!",
  },
];

export default function CommunitiesContainer() {
  const [communities, setCommunities] = useState(initialCommunities);
  const [loading, setLoading] = useState(false);


  return (
    <View style={styles.container}>
      <FlatList
        data={communities}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CommunitiesMicroCard
            name={item.name}
            members={Number.parseInt(item.members || "-1")}
            online={Number.parseInt(item.online || "-1")}
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
});