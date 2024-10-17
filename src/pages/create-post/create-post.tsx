import { View, Text } from "react-native";

import { SubmitHandler, useForm, UseFormReturn } from 'react-hook-form';

import { Button } from "react-native-paper";

import { CreatePostDTO } from "shared/api/types";
import { createPost } from "shared/api/actions";
import Input from "shared/components/forms/input";
import Picker from "shared/components/forms/picker";
import globalStyles from "shared/styles";
import { useAppSelector } from "redux/hooks";

export default function CreatePost() {
  const form: UseFormReturn<FormValues> = useForm<FormValues>();
  const token = useAppSelector(state => state.auth.token);

  const onInvalid = (e) => {
    console.error(e);
  };

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const request: CreatePostDTO = {
      title: data.title,
      body: data.body,
      isRequest: data.type === 'request',
    };

    try {
      if (!token) {
        // TODO: Block the create page without a token
        throw new Error('No token. Please register or log in.');
      }
      await createPost(request, token);
    } catch (e) {
      // TODO: Handle error
      console.error('Error trying to create post:', e);
    }
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
        <Button
            onPress={form.handleSubmit(onSubmit, onInvalid)}
            disabled={!form.formState.isValid}
            mode='contained'>Submit</Button>
      </View>
    </View>
  );
}

type FormValues = {
  title: string;
  body: string;
  type: 'request'|'offer';
}