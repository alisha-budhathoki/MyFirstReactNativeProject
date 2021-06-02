import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import ImageDetail from '../screens/components/image_detail'

const ImageScreen = () => {
    return <View>
        <ImageDetail
         title="Forest"
         imageSource={require('../../assets/forest.jpg')} 
         score="1" />
        <ImageDetail
         title="beach" 
         imageSource={require('../../assets/beach.jpg')} 
         score="2" />
        <ImageDetail
         title="mountain" 
         imageSource={require('../../assets/mountain.jpg')} 
         score="3" />
    </View>;
};
const styles = StyleSheet.create({});
export default ImageScreen;