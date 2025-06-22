import clsx from "clsx";
import { FC, LabelHTMLAttributes, PropsWithChildren } from "react";

interface LabelProps extends PropsWithChildren<LabelHTMLAttributes<HTMLLabelElement>> {
    errors?: boolean;
}

const Label: FC<LabelProps> = ({
    children,
    className = '',
    errors,
    ...props
}) => {
    return (
        <label
            className={clsx(
                'font-bold text-xs',
                {
                    'text-red-500': errors
                },
                className
            )}
            {...props}
        >
            {children}
        </label>
    );
}

export default Label;