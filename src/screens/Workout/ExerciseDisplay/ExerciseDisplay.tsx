import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { SetList } from './SetList';
import { AddButton } from '@Components';
import { useCurrentWorkout } from '@Contexts';
import { Set } from '@Types';
import { getCurrentWorkoutSets } from '@Utils';


interface Props {
  name: string;
  style?: StyleProp<ViewStyle>
};
export const ExerciseDisplay = (props: Props) => {
  const { workout, updateWorkout } = useCurrentWorkout();
  const updateWorkoutSets = (updatedSets: Set[]) => {
    const updatedExercises = workout.exercises.map(e => e.name === props.name ? {...e, sets: updatedSets} : e);
    updateWorkout({ ...workout, exercises: updatedExercises });
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
        onAdd={() => {updateWorkoutSets([...exerciseSets, {id: exerciseSets.length, lbs: 0, reps: 0, isComplete: false}])}}
        size={'small'}
        text={'Add Set'}
        textColor={'black'}
        backgroundColor={'lightgray'}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  exerciseName: {
    fontSize: 20,
    paddingBottom: 10,
    color: 'cadetblue',
  },
});
