import React, { useState } from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";
import ChatCard from "./ChatCard";

const chatsResponse = [
  {
    id: "1",
    username: "WorstNightmare",
    body: "Hey, (racial slur)",
  },
  {
    id: "2",
    username: "Spiderman",
    body: "Dude, I think that Deadpool is into me, what should I do",
  },
  {
    id: "3",
    username: "Thanos",
    body: "Hey, isn't 50% like too little?",
  },
];

export default function PostsContainer() {
  const [chats, setChats] = useState<any>(chatsResponse);
  const [loading, setLoading] = useState(false);

  // Fetch more communities
  const fetchMoreCommunities = () => {
    if (loading) return;

    setLoading(true);

    // Simulate API call with a timeout
    setTimeout(() => {
      const newChats = [
        {
          id: `${chats.length + 1}`,
          username: "Mom",
          body: "Honey, for the last time, WASH THE DISHES!",
        },
      ];

      setChats((prevChats) => [...prevChats, ...newChats]);
      setLoading(false);
    }, 1500);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={chats}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ChatCard username={item.username} body={item.body} />
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
