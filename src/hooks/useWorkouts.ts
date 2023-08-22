import { useEffect, useState } from 'react';
import { WorkoutType } from '@Types';
import { getAllWorkouts } from '@Services';
import { workoutsToDateStrings } from '@Utils';


interface MarkedDates {
  [date: string]: { selected: boolean };
}
export const useWorkouts = (): [WorkoutType[], MarkedDates] => {
  const [workouts, setWorkouts] = useState<WorkoutType[]>([]);
  const [markedDates, setMarkedDates] = useState<MarkedDates>({});

  useEffect(() => {
    const fetchData = async () => {
      const fetchedWorkouts = await getAllWorkouts();
      const workoutDates = workoutsToDateStrings(fetchedWorkouts);
      const selectedDates = workoutDates.reduce((acc, date) => {
        acc[date] = { selected: true };
        return acc;
      }, {} as MarkedDates);

      setWorkouts(fetchedWorkouts);
      setMarkedDates(selectedDates);
    };
  
    fetchData();
  }, []);

  return [workouts, markedDates];
};
