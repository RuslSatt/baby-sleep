import React from 'react';
import SleepCard from '../../../entities/SleepCard';
import { FlatList, View } from 'react-native';

const testData = [
	{ id: 1, title: 'Дневной сон' },
	{ id: 2, title: 'Ночной сон' }
];

const SleepList = () => {
	return (
		<View>
			<FlatList
				data={testData}
				renderItem={({ item }) => <SleepCard title={item.title} />}
				keyExtractor={(item) => item.id.toString()}
			/>
		</View>
	);
};

export default SleepList;