import { Platform, Text } from "react-native";
import React, { Suspense } from "react";

const StripeNative = React.lazy(() => import("./StripeNative"));
const StripeWeb = React.lazy(() => import("./StripeWeb"));

const Stripe = Platform?.select?.({
  ios: () => <StripeNative />,
  android: () => <StripeNative />,
  web: () => <StripeWeb />,
})?.() || <div>Loading</div>;

export default function StripeWrapper() {
  return (
    <Suspense fallback={<Text>Loading Stripe component...</Text>}>
      {Stripe}
    </Suspense>
  );
}

function LoadingComponent() {
  console.log("Loading Stripe component...");
  return <div>Loading Stripe...</div>;
}
