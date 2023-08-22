import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const pressed = () => {
    Alert.alert("hi");
  }

  return (
    <View style={styles.container}>
      <Text>Workout Tracker</Text>
      <StatusBar style="auto" />

      <Button 
        onPress={pressed}
        title="Press Me" 
      />        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
