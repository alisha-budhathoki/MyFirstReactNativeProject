import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import ColorCounter from './components/color_counter'

const COLOR_COUNTER = 15;

const SquareScreen = () => {
    const [red, setRed] = useState(0);
    const [blue, setBlue] = useState(0);
    const [green, setGreen] = useState(0);

    //helper function 
    const setColor = (color, change) => {
        //color === 'red' , 'blue' , 'green'
        //change === +15 , -15
        switch (color) {
            case 'red':
                red + change > 255 || red + change < 0 ? null : setRed(red + change);
                return;

            case 'blue':
                blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
                return;
            case 'green':
                green + change > 255 || green + change < 0 ? null : setGreen(green + change);
                return;

            default:
                return;

        }
    }

    console.log(red);
    console.log(green);
    console.log(blue);
    return (
        <View>
            <ColorCounter
                onIncrease={() => setColor('red', COLOR_COUNTER)}
                onDecrease={() => setColor('red', -1 * COLOR_COUNTER)}
                color='Red' />
            <ColorCounter
                onIncrease={() => setColor('blue', + COLOR_COUNTER)}
                onDecrease={() => setColor('blue', - 1 * COLOR_COUNTER)}
                color='Blue' />
            <ColorCounter
                onIncrease={() => setColor('green', + COLOR_COUNTER)}
                onDecrease={() => setColor('green', - 1 * COLOR_COUNTER)}
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