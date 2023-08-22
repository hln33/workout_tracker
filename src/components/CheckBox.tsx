import {default as CBDependency} from 'expo-checkbox';


interface Props {
  checked: boolean
  onValueChange: (value: boolean) => void;
};
export const CheckBox = (props: Props) => {
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