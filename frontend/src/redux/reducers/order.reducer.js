import { createReducer } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  order: '',
  success: false,
  error: null,
  orders: [],
  meta: {
    total: '',
    page: '',
    pageSize: '',
  },
}

const orderReducer = createReducer(initialState, {
  ORDER_CREATE_REQUEST: (state, action) => {
    return {
      ...state,
      loading: true,
    }
  },
  ORDER_CREATE_SUCCESS: (state, action) => {
    const { order } = action.payload
    return {
      ...state,
      loading: false,
      order,
      success: true,
    }
  },
  ORDER_CREATE_FAILURE: (state, action) => {
    const { error } = action.payload
    return {
      ...state,
      loading: false,
      error,
    }
  },

  ORDER_LIST_MY_REQUEST: (state, action) => {
    return {
      ...state,
      loading: true,
    }
  },
  ORDER_LIST_MY_SUCCESS: (state, action) => {
    const { orders } = action.payload
    return {
      ...state,
      loading: false,
      orders,
    }
  },
  ORDER_LIST_MY_FAILURE: (state, action) => {
    const { error } = action.payload
    return {
      ...state,
      loading: false,
      error,
    }
  },

  GET_ALL_ORDER_REQUEST: (state, action) => {
    return {
      ...state,
      loading: true,
    }
  },
  GET_ALL_ORDER_SUCCESS: (state, action) => {
    const { data } = action.payload
    return {
      ...state,
      loading: false,
      orders: data.orders,
      success: true,
      meta: {
        total: data.total,
        page: data.page,
        pageSize: data.pageSize,
      },
    }
  },
  GET_ALL_ORDER_FAILURE: (state, action) => {
    const { error } = action.payload
    return {
      ...state,
      loading: false,
      error,
    }
  },
})

export default orderReducer
