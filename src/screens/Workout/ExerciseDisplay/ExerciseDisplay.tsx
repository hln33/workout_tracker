import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { SetList } from './index';
import { AddButton } from '../../../components';
import { useCurrentWorkout, getCurrentWorkoutSets } from '../../../context/CurrentWorkoutContext';
import { Set } from '../../../types'


const styles = StyleSheet.create({
  exerciseName: {
    fontSize: 20,
    paddingBottom: 10,
    color: 'cadetblue',
  },
});


interface Props {
  name: string;
  style?: StyleProp<ViewStyle>
};
export const ExerciseDisplay = (props: Props) => {
  const { workout, setWorkout } = useCurrentWorkout();
  const updateWorkoutSets = (updatedSets: Set[]) => {
    let updatedExercises = workout.exercises.map(e => e.name === props.name ? {...e, sets: updatedSets} : e);
    setWorkout({ ...workout, exercises: updatedExercises });
  };

  const exerciseSets = getCurrentWorkoutSets(workout, props.name);
  return (
    <View style={props.style}>
      <Text style={styles.exerciseName}>{props.name}</Text>

      <SetList 
        name={props.name}
        sets={exerciseSets}
      />

      <AddButton 
        onAdd={() => {updateWorkoutSets([...exerciseSets, {id: exerciseSets.length, lbs: 0, reps: 0}])}}
        text={'Add Set'}
        textColor={'black'}
        backgroundColor={'lightgray'}
      />
    </View>
  );
};
