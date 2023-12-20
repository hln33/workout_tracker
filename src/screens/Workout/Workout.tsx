import { useEffect } from 'react';
import { Button, FlatList, StyleSheet, TextInput, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppStackParamList } from '@Navigation';
import { useCurrentWorkout } from '@Contexts';
import { saveWorkout, getWorkout } from '@Services';
import { Exercise, WorkoutType } from '@Types';
import { ExerciseInput } from './ExerciseInput'
import { ExerciseDisplay } from './ExerciseDisplay/index';


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

type Props = NativeStackScreenProps<AppStackParamList, 'Workout'>
export const Workout = ({ route }: Props) => {
  const updateWorkout = (updatedWorkout: WorkoutType) => {
    setWorkout(updatedWorkout);
    saveWorkout(updatedWorkout);
  }

  const { workout, setWorkout } = useCurrentWorkout();
  const { name, notes, exercises } = workout;
  const { dateISOString } = route.params;

  useEffect(() => {
    const fetchData = async () => {
      const val = await getWorkout(new Date(dateISOString)); 
      if (val) {
        setWorkout(val);
      }
    }
  
    workout.timestamp = new Date(dateISOString);
    fetchData();
  }, []);

  return (
    <View style={styles.workout}>
      <TextInput placeholder={name} onChangeText={newName => updateWorkout({ ...workout, name: newName })} />
      <TextInput 
        multiline={true}
        placeholder={notes}
        onChangeText={e => updateWorkout({ ...workout, notes: e })}
      />  

      <FlatList
        style={styles.exerciseList}
        data={exercises}
        renderItem={({item}) => <ExerciseDisplay style={styles.exercise} name={item.name} />}
      />
      <ExerciseInput 
        style={styles.addExerciseButton}
        onAdd={(exer: Exercise) => updateWorkout({ ...workout, exercises: [...exercises, exer] })} 
      />

      <Button 
        title='save'
        onPress={() => saveWorkout(workout)}
      />
    </View>
  );
};