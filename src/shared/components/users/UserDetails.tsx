import React, { useState } from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { Avatar, Button } from "@mui/material";
import Tags from "../Tags";
import { TabView } from "react-native-tab-view";
import CommunitiesMicroContainer from "../communities/CommunitiesMicroContainer";
import PostMicroContainer from "../posts/PostMicroContainer";

const profileData = { //MOCKUP
  username:"USERNAME",
  kudos: 10,
  joined: "26/1/24",
  bio: "This is the bio of the user. This is the bio of the user. This is the bio of the user.",
  tags: ["tag1", "tag2"],
}
export default function UserDetails() {
  const [tabIndex, setTabIndex] = useState(0);

  return (
   <View style={styles.container}> 
      {/* Profile Avatar */}
      <View style={styles.profile}>
        <Avatar //TODO: Can we put this inside a View with the buttons and make the flex horizontal?
          src="https://via.placeholder.com/150" // Replace with actual image link
          sx={{ width: 100, height: 100, marginRight: 2 }} //HACK: marginTop == CSS Fuckery???
        />
        {/* Username and Meta */}
        <View style={{justifyContent: "center", marginRight: 20}}>
          <Text style={styles.username}>{profileData.username}</Text>
          <Text style={styles.meta}>KUDOS · {profileData.kudos} · {profileData.joined}</Text>
        </View>

        {/* Buttons for friend, chat, and block */}
              </View>

      {/* Tags */}
      <View style={styles.tags}>
        <Tags tags={profileData.tags} />
      </View>

      {/* Biography */}
      <View style={styles.bio}>
        <Text style={styles.bioText}>{profileData.bio}</Text>
      </View>

      <Button sx={{ marginBottom: 2 }}>Edit data</Button>

      {/* Tabs */}
      {/* TODO: Install react native tab view for android and Iphone*/}

      <TabView //FIXME: Had to do the CSS hack back there, probably not a good idea, I want to center this vertically
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
                  <PostMicroContainer />
                </View>
              );
            case "communities":
              return (
                <View style={styles.tabContent}>
                  <CommunitiesMicroContainer />
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
        style={styles.tabs}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    display: "flex",
    alignItems: "baseline",
    flexWrap: "wrap",
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
  profile: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: "auto",
    gap: 5,
    marginVertical: 30,
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
    height: "50%",
    width: "100%",
    paddingHorizontal: 10,
  },
  tabContent: {
    padding: 10,
    backgroundColor: "#f5f5f5",
  },
});
