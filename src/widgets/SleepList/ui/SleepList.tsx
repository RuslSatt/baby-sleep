import React, { useEffect } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import SleepCard from '../../../entities/sleep';
import { useSleepStore } from '../../../entities/sleep/model/sleep-store';

const SleepList = () => {
	const { sleeps, fetchSleeps } = useSleepStore();

	useEffect(() => {
		fetchSleeps();
	}, []);

	return (
		<View style={styles.container}>
			<FlatList
				data={sleeps}
				renderItem={({ item }) => <SleepCard {...item} />}
				keyExtractor={(item) => item.id!!.toString()}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});

export default SleepList;