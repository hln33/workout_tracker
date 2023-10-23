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
  },
  column: {
    flex: 1,
    textAlign: 'left',
  },
  box: {
    padding: 5,
    borderRadius: 5,
    width: 30,
    backgroundColor: 'lightgray',
  },
});


interface ColumnProps {
  children: ReactNode;
  width: number;
};
const Column = (props: ColumnProps) => {
  return (
    <View style={styles.column}>
      <View style={[styles.box, {width: props.width}]}>
        {props.children}
      </View>
    </View>
  );
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
    <Slidable 
      style={styles.slidingComponent} 
      sizeStyle={styles.dimension} 
      onSlide={onDelete} 
      underflowText={'Delete'}
    >  
      <View style={styles.row}>
        <Column width={20}>
          <Text>{id + 1}</Text>
        </Column>

        <Column width={50}>
          <NumericInput 
            placeholder={weight} 
            onChangeText={e => onWeightUpdate(e)}
          />
        </Column>

        <Column width={50}>
          <NumericInput 
            placeholder={reps} 
            onChangeText={e => onRepsUpdate(e)}
          />
        </Column>
      </View>
    </Slidable>
  );
};
