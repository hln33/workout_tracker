import { useState } from 'react';
import { Alert, Button, FlatList, Text, TextInput, View } from 'react-native';
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
        renderItem={({item}) => <SetDisplay set={item} onDelete={id => onSetDelete(id)}/>}
      />

      <Button 
        title='Add Set'
        onPress={() => setSets([...sets, {id: sets.length, lbs: 0, reps: 0}])}
      />
    </>
  );
};
