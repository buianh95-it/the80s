import { put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'
import { notification } from 'antd'

function* userLoginActionSaga(action) {
  const { data, callback } = action.payload
  const { email, password } = data
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
    }
    const { data } = yield axios.post('/api/users/login', { email, password }, config)
    if (data.isAdmin) {
      yield callback.goToDashboard()
    } else {
      yield callback.goToCart()
    }

    notification.success({ message: 'Login successfull!' })
    localStorage.setItem('userInfo', JSON.stringify(data))
    yield put({ type: 'USER_LOGIN_SUCCESS', payload: { data } })
  } catch (error) {
    yield put({ type: 'USER_LOGIN_FAILURE', payload: { error } })
  }
}

function* userRegisterActionSaga(action) {
  const { data, callback } = action.payload
  const { name, email, password } = data
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
    }
    const { data } = yield axios.post('/api/users/register', { name, email, password }, config)
    yield callback.goToCart()
    notification.success({ message: `Wellcome new member: ${data.name} 🤗🤗🤗` })
    localStorage.setItem('userInfo', JSON.stringify(data))

    yield put({ type: 'USER_REGISTER_SUCCESS', payload: { data } })
  } catch (error) {
    yield put({ type: 'USER_REGISTER_FAILURE', payload: { error } })
  }
}

function* userModifyActionSaga(action) {
  const { data, token, userId } = action.payload
  const { name, email, address, gender, phone } = data
  const user = {
    _id: userId,
    name,
    email,
    address,
    gender,
    phone,
  }
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
    const { data } = yield axios.put(`/api/users/profile`, user, config)
    notification.success({ message: 'Update profile successfull!' })
    localStorage.setItem('userInfo', JSON.stringify(data))
    yield put({ type: 'USER_MODIFY_SUCCESS', payload: { data } })
  } catch (error) {
    yield put({ type: 'USER_MODIFY_FAILURE', payload: { error } })
  }
}

function* userChangePasswordAction(action) {
  const { password, token, userId } = action.payload
  const user = {
    _id: userId,
    password,
  }
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
    const { data } = yield axios.put(`/api/users/change-password`, user, config)
    notification.success({ message: 'Update password successfull!' })
    localStorage.setItem('userInfo', JSON.stringify(data))
    yield put({ type: 'USER_CHANGE_PASSWORD_SUCCESS', payload: { data } })
  } catch (error) {
    yield put({ type: 'USER_CHANGE_PASSWORD_FAILURE', payload: { error } })
  }
}

function* getAllUsersSaga(action) {
  try {
    const { data } = yield axios.get('/api/users/all')
    yield put({ type: 'GET_ALL_USERS_SUCCESS', payload: { data } })
  } catch (error) {
    yield put({ type: 'GET_ALL_USERS_FAILURE', payload: { error } })
  }
}

function* getAllEmailSubSaga(action) {
  try {
    const { data } = yield axios.get('/api/users/email')
    yield put({ type: 'GET_ALL_EMAIL_SUB_SUCCESS', payload: { data } })
  } catch (error) {
    yield put({ type: 'GET_ALL_EMAIL_SUB_FAILURE', payload: { error } })
  }
}

export default function* userSaga() {
  yield takeEvery('USER_LOGIN_REQUEST', userLoginActionSaga)
  yield takeEvery('USER_REGISTER_REQUEST', userRegisterActionSaga)
  yield takeEvery('USER_MODIFY_REQUEST', userModifyActionSaga)
  yield takeEvery('USER_CHANGE_PASSWORD_REQUEST', userChangePasswordAction)
  yield takeEvery('GET_ALL_USERS_REQUEST', getAllUsersSaga)
  yield takeEvery('GET_ALL_EMAIL_SUB_REQUEST', getAllEmailSubSaga)
}
