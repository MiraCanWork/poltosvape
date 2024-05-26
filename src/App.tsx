import { QueryClientProvider } from '@/config/queryClient'
import { RootRouter } from '@/config/router'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const App = () => {
  return (
    <QueryClientProvider>
      <RootRouter />
      {import.meta.env.DEV && <ReactQueryDevtools initialIsOpen={false} />}
    </QueryClientProvider>
  )
}

export default App
