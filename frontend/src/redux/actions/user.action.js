import { createAction } from '@reduxjs/toolkit'

export const userLoginAction = createAction('USER_LOGIN_REQUEST')
export const userRegisterAction = createAction('USER_REGISTER_REQUEST')
export const userLoutOutAction = createAction('USER_LOGOUT_REQUEST')

export const userModifyAction = createAction('USER_MODIFY_REQUEST')
export const userChangePasswordAction = createAction('USER_CHANGE_PASSWORD_REQUEST')

export const getAllUsersAction = createAction('GET_ALL_USERS_REQUEST')

export const getAllEmailSubAction = createAction('GET_ALL_EMAIL_SUB_REQUEST')
