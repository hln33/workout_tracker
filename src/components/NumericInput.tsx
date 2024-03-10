import { TextInput, View, ViewStyle } from 'react-native';
import React, { useState } from 'react';

interface Props {
  style?: ViewStyle;
  placeholder: number;
  onChange: (e: number) => void;
}
export const NumericInput = (props: Props) => {
  const [value, setValue] = useState(props.placeholder.toString());

  const handleNumberChange = (text: string) => {
    const numericText = text.replace(/^0+|[^0-9]/g, '');
    setValue(numericText);

    const number = numericText === '' ? 0 : parseInt(numericText);
    props.onChange(number);
  };

  return (
    <View style={props.style}>
      <TextInput
        keyboardType='numeric'
        value={value.toString()}
        onChangeText={handleNumberChange}
      />
    </View>
  );
};
