import { createAction } from '@reduxjs/toolkit'

export const getProductListAllAction = createAction('GET_PRODUCT_LIST_ALL_REQUEST')

export const getProductListNewAction = createAction('GET_PRODUCT_LIST_NEW_REQUEST')

export const getProductListHoodieJacketsAction = createAction(
  'GET_PRODUCT_LIST_HOODIEJACKETS_REQUEST'
)
export const getProductListJeansAction = createAction('GET_PRODUCT_LIST_JEANS_REQUEST')

export const getProductSearchAction = createAction('GET_PRODUCT_LIST_SEARCH_REQUEST')

export const getProductDetailAction = createAction('GET_PRODUCT_DETAIL_REQUEST')

export const addProductAction = createAction('ADD_PRODUCT_REQUEST')

export const updateProductDetailAction = createAction('UPDATE_PRODUCT_DETAIL_REQUEST')

export const deleteProductAction = createAction('DELETE_PRODUCT_REQUEST')
