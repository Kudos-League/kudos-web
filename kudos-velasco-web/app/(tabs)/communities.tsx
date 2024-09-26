// app/tabs/communities.tsx
import CommunitiesContainer from "@/components/communities/CommunitiesContainer";
import { Text, View } from "react-native";

export default function CommunitiesScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Communities Screen</Text>
      <CommunitiesContainer />
    </View>
  );
}
