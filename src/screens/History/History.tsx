import { Text } from 'react-native';
import { useEffect, useState } from 'react';
import { Calendar } from '@Components';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppStackParamList } from '@Navigation';
import { getAllWorkouts } from '@Services';
import { WorkoutType } from '@Types';
import { WorkoutList } from './WorkoutList';


const extractWorkoutDates = (workouts: WorkoutType[]): string[] => {
  const dates: string[] = [];
  workouts.forEach(workout => {
    let date = workout.timestamp.
            toISOString().
            substring(0, 10);
    dates.push(date);
  });
  return dates;
}


interface MarkedDates {
  [date: string]: { selected: boolean }
}
type Props = NativeStackScreenProps<AppStackParamList, 'History'>
export const History = ({ navigation }: Props) => {
  const [markedDates, setMarkedDates] = useState<MarkedDates>({});

  useEffect(() => {
    const fetchData = async () => {
      const workouts = await getAllWorkouts();

      const workoutDates = extractWorkoutDates(workouts);
      const selectedDates = workoutDates.reduce((acc, date) => {
        acc[date] = { selected: true }
        return acc;
      }, {} as MarkedDates); 

      setMarkedDates(selectedDates);
    }
  
    fetchData();
  }, []);

  return (
    <>
      <Text>Calendar</Text>
      <Calendar 
        onDayPress={ date => {
          navigation.navigate('Workout', {dateISOString: date.toISOString()});
        }}
        markedDates={markedDates}
      />

      <WorkoutList />
    </>
  );
};
