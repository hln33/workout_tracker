import { useState } from 'react';
import { FlatList, Text, TextInput, View } from 'react-native';
import { Set } from '../../../types'


interface Props {
  name: string,
  sets: Set[]
}
export const ExerciseDisplay = (props: Props) => {
  const [sets, setSets] = useState(props.sets);

  return (
    <>
      <Text>{props.name}:</Text> 
      {/* <TextInput 
          placeholder={sets.toString()}
          keyboardType='numeric'
          onChangeText={(e) => setSets(Number(e))}
      />
      <TextInput 
        placeholder={reps.toString()}
        keyboardType='numeric'
        onChangeText={(e) => setReps(Number(e))}
      /> */}

      <FlatList
        data={sets}
        renderItem={({item}) => <Text>{item.lbs} | {item.reps}</Text>}
      />

      {/* 
        sets
          lbs
          reps
      */}
    </>
  );
}