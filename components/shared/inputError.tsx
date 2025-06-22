const InputError = ({ children }: { children: React.ReactNode}) => {
    return (
        <span className="text-xs text-red-500">
            {children}
        </span>
    );
}

export default InputError;