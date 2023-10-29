import Animated, { Easing, useAnimatedStyle, useSharedValue, withSpring, withTiming } from "react-native-reanimated";
import { Gesture, GestureHandlerRootView, GestureDetector } from "react-native-gesture-handler";
import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import { ReactNode } from "react";


const styles = StyleSheet.create({
  slidingComponent: {
    zIndex: 2,
  },
  underflow: {
    zIndex: 1,
    position: 'absolute',
    backgroundColor: 'red',
    paddingRight: 15,
  },
  underflowText: {
    paddingTop: 10,
    color: 'white',
    textAlign: 'right',
    fontWeight: 'bold',
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
  const offset = useSharedValue(0);

  const pan = Gesture.Pan()
    .onBegin(() => {

    })
    .onChange(e => {
      const swipedLeft = e.velocityX < 0;
      if (swipedLeft) {
       offset.value = e.translationX;
      }
    })
    .onFinalize(() => {
      offset.value = withTiming(0, {
        duration: 600,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1)
      });

      // console.log(offset.value);
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
    <View style={{marginVertical: 10}}>
      <GestureHandlerRootView style={[styles.slidingComponent]}>
          <GestureDetector gesture={pan}>
            <Animated.View style={[animatedStyles, props.style, props.sizeStyle]}>
              {props.children}
            </Animated.View>
          </GestureDetector>
      </GestureHandlerRootView>

      <Text style={[styles.underflow, styles.underflowText, props.sizeStyle]}>
        {props.underflowText}
      </Text>
    </View>
  );
};