import { put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'
import { notification } from 'antd'

function* createOrderActionSaga(action) {
  const { callback, order, token } = action.payload
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
    const { data } = yield axios.post('/api/orders', order, config)

    notification.success({ message: 'Đặt hàng thành công!' })
    callback.success()
    yield put({ type: 'ORDER_CREATE_SUCCESS', payload: { order: data } })
  } catch (error) {
    yield put({ type: 'ORDER_CREATE_FAILURE', payload: { error } })
  }
}

function* listMyOrderActionSaga(action) {
  const { token } = action.payload
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const { data } = yield axios.get('/api/orders/myorders', config)
    yield put({ type: 'ORDER_LIST_MY_SUCCESS', payload: { orders: data } })
  } catch (error) {
    yield put({ type: 'ORDER_LIST_MY_FAILURE', payload: { error } })
  }
}

function* getAllOrderAction(action) {
  try {
    const { data } = yield axios.get('/api/orders/all')
    yield put({ type: 'GET_ALL_ORDER_SUCCESS', payload: { data } })
  } catch (error) {
    yield put({ type: 'GET_ALL_ORDER_FAILURE', payload: { error } })
  }
}

export default function* orderSaga() {
  yield takeEvery('ORDER_CREATE_REQUEST', createOrderActionSaga)
  yield takeEvery('ORDER_LIST_MY_REQUEST', listMyOrderActionSaga)
  yield takeEvery('GET_ALL_ORDER_REQUEST', getAllOrderAction)
}
