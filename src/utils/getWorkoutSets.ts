import { WorkoutType } from "@Types";


export const getCurrentWorkoutSets = (workout: WorkoutType, exerName: string) => {
  const exercise = workout.exercises.find(e => e.name === exerName);
  return exercise?.sets ?? [];
};
