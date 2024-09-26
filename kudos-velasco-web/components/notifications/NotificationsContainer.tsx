import React, { useState } from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";
import NotificationCard from "./NotificationCard";

const notificationsResponse = [
  {
    id: "1",
    username: "WorstNightmare",
    body: "WorstNightmare is now following you!",
    type: "follow",
  },
  {
    id: "2",
    username: "Spiderman",
    body: "Spiderman accepted your gift",
    type: "handshake",
  },
  {
    id: "3",
    username: "Thanos",
    body: "Thanos commented on your post",
    type: "comment",
  },
  {
    id: "4",
    username: "Mr Bean",
    body: "Mr Bean made a request for your post (insert post name)",
    type: "request",
  },
];

export default function PostsContainer() {
  const [notifications, setNotifications] = useState<any>(
    notificationsResponse
  );
  const [loading, setLoading] = useState(false);

  // Fetch more communities
  const fetchMoreCommunities = () => {
    if (loading) return;

    setLoading(true);

    // Simulate API call with a timeout
    setTimeout(() => {
      const newNotifications = [
        {
          id: `${notifications.length + 1}`,
          username: "Mom",
          body: "What did I told you about using my toothbrush to clean your shoes?",
          type: "scolding",
        },
      ];

      setNotifications((prevNotifications) => [
        ...prevNotifications,
        ...newNotifications,
      ]);
      setLoading(false);
    }, 1500);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <NotificationCard
            username={item.username}
            body={item.body}
            type={item.type}
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
