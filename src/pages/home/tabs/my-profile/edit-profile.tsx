import { SubmitHandler, useForm, UseFormReturn } from "react-hook-form";
import { View } from "react-native";
import { Button } from "react-native-paper";
import Input from "shared/components/forms/input";

import globalStyles from "shared/styles";

export default function EditProfile() {
  const form: UseFormReturn<FormValues> = useForm<FormValues>();


  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    // TODO: Call updateUser and/or updateUserSettings endpoint here.
  }

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.formRow}>
        <Input
            name="about"
            label="About"
            form={form}
            multiline={true} />
      </View>
      <View style={globalStyles.formRow}>
        <Button
            onPress={form.handleSubmit(onSubmit)}
            disabled={!form.formState.isValid}
            mode='contained'>Save</Button>
      </View>
    </View>
  );
}

// TODO: Add chip tags
type FormValues = {
  about: string,
}