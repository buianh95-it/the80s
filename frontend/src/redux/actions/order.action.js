import { createAction } from '@reduxjs/toolkit'

export const createOrderAction = createAction('ORDER_CREATE_REQUEST')

export const getOrderListMyRequest = createAction('ORDER_LIST_MY_REQUEST')

export const getAllOrderAction = createAction('GET_ALL_ORDER_REQUEST')
