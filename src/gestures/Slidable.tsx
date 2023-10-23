import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from "react-native-reanimated";
import { Gesture, GestureHandlerRootView, GestureDetector } from "react-native-gesture-handler";
import { StyleProp, StyleSheet, Text, ViewStyle } from "react-native";
import { ReactNode } from "react";


const styles = StyleSheet.create({
  slidingComponent: {
    zIndex: 2,
  },
  underflow: {
    zIndex: 1,
    position: 'absolute',
    backgroundColor: 'red',
    paddingRight: 15
  },
  underflowText: {
    paddingTop: 10,
    color: 'white',
    textAlign: 'right',
    fontWeight: 'bold'
  }
});

const DELETE_THRESHOLD = -135;


interface Props {
  children: ReactNode;
  onSlide: () => void;
  underflowText: string;
  style?: StyleProp<ViewStyle>,
  sizeStyle?: StyleProp<ViewStyle>
};
export const Slidable = (props: Props) => {
  const pressed = useSharedValue(false);
  const offset = useSharedValue(0);

  const tap = Gesture.Pan()
    .onBegin(() => {
      pressed.value = true;
    })
    .onChange(e => {
      offset.value = e.translationX;
    })
    .onFinalize(() => {
      offset.value = withSpring(0);
      pressed.value = false;

      console.log(offset.value);
      if (offset.value <= DELETE_THRESHOLD) {
        props.onSlide();
      }
    })
    .runOnJS(true);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [
      { translateX: offset.value },
    ],
  }));

  return (
    <>
      <GestureHandlerRootView style={[styles.slidingComponent]}>
          <GestureDetector gesture={tap}>
            <Animated.View style={[animatedStyles, props.style, props.sizeStyle]}>
              {props.children}
            </Animated.View>
          </GestureDetector>
      </GestureHandlerRootView>

      <Text style={[styles.underflow, styles.underflowText, props.sizeStyle]}>
        {props.underflowText}
      </Text>
    </>
  );
};