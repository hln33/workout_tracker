import { useContext } from 'react';
import { FlatList, TextInput, View } from 'react-native';
import { CurrentWorkoutContext } from '../../context/CurrentWorkoutContext';
import { Exercise } from '../../types';
import { ExerciseInput, Timer } from './index';
import { ExerciseDisplay } from './ExerciseDisplay/index';
import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  workout: {
    padding: 20
  },
  exercise: {
    paddingVertical: 10
  },
  addExerciseButton: {
    paddingVertical: 25
  }
});


export const Workout = () => {
  const { workout, setWorkout } = useContext(CurrentWorkoutContext);
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
