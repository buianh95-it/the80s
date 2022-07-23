import { createAction } from '@reduxjs/toolkit'

export const addCartItemAction = createAction('ADD_CART_ITEM_REQUEST')

export const updateCartItemAction = createAction('UPDATE_CART_ITEM_REQUEST')

export const removeCartItemAction = createAction('REMOVE_CART_ITEM_REQUEST')

export const saveCartAction = createAction('SAVE_CART_ITEM_REQUEST')

export const removeCartDoneAction = createAction('REMOVE_CART_ITEM_DONE_REQUEST')

export const savePaymentMethodAction = createAction('SAVE_PAYMENT_METHOD_REQUEST')
