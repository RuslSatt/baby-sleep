import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import SleepList from '../widgets/SleepList';

const SleepsPage = () => {
	return (
		<View style={styles.container}>
			<SleepList />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: StatusBar.currentHeight || 0
	}
});

export default SleepsPage;