import CustomImage from "../shared/image";

const About = () => {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 my-24">
            <article className="order-2 lg:order-1 flex flex-col gap-12 items-center lg:justify-center text-center lg:text-left sm:px-4 lg:px-0">
                <h2 className="font-bold text-3xl sm:text-[2.5rem] uppercase">
                    Bringing you the
                    <span className="text-dark-orange"> best </span>
                    audio gear
                </h2>
                <p className="text-font-gray text-[15px]">
                    Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
                </p>
            </article>
            <article className="order-1 lg:order-2">
                <CustomImage
                    source="/images/main/image-best-gear.jpeg"
                    smSource="/images/main/image-best-gear-sm.jpeg"
                    lgSource="/images/main/image-best-gear-lg.jpeg"
                    rounded
                />
            </article>
        </section>
    )
};

export default About;