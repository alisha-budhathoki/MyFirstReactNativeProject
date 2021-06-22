import React, { useReducer } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import ColorCounter from './components/color_counter'

const COLOR_COUNTER = 15;
//below action defines object that tells hpw i need to change my state object
const reducer = (state, action) => {
    //state == { red: number, green: number, blue: number, green: number}
    //action === {colorToCHnage: 'red' || 'green' || 'blue', amount : 15|| -15}
    //action === { type: 'change_red' || 'change_green' || 'change_blue' , payload: 15}
    switch (action.type) {
        case 'change_red':
            return state.red + action.payload > 255 || state.red + action.payload < 0 ?
                state :
                { ...state, red: state.red + action.payload };
        case 'change_green':
            return state.green + action.payload > 255 || state.green + action.payload < 0 ?
                state :
                { ...state, green: state.green + action.payload };

        case 'change_blue':
            return state.blue + action.payload > 255 || state.blue + action.payload < 0 ?
                state :
                { ...state, blue: state.blue + action.payload };

        default:
            return state;
    }

}
const SquareScreen = () => {

    const [state, runMyReducer] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
    console.log(state);
    //destructuring
    const { red, green, blue } = state;


    //helper function 
    return (
        <View>
            <ColorCounter
                onIncrease={() => runMyReducer({ type: 'change_red', payload: COLOR_COUNTER })}
                onDecrease={() => runMyReducer({ type: 'change_red', payload: -COLOR_COUNTER })}
                color='Red' />
            <ColorCounter
                onIncrease={() => runMyReducer({ type: 'change_blue', payload: COLOR_COUNTER })}
                onDecrease={() => runMyReducer({ type: 'change_blue', payload: -COLOR_COUNTER })}
                color='Blue' />
            <ColorCounter
                onIncrease={() => runMyReducer({ type: 'change_green', payload: COLOR_COUNTER })}
                onDecrease={() => runMyReducer({ type: 'change_green', payload: -COLOR_COUNTER })}
                color='Green' />
            <View
                style={{
                    height: 150.0,
                    width: 150.0,
                    backgroundColor: `rgb(${red}, ${green}, ${blue})`
                }} />
        </View>
    );
};

const styles = StyleSheet.create({});
export default SquareScreen;