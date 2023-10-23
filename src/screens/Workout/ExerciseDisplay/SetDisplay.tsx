import { StyleSheet, Text, View } from 'react-native';
import { ReactNode } from 'react';
import { NumericInput } from '../../../components/index';
import { Slidable } from '../../../gestures';
import { getCurrentWorkoutSets, useCurrentWorkout } from '../../../context/CurrentWorkoutContext';
import { Set } from '../../../types';


const styles = StyleSheet.create({
  slidingComponent: {
    backgroundColor: 'white'
  },
  dimension: {
    width: 390,
    height: 40,
  },
  row: {
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  column: {
    flex: 1,
    textAlign: 'left',
    margin: 5,
    // backgroundColor: 'purple'
  },
  box: {
    padding: 5,
    borderRadius: 5,
    width: 20,
    backgroundColor: 'lightgray',
  },
  underflow: {
    position: 'absolute',
    backgroundColor: 'red',
    paddingRight: 15,
    zIndex: 1
  },
  underflowText: {
    paddingTop: 10,
    color: 'white',
    textAlign: 'right',
    fontWeight: 'bold'
  }
});


interface FieldProps {
  children: ReactNode;
};
const Field = (props: FieldProps) => {
  return (
    <View style={styles.column}>
      <View style={styles.box}>
        {props.children}
      </View>
    </View>
  )
};


interface Props {
  exerciseName: string;
  set: Set;
};
export const SetDisplay = (props: Props) => {
  const { workout, setWorkout } = useCurrentWorkout();
  const getState = (set: Set | undefined) => {
    const weight = set ? set.lbs : 0;
    const reps = set ? set.reps : 0;
    return { weight, reps };
  };

  const id = props.set.id;
  const sets = getCurrentWorkoutSets(workout, props.exerciseName);
  const { weight, reps } = getState(sets.find(s => s.id === id));

  // Callback Functions
  const updateWorkoutSets = (updatedSets: Set[]) => {
    let updatedExercises = workout.exercises.map(e => e.name === props.exerciseName ? {...e, sets: updatedSets} : e);
    updatedExercises = updatedExercises.filter(e => e.sets.length !== 0);
    setWorkout({ ...workout, exercises: updatedExercises });
  };
  const onWeightUpdate = (newWeight: number) => {
    let updatedSets = sets.map(s => (s.id === id) ? {...s, lbs: newWeight} : s);
    updateWorkoutSets(updatedSets);
  };
  const onRepsUpdate = (newReps: number) => {
    let updatedSets = sets.map(s => (s.id === id) ? {...s, reps: newReps} : s);
    updateWorkoutSets(updatedSets);
  };
  const onDelete = () => {
    let updatedSets = [...sets].filter(set => set.id !== id);
    updatedSets.forEach((set, newId) => set.id = newId);
    updateWorkoutSets(updatedSets);
  };

  return (
    <>
      <Slidable style={[styles.slidingComponent, styles.dimension]} onSlide={onDelete}>  
        <View style={[styles.row]}>
          <Field>
            <Text>{id + 1}</Text>
          </Field>

          <Field>
            <NumericInput 
              placeholder={weight} 
              onChangeText={e => onWeightUpdate(e)}
            />
          </Field>

          <Field>
            <NumericInput 
              placeholder={reps} 
              onChangeText={e => onRepsUpdate(e)}
            />
          </Field>

        </View>
      </Slidable>
    </>
  );
};
