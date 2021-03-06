import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
const reducer = (state, action) => {
    //state: {count: number}
    //action : {type: 'increment' || 'decrement', payload: 10}

    switch (action.type) {
        case 'increment':
            return { ...state, count: state.count + action.payload };
        case 'decrement':
            return { ...state, count: state.count - action.payload };
        default:
            return state;
    }
}
const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 })
    // const [counter, setCounter] = useState(0);
    return <View>
        <Button title='Increase' onPress={() => {
            // Not to do
            // counter++;
            // setCounte    r(counter + 1);

            dispatch({ type: 'increment', payload: 10 })
        }} />
        <Button title='Decrease' onPress={() => {
            // Not to do
            // counter--;
            // setCounter(counter - 1);

            dispatch({ type: 'decrement', payload: 10 })

        }} />


        <Text>Current counter value: {state.count } </Text>
    </View>
}
const styles = StyleSheet.create({});
export default CounterScreen;