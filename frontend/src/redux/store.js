import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import productReducer from './reducers/product.reducer'
import cartReducer from './reducers/cart.reducer'
import userLoginReducer from './reducers/user.reducer'
import orderReducer from './reducers/order.reducer'
import commentReducer from './reducers/comment.reducer'
import rootSaga from './sagas'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const sagaMiddleware = createSagaMiddleware()

const persistCartConfig = {
  key: 'cartItems',
  storage,
  whileList: ['cartItems'],
}

const persistedCartReducer = persistReducer(persistCartConfig, cartReducer)

export const store = configureStore({
  reducer: {
    product: productReducer,
    cart: persistedCartReducer,
    user: userLoginReducer,
    order: orderReducer,
    comment: commentReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({ thunk: false, serializableCheck: false }),
    sagaMiddleware,
  ],
})

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)
