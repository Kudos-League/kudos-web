import { View, Text, StyleSheet } from "react-native";

// import globalStyles from "shared/styles";
import Stripe from "shared/components/payment";

import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

const BoldAndBeautiful = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <Stripe />
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  baseText: {
    fontWeight: "bold",
  },
  innerText: {
    color: "red",
  },
});

export default BoldAndBeautiful;
