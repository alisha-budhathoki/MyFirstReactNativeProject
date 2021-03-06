import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return <View>
    <Text style={styles.text}>Hi there this is my  alisha ! </Text>
    <Button
      onPress={() => navigation.navigate('Components')}
      title="Go to components demo"
    />
    <Button
      onPress={() => navigation.navigate('List')}
      title="Go to listt demo" />

    <Button
      onPress={() => navigation.navigate('ImageView')}
      title="Go to Image screen" />
    <Button
      onPress={() => navigation.navigate('Counter')}
      title="Go to Counter screen" />
    <Button
      onPress={() => navigation.navigate('Color')}
      title="Go to Color screen" />

    <Button
      onPress={() => navigation.navigate('Sqaure')}
      title="Go to Sqaure screen" />
    <Button
      onPress={() => navigation.navigate('TextScreen')}
      title="Go to TextScreen" />

    <Button
      onPress={() => navigation.navigate('BoxScreen')}
      title="Go to Box screen" />
  </View>
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
