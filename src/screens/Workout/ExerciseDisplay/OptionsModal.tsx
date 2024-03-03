import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React, { useRef, useState } from 'react';
import { PopupDialog } from '@Components';

export const OptionsModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });
  const modalParentRef = useRef<TouchableOpacity>(null);

  const onLayout = () => {
    modalParentRef?.current?.measure(
      (
        x: number,
        y: number,
        width: number,
        height: number,
        pageX: number,
        pageY: number
      ) => {
        setModalPosition({ x: pageX, y: pageY - height });
      }
    );
  };

  return (
    <>
      <TouchableOpacity
        ref={modalParentRef}
        onLayout={onLayout}
        onPress={() => setModalVisible(true)}
      >
        <Icon style={styles.optionsIcon} name='ellipsis-h' />
      </TouchableOpacity>

      <PopupDialog
        visible={modalVisible}
        setVisible={setModalVisible}
        position={modalPosition}
      >
        <View style={styles.optionsMenu}>
          <TouchableOpacity>
            <View style={styles.row}>
              <Icon style={styles.deleteIcon} name='minus-circle' size={20} />
              <Text style={styles.rowText}>Delete Exercise</Text>
            </View>
          </TouchableOpacity>
        </View>
      </PopupDialog>
    </>
  );
};

const styles = StyleSheet.create({
  optionsIcon: {
    paddingTop: 6,
    borderWidth: 1,
    fontSize: 15,
    color: 'cadetblue',
  },
  optionsMenu: {
    padding: 7.5,
  },
  row: {
    flexDirection: 'row',
    fontSize: 25,
    padding: 12.5,
    borderWidth: 0,
    alignItems: 'center',
  },
  rowText: {
    fontSize: 15,
  },
  deleteIcon: {
    color: 'red',
    paddingTop: 2,
    marginRight: 5,
  },
});
