import { useState } from 'react';
import { Alert, Button, FlatList, Text, TextInput, View } from 'react-native';
import { ExerciseInput } from './ExerciseInput';
import { Exercise } from '../../../types';


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
        renderItem={({item}) => 
          <>
            <Text>{item.name}</Text>
            <Text>{item.sets}x{item.reps}</Text>
          </>
        }
      />

      <Button title='Finish' />
    </>
  );
}