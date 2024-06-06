import { Logo } from '../Logo'

export const Footer = () => {
  return (
    <footer className='flex flex-col items-center md:gap-10 gap-[10px] bg-[#505050] w-full p-5 md:p-10'>
      <Logo />
      <span className='text-white/50 text-[10px] md:text-[24px] font-[300] text-center'>2024 (С) Все права защищены</span>
    </footer>
  )
}
