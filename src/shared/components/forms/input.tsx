import { Control, FieldValues, useController, UseControllerProps } from "react-hook-form";

import { TextInput } from "react-native-paper";

type Props<T extends FieldValues> = {
    name: string;
    label: string;
    control: Control<T>;
} & UseControllerProps<T>

export default function Input<T extends FieldValues>({name, control, label}: Props<T>) {
    const { field } = useController<T>({
        control,
        name,
    });
    return (
        <TextInput
            label={label}
            value={field.value}
            onChangeText={field.onChange} />
    );
}