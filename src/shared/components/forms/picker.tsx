import { Picker as NativePicker } from "@react-native-picker/picker";
import { useController, Control, FieldValues, UseControllerProps, UseFormReturn } from 'react-hook-form';

type Props<T extends FieldValues> = {
  name: string;
  form: UseFormReturn<T>;
  options: { label: string; value: string }[];
} & UseControllerProps<T>;
  
export default function Picker<T extends FieldValues>({ name, options, form }: Props<T>) {
  const { field } = useController<T>({
      control: form.control,
      name,
      defaultValue: options[0].value as T[keyof T],
  });

  return (
      <NativePicker
          selectedValue={field.value}
          onValueChange={field.onChange}>
        {options.map((option) => <NativePicker.Item label={option.label} value={option.value} /> )}
      </NativePicker>
  );
}