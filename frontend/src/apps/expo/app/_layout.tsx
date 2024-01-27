
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

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer screenOptions={{ headerShown: true, swipeEdgeWidth : 100 }} >
        <Drawer.Screen
          name="index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Home',
            title: 'overview4',
          }}
        />
        <Drawer.Screen
          name="user/[id]" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'User',
            title: 'overview3',
          }}
        />
        <Drawer.Screen
          name="legal/index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Legal',
            title: 'Legal',
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
