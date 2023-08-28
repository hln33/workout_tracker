import { useState } from 'react';
import { Button, FlatList, Text, TextInput, View } from 'react-native';
import { Exercise } from '../../../types';
import { ExerciseInput } from './index';
import { ExerciseDisplay } from './ExerciseDisplay/index';


export const Workout = () => {
  const [workoutName, setWorkoutName] = useState('');
  const [notes, setNotes] = useState('');
  const [exercises, setExercises] = useState<Exercise[]>([]);

  return (
    <>
      <TextInput placeholder='Workout Name' onChangeText={e => setWorkoutName(e)} />
      <TextInput 
        multiline={true}
        placeholder='Notes'
        onChangeText={e => setNotes(e)}
      />
      <ExerciseInput onAdd={(exercise: Exercise) => setExercises([...exercises, exercise])}/>
      
      <FlatList
        data={exercises}
        renderItem={({item}) => <ExerciseDisplay name={item.name} sets={item.sets} />}
      />

      <Button title='Finish' />
    </>
  );
}