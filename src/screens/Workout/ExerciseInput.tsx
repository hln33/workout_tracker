import { useState } from 'react';
import { ViewStyle } from 'react-native';
import { StyleProp } from 'react-native';
import { Button, Text, TextInput, View } from 'react-native';
import { AddButton, InputDialog } from '../../components'
import { Exercise } from '../../types'


interface Props {
  onAdd: (exercise: Exercise) => void;
  style?: StyleProp<ViewStyle>;
};
export const ExerciseInput = (props: Props) => {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState('');

  return (
    <View style={props.style}>
      <AddButton 
        onAdd={() => setVisible(true)}
        text={'Add Exercise'}
        textColor={'skyblue'}
        backgroundColor={'mintcream'}
      />

      <InputDialog visible={visible}>
        <Text>New Exercise</Text>
        <TextInput placeholder='Name' onChangeText={(e) => setName(e)} />
        <Button 
          title='Add' 
          onPress={() => {
            props.onAdd({name: name, sets: [{id: 0, lbs: 0, reps: 0}]});
            setVisible(false);
          }} 
        />
        <Button title='Close' onPress={() => setVisible(false)} />
      </InputDialog>
    </View>
  );
}
