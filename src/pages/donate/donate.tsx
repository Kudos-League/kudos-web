import { View, Text } from "react-native";

import globalStyles from "shared/styles";

export default function Feed() {
    return (
        <View style={globalStyles.container}>
            <Text>
              TODO: Add donate page (based on Stripe integration from pre-ReactNative version).
              See the Stripe React native widget doc: https://docs.stripe.com/sdks/react-native.
            </Text>
        </View>
    )
}