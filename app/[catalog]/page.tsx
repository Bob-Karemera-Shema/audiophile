import Button from "@/components/shared/button";
import Categories from "@/components/shared/categories";
import CustomImage from "@/components/shared/image";
import { productsData } from "@/utils/productData";
import Image from "next/image";
import Link from "next/link";

export default async function Catalog({
  params,
}: {
  params: Promise<{ catalog: string }>
}) {
  const { catalog } = await params;
  const products = productsData.products[catalog];

  return (
    <>
      <section className="mt-16 mb-0 sm:mb-32">
        {
          products && products.map((product, index) => (
            <article
              key={product.id}
              className={`grid grid-cols-1 lg:grid-cols-2 items-center gap-8 ${index === products.length - 1 ? '' : 'mb-30'}`}
            >
              <div className={`rounded-md overflow-hidden ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                <CustomImage
                  source={product.image.mobile}
                  smSource={product.image.tablet}
                  lgSource={product.image.desktop}
                  alt={product.name}
                />
              </div>
              <div className={`flex flex-col items-center lg:items-start text-center lg:text-left ${index % 2 !== 0 ? 'lg:order-1 lg:pr-24' : 'lg:pl-24'}`}>
                {product.new && <p className="text-light-orange uppercase mb-4 tracking-[0.625rem] text-sm font-bold">New Product</p>}
                <h2 className="text-black text-3xl/tight font-bold tracking-wider mb-6 uppercase">{product.name}</h2>
                <p className="text-font-gray text-[15px] mb-10">{product.description}</p>
                <Link href={`/${catalog}/${product.slug}`} aria-label={product.name}>
                  <Button>
                    See Product
                  </Button>
                </Link>
              </div>
            </article>
          ))
        }
      </section>
      <Categories variant="section" />
    </>
  )
}