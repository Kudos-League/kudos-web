import React, { useState } from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";
import PostCard from "./PostCard";

// Example data structure
// interface Props {
//   username: string;
//   title: string;
//   body: string;
//   type: string;
//   kudos: number;
//   tags: string[]; // Add tags prop
// }
const usersResponse = [ //MOCKUP DATA
  {
    id: "1",
    username: "user1",
    title: "First Post",
    body: "This is the body of the first post.",
    type: "request",
    kudos: 10,
    tags: ["intro", "welcome"],
  },
  {
    id: "2",
    username: "user2",
    title: "React Tips",
    body: "Here are some useful tips for working with React.",
    type: "gift",
    kudos: 25,
    tags: ["react", "development", "tips"],
  },
  {
    id: "3",
    username: "user3",
    title: "TypeScript in Action",
    body: "Exploring the benefits of TypeScript in JavaScript development.",
    type: "request",
    kudos: 15,
    tags: ["typescript", "javascript", "development"],
  },
];

export default function PostsContainer() {
  const [users, setUsers] = useState<any>(usersResponse);
  const [loading, setLoading] = useState(false);

  let morePosts = [{ //MOCKUP DATA, keep in mind that this is an array of objects. This what is used when you "scroll down"
          id: `${users.length + 1}`,
          username: "user1",
          title: "First Post",
          body: "This is the body of the first post.",
          type: "gift",
          kudos: 10,
          tags: ["intro", "welcome"],
        }]

  // Fetch more communities
  const fetchMoreCommunities = () => {
    if (loading) return;

    setLoading(true);

    // Simulate API call with a timeout
    setTimeout(() => {
      const newUsers = morePosts;

      setUsers((prevUsers) => [...prevUsers, ...newUsers]);
      setLoading(false);
    }, 1500);
  };

  // interface Props {
  //   username: string;
  //   title: string;
  //   body: string;
  //   type: string;
  //   kudos: number;
  //   tags: string[]; // Add tags prop
  // }

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PostCard
            username={item.username}
            title={item.title}
            body={item.body}
            type={item.type}
            kudos={Number.parseInt(item.kudos || "-1")}
            tags={item.tags}
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

