import {default as CBDependency} from 'expo-checkbox';
import { useState } from 'react';

interface Props {
  checked: boolean
  onValueChange: (value: boolean) => void;
};
export const CheckBox = (props: Props) => {
  // const [isChecked, setChecked] = useState(props.value);

  return (
    <>
      <CBDependency 
        value={props.checked}
        onValueChange={props.onValueChange}
        color={props.checked ? 'green' : undefined}
      />
    </>
  );
}