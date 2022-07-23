import { createReducer } from '@reduxjs/toolkit'

const initialState = {
  cartItems: [],
  addCartLoading: false,
  addCartError: '',
  shippingAddress: '',
  saveCardLoading: ' false',
  saveCardError: '',
  paymentMethod: '',
  savePaymentMethodLoading: 'false',
  savePaymentMethodError: '',
}

const cartReducer = createReducer(initialState, {
  ADD_CART_ITEM_REQUEST: (state, action) => {
    return { ...state, addCartLoading: true }
  },
  ADD_CART_ITEM_SUCCESS: (state, action) => {
    const item = action.payload
    const existItem = state.cartItems.find(
      (x) => x.product === item.product && x.size === item.size
    )
    if (existItem) {
      return {
        ...state,
        addCartLoading: false,
        cartItems: state.cartItems.map((x) =>
          x.product === item.product && x.size === item.size ? { ...x, qty: x.qty + item.qty } : x
        ),
      }
    } else {
      return {
        ...state,
        addCartLoading: false,
        cartItems: [...state.cartItems, item],
      }
    }
  },
  ADD_CART_ITEM_FAILURE: (state, action) => {
    const { error } = action.payload
    return { ...state, addCartLoading: false, addCartError: error }
  },

  UPDATE_CART_ITEM_REQUEST: (state, action) => {
    const { qty, product, size } = action.payload
    return {
      ...state,
      cartItems: state.cartItems.map((x) =>
        x.product === product && x.size === size ? { ...x, qty } : x
      ),
    }
  },

  REMOVE_CART_ITEM_REQUEST: (state, action) => {
    const { product, size } = action.payload
    const newCartItems = state.cartItems.filter((x) => {
      if (x.product === product && x.size === size) {
        return false
      }
      return true
    })
    return {
      ...state,
      cartItems: newCartItems,
    }
  },

  REMOVE_CART_ITEM_DONE_REQUEST: (state, action) => {
    return {
      ...state,
      cartItems: [],
    }
  },

  SAVE_CART_ITEM_REQUEST: (state, action) => {
    return { ...state, saveCardLoading: true }
  },
  SAVE_CART_ITEM_SUCCESS: (state, action) => {
    const shippingAddress = action.payload
    return { ...state, saveCardLoading: false, shippingAddress }
  },

  SAVE_PAYMENT_METHOD_REQUEST: (state, action) => {
    return { ...state, savePaymentMethodLoading: true }
  },
  SAVE_PAYMENT_METHOD_SUCCESS: (state, action) => {
    const paymentMethod = action.payload
    return { ...state, savePaymentMethodLoading: false, paymentMethod }
  },
})

export default cartReducer
