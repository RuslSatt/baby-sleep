import React from 'react';
import { StyleSheet, View } from 'react-native';
import { OpenSleepForm, ToggleSleepButton } from '../../../features/add-sleep';

const BottomBar = () => {
	return (
		<View style={styles.bar}>
			<ToggleSleepButton />
			<OpenSleepForm />
		</View>
	);
};

const styles = StyleSheet.create({
	bar: {
		flexDirection: 'row',
		gap: 10,
		width: 350
	}
});

export default BottomBar;