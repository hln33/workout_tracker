import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CurrentWorkoutProvider } from './src/context/CurrentWorkoutContext';
import { History, Home, Profile, Workout } from './src/screens'
import { StackParamList } from './src/types';


const Stack = createNativeStackNavigator<StackParamList>();
const App = () => {
  return (
    <NavigationContainer>
      <CurrentWorkoutProvider>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="History" component={History} />
          <Stack.Screen name="Workout" component={Workout} />
        </Stack.Navigator>
      </CurrentWorkoutProvider>
    </NavigationContainer>
  );
};

export default App;
