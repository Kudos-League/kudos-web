import { useRoute } from "@react-navigation/native";
import { View, Text } from "react-native";
import Profile from "shared/components/profile";

import globalStyles from "shared/styles";

export default function User() {
  const route = useRoute<any>();
  const username = route.params?.username;
  return (
    <View style={globalStyles.container}>
      <Profile username={username} />
    </View>
  );
}