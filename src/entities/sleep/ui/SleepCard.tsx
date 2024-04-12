import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ISleep } from '../model/sleep-models';

const SleepCard = (props: ISleep) => {
	const { title, duration } = props;

	return (
		<View style={styles.item}>
			<Text style={styles.title}>{title}</Text>
			<Text>{duration}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	item: {
		backgroundColor: '#630bc1',
		padding: 10,
		marginVertical: 8,
		marginHorizontal: 16,
		width: 350,
		borderRadius: 10,
		display: 'flex',
		flexDirection: 'column',
		gap: 10
	},
	title: {
		fontSize: 18
	}
});

export default SleepCard;