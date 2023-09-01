import { useState } from 'react';
import { Button, FlatList, Text, View } from 'react-native';
import { SetDisplay } from './index';
import { Set } from '../types'


interface Props {
  name: string;
  sets: Set[];
};
export const ExerciseDisplay = (props: Props) => {
  const [sets, setSets] = useState(props.sets);

  const onSetDelete = (id: number) => {
    let updatedSets = [...sets];
    updatedSets = updatedSets.filter(set => set.id !== id);
    updatedSets.forEach((set, newId) => {
      set.id = newId;
    });
    setSets(updatedSets);
  };
  const onSetUpdate = (id: number, newLbs: number, newReps: number) => {
    console.log(sets);
    setSets(sets.map(set => {
      return (set.id === id) ? {...set, lbs: newLbs, reps: newReps} : set;
    }));
  };

  return (
    <>
      <Text>{props.name}</Text>

      <View style={{flexDirection: 'row'}}>
        <Text style={{flex: 1}}>Set:</Text>
        <Text style={{flex: 1}}>Weight:</Text>
        <Text style={{flex: 1}}>Reps:</Text>
      </View>

      <FlatList
        data={sets}
        renderItem={({item}) =>
          <SetDisplay 
            set={item} 
            onDelete={id => onSetDelete(id)} 
            onUpdate={(id, lbs, reps) => onSetUpdate(id, lbs, reps)} 
          />
        }
      />

      <Button 
        title='Add Set'
        onPress={() => setSets([...sets, {id: sets.length, lbs: 0, reps: 0}])}
      />
    </>
  );
};
