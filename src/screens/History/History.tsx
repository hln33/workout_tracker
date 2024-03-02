import { Text } from 'react-native';
import React from 'react';
import { Calendar } from '@Components';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppStackParamList } from '@Navigation';
import { WorkoutList } from './WorkoutList';

import { useWorkouts } from '../../hooks/useWorkouts';

type Props = NativeStackScreenProps<AppStackParamList, 'History'>;
export const History = ({ navigation }: Props) => {
  const [workouts, markedDates] = useWorkouts();

  return (
    <>
      <Text>Calendar</Text>
      <Calendar
        onDayPress={(date) => {
          navigation.navigate('Workout', { dateISOString: date.toISOString() });
        }}
        markedDates={markedDates}
      />

      <WorkoutList workouts={workouts} />
    </>
  );
};
