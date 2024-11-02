import { Platform, Text } from "react-native";
import React, { Suspense } from "react";

// TODO: Find better way to merge these two to reduce redundant code

const StripeNative = React.lazy(() => import("./StripeNative"));
const StripeWeb = React.lazy(() => import("./StripeWeb"));

const Stripe = Platform?.select?.({
  ios: () => <StripeNative />,
  android: () => <StripeNative />,
  web: () => <StripeWeb />,
})?.() || <div>Loading</div>;

export default function StripeWrapper() {
  return (
    <Suspense fallback={<Text>Loading Stripe...</Text>}>{Stripe}</Suspense>
  );
}
