// app/_layout.tsx
import { Tabs } from "expo-router";

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen name="tabs/communities" options={{ title: "Communities" }} />
      <Tabs.Screen name="tabs/evaluations" options={{ title: "Evaluations" }} />
      <Tabs.Screen name="tabs/posts" options={{ title: "Posts" }} />
      <Tabs.Screen name="tabs/chat" options={{ title: "Chat" }} />
      <Tabs.Screen
        name="tabs/notifications"
        options={{ title: "Notifications" }}
      />
    </Tabs>
  );
}
