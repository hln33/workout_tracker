import React, { createContext, ReactNode, useState } from "react";
import { useContext } from "react";
import { WorkoutType } from "../types";


const DefaultWorkout: WorkoutType = {name: 'Workout Name', notes: 'Notes', exercises: [], timestamp: new Date()};


type CurrentWorkoutContextType = {
  workout: WorkoutType;
  setWorkout: (workout: WorkoutType) => void;
};
const CurrentWorkoutContext = createContext<CurrentWorkoutContextType>({
  workout: DefaultWorkout,
  setWorkout: () => null
});
 

export const getCurrentWorkoutSets = (workout: WorkoutType, exerName: string) => {
  const exercise = workout.exercises.find(e => e.name === exerName);
  return exercise?.sets ?? [];
};


export const useCurrentWorkout = () => {
  return useContext(CurrentWorkoutContext);
}


interface Props {
  children: ReactNode;
};
export const CurrentWorkoutProvider = (props: Props) => {
  const [workout, setWorkout] = useState<WorkoutType>(DefaultWorkout);
  
  return (
    <CurrentWorkoutContext.Provider value={{ workout, setWorkout }}>
      {props.children}
    </CurrentWorkoutContext.Provider>
  );
};
