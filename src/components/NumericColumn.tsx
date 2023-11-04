import { StyleSheet, View } from 'react-native';
import { ReactNode } from 'react';


const styles = StyleSheet.create({
  column: {
    flex: 1
  },
  box: {
    padding: 5,
    borderRadius: 5,
    width: 30,
    backgroundColor: 'lightgray',
  },
});


interface Props {
  children: ReactNode;
  width: number;
};
export const NumericColumn = (props: Props) => {
  return (
    <View style={styles.column}>
      <View style={[styles.box, {width: props.width}]}>
        {props.children}
      </View>
    </View>
  );
};