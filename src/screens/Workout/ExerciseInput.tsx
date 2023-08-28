import { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { InputDialog } from '../../components'
import { Exercise } from '../../../types'


const sets = [{lbs: 225, reps: 5}]

interface Props {
  onAdd: (exercise: Exercise) => void;
}
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
            props.onAdd({name: name, sets: sets});
            setVisible(false)
          }} 
        />
        <Button title='Close' onPress={() => setVisible(false)} />
      </InputDialog>
    </>
  );
}
