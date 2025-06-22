import clsx from "clsx";
import { forwardRef, InputHTMLAttributes } from "react";

interface RadioInputProps extends InputHTMLAttributes<HTMLInputElement> {
    id: string;
    label: string;
}

const RadioInput = forwardRef<HTMLInputElement, RadioInputProps>(({ id, label, ...props }, ref) => {
    return (
        <label
        htmlFor={`radio-${id}`}
        className="flex items-center gap-3 cursor-pointer p-4 border border-font-gray rounded-lg outline-dark-orange transition">
            <input
                type="radio"
                id={`radio-${id}`}
                className="sr-only"
                value={label}
                ref={ref}
                {...props}
            />
            <div
                aria-hidden="true"
                className={clsx(
                    'w-5 h-5 rounded-full border-2 flex items-center justify-center',
                    {
                        'border-dark-orange': props.checked,
                        'border-font-gray': !props.checked
                    })}
            >
                {
                    props.checked && (
                        <div className="w-2.5 h-2.5 bg-dark-orange rounded-full" />
                    )
                    }
            </div>
            <span className="text-sm font-black">
                {label}
            </span>
        </label>
    )
});

RadioInput.displayName = "RadioInput";
export default RadioInput;