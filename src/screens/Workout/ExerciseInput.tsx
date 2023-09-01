import { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { InputDialog } from '../../components'
import { Exercise } from '../../types'


interface Props {
  onAdd: (exercise: Exercise) => void;
};
export const ExerciseInput = (props: Props) => {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState('');

  return (
    <>
      <Button title='Add Exercise' onPress={() => setVisible(true)}/>

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
    </>
  );
}
