import { useContext, useState } from 'react';
import { Button, FlatList, Text, View } from 'react-native';
import { CurrentWorkoutContext } from '../../../context/CurrentWorkoutContext';
import { SetDisplay } from './index';
import { Set } from '../../../types'


interface Props {
  name: string;
  sets: Set[];
};
export const ExerciseDisplay = (props: Props) => {
  const { workout, setWorkout } = useContext(CurrentWorkoutContext);
  const exercise = workout.exercises.find(e => e.name === props.name);
  const sets = exercise?.sets ?? [];
  console.log(exercise);

  const updateWorkoutSets = (updatedSets: Set[]) => {
    let updatedExercises = workout.exercises.map(e => e.name === props.name ? {...e, sets: updatedSets} : e);
    setWorkout({ ...workout, exercises: updatedExercises });
  }

  const onSetDelete = (id: number) => {
    let updatedSets = [...sets];
    updatedSets = updatedSets.filter(set => set.id !== id);
    updatedSets.forEach((set, newId) => {
      set.id = newId;
    });
    updateWorkoutSets(updatedSets)
  };
  const onSetUpdate = (id: number, newLbs: number, newReps: number) => {
    let updatedSets = sets.map(s => (s.id === id) ? {...s, lbs: newLbs, reps: newReps} : s);
    updateWorkoutSets(updatedSets);
  };

  return (
    <>
      <Text>{props.name}</Text>

      <View style={{flexDirection: 'row'}}>
        <Text style={{flex: 1}}>Set:</Text>
        <Text style={{flex: 1}}>Weight:</Text>
        <Text style={{flex: 1}}>Reps:</Text>
      </View>

      <FlatList
        data={sets}
        renderItem={({item}) =>
          <SetDisplay 
            set={item} 
            onDelete={id => onSetDelete(id)} 
            onUpdate={(id, lbs, reps) => onSetUpdate(id, lbs, reps)} 
          />
        }
      />

      {/* <Button 
        title='Add Set'
        onPress={() => setSets([...sets, {id: sets.length, lbs: 0, reps: 0}])}
      /> */}

      <Button 
        title='Add Set'
        onPress={() => {
          let updatedSets = [...sets, {id: sets.length, lbs: 0, reps: 0}];
          updateWorkoutSets(updatedSets)
        }}
      />
    </>
  );
};
