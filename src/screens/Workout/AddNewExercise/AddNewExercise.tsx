import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from '@Components';
import { NewExerciseModal } from './NewExerciseModal';

export const AddNewExercise = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Button
        onAdd={() => setModalVisible(true)}
        text={'Add Exercise'}
        textColor={'darkblue'}
        size={'medium'}
        backgroundColor={'cornflowerblue'}
      />

      <NewExerciseModal visible={modalVisible} setVisible={setModalVisible} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 25,
  },
});
