import React, { useEffect } from 'react';
import { FlatList, View } from 'react-native';
import SleepCard from '../../../entities/sleep';
import { useSleepStore } from '../../../entities/sleep/model/sleep-store';

const SleepList = () => {
	const { sleeps, fetchSleeps } = useSleepStore();

	useEffect(() => {
		fetchSleeps();
	}, []);

	return (
		<View>
			<FlatList
				data={sleeps}
				renderItem={({ item }) => <SleepCard {...item} />}
				keyExtractor={(item) => item.$id.toString()}
			/>
		</View>
	);
};

export default SleepList;