import { FlatList, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { SetDisplay } from './index';
import { Set } from '../../../types'


const styles = StyleSheet.create({
  headerRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
    paddingHorizontal: 10,
  },
  column: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  rows: {
    paddingTop: 5,
    paddingBottom: 10,
  },
});


interface Props {
  sets: ArrayLike<Set> | null | undefined;
  name: string;
  style?: StyleProp<ViewStyle>;
};
export const SetList = (props: Props) => {
  return (
    <View>
      <View style={styles.headerRow}>
        <Text style={styles.column}>Set</Text>
        <Text style={[styles.column, {backgroundColor: 'green'}]}>Weight</Text>
        <Text style={styles.column}>Reps</Text>
        <Icon style={styles.column} name='check'/>
      </View>

      <FlatList
        style={styles.rows}
        data={props.sets}
        renderItem={({item}) => (
            <SetDisplay exerciseName={props.name} set={item} />
        )}
      />
    </View>
  );
};