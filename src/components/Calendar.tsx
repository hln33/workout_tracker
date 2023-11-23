import {Calendar as CalendarDependency} from 'react-native-calendars';


interface Props {
  onDayPress: ((date: Date) => void);
}
export const Calendar = (props: Props) => {
  return (
    <CalendarDependency 
      onDayPress={ day => {
        let date = new Date(day.dateString);
        props.onDayPress(date);
      }}
      markedDates={{
        '2023-11-02': {selected: true}
      }}
    />
  )
} 