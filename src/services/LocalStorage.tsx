import AsyncStorage from '@react-native-async-storage/async-storage';
import { WorkoutType } from '@Types';


const WORKOUT_IDENTIFIER = 'workout:';


export const saveWorkout = async (workout:WorkoutType) => {
  console.log('saving workout to local storage');
  const key = WORKOUT_IDENTIFIER + workout.timestamp.toISOString().substring(0, 10);
  const value = JSON.stringify(workout);

  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    throw(e);
  }
}

export const getWorkout = async (date:Date): Promise<WorkoutType|null> => {
  console.log('getting workout from local storage')
  const key = WORKOUT_IDENTIFIER + date.toISOString().substring(0, 10);
  try {
    const value = await AsyncStorage.getItem(key); 
    return parseWorkout(value);
  } catch (e) {
    throw(e);
  }
}

export const getAllWorkouts = async () => {
  console.log('getting all workouts from local storage');

  const workouts: WorkoutType[] = [];
  let keys: readonly string[] = await getAllKeys();
  await Promise.all(keys.map(async key => {
    if (!key.startsWith(WORKOUT_IDENTIFIER)) { return; }

    const dateISOString = key.replace(WORKOUT_IDENTIFIER, '');
    const workout = await getWorkout(new Date(dateISOString));
    if (workout !== null) {
      workouts.push(workout);
    }
  }))

  return workouts;
}

const getAllKeys = async (): Promise<readonly string[]> => {
  let keys: readonly string[] = [];
  try {
    keys = await AsyncStorage.getAllKeys();
  } catch (e) {
    throw(e);
  }
  return keys;
}

const parseWorkout = (value: string|null): WorkoutType|null => {
  if (!value) {
    return null;
  }

  const workout: WorkoutType = JSON.parse(value);
  workout.timestamp = new Date(workout.timestamp);
  return workout;
}
