import { createContext, ReactNode, useState } from "react";
import { Workout } from "../types";


const DefaultWorkout: Workout = {name: '', exercises: []}

type CurrentWorkoutContextType = {
  workout: Workout;
  setWorkout: (workout: Workout) => void;
};
export const CurrentWorkoutContext = createContext<CurrentWorkoutContextType>({
  workout: DefaultWorkout,
  setWorkout: () => null
});


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
