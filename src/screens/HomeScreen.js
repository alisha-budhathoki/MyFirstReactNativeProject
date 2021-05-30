import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  return <View>
    <Text style={styles.text}>Hi there this is my  alisha ! </Text>
    <Button
      onPress={() => navigation.navigate('Components')}
      title="Go to components demo"
    />
    <Button
    onPress={() => navigation.navigate('List')}
    title="Go to listt demo"/>
    </View>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  button: {
    fontSize: 60
  }
});

export default HomeScreen;
