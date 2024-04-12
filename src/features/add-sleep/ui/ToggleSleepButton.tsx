import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { ISleep, SleepTypes } from '../../../entities/sleep';
import { useSleepStore } from '../../../entities/sleep/model/sleep-store';

const ToggleSleepButton = () => {

	const { createSleep } = useSleepStore();

	const onToggleSleep = () => {
		const Sleep: ISleep = {
			type: SleepTypes.day,
			startDate: new Date()
		};

		createSleep(Sleep);
	};

	return (
		<View style={styles.container}>
			<Pressable onPress={onToggleSleep}>
				<Text style={styles.text}>Начать сон</Text>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#630bc1',
		width: 350,
		borderRadius: 10,
		marginVertical: 10,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 10
	},
	text: {
		fontSize: 16,
		color: '#fafafa'
	}
});

export default ToggleSleepButton;