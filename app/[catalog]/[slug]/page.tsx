import ProductIntro from "@/components/sections/productIntro";
import BackButton from "@/components/shared/backButton";
import Button from "@/components/shared/button";
import Categories from "@/components/shared/categories";
import CustomImage from "@/components/shared/image";
import { productsData } from "@/utils/productData";
import Link from "next/link";
import { Fragment } from "react";

export default async function Product({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  const product = [...productsData.earphones, ...productsData.headphones, ...productsData.speakers].find(product => product.slug === slug);

  if (!product) {
    return <div>Loading</div>;
  }

  return (
    <>
      <BackButton />

      <ProductIntro product={product} />

      <section className="mt-28 grid grid-cols-1 gap-16 lg:flex lg:gap-20">
        <article className="lg:flex-2 lg:pr-8">
          <h2 className="text-2xl lg:text-[2rem] uppercase font-bold mb-6">Features</h2>
          <div className="text-font-gray text-[15px] flex flex-col gap-6">
            {
              product.features.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))
            }
          </div>
        </article>
        <article className="flex flex-col sm:flex-row sm:gap-24 lg:flex-col lg:gap-0 lg:flex-1">
          <h2 className="text-2xl lg:text-[2rem] uppercase font-bold mb-6">In the box</h2>
          <ul className="flex flex-col gap-2 sm:pt-2 lg:pt-0">
            {
              product.includedItems.map(item => (
                <li key={item.item}>
                  <div className="text-[15px] flex gap-6">
                    <span className="text-dark-orange font-bold w-2">{item.quantity}x</span>
                    <span className="text-font-gray">{item.item}</span>
                  </div>
                </li>
              )
              )
            }
          </ul>
        </article>
      </section>

      <section className="mt-20 sm:mt-24 lg:mt-36 flex flex-col gap-5 sm:flex-row">
        <div className="flex flex-col gap-5 sm:basis-1/2">
          <div className="rounded-lg overflow-hidden">
            <CustomImage
              source={product.gallery.first.mobile}
              smSource={product.gallery.first.tablet}
              lgSource={product.gallery.first.desktop}
              fit
            />
          </div>
          <div className="rounded-lg overflow-hidden">
            <CustomImage
              source={product.gallery.second.mobile}
              smSource={product.gallery.second.tablet}
              lgSource={product.gallery.second.desktop}
              fit
            />
          </div>
        </div>
        <div className="sm:basis-1/2 rounded-lg overflow-hidden flex">
          <CustomImage
            source={product.gallery.third.mobile}
            smSource={product.gallery.third.tablet}
            lgSource={product.gallery.third.desktop}
            fit
          />
        </div>
      </section>

      <section className="mt-28">
        <h2 className="font-bold uppercase text-2xl text-center mb-12 sm:text-[2rem]">You may also like</h2>
        <div className="grid grid-cols-1 gap-16 md:grid-cols-3 md:gap-4 lg:gap-8">
          {
            product.others.map(other => (
              <div key={other.name} className="flex flex-col items-center gap-10">
                <CustomImage
                  source={other.image.mobile}
                  smSource={other.image.tablet}
                  lgSource={other.image.desktop}
                  rounded
                />
                <h3 className="font-bold uppercase text-2xl text-center tracking-wider">{other.name}</h3>
                <Link href={`/${other.slug}`} aria-label={`${other.name} Page`}>
                  <Button>
                    See Product
                  </Button>
                </Link>
              </div>
            ))
          }
        </div>
      </section>

      <Categories variant="section" />
    </>
  )
}