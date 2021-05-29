import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
const ListScreen = () => {
    const friends = [
        { name: 'Alisha1', age: 23, },
        { name: 'Anisha', age: 23, },
        { name: 'Rimisha', age: 23, },
        { name: 'Nilisha', age: 23, },

    ];
    return (<FlatList
        // showsHorizontalScrollIndicator={false}
        keyExtractor={(friends) => friends.name}
        data={friends}
        renderItem={({ item }) => {
            //element = { item: {name: 'Alisha'}, index:0}
            //item = {name: 'Alisha'}
            return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>;
        }}
    >List Screen</FlatList>);

};
const styles = StyleSheet.create({
    textStyle: { marginVertical: 20 }
});
export default ListScreen;