import { FlatList, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { SetInfo } from './index';
import { ListRow } from '../../../components';
import { Set } from '../../../types'


const styles = StyleSheet.create({
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
      <ListRow>
        <Text style={styles.column}>Set</Text>
        <Text style={[styles.column, {backgroundColor: 'green'}]}>Weight</Text>
        <Text style={styles.column}>Reps</Text>
        <Icon style={styles.column} name='check'/>
      </ListRow>

      <FlatList
        style={styles.rows}
        data={props.sets}
        renderItem={({item}) => (
            <SetInfo exerciseName={props.name} set={item} />
        )}
      />
    </View>
  );
};