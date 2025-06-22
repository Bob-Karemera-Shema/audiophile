import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICartItem, ICartState, IProduct } from "../types";
import { RootState } from "./store";

const addCartItem = (cartItems: ICartItem[], productToAdd: IProduct, quantity?: number): ICartItem[] => {
    if(!quantity) quantity = 1;

    // check if cart items contains productToAdd
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);

    // if found, increment quantity
    if (existingCartItem) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ?
            { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        );
    }

    // return new array with a new cart item
    return [...cartItems, { ...productToAdd, quantity }];
};

const removeCartItem = (cartItems: ICartItem[], cartItemToRemove: ICartItem): ICartItem[] => {
    // find cart item to remove
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id);

    // check if quantity is equal to 1
    // if it is remove that item from the cart
    if (existingCartItem && existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }

    // return back cart items with matching cart item with reduced quantity
    return cartItems.map((cartItem) => cartItem.id === cartItemToRemove.id ?
        { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
};

const INITIAL_STATE: ICartState = {
    isCartOpen: false,
    cartItems: [],
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState: INITIAL_STATE,
    reducers: {
        toggleIsCartOpen(state) {
            state.isCartOpen = !state.isCartOpen;
        },
        addItemToCart(state, action: PayloadAction<{product: IProduct; quantity?: number}>) {
            const { product, quantity} = action.payload
            state.cartItems = addCartItem(state.cartItems, product, quantity);
        },
        removeItemFromCart(state, action: PayloadAction<ICartItem>) {
            state.cartItems = removeCartItem(state.cartItems, action.payload);
        },
        clearItemsFromCart(state) {
            state.cartItems = [];
        }
    }
});

// Cart Actions
export const { toggleIsCartOpen, addItemToCart, removeItemFromCart, clearItemsFromCart } = cartSlice.actions;

// Cart Reducer
export default cartSlice.reducer;

// Cart Selectors
export const selectCartItems = (state: RootState) => state.cart.cartItems;

export const selectIsCartOpen = (state: RootState) => state.cart.isCartOpen;

export const selectCartCount = (state: RootState) => state.cart.cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);

export const selectCartTotal = (state: RootState) => state.cart.cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0);