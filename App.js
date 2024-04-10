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
		backgroundColor: '#eae1e1',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
