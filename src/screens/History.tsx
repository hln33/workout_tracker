import { Text } from 'react-native';
import {Calendar} from 'react-native-calendars'; 
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppStackParamList } from '../navigation/AppStackNavigator';


type Props = NativeStackScreenProps<AppStackParamList, 'History'>
export const History = ({ navigation }: Props) => {
  return (
    <>
      <Text>Calendar</Text>
      <Calendar 
        onDayPress={day => {
          let date = new Date(day.dateString);
          console.log(date.toISOString());

          navigation.navigate('Workout', {dateISOString: date.toISOString()});
        }}
        markedDates={{
          '2023-11-02': {selected: true}
        }}
      />
    </>
  );
};
