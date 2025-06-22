'use client'

import { addItemToCart, removeItemFromCart } from "@/utils/store/cartSlice";
import { useAppDispatch } from "@/utils/store/hooks";
import { ICartItem } from "@/utils/types";
import Image from "next/image";

const CartItem = ({ cartItem, variant = 'cart' }: { cartItem: ICartItem, variant?: 'cart' | 'checkout' }) => {
    const dispatch = useAppDispatch();

    const removeItem = () => dispatch(removeItemFromCart(cartItem));

    const addItem = () => dispatch(addItemToCart({ product: cartItem }))

    return (
        <li className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
                <div className="bg-container-gray rounded-md overflow-hidden">
                    <Image
                        src={cartItem.cartImage} alt={cartItem.name} width={64} height={64}
                    />
                </div>
                <div className="flex flex-col">
                    <span className="text-[15px] font-bold uppercase">{cartItem.shortName}</span>
                    <span className="text-sm font-bold text-font-gray">$ {cartItem.price}</span>
                </div>
            </div>
            {
                variant === 'cart' ? (
                    <div className="flex gap-1 items-center bg-container-gray">
                        <button
                            className="h-full px-4 py-1 cursor-pointer border-none font-medium text-font-gray hover:text-dark-orange hover:bg-button-gray"
                            onClick={removeItem}
                        >-</button>
                        <span className="w-4 flex justify-center">{cartItem.quantity}</span>
                        <button
                            className="h-full px-4 py-1 cursor-pointer border-none font-medium text-font-gray hover:text-dark-orange hover:bg-button-gray"
                            onClick={addItem}
                        >+</button>
                    </div>
                ) : (
                    <div>
                        <span className="font-bold text-[15px] text-font-gray">x{cartItem.quantity}</span>
                    </div>
                )
            }
        </li>
    )
}

export default CartItem;