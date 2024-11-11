import { FieldValues, RegisterOptions, useController, UseControllerProps, UseFormReturn } from "react-hook-form";

import { TextInput, TextInputProps } from "react-native-paper";

interface IProps<T extends FieldValues> extends TextInputProps {
  name: string;
  label: string;
  form: UseFormReturn<T>;
  type?: 'password';
  registerOptions?: RegisterOptions<T>;
}

type Props<T extends FieldValues> = IProps<T> & UseControllerProps<T>;

export default function Input<T extends FieldValues>({name, label, form, registerOptions, type, multiline, style}: Props<T>) {
    const { field } = useController<T>({
        control: form.control,
        name,
        defaultValue: '' as T[keyof T],
    });

    return (
        <TextInput
            style={style}
            label={label}
            accessibilityLabel={label}
            value={field.value}
            onChangeText={field.onChange}
            multiline={multiline}
            secureTextEntry={type === 'password'}
            {...form.register(name, registerOptions)} />
    );
}