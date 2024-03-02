import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import React, { ReactNode } from 'react';
import { SlideGesture } from '../gestures';

interface Props {
  onSlide: () => void;
  children: ReactNode;
  underflowText: string;
  style?: StyleProp<ViewStyle>;
  sizeStyle?: StyleProp<ViewStyle>;
}
export const Slidable = (props: Props) => {
  return (
    <View style={styles.slidable}>
      <View style={styles.overlay}>
        <SlideGesture
          onSlide={props.onSlide}
          style={props.style}
          sizeStyle={props.sizeStyle}
        >
          {props.children}
        </SlideGesture>
      </View>

      <View style={[styles.underflowContainer, props.sizeStyle]}>
        <Text style={[styles.underflowText]}>{props.underflowText}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  slidable: {},
  overlay: {
    zIndex: 2,
  },
  underflowContainer: {
    zIndex: 1,
    flex: 1,
    position: 'absolute',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  underflowText: {
    color: 'white',
    textAlign: 'right',
    fontWeight: 'bold',
    paddingRight: 15,
  },
});
