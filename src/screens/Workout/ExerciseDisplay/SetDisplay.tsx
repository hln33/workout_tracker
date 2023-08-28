import { useState } from 'react';
import { Alert, Text, View } from 'react-native';
import { NumericInput, DeleteButton } from '../../../components/index'
import { Set } from '../types';

interface Props {
  index: number;
  set: Set;
};
export const SetDisplay = (props: Props) => {
  const [weight, setWeight] = useState(props.set.lbs);
  const [reps, setReps] = useState(props.set.reps);

  return (
    <View style={{flexDirection: 'row'}}>
      <Text style={{flex: 1}}>{props.index + 1}</Text>
      <NumericInput style={{flex: 1}} placeholder={weight} onChangeText={e => setWeight(e)} />
      <NumericInput style={{flex: 1}} placeholder={reps} onChangeText={e => setReps(e)} />
      <DeleteButton onDelete={() => Alert.alert('deleting')}/>
    </View>
  );
};
