import { Text } from 'react-native';
import { Calendar } from '@Components';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppStackParamList } from '../navigation/AppStackNavigator';


type Props = NativeStackScreenProps<AppStackParamList, 'History'>
export const History = ({ navigation }: Props) => {
  return (
    <>
      <Text>Calendar</Text>
      <Calendar 
        onDayPress={ date => {
          navigation.navigate('Workout', {dateISOString: date.toISOString()});
        }}
      />
    </>
  );
};
