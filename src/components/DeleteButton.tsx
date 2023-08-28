import { Text, TouchableOpacity, View } from 'react-native';


interface Props {
  onDelete: () => void;
};
export const DeleteButton = (props: Props) => {
  return (
    <>
      <TouchableOpacity onPress={props.onDelete}>
        <Text style={{color: 'red'}}>Delete</Text>
      </TouchableOpacity>
    </>
  );
};