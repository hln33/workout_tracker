import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import React, { ReactNode } from 'react';


const styles = StyleSheet.create({
  headerRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  rows: {
    paddingTop: 5,
    paddingBottom: 10,
  },
});


interface Props {
  children: ReactNode;
  columnStyle?: StyleProp<ViewStyle>;
};
export const ListRow = (props: Props) => {

  return (
    <View style={styles.headerRow}>
      {props.children}
    </View>
  );
};