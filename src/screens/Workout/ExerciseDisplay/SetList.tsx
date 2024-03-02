import {
  FlatList,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SetInfo } from './SetInfo';
import { ListRow } from '@Components';
import { Set } from '@Types';

interface Props {
  sets: ArrayLike<Set> | null | undefined;
  name: string;
  style?: StyleProp<ViewStyle>;
}
export const SetList = (props: Props) => {
  return (
    <View>
      <FlatList
        style={styles.rows}
        ListHeaderComponent={<HeaderRow />}
        data={props.sets}
        renderItem={({ item }) => (
          <SetInfo
            exerciseName={props.name}
            set={item}
            columnStyle={styles.column}
          />
        )}
      />
    </View>
  );
};

const HeaderRow = () => {
  return (
    <ListRow>
      <Text style={styles.column}>Set</Text>
      <Text style={styles.column}>Weight</Text>
      <Text style={styles.column}>Reps</Text>
      <Icon style={styles.column} name='check' />
    </ListRow>
  );
};

const styles = StyleSheet.create({
  column: {
    flex: 1,
    marginHorizontal: 15,
    fontSize: 15,
    fontWeight: 'bold',
  },
  rows: {
    paddingTop: 5,
    paddingBottom: 10,
  },
});
