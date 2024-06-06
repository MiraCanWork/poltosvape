import { Outlet, ScrollRestoration } from 'react-router-dom'
import { Footer } from '@/components'
import { Header } from '@/components'

export const Root = () => {
  return (
    <div className='flex flex-col items-center min-h-svh'>
      <Header />
      <main className='w-full md:max-w-[1380px] flex flex-col justify-center px-5'>
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  )
}
