const CustomImage = (
    { source, smSource, lgSource, alt }: { source: string; smSource: string; lgSource: string; alt: string; }
) => {
    return (
        <picture>
            <source media="(min-width:1024px)" srcSet={lgSource} />
            <source media="(min-width:468px)" srcSet={smSource} />
            <img src={source} alt={alt} />
        </picture>
    );
};

export default CustomImage;