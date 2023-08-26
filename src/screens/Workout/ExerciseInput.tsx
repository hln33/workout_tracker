import { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { InputDialog } from '../../components'
import { Exercise } from '../../../types'


interface Props {
  onAdd: (exercise: Exercise) => void;
}
export const ExerciseInput = (props: Props) => {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState('');
  const [sets, setSets] = useState(0);
  const [reps, setReps] = useState(0);

  return (
    <>
      <Button title='Add Exercise' onPress={() => setVisible(true)}/>

      <InputDialog visible={visible}>
        <Text>New Exercise</Text>

        <TextInput placeholder='Name' onChangeText={(e) => setName(e)} />
        <TextInput 
          placeholder='Sets'
          keyboardType='numeric'
          onChangeText={(e) => setSets(Number(e))}
        />
        <TextInput 
          placeholder='Reps'
          keyboardType='numeric'
          onChangeText={(e) => setReps(Number(e))}
        />

        <Button 
          title='Add' 
          onPress={() => {
            props.onAdd({name: name, sets: sets, reps: reps});
            setVisible(false)
          }} 
        />
        <Button title='Close' onPress={() => setVisible(false)} />
      </InputDialog>
    </>
  );
}
