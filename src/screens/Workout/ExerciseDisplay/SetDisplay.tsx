import { StyleSheet, Text, View } from 'react-native';
import { NumericInput, DeleteButton } from '../../../components/index';
import { getCurrentWorkoutSets, useCurrentWorkout } from '../../../context/CurrentWorkoutContext';
import { Set } from '../../../types';


const styles = StyleSheet.create({
  row: {
    flexDirection: 'row'
  },
  column: {
    flex: 1,
    textAlign: 'left',
  }
});


interface Props {
  exerciseName: string;
  set: Set;
};
export const SetDisplay = (props: Props) => {
  const { workout, setWorkout } = useCurrentWorkout();
  const getState = (set: Set | undefined) => {
    const weight = set ? set.lbs : 0;
    const reps = set ? set.reps : 0;
    return { weight, reps };
  };

  const id = props.set.id;
  const sets = getCurrentWorkoutSets(workout, props.exerciseName);
  const { weight, reps } = getState(sets.find(s => s.id === id));

  // Callback Functions
  const updateWorkoutSets = (updatedSets: Set[]) => {
    let updatedExercises = workout.exercises.map(e => e.name === props.exerciseName ? {...e, sets: updatedSets} : e);
    updatedExercises = updatedExercises.filter(e => e.sets.length !== 0);
    setWorkout({ ...workout, exercises: updatedExercises });
  };
  const onDelete = () => {
    let updatedSets = [...sets].filter(set => set.id !== id);
    updatedSets.forEach((set, newId) => set.id = newId);
    updateWorkoutSets(updatedSets);
  };
  const onWeightUpdate = (newWeight: number) => {
    let updatedSets = sets.map(s => (s.id === id) ? {...s, lbs: newWeight} : s);
    updateWorkoutSets(updatedSets);
  };
  const onRepsUpdate = (newReps: number) => {
    let updatedSets = sets.map(s => (s.id === id) ? {...s, reps: newReps} : s);
    updateWorkoutSets(updatedSets);
  };

  return (
    <View style={styles.row}>
      <Text style={styles.column}>{id + 1}</Text>

      <NumericInput 
        style={styles.column}
        placeholder={weight} 
        onChangeText={e => onWeightUpdate(e)}
      />

      <NumericInput 
        style={styles.column} 
        placeholder={reps} 
        onChangeText={e => onRepsUpdate(e)}
      />

      <DeleteButton style={styles.column} onDelete={onDelete} />
    </View>
  );
};
