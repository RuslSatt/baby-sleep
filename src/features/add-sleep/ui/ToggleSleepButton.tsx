import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { ISleep, SleepTypes } from '../../../entities/sleep';
import { useSleepStore } from '../../../entities/sleep/model/sleep-store';

export const ToggleSleepButton = () => {

	const { createSleep, updateSleep, setEndDate, isLoading, isActive } = useSleepStore();

	const onToggleSleep = () => {
		if (!isActive) {
			const Sleep: ISleep = {
				type: SleepTypes.day,
				start: new Date()
			};

			createSleep(Sleep);
		}

		if (isActive) {
			setEndDate();
			updateSleep();
		}
	};

	const text = !isActive ? 'Начать сон' : 'Закончить сон';

	return (
		<View style={styles.container}>
			<Pressable style={styles.button} disabled={isLoading}
					   onPress={onToggleSleep}>
				<Text style={styles.text}>{text}</Text>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'transparent',
		flexGrow: 1
	},
	button: {
		backgroundColor: '#630bc1',
		borderRadius: 10,
		marginVertical: 10,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 10,
		width: '100%'

	},
	text: {
		fontSize: 16,
		color: '#fafafa'
	}
});