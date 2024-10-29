import { useRoute } from "@react-navigation/native";
import { View, Text } from "react-native";

import globalStyles from "shared/styles";

export default function Post() {
  const route = useRoute<any>();
  const id = route.params?.id;
  return (
    <View style={globalStyles.container}>
      <Text>TODO: Fetch and show details of post {id}</Text>
    </View>
  );
}