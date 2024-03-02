import { WorkoutType } from '@Types';
import { SectionList, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';

interface Data {
  title: string;
  data: WorkoutType[];
}
interface Props {
  workouts: WorkoutType[];
}
export const WorkoutList = (props: Props) => {
  const [data, setData] = useState<Data[]>([]);
  useEffect(() => {
    const newData: Data[] = [{ title: 'Workouts', data: [] }];
    props.workouts.forEach((workout) => {
      newData[0].data.push(workout);
    });
    setData(newData);
  }, [props.workouts]);

  return (
    <View>
      <Text>Workouts:</Text>
      <SectionList
        sections={data}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item.timestamp.toISOString()}</Text>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
});
