import { Logo } from '../Logo'
import { ProfileIcon } from '@/components/svg'

export const Header = () => {
  return (
    <header className='flex justify-center items-center bg-white w-full md:py-6 py-[10px] px-5'>
      <div className='flex justify-between w-full max-w-[1340px]'>
        <Logo textClassName='!text-[#505050]' />
        <div className='flex items-center gap-[10px] text-[#505050] cursor-pointer'>
          <ProfileIcon />
          <span className='hidden md:inline md:leading-[29px] md:text-[24px] font-[300] text-center'>Вход</span>
        </div>
      </div>
    </header>
  )
}
