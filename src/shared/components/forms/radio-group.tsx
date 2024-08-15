import { View, Text, FlatList } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { useController, Control, FieldValues, UseControllerProps } from 'react-hook-form';

type Props<T extends FieldValues> = {
  name: string;
  control: Control<T>;
  options: { label: string; value: string }[];
} & UseControllerProps<T>;

export default function RadioGroup<T extends FieldValues>({ name, control, options }: Props<T>) {
  const { field } = useController<T>({
    control,
    name,
    defaultValue: options[0].value as T[keyof T],
  });

  return (
    <RadioButton.Group
      onValueChange={field.onChange}
      value={field.value}>
        <FlatList
            data={options}
            renderItem={({item}) => (
                <View key={item.value} style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <RadioButton value={item.value} />
                  <Text>{item.label}</Text>
                </View>
              )} />
    </RadioButton.Group>
  );
}