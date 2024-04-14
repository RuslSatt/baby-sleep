import React, { useState } from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { Pressable, StatusBar, StyleSheet } from 'react-native';

export const AddSleepForm = () => {
	const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

	const showDatePicker = () => {
		setDatePickerVisibility(true);
	};

	const hideDatePicker = () => {
		setDatePickerVisibility(false);
	};

	const handleConfirm = (date: Date) => {
		console.warn('A date has been picked: ', date);
		hideDatePicker();
	};

	return (
		<div style={styles.container}>
			<Pressable onPress={showDatePicker}></Pressable>
			<DateTimePickerModal
				isVisible={isDatePickerVisible}
				mode="date"
				onConfirm={handleConfirm}
				onCancel={hideDatePicker}
			/>
		</div>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: StatusBar.currentHeight || 0
	}
});