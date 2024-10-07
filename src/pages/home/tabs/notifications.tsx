import { View, Text } from "react-native";
import NotificationsContainer from "shared/components/notifications/NotificationsContainer";

import globalStyles from "shared/styles";

export default function Notifications() {
    return (
        <View style={globalStyles.container}>
            <NotificationsContainer />
        </View>
    )
}