import { useState } from 'react';
import { Button, Modal, StyleSheet, Text, TextInput, View } from 'react-native';

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

export const ExerciseInput = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState('');
  const [sets, setSets] = useState(0);
  const [reps, setReps] = useState(0);

  return (
    <>
      <Button 
        title='Add Exercise'
        onPress={() => setModalVisible(true)}
      />

      <Modal visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text>New Exercise</Text>
            <TextInput 
              placeholder='Name'
              onChangeText={(e) => setName(e)}
            />
            <TextInput 
              placeholder='Sets'
              keyboardType='numeric'
              onChangeText={(e) => setSets(Number(e))}
            />
            <TextInput 
              placeholder='Reps'
              keyboardType='numeric'
              onChangeText={(e) => setReps(Number(e))}
            />
            <Button 
              title='Close'
              onPress={() => setModalVisible(false)}
            />
          </View>
        </View>
      </Modal>

    </>
  );
}
