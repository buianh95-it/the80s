import { put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'

function* addCartItemActionSaga(action) {
  try {
    const { id, qty, size } = action.payload
    const { data } = yield axios.get(`/api/products/${id}`)
    const item = {
      product: data._id,
      name: data.name,
      image: data.images[0],
      price: data.price,
      color: data.color,
      size,
      countInStock: data.countInStock[size],
      qty,
    }
    yield put({ type: 'ADD_CART_ITEM_SUCCESS', payload: item })
  } catch (error) {
    yield put({ type: 'ADD_CART_ITEM_FAILURE', payload: { error } })
  }
}

function* saveCartActionSaga(action) {
  const { shippingAddress } = action.payload
  yield put({ type: 'SAVE_CART_ITEM_SUCCESS', payload: shippingAddress })
}

function* savePaymentMethod(action) {
  const { paymentMethod } = action.payload
  yield put({ type: 'SAVE_PAYMENT_METHOD_SUCCESS', payload: paymentMethod })
}

export default function* cartSaga() {
  yield takeEvery('ADD_CART_ITEM_REQUEST', addCartItemActionSaga)
  yield takeEvery('SAVE_CART_ITEM_REQUEST', saveCartActionSaga)
  yield takeEvery('SAVE_PAYMENT_METHOD_REQUEST', savePaymentMethod)
}
