import {
  StyleSheet,
  StyleProp,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {
  CheckBox,
  ListRow,
  NumericBox,
  NumericInput,
  Slidable,
} from '@Components';
import { useCurrentWorkout } from '@Contexts';
import { Set } from '@Types';
import { getCurrentWorkoutSets } from '@Utils';

interface Props {
  exerciseName: string;
  set: Set;
  columnStyle?: StyleProp<ViewStyle | TextStyle>;
}
export const SetInfo = (props: Props) => {
  // state
  const getState = (set: Set | undefined) => {
    const weight = set ? set.lbs : 0;
    const reps = set ? set.reps : 0;
    const isComplete = set ? set.isComplete : false;
    return { weight, reps, isComplete };
  };
  const { workout, updateWorkout } = useCurrentWorkout();
  const id = props.set.id;
  const sets = getCurrentWorkoutSets(workout, props.exerciseName);
  const { weight, reps, isComplete } = getState(sets.find((s) => s.id === id));

  // Callback Functions
  const updateWorkoutSets = (updatedSets: Set[]) => {
    let updatedExercises = workout.exercises.map((e) =>
      e.name === props.exerciseName ? { ...e, sets: updatedSets } : e
    );
    updatedExercises = updatedExercises.filter((e) => e.sets.length !== 0);
    updateWorkout({ ...workout, exercises: updatedExercises });
  };
  const updateProperty = (
    sets: Set[],
    id: number,
    updateFunction: (set: Set) => Set
  ): void => {
    updateWorkoutSets(sets.map((s) => (s.id === id ? updateFunction(s) : s)));
  };
  const onWeightUpdate = (newWeight: number) => {
    updateProperty(sets, id, (set) => ({ ...set, lbs: newWeight }));
  };
  const onRepsUpdate = (newReps: number) => {
    updateProperty(sets, id, (set) => ({ ...set, reps: newReps }));
  };
  const onCompleteUpdate = (newComplete: boolean) => {
    updateProperty(sets, id, (set) => ({ ...set, isComplete: newComplete }));
  };
  const onDelete = () => {
    let updatedSets = sets
      .filter((set) => set.id !== id)
      .map((set, newId) => ({ ...set, id: newId }));
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
            onChangeText={(e) => onWeightUpdate(e)}
          />
        </NumericBox>

        <NumericBox style={props.columnStyle} width={50}>
          <NumericInput
            placeholder={reps}
            onChangeText={(e) => onRepsUpdate(e)}
          />
        </NumericBox>

        <View style={props.columnStyle}>
          <CheckBox
            checked={isComplete}
            onValueChange={(e) => onCompleteUpdate(e)}
          />
        </View>
      </ListRow>
    </Slidable>
  );
};

const styles = StyleSheet.create({
  slidingComponent: {
    backgroundColor: 'white',
  },
  dimension: {
    height: 50,
    width: 400,
  },
});
