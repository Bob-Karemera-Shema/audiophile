import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";
import clsx from "clsx";

interface ButtonProps extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>{
    variant?: 'primary' | 'secondary' | 'outline';
}

const Button: FC<ButtonProps> = ({
    children,
    className = '',
    variant = 'primary',
    type = 'button',
    ...props
}) => {
    return (
        <button
            type={type}
            className={clsx(
                'font-bold text-[13px] uppercase py-3.5 px-8 tracking-wider',
                {
                    'btn-primary': variant === 'primary',
                    'btn-secondary': variant === 'secondary'
                },
                className
            )}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button;