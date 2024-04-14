import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export const OpenSleepForm = () => {
	return (
		<View style={styles.container}>
			<Pressable style={styles.button}>
				<Text style={styles.text}>Добавить</Text>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'transparent'
	},
	button: {
		backgroundColor: '#630bc1',
		width: '100%',
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