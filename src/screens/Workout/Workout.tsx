import { useContext, useState } from 'react';
import { Button, FlatList, Text, TextInput, View } from 'react-native';
import { CurrentWorkoutContext } from '../../context/CurrentWorkoutContext';
import { Exercise } from '../../types';
import { ExerciseInput } from './index';
import { ExerciseDisplay } from './ExerciseDisplay/index';


export const Workout = () => {
  const { workout, setWorkout } = useContext(CurrentWorkoutContext);
  const [notes, setNotes] = useState('');
  console.log(workout);

  const { name, exercises } = workout;
  return (
    <>
      <TextInput placeholder='Workout Name' onChangeText={newName => setWorkout({ ...workout, name: newName })} />
      <TextInput 
        multiline={true}
        placeholder='Notes'
        onChangeText={e => setNotes(e)}
      />
      <ExerciseInput onAdd={(exercise: Exercise) => setWorkout({ ...workout, exercises: [...exercises, exercise]})} />
      
      <FlatList
        data={exercises}
        renderItem={({item}) => <ExerciseDisplay name={item.name} sets={item.sets} />}
      />

      <Button title='Finish' />
      <Button title='Save' onPress={() => setWorkout({name: name, exercises: exercises})} />
    </>
  );
};
