import { useContext, useEffect, useRef, useState } from 'react';
import { Button, Text, View } from 'react-native';
import { CurrentWorkoutContext } from '@Contexts';


interface Props {

};
export const Timer = (props: Props) => {
  const { workout, setWorkout } = useContext(CurrentWorkoutContext);

  const [active, setActive] = useState(workout.duration_s > 0);
  const [seconds, setSeconds] = useState(workout.duration_s);
  const timerIdRef = useRef(0);


  // run timer
  useEffect(() => {
    if (active) {
      timerIdRef.current = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);
    } else {
      clearInterval(timerIdRef.current);
      setSeconds(0);
    }
  }, [active]);

  // save timer value in context on screen exit
  useEffect(() => {
    return () => { 
      console.log('new')
      console.log(seconds);
      setWorkout({ ...workout, duration_s: seconds })
    }
  }, []);

  return (
    <>
      <Text>Timer:{seconds}</Text>
      <Button title='Start Timer' onPress={() => setActive(true)}/>
      <Button title='Stop Timer' onPress={() => setActive(false)}/>
    </>
  );
};

// Timer.defaultProps = {
//   timerVal: 5
// };
