interface Props {
  textClassName?: string
  chipClassName?: string
}
export const Logo = ({ textClassName = '', chipClassName = '' }: Props) => {
  return (
    <span className={`flex items-center font-inter md:text-[24px] text-[15px] text-white font-bold ${textClassName}`}>
      Poltos{' '}
      <span
        className={`font-inter md:text-[24px] text-[15px] md:leading-[20px] leading-[15px] rounded-[40px] bg-[#EE940C] md:py-[10px] md:px-[16px] py-[7px] px-[12px] text-white ${chipClassName}`}
      >
        Vape
      </span>
    </span>
  )
}
