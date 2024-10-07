import React, { useState } from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";
import EvaluationCard from "./EvaluationCard";

// interface Props {
//   sender: string;
//   receiver: string;
//   body: string;
//   kudos: number;
//   post: number;
//   post_title: string;
//   post_type: string;
//   post_tags: string[];
// }

const evaluationsEntries = [
  {
    id: "1",
    sender: "John Doe",
    receiver: "Jane Doe",
    body: "I got a 9mm, works perfectly, Paul Allen will be jealous",
    kudos: 5,
    post: 123,
    post_title: "I need a gun without a license",
    post_type: "request",
    post_tags: ["weapons", "completely legal", "fun"]
  },
  {
    id: "2",
    sender: "Bob Smith",
    receiver: "Alice Johnson",
    body: "Amazing Purple Haze stuff, I need some more",
    kudos: 420,
    post: 456,
    post_title: "I quitted weed, does anyone want some",
    post_type: "gift",
    post_tags: ["medication", "completely legal", "health"]
  },
  {
    id: "3",
    sender: "Eve Brown",
    receiver: "Mike Davis",
    body: "Hey, I'm in prison, what should I do?",
    kudos: 2,
    post: 789,
    post_title: "Anyone can hack my neighbor's wifi?",
    post_type: "request",
    post_tags: ["kali", "completely legal", "guide"]
  }
];

export default function EvaluationsContainer() {
  const [evaluations, setEvaluations] = useState<any>(evaluationsEntries);
  const [loading, setLoading] = useState(false);

  // Fetch more communities
  const fetchMoreCommunities = () => {
    if (loading) return;

    setLoading(true);

    // Simulate API call with a timeout
    setTimeout(() => {
      const newEvaluations = [
  {
    id: `${evaluations.length + 1}`,
    sender: "Eve Brown",
    receiver: "Mike Davis",
    body: "Hey, crazy good apple",
    kudos: 2,
    post: 789,
    post_title: "I give an apple",
    post_type: "gift",
    post_tags: ["destruction", "war crimes", "chaos"]
  }
      ];

      setEvaluations((prevEvaluations) => [...prevEvaluations, ...newEvaluations]);
      setLoading(false);
    }, 1500);
  };


  return (
    <View style={styles.container}>
      <FlatList
        data={evaluations}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <EvaluationCard
            sender={item.sender}
            receiver={item.receiver}
            body={item.body}
            kudos={Number.parseInt(item.kudos || "-1")}
            post={Number.parseInt(item.post || "-1")}
            post_title={item.post_title}
            post_type={item.post_type}
            post_tags={item.post_tags}
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