type Props = {
  iconPath?: string
  initials?: string
  size?: number
}

export const Avatar = ({ iconPath, initials, size = 96 }: Props) => {
  const sizeStyle = { width: size, height: size, fontSize: size * 0.38 }

  if (iconPath) {
    return (
      <img
        src={iconPath}
        alt=""
        className="rounded-full object-cover"
        style={sizeStyle}
      />
    )
  }

  return (
    <div
      className="rounded-full flex items-center justify-center bg-gradient-to-br from-[#6a9ce8] to-[#2d40a0] text-white font-bold select-none"
      style={sizeStyle}
    >
      {initials}
    </div>
  )
}
