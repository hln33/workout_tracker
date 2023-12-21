export type WorkoutType = {
  name: string;
  exercises: Exercise[];
  notes: string;
  timestamp: Date;
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
