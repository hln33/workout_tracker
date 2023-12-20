export class Workout {
  name: string;
  notes: string;
  exercises: Exercise[];
  timestamp: Date;

  constructor(json?:any) {
    if (json) {
      this.name = json.name;
      this.notes = json.notes;
      this.exercises = json.exercises;
      this.timestamp = new Date(json.timestamp);
      return;
    }

    // default
    this.name = 'Workout Name';
    this.notes = 'Notes'
    this.exercises = [];
    this.timestamp = new Date();
  }

  getCurrentWorkoutSets = (exerName: string) => {
    const exercise = this.exercises.find(e => e.name === exerName);
    return exercise?.sets ?? [];
  };
}

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