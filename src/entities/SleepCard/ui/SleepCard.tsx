import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export interface SleepProps {
	title?: string;
	description?: string;
	startTime?: Date;
	endTime?: Date;
	duration?: number;
}

const SleepCard = (props: SleepProps) => {
	const { title } = props;

	return (
		<View style={styles.item}>
			<Text style={styles.title}>{title}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	item: {
		backgroundColor: '#f9c2ff',
		padding: 20,
		marginVertical: 8,
		marginHorizontal: 16
	},
	title: {
		fontSize: 32
	}
});

export default SleepCard;