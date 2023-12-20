import React, { createContext, ReactNode, useContext, useState } from "react";
import { WorkoutType } from "@Types";
import { saveWorkout } from "@Services";


const DefaultWorkout: WorkoutType = {name: 'Workout Name', notes: 'Notes', exercises: [], timestamp: new Date()};


type CurrentWorkoutContextType = {
  workout: WorkoutType;
  updateWorkout: (workout: WorkoutType) => void;
};
const CurrentWorkoutContext = createContext<CurrentWorkoutContextType>({
  workout: DefaultWorkout,
  updateWorkout: () => null
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
  const updateWorkout = (workout: WorkoutType) => {
    setWorkout(workout);
    saveWorkout(workout);
  }
  
  return (
    <CurrentWorkoutContext.Provider value={{ workout, updateWorkout }}>
      {props.children}
    </CurrentWorkoutContext.Provider>
  );
};
