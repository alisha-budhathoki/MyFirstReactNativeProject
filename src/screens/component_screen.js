import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
const ComponentScreen = () => {
    const greeting = <Text>hello babe</Text>;
    const thirdElement = 'Alisha Budhathoki '
    return <View>
        <Text style={styles.textStyle}>Getting started with react native!</Text>
        <Text style={styles.subHeadingStyle}>My name is {thirdElement}</Text>
        <Text>{thirdElement}</Text>
        {greeting}
    </View>
}
const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45,
        color: 'blue'
    },
    subHeadingStyle: {
        fontSize: 20 ,
        color: 'green'
    }
})
export default ComponentScreen;