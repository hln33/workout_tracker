import { useContext } from 'react';
import { Button, FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { SetDisplay } from './index';
import { CurrentWorkoutContext, getCurrentWorkoutSets } from '../../../context/CurrentWorkoutContext';
import { Set } from '../../../types'


const styles = StyleSheet.create({
  exerciseDisplay: {
    padding: 12.5
  },
  name: {
    fontSize: 20,
    paddingBottom: 10,
    color: 'cadetblue'
  },
  headerRow: {
    flexDirection: 'row',
    paddingBottom: 10
  },
  column: {
    flex: 1,
    fontSize: 15,
    fontWeight: 'bold'
  },
  rows: {
    paddingTop: 5,
    paddingBottom: 35
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 15,
    backgroundColor: 'snow'
  },
  buttonText: {
    color: 'silver',
    fontSize: 20,
    fontWeight: 'bold'
  },
  spacer: {
    flex: 1
  }
});


interface Props {
  name: string;
};
export const ExerciseDisplay = (props: Props) => {
  const { workout, setWorkout } = useContext(CurrentWorkoutContext);
  const updateWorkoutSets = (updatedSets: Set[]) => {
    let updatedExercises = workout.exercises.map(e => e.name === props.name ? {...e, sets: updatedSets} : e);
    setWorkout({ ...workout, exercises: updatedExercises });
  };

  const sets = getCurrentWorkoutSets(workout, props.name);
  return (
    <View style={styles.exerciseDisplay}>
      
      <Text style={styles.name}>{props.name}</Text>
      <View style={styles.headerRow}>
        <Text style={styles.column}>Set:</Text>
        <Text style={styles.column}>Weight:</Text>
        <Text style={styles.column}>Reps:</Text>
        <Text style={styles.spacer} />
      </View>

      <FlatList
        style={styles.rows}
        data={sets}
        renderItem={({item}) => <SetDisplay exerciseName={props.name} set={item} />}
      />

      <Pressable 
        style={styles.button} 
        onPress={() => {updateWorkoutSets([...sets, {id: sets.length, lbs: 0, reps: 0}])}}
      >
        <Text style={styles.buttonText}>Add Set</Text>
      </Pressable>
    </View>
  );
};
