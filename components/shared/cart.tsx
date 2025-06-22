'use client'

import { clearItemsFromCart, selectCartCount, selectCartItems, selectCartTotal } from "@/utils/store/cartSlice";
import { useAppDispatch, useAppSelector } from "@/utils/store/hooks";
import { IoCartOutline } from "react-icons/io5";
import CartItem from "./cartItem";
import Link from "next/link";
import Button from "./button";

const Cart = () => {
    const cartItems = useAppSelector(selectCartItems);
    const itemCount = useAppSelector(selectCartCount);
    const cartTotal = useAppSelector(selectCartTotal)
    const dispatch = useAppDispatch();

    const removeAllItems = () => dispatch(clearItemsFromCart());

    return (
        <div className="absolute z-20 top-[100px] md:right-4 lg:right-52 flex justify-end">
            {
                cartItems.length ? (
                    <div className="bg-white shadow-xl shadow-font-gray min-w-screen md:min-w-[375px] min-h-[220px] w-fit h-fit p-8 rounded-md flex flex-col gap-8">
                        <div className="flex justify-between">
                            <h3 className="font-bold text-lg uppercase">Cart ({itemCount})</h3>
                            <button
                                className="text-font-gray text-[15px] tracking-wider cursor-pointer border-b border-transparent hover:border-font-gray transition duration-150"
                                onClick={removeAllItems}
                            >
                                Remove All
                            </button>
                        </div>
                        <ul>
                            {
                                cartItems.map(item => (
                                    <CartItem key={item.id} cartItem={item} />
                                ))
                            }
                        </ul>
                        <div className="flex justify-between">
                            <span className="text-[15px] text-font-gray uppercase">Total</span>
                            <span className="text-lg font-bold">$ {cartTotal}</span>
                        </div>
                        <Link href='/checkout' aria-label="Checkout Page">
                            <Button className="w-full">
                                Checkout
                            </Button>
                        </Link>
                    </div>
                ) : (
                    <div className="bg-white shadow-xl min-w-screen md:min-w-[375px] min-h-[220px] w-fit h-fit rounded-md flex justify-center items-center">
                        <div className="flex flex-col justify-center items-center gap-4">
                            <p className="font-bold text-font-gray text-base">Your cart is empty</p>
                            <IoCartOutline className="w-24 h-24" />
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Cart;