import React, { useState } from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";
import CommunityCard from "./CommunityCard";

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

const createNewCommunites = (id: Number) => {
  return [
        {
          id: String(id),
          name: "r/climbing",
          members: "1M",
          online: "80",
          description: "For climbers!",
        },
        {
          id: String(id),
          name: "r/swimming",
          members: "800k",
          online: "40",
          description: "Swim lovers' group.",
        },
  ] 
}

export default function CommunitiesContainer() {
  const [communities, setCommunities] = useState(initialCommunities);
  const [loading, setLoading] = useState(false);

  // Fetch more communities
  const fetchMoreCommunities = () => {
    if (loading) return;

    setLoading(true);

    // Simulate API call with a timeout
    setTimeout(() => {
      const newCommunities = 
        createNewCommunites(communities.length + 1)
      ;

      setCommunities((prevCommunities) => [
        ...prevCommunities,
        ...newCommunities,
      ]);
      setLoading(false);
    }, 1500);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={communities}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CommunityCard
            name={item.name}
            members={Number.parseInt(item.members || "-1")}
            online={Number.parseInt(item.online || "-1")}
            description={item.description}
            tags={["tag1", "tag2", "tag3"]}
          />
        )}
        onEndReached={fetchMoreCommunities}
        onEndReachedThreshold={0.1}
        showsVerticalScrollIndicator={true}
        ListFooterComponent={loading ? <Text>Loading more...</Text> : null}
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
