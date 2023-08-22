import { useState } from 'react';
import { Button, TextInput, View } from 'react-native';
import { ExerciseInput } from './ExerciseInput';

export const Workout = () => {
  const [workoutName, setWorkoutName] = useState('');
  const [notes, setNotes] = useState('');

  return (
    <>
      <TextInput 
        placeholder="Workout Name"
        onChangeText={input => setWorkoutName(input)}
      />
      <TextInput 
        multiline={true}
        placeholder="Notes"
        onChangeText={input => setNotes(input)}
      />
      <ExerciseInput />

      <Button title="Finish" />
    </>
  );
}