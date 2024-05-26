import { Outlet, ScrollRestoration } from 'react-router-dom'
// import { Header } from '../components/header/Header'

export const Root = () => {
  return (
    <div className='flex flex-col items-center min-h-svh'>
      {/* <Header /> */}
      <main className='w-full md:max-w-[384px] min-h-[calc(100svh-43px)] flex flex-col justify-center'>
        <Outlet />
      </main>
      <ScrollRestoration />
    </div>
  )
}
