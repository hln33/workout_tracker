import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from './Workout/types'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


type props = NativeStackScreenProps<StackParamList, 'Home'>
export const Home = ({navigation}: props) => {
  return (
    <View style={styles.container}>
      <Text>Workout Tracker</Text>
      <StatusBar style='auto' />
      <Button title='Start a Workout' onPress={() => navigation.navigate('Workout')} />
      <Button title='Profile' onPress={() => navigation.navigate('Profile')} />
      <Button title='History' onPress={() => navigation.navigate('History')} />
    </View>
  );
}
