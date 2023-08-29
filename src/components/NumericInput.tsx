import { TextInput, Text, View, ViewStyle } from 'react-native';


interface Props {
  style: ViewStyle
  placeholder: number;
  onEndEditing: (e: number) => void;
}
export const NumericInput = (props: Props) => {
  return (
    <View style={props.style}>
      <TextInput 
        placeholder={props.placeholder.toString()}
        keyboardType='numeric'
        onEndEditing={e => props.onEndEditing(Number(e))}
      />
    </View>
  );
};