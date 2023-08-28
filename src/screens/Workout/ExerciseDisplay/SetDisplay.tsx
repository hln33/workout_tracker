import { useState } from 'react';
import { Text, View } from 'react-native';
import { NumericInput, DeleteButton } from '../../../components/index'
import { Set } from '../types';

interface Props {
  set: Set;
  onDelete: (index: number) => void;
};
export const SetDisplay = (props: Props) => {
  const [weight, setWeight] = useState(props.set.lbs);
  const [reps, setReps] = useState(props.set.reps);
  const onDelete = () => {
    props.onDelete(props.set.id);
  };

  return (
    <View style={{flexDirection: 'row'}}>
      <Text style={{flex: 1}}>{props.set.id + 1}</Text>
      <NumericInput style={{flex: 1}} placeholder={weight} onChangeText={e => setWeight(e)} />
      <NumericInput style={{flex: 1}} placeholder={reps} onChangeText={e => setReps(e)} />
      <DeleteButton onDelete={onDelete}/>
    </View>
  );
};
