import { useDispatch, useSelector } from 'react-redux';
import { View, StyleSheet, Text, Button, TextInput } from 'react-native';
import { addOne, subtractOne, addAmount, subtractAmount } from '../features/counterSlice';
import { useState } from 'react';

const Counter = () => {
	const value = useSelector((state) => state.counter.value);
	const dispatch = useDispatch();
	const [amount, setAmount] = useState('');

	return (
		<View>
			<Text>Current Value: {value}</Text>
			<TextInput
				value={amount}
				onChangeText={(text) => setAmount(text)}
				keyboardType="numeric" // To allow only numeric input
				style={styles.textBox}
			/>
			<Button title="+1" onPress={() => dispatch(addOne())} />
			<Button title="-1" onPress={() => dispatch(subtractOne())} />
			<Button
				title="+ amount"
				onPress={() => {
					dispatch(addAmount(parseInt(amount)));
				}}
			/>
			<Button
				title="- amount"
				onPress={() => {
					dispatch(subtractAmount(parseInt(amount)));
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	textBox: {
		borderWidth: 1,
		borderColor: 'black',
		padding: 5,
	},
});

export default Counter;
