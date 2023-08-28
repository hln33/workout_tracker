import { TextInput } from 'react-native';


interface Props {
  placeholder: number;
  onChangeText: (e: number) => void;
}
export const NumericInput = (props: Props) => {
  return (
    <TextInput 
      placeholder={props.placeholder.toString()}
      keyboardType='numeric'
      onChangeText={e => props.onChangeText(Number(e))}
    />
  );
};