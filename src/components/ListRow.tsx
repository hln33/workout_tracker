import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import React, { ReactNode } from 'react';


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


const styles = StyleSheet.create({
  headerRow: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
});
