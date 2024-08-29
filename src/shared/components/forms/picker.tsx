import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
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
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      data={options}
      maxHeight={300}
      labelField="label"
      valueField="value"
      value={field.value}
      onChange={({value}) => {
        field.onChange({target: {value}});
      }}
    />
  );
};


const styles = StyleSheet.create({
  dropdown: {
    margin: 16,
    height: 50,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    flex: 1,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});