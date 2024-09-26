// app/tabs/communities.tsx
import NotificationsContainer from "@/components/notifications/NotificationsContainer";
import UserDetails from "@/components/users/UserDetails";
import { Text, View } from "react-native";

export default function NotificationsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/* <NotificationsContainer /> */}
      <UserDetails />
    </View>
  );
}
