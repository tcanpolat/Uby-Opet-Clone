import React from 'react';
import {SafeAreaView, FlatList, Image,View,Text,TouchableOpacity} from 'react-native';
import  'react-native-gesture-handler';
import {styles} from '../styles/Styles';
import Faded from '../utils/Faded'



const KampanyaScreen = ({navigation}) => {

  const ItemSeparatorComponent = () => {
    return (
      <View
        style={{
          height: 1,
          width: '90%',
          alignItems: 'center',
          backgrounColor: '#fff',
        }}
      />
    );
  };
  
  const renderItem = ({item}) => {
    return (
      <View style={styles.kampanyaSection}>
        <Image style={styles.kampanyaImage} source={{uri: item.image}} />
        <Text style={styles.kampanyaText}>{item.title}</Text>
        <Text style={styles.kampanyaTextDetail}>{item.subtitle}</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('KampanyaDetayPage',item)}
          style={styles.kampanyaDetayButton}>
          <Text style={styles.kampanyaDetayButtonText}>Detaylı Bilgi</Text>
        </TouchableOpacity>
      </View>
    );
  };



  const kampanyaList = [
    {
      id: 1,
      title: 'Başlık-1',
      subtitle: 'manşet-1',
      detail: 'açıklama-1',
      image:
        'https://www.bonus.com.tr/assets/images/imported/opet_130520108_kg.jpg',
    },
    {
      id: 2,
      title: 'Başlık-2',
      subtitle: 'manşet-2',
      detail: 'açıklama-2',
      image: 'https://i.ytimg.com/vi/g8TgOgGK-Yo/maxresdefault.jpg',
    },
    {
      id: 3,
      title: 'Başlık-3',
      subtitle: 'manşet-3',
      detail: 'açıklama-3',
      image:
        'https://www.bonus.com.tr/assets/images/imported/opet_130520108_kg.jpg',
    },
    {
      id: 4,
      title: 'Başlık-4',
      subtitle: 'manşet-4',
      detail: 'açıklama-4',
      image: 'https://i.ytimg.com/vi/g8TgOgGK-Yo/maxresdefault.jpg',
    },
  ];

  return (
    <SafeAreaView style={styles.kampanyaContainer}>
      <FlatList
        data={kampanyaList}
        ItemSeparatorComponent={ItemSeparatorComponent}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

export default KampanyaScreen;
