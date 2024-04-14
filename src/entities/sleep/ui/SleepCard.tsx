import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getDuration, getViewDate } from '../../../shared/libs/day';
import { ISleep, SleepTypes } from '../model/sleep-models';

const SleepCard = (props: ISleep) => {
	const { type, duration, start, end, description } = props;

	const text = type === SleepTypes.day ? 'Дневной сон' : 'Ночной сон';

	const durationText = duration ? getDuration(duration) : undefined;

	return (
		<View style={styles.item}>
			<Text style={styles.text}>{text}</Text>
			<View style={styles.time}>
				<Text
					style={styles.text}>{getViewDate(start)} - {getViewDate(end)} = {durationText}</Text>
			</View>
			<Text style={styles.description}>{description}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	item: {
		backgroundColor: '#630bc1',
		color: '#fafafa',
		padding: 10,
		marginVertical: 8,
		marginHorizontal: 16,
		width: 350,
		borderRadius: 10,
		display: 'flex',
		flexDirection: 'column',
		gap: 10
	},
	text: {
		fontSize: 18,
		color: '#fafafa'
	},
	time: {
		display: 'flex',
		paddingVertical: 5
	},
	description: {
		fontSize: 16,
		paddingVertical: 5,
		borderTopWidth: 1,
		borderTopColor: '#fafafa',
		color: '#fafafa'
	}
});

export default SleepCard;