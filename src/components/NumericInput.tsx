import { TextInput, View, ViewStyle } from 'react-native';

interface Props {
  style?: ViewStyle;
  placeholder: number;
  onChangeText: (e: number) => void;
}
export const NumericInput = (props: Props) => {
  return (
    <View style={props.style}>
      <TextInput
        placeholder={props.placeholder.toString()}
        keyboardType='numeric'
        onChangeText={(e) => {
          console.log(e);
          props.onChangeText(parseInt(e));
        }}
      />
    </View>
  );
};
