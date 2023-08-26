import { Text, View } from 'react-native';


interface Props {
  name: string,
  sets: number,
  reps: number
}
export const ExerciseDisplay = (props: Props) => {
  return (
    <>
      <Text>{props.name}: {props.sets}x{props.reps}</Text>
    </>
  );
}