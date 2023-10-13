import { useContext } from 'react';
import { FlatList, TextInput, View } from 'react-native';
import { CurrentWorkoutContext } from '../../context/CurrentWorkoutContext';
import { Exercise } from '../../types';
import { ExerciseInput, Timer } from './index';
import { ExerciseDisplay } from './ExerciseDisplay/index';


export const Workout = () => {
  const { workout, setWorkout } = useContext(CurrentWorkoutContext);
  const { name, notes, exercises } = workout;

  return (
    <View>
      {/* <Timer /> */}

      <TextInput placeholder={name} onChangeText={newName => setWorkout({ ...workout, name: newName })} />
      <TextInput 
        multiline={true}
        placeholder={notes}
        onChangeText={e => setWorkout({ ...workout, notes: e })}
      />      
      <FlatList
        data={exercises}
        renderItem={({item}) => <ExerciseDisplay name={item.name} />}
      />

      <ExerciseInput 
        style={{paddingHorizontal: 12.5}} 
        onAdd={(exer: Exercise) => setWorkout({ ...workout, exercises: [...exercises, exer] })} 
      />
    </View>
  );
};
