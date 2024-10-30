import { View, Text } from "react-native";

import globalStyles from "shared/styles";
import Stripe from "shared/components/payment/Stripe";

export default function Feed() {
  return (
    <View style={globalStyles.container}>
      <Stripe />
    </View>
  );
}
