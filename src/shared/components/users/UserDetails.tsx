import React, { useState } from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { Avatar, Button } from "@mui/material";
import Tags from "../Tags";

export default function UserDetails() {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <>
      {/* Profile Avatar */}
      <Avatar
        src="https://via.placeholder.com/150" // Replace with actual image link
        sx={{ width: 100, height: 100, marginRight: 2 }}
      />
      {/* Username and Meta */}
      <Text style={styles.username}>USERNAME</Text>
      <Text style={styles.meta}>KUDOS · 10 · JOINED · 26/1/24</Text>

      {/* Buttons for friend, chat, and block */}
      <View style={styles.buttonContainer}>
        <Button onPress={() => {}}>Friend</Button>
        <Button onPress={() => {}}>Chat</Button>
        <Button onPress={() => {}}>Block</Button>
      </View>

      {/* Tags */}
      <View style={styles.tags}>
        <Tags tags={["tag1", "tag2"]} />
      </View>

      {/* Biography */}
      <View style={styles.bio}>
        <Text style={styles.bioText}>BIOGRAPHY</Text>
      </View>

      {/* Tabs */}
      {/* <TabView
        navigationState={{
          index: tabIndex,
          routes: [
            { key: "posts", title: "Posts" },
            { key: "communities", title: "Communities" },
            { key: "activity", title: "Activity" },
          ],
        }}
        renderScene={({ route }) => {
          switch (route.key) {
            case "posts":
              return (
                <View style={styles.tabContent}>
                  <Text>Posts Content</Text>
                </View>
              );
            case "communities":
              return (
                <View style={styles.tabContent}>
                  <Text>Communities Content</Text>
                </View>
              );
            case "activity":
              return (
                <View style={styles.tabContent}>
                  <Text>Activity Content</Text>
                </View>
              );
            default:
              return null;
          }
        }}
        onIndexChange={setTabIndex}
        initialLayout={{ width: "100%" }}
        style={styles.tabs}
      /> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
  },
  avatar: {
    marginBottom: 10,
  },
  username: {
    fontSize: 24,
    fontWeight: "bold",
  },
  meta: {
    color: "#777",
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  tags: {
    width: "100%",
    backgroundColor: "#eee",
    padding: 10,
    marginBottom: 10,
    justifyContent: "center",
  },
  bio: {
    width: "100%",
    backgroundColor: "#ddd",
    padding: 20,
    alignItems: "center",
    marginBottom: 20,
  },
  bioText: {
    fontSize: 16,
  },
  tabs: {
    width: "100%",
  },
  tabContent: {
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
});
