export type StackParamList = {
    History: undefined;
    Home: undefined;
    Profile: undefined;
    Workout: undefined;
};

export type Exercise = {
  name: string;
  sets: Set[];
}

export type Set = {
  id: number;
  lbs: number;
  reps: number;
}