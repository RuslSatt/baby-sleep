import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const ToggleSleepButton = () => {
	return (
		<View style={styles.container}>
			<Pressable>
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