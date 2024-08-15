import { View, Text } from "react-native";

import { SubmitHandler, useForm } from 'react-hook-form';

import { Button } from "react-native-paper";

import globalStyles from "shared/styles";
import Input from "shared/components/forms/input";
import RadioGroup from "shared/components/forms/radio-group";

export default function CreatePost() {
  const { handleSubmit, control } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const request = {
      title: data.title,
      body: data.body,
      isRequest: data.type === 'request',
    }
    console.log(`submitted form for request:\n${JSON.stringify(request, null, 2)}`);
    alert(`submitted form with request:\n${JSON.stringify(request, null, 2)}`);
  }

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.formRow}>
        <Text>Is this post</Text>
        <RadioGroup
          name="type"
          control={control}
          options={[
            { label: 'in search of', value: 'request' },
            { label: 'offering up', value: 'offer' },
          ]}
        />
        <Text>these item(s)?</Text>
      </View>
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
  type: 'request'|'offer';
}