import { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { InputDialog } from '../../components'


export const ExerciseInput = () => {
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

        <Button title='Close' onPress={() => setVisible(false)} />
      </InputDialog>
    </>
  );
}
