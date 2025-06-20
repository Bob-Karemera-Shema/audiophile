import Button from "../shared/button";

const Hero = () => {
    return (
        <article className="max-w-5xl mx-auto h-[75vh] lg:h-[80vh] flex items-center justify-center lg:justify-start">
            <div className="text-center lg:text-left max-w-md flex flex-col items-center lg:block">
                <p className="text-font-gray uppercase mb-4 tracking-[0.625rem] text-sm font-bold">New Product</p>
                <h1 className="text-white text-5xl/tight font-bold tracking-wider mb-6 uppercase">XX99 Mark II Headphones</h1>
                <p className="text-font-gray text-[15px] mb-10 max-w-xs">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                <Button>See Product</Button>
            </div>
        </article>
    )
}

export default Hero;