import { FlatList, TextInput, View } from 'react-native';
import { useCurrentWorkout } from '../../context/CurrentWorkoutContext';
import { Exercise } from '../../types';
import { ExerciseInput } from './ExerciseInput'
import { ExerciseDisplay } from './ExerciseDisplay/index';
import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  workout: {
    padding: 15,
    backgroundColor: 'white',
  },
  exerciseList: {
    paddingVertical: 10,
  },
  exercise: {
    paddingVertical: 10,
  },
  addExerciseButton: {
    paddingVertical: 25,
  },
});


export const Workout = () => {
  const { workout, setWorkout } = useCurrentWorkout();
  const { name, notes, exercises } = workout;

  return (
    <View style={styles.workout}>
      {/* <Timer /> */}

      <TextInput placeholder={name} onChangeText={newName => setWorkout({ ...workout, name: newName })} />
      <TextInput 
        multiline={true}
        placeholder={notes}
        onChangeText={e => setWorkout({ ...workout, notes: e })}
      />      
      <FlatList
        style={styles.exerciseList}
        data={exercises}
        renderItem={({item}) => <ExerciseDisplay style={styles.exercise} name={item.name} />}
      />

      <ExerciseInput 
        style={styles.addExerciseButton}
        onAdd={(exer: Exercise) => setWorkout({ ...workout, exercises: [...exercises, exer] })} 
      />
    </View>
  );
};
