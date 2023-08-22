import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { History, Home, Profile, Workout } from '../screens'


export type AppStackParamList = {
  History: undefined;
  Home: undefined;
  Profile: undefined;
  Workout: { dateISOString: string };
};


const Stack = createNativeStackNavigator<AppStackParamList>();
export const AppStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="History" component={History} />
      <Stack.Screen name="Workout" component={Workout} />
    </Stack.Navigator>
  );
}