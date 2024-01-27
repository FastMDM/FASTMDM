
/*
import { Provider } from 'app/provider'
import { Stack } from 'expo-router'

export default function Root() {
  return (
    <Provider>
      <Stack />
    </Provider>
  )
}
*/
/*
import { NativeNavigation } from "app/navigation/native" 
import { Layout } from 'app/layout'
import { QueryClient, QueryClientProvider } from "react-query";   

const queryClient = new QueryClient();  

export default function App() {
  return (
    <Layout>
      <QueryClientProvider client={queryClient}>   
        <NativeNavigation />
      </QueryClientProvider>  
    </Layout>
  )
}
*/          

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
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
import {menuType, Menu} from 'app/constants/menu';
import React, {useState} from 'react';

import Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';



export default function Layout() {



  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer screenOptions={{ headerShown: true, swipeEdgeWidth : 100 }} drawerContent={(props) => <CustomDrawerContent {...props}/>} >
        {/* screens */}
        <Drawer.Screen name="index" options={{ drawerLabel: 'Home', title: 'Home'}}/>
        <Drawer.Screen name="legal/index" options={{drawerLabel: 'Legal',title: 'Legal'}} />
        <Drawer.Screen name="user/[id]" options={{drawerLabel: 'User detail',title: 'User detail'}} />
        <Drawer.Screen name="database/index" options={{drawerLabel: 'Database',title: 'Database'}} />
        <Drawer.Screen name="database/specialist/index" options={{drawerLabel: 'Specialists',title: 'Specialists'}} />
        <Drawer.Screen name="database/product/index" options={{drawerLabel: 'Products',title: 'Products'}} />
        <Drawer.Screen name="database/organization/index" options={{drawerLabel: 'Organizations',title: 'Organizations'}} />
        <Drawer.Screen name="database/problem/index" options={{drawerLabel: 'Problem',title: 'Problem'}} />
        <Drawer.Screen name="database/role/index" options={{drawerLabel: 'Role',title: 'Role'}} />
        <Drawer.Screen name="about/index" options={{drawerLabel: 'About',title: 'About'}} />  
        <Drawer.Screen name="restaurants/index" options={{drawerLabel: 'Restaurant',title: 'Restaurant'}} />  
        <Drawer.Screen name="diagnostics/index" options={{drawerLabel: 'Diagnostics processing statuses',title: 'Diagnostics processing statuses'}} />

      </Drawer>
    </GestureHandlerRootView>
  );





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
    let link = 'https://fastmdm.com';
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
            <Text style={{color: colors.white, fontSize: 22}}>FastMDM</Text>
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
                
                onPress={() => {item.submenu ? toggleSideMenuFolderList(item.id) : navigation.navigate(item.pathexpo) }}
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


