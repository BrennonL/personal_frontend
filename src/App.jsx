import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Blog } from './Blog'
import './App.css'

const queryClient = new QueryClient()

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Blog />
      {/* <h1>Testing App</h1> */}
    </QueryClientProvider>
  )
}
