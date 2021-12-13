import React from 'react';
import {View, Text, Image,TouchableOpacity} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import IconMa from 'react-native-vector-icons/MaterialIcons';
import IconMaC from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFa from 'react-native-vector-icons/FontAwesome5';

import HomeScreen from '../screens/Home';
import KampanyaScreen from '../screens/Kampanya'
import KampanyaDetayScreen from '../screens/KampanyaDetail'
import IletisimScreen from '../screens/Iletisim'

const logo = {
  uri: 'https://www.tvf.org.tr/wp-content/uploads/2020/09/Opet-Logo.png',
};

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = props => {
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  };
  return (
    <TouchableOpacity style={{marginRight: 10}} onPress={() => toggleDrawer()}>
      <IconMa name="menu" size={28} color="#fff" />
    </TouchableOpacity>
  );
};

const HomeScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: '',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Image
              style={{width: 70, height: 24, marginLeft: 10}}
              source={logo}
            />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#0056e1',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            alignSelf: 'center',
          },
        }}
      />
    </Stack.Navigator>
  );
};
const KampanyaScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="Kampanya">
      <Stack.Screen
        name="Kampanya"
        component={KampanyaScreen}
        options={{
          title: 'Kampanyalar',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Image
                style={{width: 70, height: 24, marginLeft: 10,marginRight:50}}
                source={logo}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#0271cd',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            alignContent:'center'         
        }
        }}
      />
    </Stack.Navigator>
  );
};
const IletisimScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="IletisimScreen">
      <Stack.Screen
        name="İletisimScreen"
        component={IletisimScreen}
        options={{
          title: 'Bize Ulaşın',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Image
                style={{width: 70, height: 24, marginLeft: 10,marginRight:50}}
                source={logo}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#0271cd',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            alignContent:'center'         
        }
        }}
      />
    </Stack.Navigator>
  );
};



const MyDrawer = () => {
    return (
      <Drawer.Navigator
        drawerStyles={{
          backgroudColor: '#0271cd',
        }}
        screenOptions={{
          activeTintColor: '#fff',
          inactiveTintColor: '#fff',
          headerStyle:{
            backgroudColor: '#0271cd',
            borderBottomColor: '#fff',
            borderBottomWidth: 1,
          },
          itemStyle: {marginVertical: 50},
          labelStyle: {
            fontSize: 18,
          },
        }}>
        <Drawer.Screen
          name="HomeScreen"
          component={HomeScreenStack}
          options={{
            drawerLabel: 'Anasayfa',
            headerShown: false,
            drawerIcon: ({focused}) => (
              <IconMa name="home" size={24} color="#0271cd" />
            ),
          }}
        />
        <Drawer.Screen
          name="KampanyaScreen"
          component={KampanyaScreenStack}
          options={{
            drawerLabel: 'Kampanyalar',
            headerShown: false,
            drawerIcon: ({focused}) => (
              <IconMa name="campaign" size={24} color="#0271cd" />
            ),
          }}
        />
        <Drawer.Screen
          name="IletisimScreen"
          component={IletisimScreenStack}
          options={{
            drawerLabel: 'Bize Ulaşın',
            headerShown: false,
            drawerIcon: ({focused}) => (
              <IconMa name="contacts" size={24} color="#0271cd" />
            ),
          }}
        />
      </Drawer.Navigator>
    );
  };

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MyDrawer"
          component={MyDrawer}
          options={{
            headerShown: false,
            backgroudColor: '#fff',
          }}
        />
        <Stack.Screen
          name="KampanyaDetayPage"
          component={KampanyaDetayScreen}
          options={{
          title: 'Kampanya Detay',
          headerStyle: {
            backgroundColor: '#0271cd',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            alignContent:'center'         
        }
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
