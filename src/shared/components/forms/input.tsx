import {
  FieldValues,
  RegisterOptions,
  useController,
  UseControllerProps,
  UseFormReturn,
} from "react-hook-form";
import { TextInput, TextInputProps } from "react-native-paper";
import { KeyboardTypeOptions } from "react-native";

interface IProps<T extends FieldValues> extends TextInputProps {
  name: string;
  label: string;
  form: UseFormReturn<T>;
  type?: string;
  registerOptions?: RegisterOptions<T>;
  placeholder?: string;
  value?: string;
  onChangeText?: (value: string) => void;
  keyboardType?: KeyboardTypeOptions;
  multiline?: boolean;
}

type Props<T extends FieldValues> = IProps<T> & UseControllerProps<T>;

export default function Input<T extends FieldValues>({
  name,
  label,
  form,
  registerOptions,
  type,
  placeholder,
  value,
  onChangeText,
  keyboardType,
  multiline,
}: Props<T>) {
  const { field } = useController<T>({
    control: form.control,
    name,
    defaultValue: "" as T[keyof T],
  });

  return (
    <TextInput
      label={label}
      accessibilityLabel={label}
      placeholder={placeholder}
      value={value || field.value}
      onChangeText={(val) => {
        field.onChange(val);
        if (onChangeText) onChangeText(val);
      }}
      keyboardType={keyboardType}
      multiline={multiline}
      secureTextEntry={type === "password"}
      {...form.register(name, registerOptions)}
    />
  );
}
