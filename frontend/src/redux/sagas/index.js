import { fork } from 'redux-saga/effects'
import productSaga from './product.saga'
import cartSaga from './cart.saga'
import userSaga from './user.saga'
import orderSaga from './order.saga'
import commentSaga from './comment.saga'
export default function* rootSaga() {
  yield fork(productSaga)
  yield fork(cartSaga)
  yield fork(userSaga)
  yield fork(orderSaga)
  yield fork(commentSaga)
}
