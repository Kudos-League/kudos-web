// app/tabs/communities.tsx
import PostDetails from "@/components/posts/PostDetails";
import PostsContainer from "@/components/posts/PostsContainer";
import { Text, View } from "react-native";

export default function PostsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Posts Screen</Text>
      {/* <PostsContainer /> */}
      <PostDetails />
    </View>
  );
}
