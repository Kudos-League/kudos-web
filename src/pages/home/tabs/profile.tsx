import { View, Text } from "react-native";
import UserDetails from "shared/components/users/UserDetails";

import globalStyles from "shared/styles";

export default function Profile() {
    return (
        <View style={globalStyles.container}>
            <UserDetails />
        </View>
    )
}