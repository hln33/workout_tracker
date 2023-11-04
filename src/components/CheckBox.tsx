import {default as CBDependency} from 'expo-checkbox';
import { useState } from 'react';


export const CheckBox = () => {
  const [isChecked, setChecked] = useState(false);

  return (
    <>
      <CBDependency 
        value={isChecked}
        onValueChange={setChecked}
        color={isChecked ? 'green' : undefined}
      />
    </>
  );
}