import { useState } from 'react';
import { Button, Modal, StyleSheet, Text, TextInput, View } from 'react-native';
import { ExerciseInput } from './ExerciseInput';

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export const Workout = () => {
  const [workoutName, setWorkoutName] = useState('');
  const [notes, setNotes] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <TextInput 
        placeholder="Workout Name"
        onChangeText={input => setWorkoutName(input)}
      />
      <TextInput 
        multiline={true}
        placeholder="Notes"
        onChangeText={input => setNotes(input)}
      />

      <Button 
        title="Add Exercise"
        onPress={() => setModalVisible(true)}
      />
      <Modal visible={modalVisible}>
        <ExerciseInput setVisible={setModalVisible}/>
      </Modal>

      <Button title="Finish" />
    </View>
  );
}