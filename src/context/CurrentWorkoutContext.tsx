import { createContext, ReactNode, useState } from "react";
import { Workout } from "../types";

type CurrentWorkoutContextType = {
  workout: Workout | null;
  setWorkout: (workout: Workout) => void;
}
const CurrentWorkoutContext = createContext<CurrentWorkoutContextType>({
  workout: null,
  setWorkout: () => null
})


interface Props {
  children: ReactNode;
};
export const CurrentWorkoutProvider = (props: Props) => {
  const [workout, setWorkout] = useState<Workout | null>(null);
  
  return (
    <CurrentWorkoutContext.Provider value={{ workout, setWorkout }}>
      {props.children}
    </CurrentWorkoutContext.Provider>
  );
};
