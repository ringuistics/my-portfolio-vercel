type Props = {
  title: string
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  size?: 'sm' | 'md' | 'lg'
}

const sizeMap = {
  sm: 'text-xs',
  md: 'text-sm',
  lg: 'text-base',
}

export const Header = ({ title, as: Tag, size = 'md' }: Props) => {
  return (
    <Tag
      className={`flex items-center gap-2 ${sizeMap[size]} font-medium text-[#8a7a6c] mb-3`}
    >
      {title}
    </Tag>
  )
}
