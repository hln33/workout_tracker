import { Button, StyleSheet, Text, View } from 'react-native';

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

interface Props {
  setVisible: (status: boolean) => void
}

export const ExerciseInput = (props: Props) => {
  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Text>Input Please</Text>
        <Button 
          title="Close"
          onPress={() => props.setVisible(false)}
        />
      </View>
    </View>
  );
}