import Button from "@/components/shared/button";
import Categories from "@/components/shared/categories";
import CustomImage from "@/components/shared/image";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Categories variant="section" />

      <section className="bg-dark-orange rounded-md grid grid-cols-1 relative h-[700px] lg:h-[600px] overflow-hidden mb-12">
        <div className="relative -top-36 sm:-top-60 lg:-top-20 lg:-left-56">
          <Image src="/images/main/pattern-circles.svg" alt="Circle patterns" width={944} height={944} className="w-full h-full object-cover" />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-1/2 flex flex-col items-center lg:flex-row lg:justify-between">
          <Image
            src="/images/main/image-speaker-zx9_2.png"
            alt="Speaker"
            width={756}
            height={918}
            className="w-48 lg:w-[25.625rem] mb-8 lg:relative -bottom-24 -left-38"
          />
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h2 className="text-white uppercase font-bold text-4xl sm:text-[3.5rem] tracking-widest mb-6">ZX9 Speaker</h2>
            <p className="text-white/75 font-extralight text-[15px] mb-16">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
            <Link href="/speakers/zx9-speaker" aria-label="ZX9 Speaker details">
              <Button variant="secondary">
                See Product
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="rounded-md overflow-hidden relative mb-12">
        <div>
          <CustomImage
            source="/images/main/image-speaker-zx7.jpeg"
            smSource="/images/main/image-speaker-zx7-sm.jpeg"
            lgSource="/images/main/image-speaker-zx7-lg.jpeg"
            alt="ZX7 Speaker"
          />
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 left-6 sm:left-14 lg:left-20">
          <h2 className="font-bold uppercase text-[1.75rem] mb-8">ZX7 Speaker</h2>
          <Link href="/speakers/zx7-speaker" aria-label="ZX7 Speaker details">
            <Button variant="outline">
              See Product
            </Button>
          </Link>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-3 lg:gap-8">
        <div className="rounded-md overflow-hidden">
          <CustomImage
            source="/images/main/image-earphones-yx1.jpeg"
            smSource="/images/main/image-earphones-yx1-sm.jpeg"
            lgSource="/images/main/image-earphones-yx1-lg.jpeg"
            alt="YX1 Earphones"
          />
        </div>
        <div className="bg-container-gray rounded-md h-full py-10 pl-6 flex flex-col justify-center lg:pl-24">
          <h2 className="font-bold uppercase text-[1.75rem] mb-8">YX1 Earphones</h2>
          <Link href="/earphones/yx1-earphones" aria-label="YX1 Earphones details">
            <Button variant="outline">
              See Product
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
