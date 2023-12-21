import { StyleSheet } from 'react-native';
import { Pressable, Text } from 'react-native';


interface Props {
  onAdd: () => void;
  text: string,
  backgroundColor: string,
  textColor: string
};
export const AddButton = (props: Props) => {
  return (
    <>
      <Pressable 
        style={[styles.button, {backgroundColor: props.backgroundColor}]}
        onPress={props.onAdd}
      >
        <Text style={[styles.buttonText, {color: props.textColor}]}>
          {props.text}
        </Text>
      </Pressable>
    </>
  );
};


const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 15,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});
