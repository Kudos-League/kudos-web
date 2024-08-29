import { FieldValues, RegisterOptions, useController, UseControllerProps, UseFormReturn } from "react-hook-form";

import { TextInput } from "react-native-paper";

type Props<T extends FieldValues> = {
    name: string;
    label: string;
    form: UseFormReturn<T>;
    registerOptions?: RegisterOptions<T>;
} & UseControllerProps<T>;

export default function Input<T extends FieldValues>({name, label, form, registerOptions}: Props<T>) {
    const { field } = useController<T>({
        control: form.control,
        name,
        defaultValue: '' as T[keyof T],
    });

    return (
        <TextInput
            label={label}
            value={field.value}
            onChangeText={field.onChange}
            {...form.register(name, registerOptions)} />
    );
}