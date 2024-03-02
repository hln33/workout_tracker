import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppStackParamList } from '@Navigation';

type Props = NativeStackScreenProps<AppStackParamList, 'Home'>;
export const Home = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Text>Workout Tracker</Text>
      <StatusBar style='auto' />

      <Button
        title='Start a Workout'
        onPress={() => {
          const currentDate = new Date();
          navigation.navigate('Workout', {
            dateISOString: currentDate.toISOString(),
          });
        }}
      />
      <Button title='Profile' onPress={() => navigation.navigate('Profile')} />
      <Button title='History' onPress={() => navigation.navigate('History')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
