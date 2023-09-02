import { useContext } from 'react';
import { Text, View } from 'react-native';
import { NumericInput, DeleteButton } from '../../../components/index';
import { CurrentWorkoutContext, getCurrentWorkoutSets } from '../../../context/CurrentWorkoutContext';
import { Set } from '../../../types';


const getState = (set: Set | undefined) => {
  const weight = set ? set.lbs : 0;
  const reps = set ? set.reps : 0;
  return { weight, reps };
};


interface Props {
  exerciseName: string;
  set: Set;
};
export const SetDisplay = (props: Props) => {
  const { workout, setWorkout } = useContext(CurrentWorkoutContext);
  const updateWorkoutSets = (updatedSets: Set[]) => {
    let updatedExercises = workout.exercises.map(e => e.name === props.exerciseName ? {...e, sets: updatedSets} : e);
    setWorkout({ ...workout, exercises: updatedExercises });
  };

  const id = props.set.id;
  const sets = getCurrentWorkoutSets(workout, props.exerciseName);
  const onDelete = () => {
    let updatedSets = [...sets].filter(set => set.id !== id);
    updatedSets.forEach((set, newId) => set.id = newId);
    updateWorkoutSets(updatedSets);
  };
  const onWeightUpdate = (newWeight: number) => {
    let updatedSets = sets.map(s => (s.id === id) ? {...s, lbs: newWeight} : s);
    updateWorkoutSets(updatedSets);
  };
  const onRepsUpdate = (newReps: number) => {
    let updatedSets = sets.map(s => (s.id === id) ? {...s, reps: newReps} : s);
    updateWorkoutSets(updatedSets);
  };

  const { weight, reps } = getState(sets.find(s => s.id === id));
  return (
    <View style={{flexDirection: 'row'}}>
      <Text style={{flex: 1}}>{id + 1}</Text>

      <NumericInput 
        style={{flex: 1}}
        placeholder={weight} 
        onChangeText={e => onWeightUpdate(e)}
      />
      <NumericInput 
        style={{flex: 1}} 
        placeholder={reps} 
        onChangeText={e => onRepsUpdate(e)}
      />

      <DeleteButton onDelete={onDelete} />
    </View>
  );
};
