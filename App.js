import { StyleSheet, View } from 'react-native';
import SleepsPage from './src/pages/SleepsPage';

export default function App() {
	return (
		<View style={styles.container}>
			<SleepsPage />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f8f2dd',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
