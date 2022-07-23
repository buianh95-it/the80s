import { put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'
import { notification } from 'antd'

function* createCommentActionSaga(action) {
  const { id, token, rate, comment } = action.payload
  const comments = { rate, comment }
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
    yield axios.post(`/api/products/${id}/reviews`, comments, config)
    yield put({ type: 'CREATE_COMMENT_SUCCESS' })
    yield put({ type: 'GET_PRODUCT_DETAIL_REQUEST', payload: { productId: id } })

    notification.success({ message: 'Đánh giá thành công!' })
  } catch (error) {
    yield put({ type: 'CREATE_COMMENT_FAILURE', payload: { error } })
  }
}

export default function* cartSaga() {
  yield takeEvery('CREATE_COMMENT_REQUEST', createCommentActionSaga)
}
