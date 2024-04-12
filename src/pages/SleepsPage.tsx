import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import SleepList from '../widgets/SleepList';
import ToggleSleepButton from '../features/add-sleep';

const SleepsPage = () => {
	return (
		<View style={styles.container}>
			<SleepList />
			<ToggleSleepButton />
		</View>
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

export default SleepsPage;