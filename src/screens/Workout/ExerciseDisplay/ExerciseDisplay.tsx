import { useContext } from 'react';
import { Button, FlatList, Text, View } from 'react-native';
import { SetDisplay } from './index';
import { CurrentWorkoutContext, getCurrentWorkoutSets } from '../../../context/CurrentWorkoutContext';
import { Set } from '../../../types'


interface Props {
  name: string;
};
export const ExerciseDisplay = (props: Props) => {
  const { workout, setWorkout } = useContext(CurrentWorkoutContext);
  const sets = getCurrentWorkoutSets(workout, props.name);
  const updateWorkoutSets = (updatedSets: Set[]) => {
    let updatedExercises = workout.exercises.map(e => e.name === props.name ? {...e, sets: updatedSets} : e);
    setWorkout({ ...workout, exercises: updatedExercises });
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
        renderItem={({item}) => <SetDisplay exerciseName={props.name} set={item} />}
      />

      <Button 
        title='Add Set'
        onPress={() => {
          let updatedSets = [...sets, {id: sets.length, lbs: 0, reps: 0}];
          updateWorkoutSets(updatedSets);
        }}
      />
    </>
  );
};
