import { NavigationContainer } from '@react-navigation/native';
import { CurrentWorkoutProvider } from '@Contexts';
import { AppStackNavigator } from './src/navigation/AppStackNavigator';


const App = () => {
  return (
    <NavigationContainer>
      <CurrentWorkoutProvider>
        <AppStackNavigator />
      </CurrentWorkoutProvider>
    </NavigationContainer>
  );
};

export default App;
