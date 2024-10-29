import { View } from "react-native";
import Profile from "shared/components/profile";

import globalStyles from "shared/styles";

export default function MyProfile() {
  return (
    <View style={globalStyles.container}>
        <Profile />
    </View>
  );
}