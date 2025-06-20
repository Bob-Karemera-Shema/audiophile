import categories from "@/utils/categoriesData";
import Image from "next/image";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

const Categories = () => {
    return (
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-y-16 gap-x-2 lg:gap-x-8 mt-32 mb-16 py-14">
            {
                categories.map(category => {
                    const { name, image, url, width, height } = category;
                    return (
                        <Link key={name + url} href={url} aria-label={`${name} Page`}>
                            <div className="bg-container-gray rounded-md flex flex-col items-center justify-end group pb-4 h-40">
                                <div className="relative -top-4">
                                    <Image
                                        src={image}
                                        alt={name}
                                        width={width}
                                        height={height}
                                        className="w-32"
                                    />
                                </div>
                                <h2 className="relative -top-2 font-bold text-[15px] uppercase tracking-wider mb-4">{name}</h2>
                                <div className="relative -top-2 flex items-center justify-center gap-1">
                                    <span className="text-font-gray text-[13px] font-bold uppercase group-hover:text-dark-orange">Shop</span>
                                    <MdKeyboardArrowRight className="h-5 w-auto font-bold text-dark-orange" />
                                </div>
                            </div>
                        </Link>
                    )
                })
            }
        </section>
    )
}

export default Categories;