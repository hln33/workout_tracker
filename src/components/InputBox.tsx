import { StyleSheet, StyleProp, View, ViewStyle } from 'react-native';
import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  width: number;
  style?: StyleProp<ViewStyle>;
}
export const InputBox = (props: Props) => {
  return (
    <View style={props.style}>
      <View style={[styles.box, { width: props.width }]}>{props.children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    padding: 5,
    borderRadius: 5,
    backgroundColor: 'lightgray',
  },
});
