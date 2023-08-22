import { NavigationContainer } from '@react-navigation/native';
import { CurrentWorkoutProvider } from '@Contexts';
import { AppStackNavigator } from '@Navigation';


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
