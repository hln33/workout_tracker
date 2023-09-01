import { useState } from 'react';
import { Text, View } from 'react-native';
import { NumericInput, DeleteButton } from '../../../components/index';
import { Set } from '../../../types';


interface Props {
  set: Set;
  onDelete: (index: number) => void;
  onUpdate: (index: number, lbs: number, reps: number) => void;
};
export const SetDisplay = (props: Props) => {
  const [weight, setWeight] = useState(props.set.lbs);
  const [reps, setReps] = useState(props.set.reps);

  const id = props.set.id
  const onDelete = () => {
    props.onDelete(id);
  };
  const onUpdate = () => {
    props.onUpdate(id, weight, reps);
};

  return (
    <View style={{flexDirection: 'row'}}>
      <Text style={{flex: 1}}>{props.set.id + 1}</Text>

      <NumericInput 
        style={{flex: 1}}
        placeholder={weight} 
        onEndEditing={e => {
          setWeight(e);
          onUpdate();
        }}
      />
      <NumericInput 
        style={{flex: 1}} 
        placeholder={reps} 
        onEndEditing={e => {
          setReps(e);
          onUpdate();
        }}
      />

      <DeleteButton onDelete={onDelete} />
    </View>
  );
};
