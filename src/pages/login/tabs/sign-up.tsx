import { View, Text } from "react-native";
import { useForm, UseFormReturn } from 'react-hook-form';
import { Button } from "react-native-paper";

import globalStyles from "shared/styles";
import Input from "shared/components/forms/input";

export default function SignUp() {
  const form: UseFormReturn<FormValues> = useForm<FormValues>();
  const password = form.watch('password');

  const onInvalid = (e) => {
    // TODO: Handle errors
    console.error(e);
  }

  async function onSubmit() {
    // TODO: Call API
  }

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.formRow}>
        <Input
            name="username"
            label="Username"
            form={form}
            registerOptions={{required: true}} />
      </View>
      <View style={globalStyles.formRow}>
        <Input 
            name="email"
            label="Email"
            form={form}
            registerOptions={{required: true}} />
      </View>
      <View style={globalStyles.formRow}>
        <Input 
            name="password"
            label="Password"
            form={form}
            registerOptions={{required: true}}
            type="password" />
      </View>
      <View style={globalStyles.formRow}>
        <Input 
            name="confirmedPassword"
            label="Confirm Password"
            form={form}
            registerOptions={{validate: value => value === password}}
            type="password" />
      </View>
      <View style={globalStyles.formRow}>
        <Button
            onPress={form.handleSubmit(onSubmit, onInvalid)}
            disabled={!form.formState.isValid}
            mode='contained'>Sign Up</Button>
      </View>
    </View>
  );
}

type FormValues = {
  username: string;
  email: string;
  password: string;
  confirmedPassword: string;
}