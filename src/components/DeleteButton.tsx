import { StyleProp, ViewStyle } from 'react-native';
import { Text, TouchableOpacity } from 'react-native';


interface Props {
  onDelete: () => void;
  style?: StyleProp<ViewStyle>;
};
export const DeleteButton = (props: Props) => {
  return (
    <>
      <TouchableOpacity style={props.style} onPress={props.onDelete}>
        <Text style={{color: 'red'}}>Delete</Text>
      </TouchableOpacity>
    </>
  );
};