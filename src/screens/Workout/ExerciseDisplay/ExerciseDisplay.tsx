import { FlatList, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { SetDisplay } from './index';
import { AddButton } from '../../../components';
import { Slidable } from '../../../gestures';
import { useCurrentWorkout, getCurrentWorkoutSets } from '../../../context/CurrentWorkoutContext';
import { Set } from '../../../types'


const styles = StyleSheet.create({
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
  spacer: {
    flex: 1
  }
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

  const sets = getCurrentWorkoutSets(workout, props.name);
  return (
    <View style={props.style}>
      
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
        renderItem={({item}) => (
          <Slidable>
            <SetDisplay exerciseName={props.name} set={item} />
          </Slidable>  
        )}
      />

      <AddButton 
        onAdd={() => {updateWorkoutSets([...sets, {id: sets.length, lbs: 0, reps: 0}])}}
        text={'Add Set'}
        textColor={'silver'}
        backgroundColor={'snow'}
      />
    </View>
  );
};
