
import { createDrawerNavigator, DrawerNavigationProp,  } from '@react-navigation/drawer';
import { Button, 
  View,
  Text,
  Linking,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  DrawerLayoutAndroid,
  Platform,
  StatusBar
} from 'react-native';
import React, {useState} from 'react';
import { DatabaseScreen } from 'app/screens/database'
import { SpecialistScreen } from 'app/screens/database/specialist'
import { ProductScreen } from 'app/screens/database/product'
import { OrganizationScreen } from 'app/screens/database/organization'
import { ProblemScreen } from 'app/screens/database/problem'
import { RoleScreen } from 'app/screens/database/role'
import { DiagnosticsProcessingStatusScreen } from 'app/screens/database/diagnostics-processing-status'
import { HomeScreen } from '../../screens/home/screen'
import { UserDetailScreen } from '../../screens/user/detail-screen'
import { AboutScreen } from '../../screens/about'
import { RestaurantScreen } from '../../screens/restaurant'

import Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {menuType, Menu} from 'app/constants/menu';


const Drawer = createDrawerNavigator();

const renderIcons = item => {
  switch (item.icontype) {
    case 'FontAwesome5':
      return <Icon name={item.icon} color={colors.primary} size={20} />;
    case 'MaterialCommunityIcons':
      return (
        <MaterialIcon name={item.icon} color={colors.primary} size={20} />
      );
    case 'MaterialIcons':
      return (
        <MaterialIcons name={item.icon} color={colors.primary} size={20} />
      );
    case 'SimpleLineIcons':
      return (
        <SimpleLineIcons name={item.icon} color={colors.primary} size={20} />
      );
    case 'Fontisto':
      return <Fontisto name={item.icon} color={colors.primary} size={20} />;
    case 'AntDesign':
      return <AntDesign name={item.icon} color={colors.primary} size={20} />;

    default:
      return <Icon name={item.icon} color={colors.primary} size={20} />;
  }
};


const HeaderOptions = {
  headerMode:"screen",  
  headerStyle: {
    backgroundColor: '#512DA8',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    color: '#fff',
  },

  /*  
  header: ({ navigation, route  }) => (
    <Button onPress={() => navigation.goBack()} title="Go back home" />
  ),  
*/   
}



function CustomDrawerContent({ navigation }) {

  const [toggleDown, setToggleDown] = useState(Menu);

  const toggleSideMenuFolderList = (id) => {

    const nextToggleDown: menuType[] = toggleDown.map((item, i) => {
      if (item.id === id) {
        item.open = !item.open;
      }
      return item;
    });

    setToggleDown(nextToggleDown);
  };

  const playStore = () => {
    let link = 'https://meanmine.com';
    Linking.canOpenURL(link).then(
      supported => {
        supported && Linking.openURL(link);
      },
      err => console.log(err),
    );
  };


  return (
    <>

      <View style={{paddingBottom: 30}} >
  
        <ScrollView showsVerticalScrollIndicator={false}>

          <TouchableOpacity onPress={() => playStore()} style={styles.card}>
            <Text style={{color: colors.white, fontSize: 22}}>MeanMine</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={styles.subCard}>
            <Icon name="home" color={colors.primary} size={20} />
            <Text style={styles.txt}>Home</Text>
          </TouchableOpacity>

          {toggleDown.map((item, index) => (
            <View key={item.name}>
              <TouchableOpacity
                
                onPress={() => {item.submenu ? toggleSideMenuFolderList(item.id) : navigation.navigate(item.name) }}
                style={styles.element}>

                <View style={styles.sub}>
                  {renderIcons(item)}
                  <Text style={styles.txt}>{item.name}{item.open}</Text>
                </View>

                { item.submenu ?
                item.open ? (
                  <Icon name="caret-up" color={colors.primary} size={20} />
                ) : (
                  <Icon name="caret-down" color={colors.primary} size={20} />
                ) : null
                }
              </TouchableOpacity>

              { item.open ? (
                <View>
                  {item.submenu? item.submenu.map(subitem => (
                    <TouchableOpacity
                      key={subitem.name}
                      onPress={() => navigation.navigate(subitem.name)}
                      style={[styles.subCard, {marginLeft: 16}]}>
                      {renderIcons(subitem)}
                      <Text style={styles.txt}>{subitem.name}</Text>
                    </TouchableOpacity>
                  )) : null }
                </View>
              ) : null
              }
              </View>
              
          ))}


          <Button title="Go Home" onPress={() => { navigation.navigate('Home');}}  />
          <Button title="Go User detail" onPress={() => { navigation.navigate('User detail');}}  />
          <Button title="Go Database" onPress={() => { navigation.navigate('Database');}}  />
          <Button title="Go Problems" onPress={() => { navigation.navigate('Problems');}}  />
          <Button title="Go Specialist" onPress={() => { navigation.navigate('Specialist');}}  />



        </ScrollView>

      </View>
    </>
  );
}

const colors = {
  primary:"#39bee7",
  white:"#fff",
  black:"#000",
  btn: '#87FEFD',
  header:'#213042',
  red:'#CF0000',
  txt: '#9A989B',
  icn:'#BDBDBD'
}

const styles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    backgroundColor: colors.primary,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight  : 0
  },
  card: {
    padding: 50,
    borderRadius: 2,
    backgroundColor: colors.primary,
  },
  element: {
    padding: 10,
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    backgroundColor: colors.white,
    justifyContent: 'space-between',
  },
  subCard: {
    padding: 10,
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    backgroundColor: colors.white,
  },
  sub: {
    flexDirection: 'row',
    backgroundColor: colors.white,
  },
  txt: {
    marginLeft: 10,
  },
});

export function NativeNavigation() {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
       {/* screens */}
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="User detail" component={UserDetailScreen} />
      <Drawer.Screen name="Database" component={DatabaseScreen} />
      <Drawer.Screen name="Specialists" component={SpecialistScreen} />
      <Drawer.Screen name="Products" component={ProductScreen} />
      <Drawer.Screen name="Organizations" component={OrganizationScreen} />
      <Drawer.Screen name="Problems" component={ProblemScreen} />
      <Drawer.Screen name="Role" component={RoleScreen} />
      <Drawer.Screen name="About" component={AboutScreen} />  
      <Drawer.Screen name="Restaurant" component={RestaurantScreen} />  

      <Drawer.Screen name="Diagnostics processing statuses" component={DiagnosticsProcessingStatusScreen} />
  </Drawer.Navigator>
  
  );
}

