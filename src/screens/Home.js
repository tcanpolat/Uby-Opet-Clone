import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Dimensions,
  FlatList
} from 'react-native';
import 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import 'react-native-safe-area-context';
import Faded from '../utils/Faded';
import {FlatListSlider} from 'react-native-flatlist-slider';

import IconMa from 'react-native-vector-icons/MaterialIcons';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

import {styles} from '../styles/Styles';

// const bgImage = {
//   uri: 'http://www.hesapci.com/wp-content/uploads/100YILOPET3.jpg',
// };
const images = [
  {
    image: 'http://www.hesapci.com/wp-content/uploads/100YILOPET3.jpg',
    desc: 'Opet Title 1',
  },
  {
    image: 'http://www.hesapci.com/wp-content/uploads/100YILOPET3.jpg',
    desc: 'Opet Title 2',
  },
];

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.homeContainer}>
      <View style={styles.homeTop} needsOffscreenAlphaCompositing>
        {/* <Image source={bgImage} style={styles.homeTopImage} /> */}
        <FlatListSlider
          data={images}
          height={deviceHeight/2}
          timer={5000}
          contentContainerStyle={{paddingHorizontal: 0}}
          indicatorContainerStyle={{position: 'absolute', top:0}}
          indicatorActiveColor={'#e0bc18'}
          indicatorInActiveColor={'#ffffff'}
          indicatorActiveWidth={30}
          animation
        />
        {/* <Faded
          style={{zIndex: 2, position: 'absoulute', bottom:0, left: 0}}
          color="#0271cd"
          height={deviceHeight/2}
          width={deviceWidth}
        /> */}
      </View>
      <View style={styles.homeBottomContainer}>
        <View style={styles.homeBottom}>
          <View style={styles.homeBottomSection1}>
            <Text style={styles.homeBottomText}>En yakın Opet</Text>
            <Text style={styles.homeBottomTextDetail}>
              2.1
              <Text style={{fontSize: 18}}>KM</Text>
            </Text>
          </View>
          <View style={styles.homeBottomSection2}>
            <Text style={styles.homeBottomText}>Akıllı Dolum</Text>
            <IconMa name="local-gas-station" size={45} color="#fff" />
          </View>
        </View>
        <View style={styles.homeBottom}>
          <View style={styles.homeBottomSection3}>
            <Text style={styles.homeBottomText}>Benzin</Text>
            <Text style={styles.homeBottomTextDetail}>
              9.80
              <Text style={{fontSize: 18}}> TL</Text>
            </Text>
          </View>
          <View style={styles.homeBottomSection4}>
            <Text style={styles.homeBottomText}>Ödeme Yap</Text>
            <IconMa name="payment" size={45} color="#fff" />
          </View>
        </View>
      </View>
      <View style={styles.homeFooter}>
        <TouchableOpacity
          onPress={() => navigation.navigate('KampanyaScreen')}
          style={styles.homeFooterButton}>
          <View>
            <Text style={styles.homeFooterText}>Kampanyalar</Text>
          </View>
          <View>
            <IconMa name="keyboard-arrow-right" size={42} color="#fff" />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
