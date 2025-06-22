const CustomImage = (
    { source, smSource, lgSource, alt='', fit, rounded }: { source: string; smSource: string; lgSource: string; alt?: string; fit?: boolean, rounded?: boolean }
) => {
    return (
        <picture>
            <source media="(min-width:1024px)" srcSet={lgSource} />
            <source media="(min-width:468px)" srcSet={smSource} />
            <img src={source} alt={alt} className={`${fit ? 'w-full h-full' : ''} ${rounded ? 'rounded-md' : ''}`} />
        </picture>
    );
};

export default CustomImage;