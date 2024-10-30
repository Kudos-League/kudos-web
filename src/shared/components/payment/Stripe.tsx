import { StripeProvider, useStripe } from "@stripe/stripe-react-native";
import { useState, useEffect } from "react";
import { Button, View, Text, StyleSheet, Alert } from "react-native";

export default function Stripe() {
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [publishableKey, setPublishableKey] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchPaymentSheetParams = async () => {
    const response = await fetch(
      `http://${process.env.BACKEND_URI}/stripe/payment-sheet`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: 5000 }), // $50.00
      }
    );
    const { paymentIntent, ephemeralKey, customer, publishableKey } =
      await response.json();
    setPublishableKey(publishableKey);
    return { paymentIntent, ephemeralKey, customer };
  };

  const initializePaymentSheet = async () => {
    const { paymentIntent, ephemeralKey, customer } =
      await fetchPaymentSheetParams();

    const { error } = await initPaymentSheet({
      paymentIntentClientSecret: paymentIntent,
      customerId: customer,
      customerEphemeralKeySecret: ephemeralKey,
      merchantDisplayName: "Your Business Name",
      allowsDelayedPaymentMethods: true,
    });

    if (!error) setLoading(true);
  };

  const openPaymentSheet = async () => {
    const { error } = await presentPaymentSheet();
    if (error) Alert.alert(`Error: ${error.message}`);
    else Alert.alert("Thank you for your donation!");
  };

  useEffect(() => {
    initializePaymentSheet();
  }, []);

  return (
    <StripeProvider publishableKey={publishableKey}>
      <View style={styles.container}>
        <Text style={styles.headerText}>Support Us with a Donation</Text>
        <Button title="Donate" disabled={!loading} onPress={openPaymentSheet} />
      </View>
    </StripeProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  headerText: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
});
