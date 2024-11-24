import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import styles from "shared/styles";

const Post = () => {
  const route = useRoute();
  const { id } = route.params as { id: string };

  const [postDetails, setPostDetails] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPostDetails = async (postId: string) => {
    try {
      console.log(`Fetching post details for ID: ${postId}`);
      const response = await fetch(
        `${process.env.BACKEND_URI}/posts/${postId}`
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      console.log("Fetched post details:", data);
      setPostDetails(data);
      setLoading(false);
    } catch (err) {
      console.error("Failed to fetch post details:", err);
      setError("Failed to load post details. Please try again.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPostDetails(id);
  }, [id]);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      {error && <Text style={styles.errorMessage}>{error}</Text>}
      {!loading && !error && postDetails && (
        <View>
          <Text style={styles.title}>{postDetails.title}</Text>
          <Text style={styles.subtitle}>{postDetails.subtitle}</Text>
          <Text style={styles.body}>{postDetails.body}</Text>
        </View>
      )}
    </ScrollView>
  );
};

export default Post;
