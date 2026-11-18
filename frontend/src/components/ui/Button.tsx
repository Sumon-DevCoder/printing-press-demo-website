import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'md' | 'lg'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-medium transition-[background-color,color,border-color,transform] duration-200 active:scale-[.98] disabled:pointer-events-none disabled:opacity-60'

const variants: Record<Variant, string> = {
  primary: 'bg-accent text-on-accent hover:bg-accent-strong',
  secondary: 'border border-ink/80 text-ink hover:bg-ink hover:text-paper',
  ghost: 'text-ink hover:text-accent-strong',
}

// Tap targets stay at least 44px tall.
const sizes: Record<Size, string> = {
  md: 'min-h-11 px-5 text-[0.95rem]',
  lg: 'min-h-13 px-7 text-base',
}

interface CommonProps {
  variant?: Variant
  size?: Size
  icon?: ReactNode
  className?: string
  children: ReactNode
}

type ButtonProps = CommonProps &
  (
    | ({ to: string; href?: never } & Omit<ComponentPropsWithoutRef<typeof Link>, 'to' | 'className' | 'children'>)
    | ({ href: string; to?: never } & Omit<ComponentPropsWithoutRef<'a'>, 'href' | 'className' | 'children'>)
    | ({ to?: never; href?: never } & Omit<ComponentPropsWithoutRef<'button'>, 'className' | 'children'>)
  )

export function Button({ variant = 'primary', size = 'md', icon, className = '', children, ...rest }: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`
  const content = (
    <>
      {icon && (
        <span aria-hidden className="-ml-0.5 [&>svg]:size-[1.15em]">
          {icon}
        </span>
      )}
      {children}
    </>
  )

  if ('to' in rest && rest.to !== undefined) {
    return (
      <Link {...rest} className={classes}>
        {content}
      </Link>
    )
  }

  if ('href' in rest && rest.href !== undefined) {
    const external = /^https?:\/\//.test(rest.href)
    return (
      <a {...rest} className={classes} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
        {content}
      </a>
    )
  }

  const buttonProps = rest as ComponentPropsWithoutRef<'button'>
  return (
    <button type="button" {...buttonProps} className={classes}>
      {content}
    </button>
  )
}
