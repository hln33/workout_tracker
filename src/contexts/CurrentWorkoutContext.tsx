import React, { createContext, ReactNode, useState } from "react";
import { useContext } from "react";
import { Workout } from "../types";


const DefaultWorkout: Workout = {name: 'Workout Name', notes: 'Notes', exercises: []};


type CurrentWorkoutContextType = {
  workout: Workout;
  setWorkout: (workout: Workout) => void;
};
const CurrentWorkoutContext = createContext<CurrentWorkoutContextType>({
  workout: DefaultWorkout,
  setWorkout: () => null
});
 

export const getCurrentWorkoutSets = (workout: Workout, exerName: string) => {
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
  const [workout, setWorkout] = useState<Workout>(DefaultWorkout);
  
  return (
    <CurrentWorkoutContext.Provider value={{ workout, setWorkout }}>
      {props.children}
    </CurrentWorkoutContext.Provider>
  );
};
