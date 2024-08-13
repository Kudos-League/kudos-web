import { Control, FieldValues, useController, UseControllerProps } from "react-hook-form";
import { TextInput, View, Text } from "react-native";
import globalStyles from "shared/styles";

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
        <View style={globalStyles.formRow}>
            <Text style={globalStyles.textInputLabel}>{label}</Text>
            <TextInput
                value={field.value}
                onChangeText={field.onChange}
                style={globalStyles.textInput} />
        </View>
    );
}