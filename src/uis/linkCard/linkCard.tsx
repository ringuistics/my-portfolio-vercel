type Props = {
  href: string
  iconSrc?: string
  title: string
  subtitle?: string
  variant?: 'default' | 'accent'
}

export const LinkCard = ({
  href,
  iconSrc,
  title,
  subtitle,
  variant = 'default',
}: Props) => {
  const baseClasses =
    'flex items-center gap-3 rounded-xl px-4 py-3.5 no-underline transition-all'

  const variantClassMap: Record<
    Required<Props>['variant'],
    { container: string; subtitleClass: string }
  > = {
    default: {
      container:
        'shadow-sm hover:shadow-md bg-(--link-card-bg) text-(--link-card-text)',
      subtitleClass: 'text-(--link-card-subtitle)',
    },
    accent: {
      container:
        'hover:opacity-90 bg-(--link-card-accent-bg) text-(--link-card-accent-text)',
      subtitleClass: 'text-(--link-card-accent-subtitle)',
    },
  }

  const v = variantClassMap[variant]

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${v.container}`}
    >
      {iconSrc && <img src={iconSrc} alt="" className="w-5 h-5 shrink-0" />}
      <div className="flex flex-col min-w-0">
        <span className="font-medium text-sm">{title}</span>
        {subtitle && (
          <span className={`text-xs ${v.subtitleClass}`}>{subtitle}</span>
        )}
      </div>
    </a>
  )
}
