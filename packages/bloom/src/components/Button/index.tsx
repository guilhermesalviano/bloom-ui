import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

/**
 * Primary UI component for user interaction
 */
export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  size?: 'sm' | 'md'
  variant?: 'primary' | 'secondary'
  disabled?: boolean
}

export const Button = ({
  className,
  variant = 'primary',
  size = 'md',
  disabled,
  onClick,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={twMerge(
        'flex items-center justify-center rounded-lg px-8 py-2 text-md font-medium hover:shadow-md hover:shadow-neutral-500',
        className,
        variant === 'primary' &&
          'bg-orange-500 text-neutral hover:bg-orange-700',
        variant === 'secondary' &&
          'bg-neutral text-orange-500 border border-orange-500 hover:bg-neutral-200',
        size === 'sm' && 'px-6 py-1',
        disabled === true && 'opacity-50 cursor-not-allowed',
      )}
      onClick={onClick}
      {...rest}
    />
  )
}