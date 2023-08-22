import { useState } from 'react';
import { Button, Modal, StyleSheet, Text, View } from 'react-native';

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

  return (
    <>
      <Button 
        title="Add Exercise"
        onPress={() => setModalVisible(true)}
      />
      <Modal visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text>Input Please</Text>
            <Button 
              title="Close"
              onPress={() => setModalVisible(false)}
            />
          </View>
        </View>
      </Modal>
    </>
  );
}
