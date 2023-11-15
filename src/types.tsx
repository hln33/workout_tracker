export type StackParamList = {
    History: undefined;
    Home: undefined;
    Profile: undefined;
    Workout: undefined;
};

export type Workout = {
  name: string;
  exercises: Exercise[];
  notes: string;
  duration_s: number;
};

export type Exercise = {
  name: string;
  sets: Set[];
};

export type Set = {
  id: number;
  lbs: number;
  reps: number;
  isComplete: boolean;
};