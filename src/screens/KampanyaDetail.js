import React from 'react';
import {SafeAreaView, Image, View, Text, Dimensions} from 'react-native';
import 'react-native-gesture-handler';
import {styles} from '../styles/Styles';
import Faded from '../utils/Faded';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const KampanyaDetayScreen = ({route}) => {
  const item = route.params;
  return (
    <SafeAreaView style={styles.kampanyaContainer}>
      <View style={styles.kampanyaSection}>
        <Image style={styles.kampanyaImage} source={{uri: item.image}} />
        <Text style={styles.kampanyaText}>{item.title}</Text>
        <Text style={styles.kampanyaTextDetail}>{item.detail}</Text>
      </View>
    </SafeAreaView>
  );
};

export default KampanyaDetayScreen;
