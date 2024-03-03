import { Modal, StyleSheet, TouchableOpacity, View } from 'react-native';
import React, { ReactNode } from 'react';

interface Props {
  visible: boolean;
  setVisible: (arg: boolean) => void;
  children: ReactNode;
}
export const InputDialog = (props: Props) => {
  return (
    <Modal animationType='fade' transparent={true} visible={props.visible}>
      <TouchableOpacity
        style={[styles.centeredView, styles.overlay]}
        onPressIn={() => props.setVisible(false)}
      >
        <View style={styles.modalView}>{props.children}</View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.6)',
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
