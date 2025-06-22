import clsx from "clsx";
import { FC, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    errors?: boolean;
}

const Input: FC<InputProps> = ({
    className = '',
    type = 'text',
    errors,
    ...props
}) => {
    return (
        <input
            type={type}
            className={clsx(
                'border-[1px] border-font-gray rounded-lg p-4 font-bold text-sm outline-dark-orange outline-offset-2 w-full placeholder:text-font-gray',
                {
                    'border-red-500': errors
                },
                className
            )}
            {...props}
        />
    );
}

export default Input;