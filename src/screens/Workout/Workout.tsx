import { useContext, useState } from 'react';
import { Button, FlatList, Text, TextInput, View } from 'react-native';
import { CurrentWorkoutContext, CurrentWorkoutProvider } from '../../context/CurrentWorkoutContext';
import { Exercise } from '../../types';
import { ExerciseInput } from './index';
import { ExerciseDisplay } from './ExerciseDisplay/index';


export const Workout = () => {
  const { workout, setWorkout } = useContext(CurrentWorkoutContext);
  console.log(workout);

  const [workoutName, setWorkoutName] = useState('');
  const [notes, setNotes] = useState('');
  const [exercises, setExercises] = useState<Exercise[]>(workout?.exercises ?? []);

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

      <Button title='context' onPress={() => setWorkout({name: workoutName, exercises: exercises})} />
    </>
  );
};
