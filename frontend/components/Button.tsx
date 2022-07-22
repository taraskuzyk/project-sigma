import classNames from "classnames"
import type { ButtonHTMLAttributes } from "react"

type ButtonColor = 'blue'
type ButtonVariant = 'default' | 'ghost'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    color?: ButtonColor
    variant?: ButtonVariant
}

export const buttonVariants = {
    common: 'rounded px-4 py-1 transition-colors',
    default: {
        'blue': 'bg-blue-500 text-blue-50 hover:bg-blue-700 hover:text-blue-200',
    },
    'ghost': {
        'blue': 'bg-transparent text-blue-500 hover:bg-blue-100 hover:text-blue-700'
    }
}

function Button({ children, color = 'blue', variant = 'default', ...props }: ButtonProps) {
    return (
        <button
            {...props}
            className={classNames(
                buttonVariants.common,
                buttonVariants[variant][color],
                props.className
            )}
        >
            {children}
        </button>
    )
}

export default Button