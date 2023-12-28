import { useEffect, useState } from 'react';
import { WorkoutType } from '@Types';
import { getAllWorkouts } from '@Services';

const extractWorkoutDates = (workouts: WorkoutType[]): string[] => {
  const dates: string[] = [];
  workouts.forEach(workout => {
    let date = workout.timestamp
                      .toISOString()
                      .substring(0, 10);
    dates.push(date);
  });
  return dates;
};

interface MarkedDates {
  [date: string]: { selected: boolean };
};
export const useWorkouts = (): [WorkoutType[], MarkedDates] => {
  const [workouts, setWorkouts] = useState<WorkoutType[]>([]);
  const [markedDates, setMarkedDates] = useState<MarkedDates>({});

  useEffect(() => {
    const fetchData = async () => {
      const fetchedWorkouts = await getAllWorkouts();
      const workoutDates = extractWorkoutDates(fetchedWorkouts);
      const selectedDates = workoutDates.reduce((acc, date) => {
        acc[date] = { selected: true }
        return acc;
      }, {} as MarkedDates);

      setWorkouts(fetchedWorkouts);
      setMarkedDates(selectedDates);
    }
  
    fetchData();
  }, []);

  return [workouts, markedDates];
}