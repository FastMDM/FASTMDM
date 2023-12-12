import { NativeNavigation } from 'app/navigation/native'
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
