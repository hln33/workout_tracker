import AsyncStorage from '@react-native-async-storage/async-storage';
import { Workout } from '@Types';

export const saveWorkout = async (workout:Workout) => {
  console.log("saving workout");
  console.log(workout);
  try {
    await AsyncStorage.setItem('x', 'localstorage item');
  } catch (e) {
    console.log(e);
  }
}

export const getWorkout = async (key) => {
  try {
    const value = await AsyncStorage.getItem('x');
    return value;
  } catch (e) {
    console.log(e);
  }
}
