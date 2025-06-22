'use client';

import { IProduct } from "@/utils/types";
import CustomImage from "../shared/image";
import Button from "../shared/button";
import { useState } from "react";
import { addItemToCart } from "@/utils/store/cartSlice";
import { useAppDispatch } from "@/utils/store/hooks";

const ProductIntro = ({ product }: { product: IProduct }) => {
    const dispatch = useAppDispatch();
    const [quantity, setQuantity] = useState(1);

    const decrement = () => setQuantity(quantity === 1 ? 1 : quantity - 1);

    const increment = () => setQuantity(quantity + 1);

    const addProductToCart = () => dispatch(addItemToCart({product, quantity}))

    return (
        <>
            {
                product && (
                    <section
                        className="grid grid-cols-1 sm:grid-cols-2 items-center gap-8 mt-6 lg:mt-12"
                    >
                        <div className="rounded-md overflow-hidden">
                            <CustomImage
                                source={product.image.mobile}
                                smSource={product.image.tablet}
                                lgSource={product.image.desktop}
                                alt={product.name}
                            />
                        </div>
                        <div className="flex flex-col lg:pl-24">
                            {product.new && <p className="text-light-orange uppercase mb-4 tracking-[0.625rem] text-sm font-bold">New Product</p>}
                            <h2 className="text-black text-3xl/tight font-bold tracking-wider mb-6 uppercase">{product.name}</h2>
                            <p className="text-font-gray text-[15px] mb-6">{product.description}</p>
                            <p className="text-lg font-bold mb-6">$ {product.price}</p>
                            <div className="flex gap-4">
                                <div className="flex gap-1 items-center bg-container-gray">
                                    <button
                                    onClick={decrement}
                                    className="h-full px-5 cursor-pointer border-none font-medium text-font-gray hover:text-dark-orange hover:bg-button-gray"
                                    >-</button>
                                    <span className="w-4 flex justify-center">{quantity}</span>
                                    <button
                                    onClick={increment}
                                    className="h-full px-5 cursor-pointer border-none font-medium text-font-gray hover:text-dark-orange hover:bg-button-gray"
                                    >+</button>
                                </div>
                                <Button onClick={addProductToCart}>
                                    Add To Cart
                                </Button>
                            </div>
                        </div>
                    </section>
                )
            }
        </>
    )
};

export default ProductIntro;