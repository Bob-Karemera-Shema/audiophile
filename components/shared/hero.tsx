import { usePathname } from "next/navigation";
import Button from "../shared/button";
import navLinks from "@/utils/navData";

const Hero = () => {
    const pathname = usePathname();
    let current: { label: string, path: string } | undefined;

    if (pathname !== '/') {
        current = navLinks.find(link => pathname === link.path);
    }

    return (
        <>
            {
                pathname === '/' ? (
                    <article className="max-w-5xl mx-auto h-[75vh] lg:h-[80vh] flex items-center justify-center lg:justify-start">
                        <div className="text-center lg:text-left max-w-md flex flex-col items-center lg:block">
                            <p className="text-font-gray uppercase mb-4 tracking-[0.625rem] text-sm font-bold">New Product</p>
                            <h1 className="text-white text-5xl/tight font-bold tracking-wider mb-6 uppercase">XX99 Mark II Headphones</h1>
                            <p className="text-font-gray text-[15px] mb-10 max-w-xs">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                            <Button>See Product</Button>
                        </div>
                    </article>
                ) : (
                    current?.label ? (
                    <article className="max-w-5xl absolute top-3/4 sm:top-3/5 left-1/2 -translate-1/2 w-full flex items-center justify-center">
                        <h1 className="text-[1.75rem] sm:text-[2.5rem] uppercase text-white font-bold tracking-[0.0894rem]">{current.label}</h1>
                    </article>
                ) : null
            )
            }
        </>
    )
}

export default Hero;