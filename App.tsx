import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { History, Home, Profile, Workout } from './src/screens'
import { StackParamList } from './types';

const Stack = createNativeStackNavigator<StackParamList>();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="History" component={History} />
        <Stack.Screen name="Workout" component={Workout} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;