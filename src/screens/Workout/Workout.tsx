import React, { useEffect } from 'react';
import { FlatList, StyleSheet, TextInput, View } from 'react-native';
import { AppStackParamList } from '@Navigation';
import { useCurrentWorkout } from '@Contexts';
import { getWorkout } from '@Services';
import { Exercise } from '@Types';
import { ExerciseInput } from './ExerciseInput';
import { ExerciseDisplay } from './ExerciseDisplay/index';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<AppStackParamList, 'Workout'>;
export const Workout = ({ route }: Props) => {
  const { workout, updateWorkout } = useCurrentWorkout();
  const { name, notes, exercises } = workout;
  const { dateISOString } = route.params;

  useEffect(() => {
    const fetchData = async () => {
      const val = await getWorkout(new Date(dateISOString));
      const fetchedWorkout = val ?? {
        name: 'Workout Name',
        notes: 'Notes',
        exercises: [],
        timestamp: new Date(),
      };
      fetchedWorkout.timestamp = new Date(dateISOString);
      updateWorkout(fetchedWorkout);
    };

    fetchData();
  }, [dateISOString]);

  return (
    <View style={styles.background}>
      <View style={styles.workout}>
        <TextInput
          placeholder={name}
          onChangeText={(newName) =>
            updateWorkout({ ...workout, name: newName })
          }
        />
        <TextInput
          multiline={true}
          placeholder={notes}
          onChangeText={(e) => updateWorkout({ ...workout, notes: e })}
        />

        <FlatList
          style={styles.exerciseList}
          data={exercises}
          renderItem={({ item }) => (
            <ExerciseDisplay style={styles.exercise} name={item.name} />
          )}
        />
        <ExerciseInput
          style={styles.addExerciseButton}
          onAdd={(exer: Exercise) =>
            updateWorkout({ ...workout, exercises: [...exercises, exer] })
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'white',
  },
  workout: {
    padding: 15,
    backgroundColor: 'white',
  },
  exerciseList: {
    paddingVertical: 10,
    borderColor: 'black',
  },
  exercise: {
    paddingVertical: 10,
  },
  addExerciseButton: {
    paddingVertical: 25,
  },
});
