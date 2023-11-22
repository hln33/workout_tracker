import { Text } from 'react-native';
import {Calendar} from 'react-native-calendars'; 
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from '@Types'


type Props = NativeStackScreenProps<StackParamList, 'History'>
export const History = ({ navigation }: Props) => {
  return (
    <>
      <Text>Calendar</Text>
      <Calendar 
        onDayPress={day => {
          console.log(day);
          navigation.navigate('Workout');
        }}
      />
    </>
  );
};
