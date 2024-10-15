import React, { useState } from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";
import PostCard from "./PostCard";
import { PostDTO } from "shared/api/types";

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

const createMockup = (id: Number ) => {
  return { //MOCKUP DATA, keep in mind that this is an array of objects. This what is used when you "scroll down"
          id: `${id}`,
          username: "user1",
          title: "First Post",
          body: "This is the body of the first post.",
          type: "gift",
          kudos: 10,
          tags: ["intro", "welcome"],
        };
}

interface props {
  posts: PostDTO[] | null;
}

export default function PostsContainer({ posts: receivedPosts }: props) {
  const [posts, setPosts] = useState<any>(usersResponse);
  const [loading, setLoading] = useState(false);

  let morePosts = [
    createMockup(posts.length + 1)
  ]

  // Fetch more communities
  const fetchMoreCommunities = () => {
    if (loading) return;

    setLoading(true);

    // Simulate API call with a timeout
    setTimeout(() => {
      const newUsers = morePosts;

      setPosts((prevUsers) => [...prevUsers, ...newUsers]);
      setLoading(false);
    }, 1500);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
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

