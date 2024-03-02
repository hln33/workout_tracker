import React, { createContext, ReactNode, useContext, useState } from 'react';
import { WorkoutType } from '@Types';
import { saveWorkout } from '@Services';

const DEFAULT_WORKOUT: WorkoutType = {
  name: 'Workout Name',
  notes: 'Notes',
  exercises: [],
  timestamp: new Date(),
};

type CurrentWorkoutContextType = {
  workout: WorkoutType;
  updateWorkout: (workout: WorkoutType) => void;
};
const CurrentWorkoutContext = createContext<CurrentWorkoutContextType>({
  workout: DEFAULT_WORKOUT,
  updateWorkout: () => null,
});

export const useCurrentWorkout = () => {
  return useContext(CurrentWorkoutContext);
};

interface Props {
  children: ReactNode;
}
export const CurrentWorkoutProvider = (props: Props) => {
  const [workout, setWorkout] = useState<WorkoutType>(DEFAULT_WORKOUT);
  const updateWorkout = (workout: WorkoutType) => {
    setWorkout(workout);
    saveWorkout(workout);
  };

  return (
    <CurrentWorkoutContext.Provider value={{ workout, updateWorkout }}>
      {props.children}
    </CurrentWorkoutContext.Provider>
  );
};
