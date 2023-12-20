import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppStackParamList } from '@Navigation';
import { useCurrentWorkout } from '@Contexts';
import { saveWorkout } from '../../services';
import { Exercise } from '@Types';
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
  const { workout, setWorkout } = useCurrentWorkout();
  const { name, notes, exercises } = workout;
  const { dateISOString } = route.params;

  return (
    <View style={styles.workout}>
      <TextInput placeholder={name} onChangeText={newName => setWorkout({ ...workout, name: newName })} />
      <TextInput 
        multiline={true}
        placeholder={notes}
        onChangeText={e => setWorkout({ ...workout, notes: e })}
      />  

      <Text>{ dateISOString }</Text>

      <FlatList
        style={styles.exerciseList}
        data={exercises}
        renderItem={({item}) => <ExerciseDisplay style={styles.exercise} name={item.name} />}
      />
      <ExerciseInput 
        style={styles.addExerciseButton}
        onAdd={(exer: Exercise) => setWorkout({ ...workout, exercises: [...exercises, exer] })} 
      />

      <Button 
        title='save'
        onPress={() => saveWorkout(workout)}
      />
    </View>
  );
};