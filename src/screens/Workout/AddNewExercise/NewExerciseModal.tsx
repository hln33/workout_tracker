import React, { useState } from 'react';
import { Button, Text, TextInput, View, StyleSheet } from 'react-native';
import { PopupDialog } from '@Components';
import { useCurrentWorkout } from '@Contexts';
import { Exercise } from '@Types';

interface Props {
  visible: boolean;
  setVisible: (arg: boolean) => void;
}
export const NewExerciseModal = (props: Props) => {
  const [name, setName] = useState('');
  const { workout, updateWorkout } = useCurrentWorkout();

  const addNewExercise = () => {
    const newExercise: Exercise = {
      name: name,
      sets: [{ id: 0, lbs: 0, reps: 0, isComplete: false }],
    };
    updateWorkout({
      ...workout,
      exercises: [...workout.exercises, newExercise],
    });
  };

  return (
    <PopupDialog visible={props.visible} setVisible={props.setVisible}>
      <View style={styles.container}>
        <Text style={styles.title}>New Exercise</Text>
        <TextInput
          style={styles.name}
          autoCorrect={false}
          autoComplete='off'
          placeholder='Name'
          inputMode='text'
          onChangeText={(e) => setName(e)}
        />

        <Button
          title='Add'
          disabled={name === ''}
          onPress={() => {
            addNewExercise();
            setName('');
            props.setVisible(false);
          }}
        />
      </View>
    </PopupDialog>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 25,
    paddingVertical: 10,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    padding: 3,
  },
  name: {
    margin: 10,
    padding: 10,
    paddingLeft: 12.5,
    width: 200,
    borderRadius: 10,
    backgroundColor: 'gainsboro',
  },
});
