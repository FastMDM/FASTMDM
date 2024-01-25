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
          
