import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import React from 'react';
import { SetList } from './SetList';
import { OptionsModal } from './OptionsModal';
import { Button } from '@Components';
import { useCurrentWorkout } from '@Contexts';
import { Set } from '@Types';
import { getCurrentWorkoutSets } from '@Utils';

interface Props {
  name: string;
  style?: StyleProp<ViewStyle>;
}
export const ExerciseDisplay = (props: Props) => {
  const { workout, updateWorkout } = useCurrentWorkout();
  const updateWorkoutSets = (updatedSets: Set[]) => {
    const updatedExercises = workout.exercises.map((e) =>
      e.name === props.name ? { ...e, sets: updatedSets } : e
    );
    updateWorkout({ ...workout, exercises: updatedExercises });
  };

  const exerciseSets = getCurrentWorkoutSets(workout, props.name);
  return (
    <View style={props.style}>
      <View style={styles.header}>
        <Text style={styles.exerciseName}>{props.name}</Text>
        <OptionsModal />
      </View>

      <SetList name={props.name} sets={exerciseSets} />
      <Button
        onAdd={() => {
          updateWorkoutSets([
            ...exerciseSets,
            { id: exerciseSets.length, lbs: 0, reps: 0, isComplete: false },
          ]);
        }}
        size={'small'}
        text={'Add Set'}
        textColor={'black'}
        backgroundColor={'lightgray'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
  },
  options: {
    paddingTop: 6,
    borderWidth: 1,
    fontSize: 15,
  },
  exerciseName: {
    fontSize: 20,
    color: 'cadetblue',
    borderWidth: 1,
  },
});
