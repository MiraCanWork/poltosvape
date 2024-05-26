import { QueryClient, QueryClientProvider as Provider } from '@tanstack/react-query'

export const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false, retry: false, staleTime: 10000 } }
})

export const QueryClientProvider = ({ children }: React.PropsWithChildren) => {
  return <Provider client={queryClient}>{children}</Provider>
}
