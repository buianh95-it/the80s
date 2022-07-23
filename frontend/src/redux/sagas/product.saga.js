import { put, takeEvery, debounce } from 'redux-saga/effects'
import axios from 'axios'
import { notification } from 'antd'

function* getProductListAllSaga(action) {
  const { pageNumber } = action.payload
  const keyword = action.payload.keyword ? action.payload.keyword : 'all'
  try {
    const response = yield axios.get(`/api/products?pageNumber=${pageNumber}&keyword=${keyword}`)
    const data = response.data
    const productListAllItems = data.products
    yield put({
      type: 'GET_PRODUCT_LIST_ALL_SUCCESS',
      payload: { productListAllItems, total: data.total, pageSize: data.pageSize, page: data.page },
    })
  } catch (error) {
    yield put({ type: 'GET_PRODUCT_LIST_ALL_FAILURE', payload: { error } })
  }
}

function* getProductListNewSaga(action) {
  const { pageNumber } = action.payload
  try {
    const response = yield axios.get(`/api/products/new?pageNumber=${pageNumber}`)
    const data = response.data
    const productListNewItems = data.products
    yield put({
      type: 'GET_PRODUCT_LIST_NEW_SUCCESS',
      payload: { productListNewItems, total: data.total, page: data.page, pageSize: data.pageSize },
    })
  } catch (error) {
    yield put({ type: 'GET_PRODUCT_LIST_NEW_SUCCESS_FAILURE', payload: { error } })
  }
}

function* getProductListHoodieJacketsSaga(action) {
  const { pageNumber } = action.payload
  try {
    const response = yield axios.get(`/api/products/jackets?pageNumber=${pageNumber}`)
    const data = response.data
    const productListHoodieItems = data.products
    yield put({
      type: 'GET_PRODUCT_LIST_HOODIEJACKETS_SUCCESS',
      payload: {
        productListHoodieItems,
        total: data.total,
        page: data.page,
        pageSize: data.pageSize,
      },
    })
  } catch (error) {
    yield put({ type: 'GET_PRODUCT_LIST_HOODIEJACKETS_FAILURE', payload: { error } })
  }
}

function* getProductListJeansSaga(action) {
  const { pageNumber } = action.payload
  try {
    const response = yield axios.get(`/api/products/pants?pageNumber=${pageNumber}`)
    const data = response.data
    const productListJeanItems = data.products
    yield put({
      type: 'GET_PRODUCT_LIST_JEANS_SUCCESS',
      payload: {
        productListJeanItems,
        total: data.total,
        page: data.page,
        pageSize: data.pageSize,
      },
    })
  } catch (error) {
    yield put({ type: 'GET_PRODUCT_LIST_JEANS_FAILURE', payload: { error } })
  }
}

function* getProductDetailSaga(action) {
  const { productId } = action.payload
  try {
    const response = yield axios.get(`/api/products/${productId}`)
    const productDetailItem = response.data
    yield put({
      type: 'GET_PRODUCT_DETAIL_SUCCESS',
      payload: { productDetailItem },
    })
  } catch (error) {
    yield put({ type: 'GET_PRODUCT_DETAIL_FAILURE', payload: { error } })
  }
}

function* getProductSearchSaga(action) {
  const { keyword, filterParams } = action.payload
  if (filterParams) {
    const { keyword, categoryIds, price, sort } = filterParams
    try {
      const response = yield axios.get(`/api/products/search?keyword=${keyword}`)
      const data = response.data
      let products = data.products

      products = products.filter((product) => {
        return categoryIds.includes(product.categoryId.toString())
      })
      products = products.filter((product) => {
        return product.price >= price[0] && product.price <= price[1]
      })

      if (sort === 'newest') {
        products = products.sort((a, b) => {
          return new Date(b.createdAt) - new Date(a.createdAt)
        })
      }
      if (sort === 'highToLow') {
        products = products.sort((a, b) => {
          return b.price - a.price
        })
      }
      if (sort === 'lowToHigh') {
        products = products.sort((a, b) => {
          return a.price - b.price
        })
      }

      yield put({
        type: 'GET_PRODUCT_LIST_SEARCH_SUCCESS',
        payload: { products },
      })
    } catch (error) {
      yield put({ type: 'GET_PRODUCT_LIST_SEARCH_FAILURE', payload: { error } })
    }
  } else {
    try {
      const response = yield axios.get(`/api/products/search?keyword=${keyword}`)
      const data = response.data
      const products = data.products

      yield put({
        type: 'GET_PRODUCT_LIST_SEARCH_SUCCESS',
        payload: { products },
      })
    } catch (error) {
      yield put({ type: 'GET_PRODUCT_LIST_SEARCH_FAILURE', payload: { error } })
    }
  }
}

function* addProductSaga(action) {
  const { product } = action.payload
  try {
    const response = yield axios.post('/api/products/add', product)
    const data = response.data
    notification.success({ message: 'Add product sucess!' })
    yield put({
      type: 'ADD_PRODUCT_SUCCESS',
      payload: { data },
    })
  } catch (error) {
    yield put({ type: 'ADD_PRODUCT_FAILURE', payload: { error } })
  }
}

function* deleteProductSaga(action) {
  const { id } = action.payload
  console.log(id)
  try {
    const response = yield axios.delete(`/api/products/${id}`)
    const data = response.data
    if (data.message === 'Product deleted') {
      notification.success({ message: 'Delete product sucess!' })
    }
  } catch (error) {
    yield put({ type: 'DELETE_PRODUCT_FAILURE', payload: { error } })
  }
}

function* updateProductDetailSaga(action) {
  const { data, callback } = action.payload
  const { productId, editProduct } = data
  try {
    const { data } = yield axios.put(`/api/products/${productId}`, editProduct)
    notification.success({ message: 'Update product sucess!' })
    yield put({
      type: 'UPDATE_PRODUCT_DETAIL_SUCCESS',
      payload: { data },
    })
    callback.navigateToAdmin()
  } catch (error) {
    yield put({ type: 'UPDATE_PRODUCT_DETAIL_FAILURE', payload: { error } })
  }
}

export default function* productSaga() {
  yield debounce(300, 'GET_PRODUCT_LIST_ALL_REQUEST', getProductListAllSaga)
  yield takeEvery('GET_PRODUCT_LIST_NEW_REQUEST', getProductListNewSaga)
  yield takeEvery('GET_PRODUCT_LIST_HOODIEJACKETS_REQUEST', getProductListHoodieJacketsSaga)
  yield takeEvery('GET_PRODUCT_LIST_JEANS_REQUEST', getProductListJeansSaga)
  yield takeEvery('GET_PRODUCT_DETAIL_REQUEST', getProductDetailSaga)
  yield debounce(300, 'GET_PRODUCT_LIST_SEARCH_REQUEST', getProductSearchSaga)
  yield takeEvery('ADD_PRODUCT_REQUEST', addProductSaga)
  yield takeEvery('DELETE_PRODUCT_REQUEST', deleteProductSaga)
  yield takeEvery('UPDATE_PRODUCT_DETAIL_REQUEST', updateProductDetailSaga)
}
