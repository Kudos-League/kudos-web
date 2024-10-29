import { View, Text } from "react-native";

import globalStyles from "shared/styles";

type Props = {
  username?: string,
};

export default function Profile({username}: Props) {
  return (
    <View style={globalStyles.container}>
        <Text>TODO: Add user profile for {username ?? 'current user'}</Text>
    </View>
  );
}