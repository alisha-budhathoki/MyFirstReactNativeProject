import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
const BoxScreen = () => {
    return (
        <View style={styles.parentStyle}>
            <View style={styles.viewStyleOne}></View>
            <View style={styles.viewTwoParent}>
                <View style={styles.viewStyleTwo}></View>
            </View>
            <View style={styles.viewStyleThree}></View>

        </View>
    )
};
const styles = StyleSheet.create({
    parentStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 100,
        justifyContent: 'space-between',
        // alignItems: 'flex-end',
        flexDirection: 'row',
    },
    viewStyleOne: {
        // borderWidth: 4,
        // borderColor: 'black',
        height: 50,
        width: 50,
        backgroundColor: 'yellow',
        justifyContent: 'space-around',
        alignItems: 'center',
        // alignItems: 'flex-end',
        // flexDirection: 'column',
    },
    viewStyleTwo: {
        // borderWidth: 4,
        // borderColor: 'black',
        height: 50,
        width: 50,
        // top: 50,
        // marginTop: 50,
        // alignSelf: 'flex-end',
        backgroundColor: 'pink',
        justifyContent: 'space-around',
        // alignItems: 'flex-end',
        // flexDirection: 'column',
    },
    viewTwoParent: {
        height: 100,
        justifyContent: 'flex-end'
    },
    viewStyleThree: {
        // borderWidth: 4,
        // borderColor: 'yellow',
        height: 50,
        width: 50,
        backgroundColor: 'green',
        // alignItems: 'flex-end',
        // flexDirection: 'column',
    },
    textOneStyleThree: {
        borderWidth: 4,
        borderColor: 'red',
        padding: 10,
        color: 'green'
        // flex: 4,
        // alignSelf:'center'

        // marginVertical: 10,
        // marginHorizontal: 10,
    },
    textTwoStyle: {
        borderWidth: 4,
        borderColor: 'red',
        padding: 10,
        ...StyleSheet.absoluteFillObject
        // position: 'absolute',
        // top: 0, bottom: 0, left: 0, right: 0
        // flex: 2,
        // position: 'absolute',
        // fontSize: 18,
        // alignSelf:'flex-end',
        // marginVertical: 10,
        // marginHorizontal: 10,
    },
    textThreeStyle: {
        borderWidth: 4,
        borderColor: 'red',
        padding: 10,

        // flex: 1

        // marginVertical: 10,
        // marginHorizontal: 10,
    }
});
export default BoxScreen;
