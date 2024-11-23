import { ReactNode, useEffect } from "react";
import { View, Text } from "react-native";

import globalStyles from "shared/styles";

type Props = {
  username?: string,
  children?: ReactNode|ReactNode[],
};

export default function Profile({username, children}: Props) {
  useEffect(() => {
    // TODO: Need to fetch user's public facing info but it's spread out over multiple endpoints.
    //       In discussion now with backend on a possible refactor.
  });

  return (
    <View style={globalStyles.container}>
      {children}
      <Text>TODO: Add user profile for {username ?? 'current user'}</Text>
    </View>
  );
}