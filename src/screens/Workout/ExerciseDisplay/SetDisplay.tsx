import { useContext, useState } from 'react';
import { Text, View } from 'react-native';
import { NumericInput, DeleteButton } from '../../../components/index';
import { CurrentWorkoutContext, getCurrentWorkoutSets } from '../../../context/CurrentWorkoutContext';
import { Set } from '../../../types';


interface Props {
  exerciseName: string;
  set: Set;
};
export const SetDisplay = (props: Props) => {
  const [weight, setWeight] = useState<number>(props.set.lbs);
  const [reps, setReps] = useState<number>(props.set.reps);
  const { workout, setWorkout } = useContext(CurrentWorkoutContext);

  const sets = getCurrentWorkoutSets(workout, props.exerciseName);
  const updateWorkoutSets = (updatedSets: Set[]) => {
    let updatedExercises = workout.exercises.map(e => e.name === props.exerciseName ? {...e, sets: updatedSets} : e);
    setWorkout({ ...workout, exercises: updatedExercises });
  };

  const id = props.set.id
  const onDelete = () => {
    let updatedSets = [...sets].filter(set => set.id !== id);
    updatedSets.forEach((set, newId) => {
      set.id = newId;
    });
    updateWorkoutSets(updatedSets);
  };
  const onUpdate = () => {
    let updatedSets = sets.map(s => (s.id === id) ? {...s, lbs: weight, reps: reps} : s);
    updateWorkoutSets(updatedSets);
  };

  return (
    <View style={{flexDirection: 'row'}}>
      <Text style={{flex: 1}}>{props.set.id + 1}</Text>

      <NumericInput 
        style={{flex: 1}}
        placeholder={weight} 
        onChangeText={e => {
          setWeight(e);
          onUpdate();
        }}
      />
      <NumericInput 
        style={{flex: 1}} 
        placeholder={reps} 
        onChangeText={e => {
          setReps(e);
          onUpdate();
        }}
      />

      <DeleteButton onDelete={onDelete} />
    </View>
  );
};
