import { useState } from 'react';
import { Text, View } from 'react-native';
import { NumericInput } from '../../../components/index'
import { Set } from '../types';

interface Props {
  set: Set
}
export const SetDisplay = ({set}: Props) => {
  const [weight, setWeight] = useState(set.lbs);
  const [reps, setReps] = useState(set.reps);

  return (
    <View style={{flexDirection: 'row'}}>
      <NumericInput style={{flex: 1}} placeholder={weight} onChangeText={e => setWeight(e)} />
      <NumericInput style={{flex: 1}} placeholder={reps} onChangeText={e => setReps(e)} />
    </View>
  );
};
