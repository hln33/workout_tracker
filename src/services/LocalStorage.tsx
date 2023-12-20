import AsyncStorage from '@react-native-async-storage/async-storage';
import { Workout } from '@Types';

export const saveWorkout = async (workout:Workout) => {
  console.log('saving workout to local storage');

  const key = workout.timestamp.toISOString().substring(0, 10);
  const value = JSON.stringify(workout);
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    throw(e)
  }
}

export const getWorkout = async (date:Date): Promise<Workout|null> => {
  console.log('getting workout from local storage')

  const key = date.toISOString().substring(0, 10);
  try {
    const value = await AsyncStorage.getItem(key); 
    if (value === null) {
      return null;
    }
    
    const workout:Workout = JSON.parse(value);
    workout.timestamp = new Date(workout.timestamp);
    return workout;
  } catch (e) {
    throw(e)
  }
}
