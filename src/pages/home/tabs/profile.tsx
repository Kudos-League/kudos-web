import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import UserDetails from "shared/components/users/UserDetails";

import globalStyles from "shared/styles";

export default function Profile() {
    //No idea what props we are going to get from the backend so I'll leave it like this
    return (
        <ScrollView style={globalStyles.container}>
            <UserDetails /> 
        </ScrollView>
    )
}