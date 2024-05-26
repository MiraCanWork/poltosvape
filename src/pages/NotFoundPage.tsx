export const NotFound: React.FC = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center min-h-svh'>
      <h1 className='text-[36px]'>404</h1>
      <p className='text-[24px] font-semibold leading-[32.5px] mb-2'>Page not found</p>
      <p className='text-[14px] font-medium leading-[20px] text-main-black-500'>
        The page you’re looking for does not seem to exist. Please, try again later...
      </p>
    </div>
  )
}
