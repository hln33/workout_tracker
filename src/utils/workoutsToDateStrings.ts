import { WorkoutType } from '@Types';

export const workoutsToDateStrings = (workouts: WorkoutType[]): string[] => {
  const dates: string[] = [];
  workouts.forEach((workout) => {
    const date = workout.timestamp.toISOString().substring(0, 10);
    dates.push(date);
  });
  return dates;
};
