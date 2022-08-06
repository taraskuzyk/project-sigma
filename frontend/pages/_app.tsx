import '~/styles/app.css'
import type { AppProps } from 'next/app'
import { Hydrate, QueryClient, QueryClientProvider, QueryFunctionContext } from '@tanstack/react-query'
import { useState } from 'react'
import phin from 'phin'

if (
  process.env.NEXT_PUBLIC_API_MOCKING === 'enabled' && 
  process.env.NODE_ENV === 'development'
) {
  require('../mocks')
}

const defaultQueryFn = async ({ queryKey }: QueryFunctionContext) => {
  const res = await phin({
    url: `http://my.backend/${queryKey[0]}`,
    parse: 'json'
  })
  return res.body
}


function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        queryFn: defaultQueryFn
      }
    }
  }))
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  )
}

export default MyApp
