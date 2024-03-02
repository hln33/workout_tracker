import { Calendar as CalendarDependency } from 'react-native-calendars';
import React from 'react-native';

interface Props {
  onDayPress: (date: Date) => void;
  markedDates: {};
}
export const Calendar = (props: Props) => {
  return (
    <CalendarDependency
      onDayPress={(day) => {
        const date = new Date(day.dateString);
        props.onDayPress(date);
      }}
      markedDates={props.markedDates}
    />
  );
};
