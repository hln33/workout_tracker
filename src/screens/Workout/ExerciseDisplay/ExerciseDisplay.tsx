import { useContext } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import { SetDisplay } from './index';
import { CurrentWorkoutContext, getCurrentWorkoutSets } from '../../../context/CurrentWorkoutContext';
import { Set } from '../../../types'


const styles = StyleSheet.create({
  title: {
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
    fontWeight: 'bold'
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
    <View style={{padding: 12.5}}>
      <Text style={styles.title}>{props.name}</Text>
      <View style={styles.headerRow}>
        <Text style={styles.column}>Set:</Text>
        <Text style={styles.column}>Weight:</Text>
        <Text style={styles.column}>Reps:</Text>
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
    </View>
  );
};
