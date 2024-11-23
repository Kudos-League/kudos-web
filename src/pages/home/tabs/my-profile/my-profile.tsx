import { useState } from "react";
import { View } from "react-native";
import { Button, Modal, PaperProvider, Portal } from "react-native-paper";
import Profile from "shared/components/profile";

import globalStyles from "shared/styles";
import { useTailwind } from "tailwind-rn";
import EditProfile from "./edit-profile";

export default function MyProfile() {
  const [openModal, setOpenModal] = useState(false);
  const tailwind = useTailwind();

  return (
    <PaperProvider>
      <Portal>
        <Modal
            visible={openModal}
            onDismiss={() => setOpenModal(false)}
            style={tailwind('m-8')}
            contentContainerStyle={tailwind('bg-gray-200 p-4')}>
          <EditProfile />
        </Modal>
      </Portal>
      <View style={globalStyles.container}>
        <Profile>
          <Button onPress={() => setOpenModal(true)} >Edit Profile</Button>
        </Profile>
      </View>
    </PaperProvider>
  );
}