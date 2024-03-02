import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {
  Gesture,
  GestureHandlerRootView,
  GestureDetector,
} from 'react-native-gesture-handler';
import { StyleProp, ViewStyle } from 'react-native';
import { ReactNode } from 'react';

const EVENT_THRESHOLD = -135;
interface Props {
  onSlide: () => void;
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  sizeStyle?: StyleProp<ViewStyle>;
}
export const SlideGesture = (props: Props) => {
  const offset = useSharedValue(0);

  const pan = Gesture.Pan()
    .onBegin(() => {})
    .onChange((e) => {
      const swipedLeft = e.velocityX < 0;
      if (swipedLeft) {
        offset.value = e.translationX;
      }
    })
    .onFinalize(() => {
      offset.value = withTiming(0, {
        duration: 600,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      });

      // console.log(offset.value);
      if (offset.value <= EVENT_THRESHOLD) {
        props.onSlide();
      }
    })
    .runOnJS(true);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: offset.value }],
  }));

  return (
    <GestureHandlerRootView>
      <GestureDetector gesture={pan}>
        <Animated.View style={[animatedStyles, props.style, props.sizeStyle]}>
          {props.children}
        </Animated.View>
      </GestureDetector>
    </GestureHandlerRootView>
  );
};
