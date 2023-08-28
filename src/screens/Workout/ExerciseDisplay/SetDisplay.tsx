import { useState } from 'react';
import { Text, View } from 'react-native';
import { NumericInput } from '../../../components/index'
import { Set } from '../../../../types';

interface Props {
  set: Set
}
export const SetDisplay = ({set}: Props) => {
  const [weight, setWeight] = useState(set.lbs);
  const [reps, setReps] = useState(set.reps);

  return (
    <>
      <Text>...</Text>

      <NumericInput placeholder={weight} onChangeText={e => setWeight(e)} />
      <NumericInput placeholder={reps} onChangeText={e => setReps(e)} />

      <Text>...</Text>
    </>
  );
};
