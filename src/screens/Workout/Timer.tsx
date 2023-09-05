import { useEffect, useRef, useState } from 'react';
import { Button, Text, View } from 'react-native';


export const Timer = () => {
  const [active, setActive] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const timerIdRef = useRef(0);

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

  return (
    <>
      <Text>Timer:{seconds}</Text>
      <Button title='Start Timer' onPress={() => setActive(true)}/>
      <Button title='Stop Timer' onPress={() => setActive(false)}/>
    </>
  );
};
