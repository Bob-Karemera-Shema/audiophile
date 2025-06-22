'use client';

import BackButton from "@/components/shared/backButton";
import Button from "@/components/shared/button";
import CartItem from "@/components/shared/cartItem";
import Input from "@/components/shared/input";
import InputError from "@/components/shared/inputError";
import Label from "@/components/shared/label";
import RadioInput from "@/components/shared/radioInput";
import { clearItemsFromCart, selectCartCount, selectCartItems, selectCartTotal } from "@/utils/store/cartSlice";
import { useAppDispatch, useAppSelector } from "@/utils/store/hooks";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaCheck } from "react-icons/fa";

interface FormData {
    name: string;
    email: string;
    phone: string;
    address: string;
    zip: string;
    city: string;
    country: string;
    paymentMethod: "e-Money" | "Cash on Delivery";
    eMoneyNumber?: string;
    eMoneyPin?: string;
};

export default function Checkout() {
    const dispatch = useAppDispatch();
    const cartCount = useAppSelector(selectCartCount);
    const cartItems = useAppSelector(selectCartItems);
    const cartTotal = useAppSelector(selectCartTotal);
    const shipping = 50;
    const tax = cartItems.length ? +(cartTotal * 0.2).toFixed(2) : 0;
    const grandTotal = cartItems.length ? (cartTotal + tax + shipping) : 0;

    const [isModalOpen, setIsModalOpen] = useState(false);

    const router = useRouter();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm<FormData>({
        mode: "onChange",
        defaultValues: {
            paymentMethod: "e-Money"
        }
    });

    const paymentMethod = watch("paymentMethod");

    const onSubmit = (data: FormData) => {
        setIsModalOpen(true);
    }

    const redirect = () => {
        dispatch(clearItemsFromCart());
        setIsModalOpen(false);
        router.push('/');
    }

    return (
        <>
            <BackButton />
            <form className="mt-6 mb-32 sm:mt-8 flex flex-col gap-8 lg:flex-row" onSubmit={handleSubmit(onSubmit)}>
                <section className="bg-white px-6 sm:px-8 lg:px-12 py-8 lg:pt-16 flex flex-col gap-8 rounded-lg flex-3/4">
                    <h1 className="font-bold uppercase text-[1.75rem]">Checkout</h1>

                    {/* Billing Details */}
                    <fieldset>
                        <legend className="text-[13px] uppercase tracking-wider text-dark-orange font-semibold mb-4">Billing Details</legend>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="flex flex-col gap-3">
                                <div className="flex justify-between">
                                    <Label>Name</Label>
                                    {errors.name && <InputError>{errors.name.message}</InputError>}
                                </div>
                                <Input placeholder="Alexei Ward" {...register("name", { required: "Field cannot be empty" })} />
                            </div>

                            <div className="flex flex-col gap-3">
                                <div className="flex justify-between">
                                    <Label>Email Address</Label>
                                    {errors.email && <InputError>{errors.email.message}</InputError>}
                                </div>
                                <Input
                                    placeholder="alexei@email.com"
                                    {...register("email", {
                                        required: "Field cannot be empty",
                                        pattern: {
                                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                            message: "Wrong Format"
                                        }
                                    })}
                                />
                            </div>

                            <div className="flex flex-col gap-3">
                                <div className="flex justify-between">
                                    <Label>Phone Number</Label>
                                    {errors.phone && <InputError>{errors.phone.message}</InputError>}
                                </div>
                                <Input
                                    placeholder="+1 202-555-0136"
                                    {...register("phone", {
                                        required: "Field cannot be empty",
                                        pattern: {
                                            value: /^\+?[\d\s\-()]{7,}$/,
                                            message: "Wrong Format",
                                        },
                                    })}
                                />
                            </div>
                        </div>
                    </fieldset>

                    {/* Shipping Details */}
                    <fieldset>
                        <legend className="text-[13px] uppercase tracking-wider text-dark-orange font-semibold mb-4">Shipping Info</legend>

                        <div className="grid grid-cols-1 sm:grid-cols-2 sm:[grid-template-areas:'a_a'_'b_c'_'d_.'] gap-4">
                            <div className="flex flex-col gap-3 sm:[grid-area:a]">
                                <div className="flex justify-between">
                                    <Label>Your Address</Label>
                                    {errors.address && <InputError>{errors.address.message}</InputError>}
                                </div>
                                <Input
                                    placeholder="1137 Williams Avenue"
                                    {...register("address", { required: "Field cannot be empty" })}
                                />
                            </div>

                            <div className="flex flex-col gap-3 sm:[grid-area:b]">
                                <div className="flex justify-between">
                                    <Label>ZIP Code</Label>
                                    {errors.zip && <InputError>{errors.zip.message}</InputError>}
                                </div>
                                <Input
                                    placeholder="10001"
                                    {...register("zip", {
                                        required: "Field cannot be empty",
                                        pattern: {
                                            value: /^\d{5}(-\d{4})?$/,
                                            message: "Enter a valid ZIP code"
                                        }
                                    })}
                                />
                            </div>

                            <div className="flex flex-col gap-3 sm:[grid-area:c]">
                                <div className="flex justify-between">
                                    <Label>City</Label>
                                    {errors.city && <InputError>{errors.city.message}</InputError>}
                                </div>
                                <Input
                                    placeholder="New York"
                                    {...register("city", { required: "Field cannot be empty" })}
                                />
                            </div>

                            <div className="flex flex-col gap-3 sm:[grid-area:d]">
                                <div className="flex justify-between">
                                    <Label>Country</Label>
                                    {errors.country && <InputError>{errors.country.message}</InputError>}
                                </div>
                                <Input
                                    placeholder="United States"
                                    {...register("country", { required: "Field cannot be empty" })}
                                />
                            </div>
                        </div>
                    </fieldset>

                    {/* Payment Details */}
                    <fieldset>
                        <legend className="text-[13px] uppercase tracking-wider text-dark-orange font-semibold mb-4">Payment Details</legend>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <Label>Payment Method</Label>
                            <div className="flex flex-col gap-4">
                                <RadioInput
                                    id="1"
                                    label="e-Money"
                                    value="e-Money"
                                    {...register("paymentMethod")}
                                    checked={paymentMethod === "e-Money"}
                                />

                                <RadioInput
                                    id="2"
                                    label="Cash on Delivery"
                                    value="Cash on Delivery"
                                    {...register("paymentMethod")}
                                    checked={paymentMethod === "Cash on Delivery"}
                                />
                            </div>
                        </div>

                        {
                            paymentMethod === "e-Money" && (
                                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="flex flex-col gap-3">
                                        <div className="flex justify-between">
                                            <Label>e-Money Number</Label>
                                            {errors.eMoneyNumber && <InputError>{errors.eMoneyNumber.message}</InputError>}
                                        </div>
                                        <Input
                                            type="number"
                                            placeholder="238521993"
                                            {...register("eMoneyNumber", { required: "Field cannot be empty" })}
                                        />
                                    </div>

                                    <div className="flex flex-col gap-3">
                                        <div className="flex justify-between">
                                            <Label>e-Money PIN</Label>
                                            {errors.eMoneyPin && <InputError>{errors.eMoneyPin.message}</InputError>}
                                        </div>
                                        <Input
                                            type="number"
                                            placeholder="6891"
                                            {...register("eMoneyPin", { required: "Field cannot be empty" })}
                                        />
                                    </div>
                                </div>
                            )
                        }

                        {
                            paymentMethod === "Cash on Delivery" && (
                                <div className="mt-8">
                                    <p className="text-font-gray text-[15px]/6">
                                        {"The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled."}
                                    </p>
                                </div>
                            )
                        }
                    </fieldset>
                </section>

                <section className="bg-white px-6 sm:px-8 py-8 flex flex-col gap-8 h-fit lg:flex-1/3">
                    <h2 className="font-bold uppercase tracking-widest text-lg">Summary</h2>
                    <>
                        {
                            cartItems.length ? (
                                cartItems.map(cartItem => (
                                    <CartItem key={cartItem.id} cartItem={cartItem} variant="checkout" />
                                ))
                            ) : (
                                <p className="text-font-gray font-semibold text-center">No Items in cart</p>
                            )
                        }
                    </>
                    <div>
                        <div className="flex justify-between w-full">
                            <span className="text-[15px] uppercase text-font-gray">Total</span>
                            <span className="text-lg font-bold">$ {cartTotal}</span>
                        </div>

                        <div className="flex justify-between w-full">
                            <span className="text-[15px] uppercase text-font-gray">Shipping</span>
                            <span className="text-lg font-bold">$ {shipping}</span>
                        </div>

                        <div className="flex justify-between w-full">
                            <span className="text-[15px] uppercase text-font-gray">VAT (INCLUDED)</span>
                            <span className="text-lg font-bold">$ {tax}</span>
                        </div>

                        <div className="flex justify-between w-full mt-8">
                            <span className="text-[15px] uppercase text-font-gray">Grand Total</span>
                            <span className="text-lg font-bold text-dark-orange">$ {grandTotal}</span>
                        </div>
                        <Button className="mt-8 w-full" type="submit">
                            Continue & Pay
                        </Button>
                    </div>
                </section>
            </form>
            {
                isModalOpen && (
                    <div className="bg-hero-overlay w-full h-full fixed top-0 left-0 z-50">
                        <dialog className="p-8 bg-white absolute top-1/2 left-1/2 -translate-1/2 z-50 flex flex-col gap-6 rounded-lg" open={isModalOpen}>
                            <div className="w-16 h-16 flex justify-center items-center bg-dark-orange rounded-[50%] text-white">
                                <FaCheck className="text-2xl" />
                            </div>
                            <h2 className="font-bold text-2xl md:text-[2rem] uppercase flex flex-col">
                                <span>Thank You</span>
                                <span>For your order</span>
                            </h2>
                            <p className="text-font-gray text-[15px]">You will receive an email confirmation shortly</p>
                            <div className="rounded-md overflow-hidden flex flex-col lg:flex-row">
                                <div className="bg-container-gray p-6 flex flex-col items-center gap-4">
                                    <ul className="w-full">
                                        <li className="w-full">
                                            <CartItem cartItem={cartItems[0]} variant="checkout" />
                                        </li>
                                    </ul>
                                    <button
                                        className="font-bold text-font-gray text-xs/3 tracking-wider cursor-pointer border-b border-transparent hover:border-b-font-gray"
                                    >
                                        and {cartCount} other item(s)
                                    </button>
                                </div>
                                <div className="bg-black p-6 flex flex-col gap-2 justify-center">
                                    <span className="text-font-gray text-[15px] uppercase font-medium">Grand Total</span>
                                    <span className="text-white text-[15px] font-bold">$ {grandTotal}</span>
                                </div>
                            </div>
                            <Button onClick={redirect}>
                                Back to Home
                            </Button>
                        </dialog>
                    </div>
                )
            }
        </>
    );
}