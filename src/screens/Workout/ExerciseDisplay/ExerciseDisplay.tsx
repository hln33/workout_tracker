import { useState } from 'react';
import { Button, FlatList, Text, TextInput, View } from 'react-native';
import { SetDisplay } from './index';
import { Set } from '../../../../types'


interface Props {
  name: string;
  sets: Set[];
};
export const ExerciseDisplay = (props: Props) => {
  const [sets, setSets] = useState(props.sets);

  return (
    <>
      <Text>{props.name}</Text>

      <View style={{flexDirection: 'row'}}>
        <Text style={{flex: 1}}>Weight: </Text>
        <Text style={{flex: 1}}>Reps: </Text>
      </View>

      <FlatList
        data={sets}
        renderItem={({item}) => <SetDisplay set={item}/>}
      />

      <Button 
        title='Add Set'
        onPress={() => setSets([...sets, {lbs: 0, reps: 0}])}
      />
    </>
  );
};
