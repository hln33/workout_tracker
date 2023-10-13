import { useState } from 'react';
import { Pressable, StyleSheet, ViewStyle } from 'react-native';
import { StyleProp } from 'react-native';
import { Button, Text, TextInput, View } from 'react-native';
import { InputDialog } from '../../components'
import { Exercise } from '../../types'


const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 15,
    backgroundColor: 'mintcream'
  },
  buttonText: {
    color: 'skyblue',
    fontSize: 20,
    fontWeight: 'bold'
  }
});


interface Props {
  onAdd: (exercise: Exercise) => void;
  style?: StyleProp<ViewStyle>;
};
export const ExerciseInput = (props: Props) => {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState('');

  return (
    <View style={props.style}>
      <Pressable style={styles.button} onPress={() => setVisible(true)}>
        <Text style={styles.buttonText}>Add Exercise</Text>
      </Pressable>

      <InputDialog visible={visible}>
        <Text>New Exercise</Text>
        <TextInput placeholder='Name' onChangeText={(e) => setName(e)} />
        <Button 
          title='Add' 
          onPress={() => {
            props.onAdd({name: name, sets: [{id: 0, lbs: 0, reps: 0}]});
            setVisible(false);
          }} 
        />
        <Button title='Close' onPress={() => setVisible(false)} />
      </InputDialog>
    </View>
  );
}
