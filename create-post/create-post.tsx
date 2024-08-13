import { Button, View, Text} from "react-native";
import { SubmitHandler, useForm } from 'react-hook-form';

import globalStyles from "shared/styles";
import Input from "shared/components/forms/input";
import styles from "shared/styles";

export default function CreatePost() {
  const { handleSubmit, control } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(`submitted form with data:\n${JSON.stringify(data, null, 2)}`);
    alert(`submitted form with data:\n${JSON.stringify(data, null, 2)}`);
  }

  return (
    <View style={globalStyles.container}>
      <Input name="title" label="Title" control={control} />
      <Input name="body" label="Body" control={control} />
      <View style={styles.formRow}>
        <Button title="Submit" onPress={handleSubmit(onSubmit)} />
      </View>
    </View>
  );
}

type FormValues = {
  title: string;
  body: string;
}