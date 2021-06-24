import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
const TextInputScreen = () => {
    const [name, setName] = useState('')
    return <View>
        <Text>Enter password: </Text>
        <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            value={name}
            onChangeText={(newValue) => setName(newValue)}
        />
        <Text>Text Screen value: {name}</Text>
        {name.length < 5 && name.match(/\d/) ? <Text>This is true</Text> : null}
    </View >

}
const styles = StyleSheet.create({
    input: {
        margin: 15,
        color: 'green',
        borderColor: 'blue',
        borderWidth: 1,
    }
});
export default TextInputScreen;