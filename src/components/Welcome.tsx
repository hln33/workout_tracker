import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const Welcome = () => {
  const pressed = () => {
    Alert.alert("starting workout");
  }

  return (
    <View style={styles.container}>
      <Text>Workout Tracker</Text>
      <StatusBar style="auto" />

      <Button 
        onPress={pressed}
        title="Start a Workout" 
      />        
    </View>
  );
}
  