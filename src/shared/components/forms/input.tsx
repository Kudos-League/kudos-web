import { FieldValues, RegisterOptions, useController, UseControllerProps, UseFormReturn } from "react-hook-form";

import { TextInput } from "react-native-paper";

type Props<T extends FieldValues> = {
    name: string;
    label: string;
    form: UseFormReturn<T>;
    type?: 'password' | 'body' | null;
    registerOptions?: RegisterOptions<T>;
} & UseControllerProps<T>;

export default function Input<T extends FieldValues>({name, label, form, registerOptions, type}: Props<T>) {
    const { field } = useController<T>({
        control: form.control,
        name,
        defaultValue: '' as T[keyof T],
    });

    return (
        <TextInput
            label={label}
            accessibilityLabel={label}
            value={field.value}
            onChangeText={field.onChange}
            secureTextEntry={type === 'password'}
            style={type === "body" ? {height: 400} : {}}
            {...form.register(name, registerOptions)} />
    );
}