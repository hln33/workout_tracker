/* eslint-disable indent */

import {
  Modal,
  LayoutChangeEvent,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React, { ReactNode, useCallback, useState } from 'react';

interface Props {
  visible: boolean;
  setVisible: (arg: boolean) => void;
  position?: { x: number; y: number };
  children: ReactNode;
}
export const PopupDialog = ({
  visible,
  setVisible,
  position,
  children,
}: Props) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  // if position is specified then position the modal so that
  // it is relative to the parent component
  const positionContent = useCallback(
    (event: LayoutChangeEvent) => {
      const { width } = event.nativeEvent.layout;
      const { x, y } = position ?? { x: 0, y: 0 };
      setPos({ x: x - width, y });
    },
    [position]
  );

  const positioningStyle: ViewStyle = position
    ? {
        position: 'absolute',
        top: pos.y,
        left: pos.x,
      }
    : {};

  return (
    <Modal animationType='fade' transparent={true} visible={visible}>
      <TouchableOpacity
        style={[styles.centeredView, styles.overlay]}
        onPressIn={() => setVisible(false)}
      >
        <View
          onLayout={positionContent}
          onStartShouldSetResponder={() => true}
          onTouchEnd={(e) => {
            // prevent parent touch event firing
            e.stopPropagation();
          }}
          style={[styles.modalView, positioningStyle]}
        >
          {children}
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    height: '100%',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
