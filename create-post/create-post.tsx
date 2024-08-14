import { View } from "react-native";
import { SubmitHandler, useForm } from 'react-hook-form';

import globalStyles from "shared/styles";
import Input from "shared/components/forms/input";
import { Button } from "react-native-paper";

export default function CreatePost() {
  const { handleSubmit, control } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(`submitted form with data:\n${JSON.stringify(data, null, 2)}`);
    alert(`submitted form with data:\n${JSON.stringify(data, null, 2)}`);
  }

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.formRow}>
        <Input name="title" label="Title" control={control} />
      </View>
      <View style={globalStyles.formRow}>
        <Input name="body" label="Body" control={control} />
      </View>
      <View style={globalStyles.formRow}>
        <Button onPress={handleSubmit(onSubmit)} mode='contained'>Submit</Button>
      </View>
    </View>
  );
}

type FormValues = {
  title: string;
  body: string;
  isRequest: boolean;
}