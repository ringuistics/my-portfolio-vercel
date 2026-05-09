type Props = {
  label: string
}

export const Tag = ({ label }: Props) => {
  return (
    <span className="rounded-full bg-(--tag-bg-color) px-4 py-1.5 text-sm text-(--tag-text-color)">
      {label}
    </span>
  )
}
