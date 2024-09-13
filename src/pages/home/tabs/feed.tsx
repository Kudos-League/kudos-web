import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { getPosts } from "shared/api/actions";
import { PostDTO } from "shared/api/types";

import globalStyles from "shared/styles";

export default function Feed() {
  const [posts, setPosts] = useState<PostDTO[]|null>(null);
  useEffect(() => {
    let isCancelled = false;
    const fetchPosts = async () => {
      await getPosts();
      if (!isCancelled) {
        setPosts(posts);
      }
    }
    fetchPosts();
    return () => {isCancelled = true};
  }, []);

  return (
    <View style={globalStyles.container}>
      {
        posts === null ?
          'Loading...' :
          posts.map(post => post.title) // TODO: Make this a proper "Post" component
      }
    </View>
  );
}