import { View, Text } from "react-native";

import { SubmitHandler, useForm, UseFormReturn } from 'react-hook-form';

import { Button } from "react-native-paper";

import globalStyles from "shared/styles";
import Input from "shared/components/forms/input";
import Picker from "shared/components/forms/picker";

export default function CreatePost() {
  const form: UseFormReturn<FormValues> = useForm<FormValues>();

  const onInvalid = (e) => {
    console.log(e)
  }
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const request = {
      title: data.title,
      body: data.body,
      isRequest: data.type === 'request',
    }
    console.log(`submitted form for request:\n${JSON.stringify(request, null, 2)}`);
    console.log(`for errors:\n${JSON.stringify(form.formState.errors, null, 2)}`);
  }

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.formRow}>
        <Text>I want to</Text>
        <Picker
          name="type"
          form={form}
          options={[
            { label: 'Get stuff', value: 'request' },
            { label: 'Give stuff', value: 'offer' },
          ]}
        />
      </View>
      <View style={globalStyles.formRow}>
        <Input
            name="title"
            label="Title"
            form={form}
            registerOptions={{required: true}} />
      </View>
      <View style={globalStyles.formRow}>
        <Input 
            name="body"
            label="Body"
            form={form}
            registerOptions={{required: true}} />
      </View>
      <View style={globalStyles.formRow}>
        <Button onPress={form.handleSubmit(onSubmit,onInvalid)} mode='contained'>Submit</Button>
      </View>
    </View>
  );
}

type FormValues = {
  title: string;
  body: string;
  type: 'request'|'offer';
}