import { StyleSheet, StyleProp, Text, TextStyle, View, ViewStyle } from 'react-native';
import { CheckBox, ListRow, NumericBox, NumericInput, Slidable } from '../../../components/index';
import { getCurrentWorkoutSets, useCurrentWorkout } from '../../../context/CurrentWorkoutContext';
import { Set } from '../../../types';


const styles = StyleSheet.create({
  slidingComponent: {
    backgroundColor: 'white',
  },
  dimension: {
    height: 50,
    width: 400
  },
});


interface Props {
  exerciseName: string;
  set: Set;
  columnStyle?: StyleProp<ViewStyle | TextStyle>;
};
export const SetInfo = (props: Props) => {
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
      <ListRow>
        <NumericBox style={[props.columnStyle]} width={20}>
          <Text>{id + 1}</Text>
        </NumericBox>

        <NumericBox style={[props.columnStyle]} width={50}>
          <NumericInput 
            placeholder={weight} 
            onChangeText={e => onWeightUpdate(e)}
          />
        </NumericBox>

        <NumericBox style={props.columnStyle} width={50}>
          <NumericInput 
            placeholder={reps} 
            onChangeText={e => onRepsUpdate(e)}
          />
        </NumericBox>
        
        <View style={props.columnStyle}>
          <CheckBox />
        </View>
      </ListRow>
    </Slidable>
  );
};
