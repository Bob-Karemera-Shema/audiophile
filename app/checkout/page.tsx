import BackButton from "@/components/shared/backButton";
import Button from "@/components/shared/button";
import Input from "@/components/shared/input";
import InputError from "@/components/shared/inputError";
import Label from "@/components/shared/label";
import RadioInput from "@/components/shared/radioInput";

export default function Checkout() {
    return (
        <>
            <BackButton />
            <form className="mt-6 mb-32 sm:mt-8 flex flex-col gap-8 lg:flex-row">
                <section className="bg-white px-6 sm:px-8 lg:px-12 py-8 lg:pt-16 flex flex-col gap-8 rounded-lg flex-3/4">
                    <h1 className="font-bold uppercase text-[1.75rem]">Checkout</h1>

                    {/* Billing Details */}
                    <fieldset>
                        <legend className="text-[13px] uppercase tracking-wider text-dark-orange font-semibold mb-4">Billing Details</legend>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="flex flex-col gap-3">
                                <div className="flex justify-between">
                                    <Label>Name</Label>
                                    <InputError>Field cannot be empty</InputError>
                                </div>
                                <Input placeholder="Alexei Ward" />
                            </div>

                            <div className="flex flex-col gap-3">
                                <div className="flex justify-between">
                                    <Label>Email Address</Label>
                                    <InputError>Field cannot be empty</InputError>
                                </div>
                                <Input placeholder="alexei@email.com" />
                            </div>

                            <div className="flex flex-col gap-3">
                                <div className="flex justify-between">
                                    <Label>Phone Number</Label>
                                    <InputError>Field cannot be empty</InputError>
                                </div>
                                <Input placeholder="+1 202-555-0136" />
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
                                    <InputError>Field cannot be empty</InputError>
                                </div>
                                <Input placeholder="1137 Williams Avenue" />
                            </div>

                            <div className="flex flex-col gap-3 sm:[grid-area:b]">
                                <div className="flex justify-between">
                                    <Label>ZIP Code</Label>
                                    <InputError>Field cannot be empty</InputError>
                                </div>
                                <Input placeholder="10001" />
                            </div>

                            <div className="flex flex-col gap-3 sm:[grid-area:c]">
                                <div className="flex justify-between">
                                    <Label>City</Label>
                                    <InputError>Field cannot be empty</InputError>
                                </div>
                                <Input placeholder="New York" />
                            </div>

                            <div className="flex flex-col gap-3 sm:[grid-area:d]">
                                <div className="flex justify-between">
                                    <Label>Country</Label>
                                    <InputError>Field cannot be empty</InputError>
                                </div>
                                <Input placeholder="United States" />
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
                                    selected=""
                                />

                                <RadioInput
                                    id="2"
                                    label="Cash on Delivery"
                                    selected=""
                                />
                            </div>
                        </div>

                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="flex flex-col gap-3">
                                <div className="flex justify-between">
                                    <Label>e-Money Number</Label>
                                    <InputError>Field cannot be empty</InputError>
                                </div>
                                <Input placeholder="238521993" />
                            </div>

                            <div className="flex flex-col gap-3">
                                <div className="flex justify-between">
                                    <Label>e-Money PIN</Label>
                                    <InputError>Field cannot be empty</InputError>
                                </div>
                                <Input placeholder="6891" />
                            </div>
                        </div>

                        <div className="mt-8">
                            <p className="text-font-gray text-[15px]/6">
                                {"The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled."}
                            </p>
                        </div>
                    </fieldset>
                </section>
                <section className="bg-white px-6 sm:px-8 py-8 flex flex-col gap-8 h-fit lg:flex-1/3">
                    <h2 className="font-bold uppercase tracking-widest text-lg">Summary</h2>
                    <p className="text-font-gray font-semibold text-center">No Items in cart</p>
                    <div>
                        <div className="flex justify-between w-full">
                            <span className="text-[15px] uppercase text-font-gray">Total</span>
                            <span className="text-lg font-bold">$ 0</span>
                        </div>

                        <div className="flex justify-between w-full">
                            <span className="text-[15px] uppercase text-font-gray">Shipping</span>
                            <span className="text-lg font-bold">$ 50</span>
                        </div>

                        <div className="flex justify-between w-full">
                            <span className="text-[15px] uppercase text-font-gray">VAT (INCLUDED)</span>
                            <span className="text-lg font-bold">$ 0</span>
                        </div>

                        <div className="flex justify-between w-full mt-8">
                            <span className="text-[15px] uppercase text-font-gray">Grand Total</span>
                            <span className="text-lg font-bold text-dark-orange">$ 50</span>
                        </div>
                        <Button className="mt-8 w-full">
                            Continue & Pay
                        </Button>
                    </div>
                </section>
            </form>
        </>
    );
}