import { Calendar as CalendarDependency } from 'react-native-calendars';
import { useEffect, useState } from 'react';
import { getAllWorkoutDates } from '@Services';


interface MarkedDates {
  [date: string]: { selected: boolean }
}
interface Props {
  onDayPress: ((date: Date) => void);
}
export const Calendar = (props: Props) => {
  const [markedDates, setMarkedDates] = useState<MarkedDates>();

  useEffect(() => {
    const fetchData = async () => {
      const workoutDates = await getAllWorkoutDates();
      const selectedDates = workoutDates.reduce((acc, date) => {
        acc[date] = { selected: true }
        return acc;
      }, {} as MarkedDates); 

      setMarkedDates(selectedDates);
    }
  
    fetchData();
  }, []);

  return (
    <CalendarDependency 
      onDayPress={ day => {
        let date = new Date(day.dateString);
        props.onDayPress(date);
      }}
      markedDates={markedDates}
    />
  )
} 