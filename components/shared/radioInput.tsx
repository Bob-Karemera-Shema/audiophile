import clsx from "clsx";

const RadioInput = ({ id, label, selected }: { id: string; label: string; selected: string }) => {
    return (
        <label className="flex items-center gap-3 cursor-pointer p-4 border rounded-lg outline-dark-orange transition">
            <input
                type="radio"
                id={`radio-${id}`}
                name="payment-method"
                value={label}
                checked={selected === label}
                className="sr-only"
            />
            <div
                aria-hidden="true"
                className={clsx(
                    'w-5 h-5 rounded-full border-2 flex items-center justify-center',
                    {
                        'border-dark-orange': label === selected,
                        'border-font-gray': label !== selected
                    })}
            >
                {
                    selected === label && (
                        <div className="w-2.5 h-2.5 bg-dark-orange rounded-full" />
                    )}
            </div>
            <span>
                {label}
            </span>
        </label>
    )
}

export default RadioInput;