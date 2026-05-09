type Props = {
  children: React.ReactNode
  direction?: 'column' | 'row'
  gap?: 'sm' | 'md' | 'lg'
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'
  wrap?: 'wrap' | 'nowrap' | 'reverse'
}

const directionMap = {
  column: 'flex-col',
  row: 'flex-row',
}

const gapMap = {
  sm: 'gap-2',
  md: 'gap-3',
  lg: 'gap-6',
}

const justifyMap = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
  between: 'justify-between',
  around: 'justify-around',
  evenly: 'justify-evenly',
}

const wrapMap = {
  wrap: 'flex-wrap',
  nowrap: 'flex-nowrap',
  reverse: 'flex-wrap-reverse',
}

export const Flex = ({
  children,
  direction = 'column',
  gap = 'md',
  justify,
  wrap = 'nowrap',
}: Props) => {
  return (
    <div
      className={`w-full flex ${directionMap[direction]} ${gapMap[gap]} ${
        justify ? justifyMap[justify] : ''
      } ${wrapMap[wrap]}`}
    >
      {children}
    </div>
  )
}
