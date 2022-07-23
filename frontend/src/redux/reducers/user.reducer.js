import { createReducer } from '@reduxjs/toolkit'

const initialState = {
  userLogin: {
    loading: false,
    userInfo: JSON.parse(localStorage.getItem('userInfo')) || {},
    error: null,
  },
  userRegister: {
    loading: false,
    error: null,
  },
  userList: {
    users: [],
    loading: false,
    error: null,
    meta: {
      total: null,
      page: null,
      pageSize: null,
    },
  },
  emailList: {
    emails: [],
    loading: false,
    error: null,
    meta: {
      total: null,
      page: null,
      pageSize: null,
    },
  },
}

const userLoginReducer = createReducer(initialState, {
  USER_LOGIN_REQUEST: (state, action) => {
    return {
      ...state,
      userLogin: {
        loading: true,
        userInfo: {},
        error: '',
      },
    }
  },
  USER_LOGIN_SUCCESS: (state, action) => {
    const { data } = action.payload
    return {
      ...state,
      userLogin: {
        ...state.userLogin,
        loading: false,
        userInfo: data,
        error: '',
      },
    }
  },
  USER_LOGIN_FAILURE: (state, action) => {
    const error = 'Invalid email or password'
    return {
      ...state,
      userLogin: {
        ...state.userLogin,
        loading: false,
        error,
      },
    }
  },
  USER_LOGOUT_REQUEST: (state, action) => {
    return {
      ...state,
      userLogin: {
        loading: false,
        userInfo: {},
        error: null,
      },
    }
  },

  USER_REGISTER_REQUEST: (state, action) => {
    return {
      ...state,
      userRegister: {
        ...state.userRegister,
        loading: true,
        error: '',
      },
    }
  },
  USER_REGISTER_SUCCESS: (state, action) => {
    const { data } = action.payload
    return {
      ...state,
      userLogin: {
        ...state.userLogin,
        loading: false,
        userInfo: data,
        error: '',
      },
      userRegister: {
        ...state.userRegister,
        loading: false,
        error: '',
      },
    }
  },
  USER_REGISTER_FAILURE: (state, action) => {
    let { error } = action.payload
    if (error.message === 'Request failed with status code 400') {
      error.message = 'Email already exists'
    } else {
      error.message = 'Something went wrong'
    }
    return {
      ...state,
      userRegister: {
        ...state.userRegister,
        loading: false,
        error,
      },
    }
  },

  USER_MODIFY_REQUEST: (state, action) => {
    return {
      ...state,
      userLogin: {
        ...state.userLogin,
        loading: true,
        error: null,
      },
    }
  },
  USER_MODIFY_SUCCESS: (state, action) => {
    const { data } = action.payload
    return {
      ...state,
      userLogin: {
        ...state.userLogin,
        loading: false,
        userInfo: data,
        error: null,
      },
    }
  },
  USER_MODIFY_FAILURE: (state, action) => {
    const error = 'Something went wrong'
    return {
      ...state,
      userLogin: {
        ...state.userLogin,
        loading: false,
        error,
      },
    }
  },

  USER_CHANGE_PASSWORD_REQUEST: (state, action) => {
    return {
      ...state,
      userLogin: {
        ...state.userLogin,
        loading: true,
        error: null,
      },
    }
  },
  USER_CHANGE_PASSWORD_SUCCESS: (state, action) => {
    const { data } = action.payload
    return {
      ...state,
      userLogin: {
        ...state.userLogin,
        loading: false,
        userInfo: data,
        error: null,
      },
    }
  },
  USER_CHANGE_PASSWORD_FAILURE: (state, action) => {
    const error = 'Something went wrong'
    return {
      ...state,
      userLogin: {
        ...state.userLogin,
        loading: false,
        error,
      },
    }
  },

  GET_ALL_USERS_REQUEST: (state, action) => {
    return {
      ...state,
      userList: {
        ...state.userList,
        loading: true,
        error: null,
      },
    }
  },
  GET_ALL_USERS_SUCCESS: (state, action) => {
    const { data } = action.payload
    return {
      ...state,
      userList: {
        ...state.userList,
        loading: false,
        users: data.users,
        error: null,
        meta: {
          total: data.total,
          page: data.page,
          pageSize: data.pageSize,
        },
      },
    }
  },
  GET_ALL_USERS_FAILURE: (state, action) => {
    const { error } = action.payload
    return {
      ...state,
      userList: {
        ...state.userList,
        loading: false,
        error,
      },
    }
  },

  GET_ALL_EMAIL_SUB_REQUEST: (state, action) => {
    return {
      ...state,
      emailList: {
        ...state.emailList,
        loading: true,
        error: null,
      },
    }
  },
  GET_ALL_EMAIL_SUB_SUCCESS: (state, action) => {
    const { data } = action.payload
    return {
      ...state,
      emailList: {
        ...state.emailList,
        loading: false,
        emails: data.emails,
        error: null,
        meta: {
          total: data.total,
          page: data.page,
          pageSize: data.pageSize,
        },
      },
    }
  },

  GET_ALL_EMAIL_SUB_FAILURE: (state, action) => {
    const { error } = action.payload
    return {
      ...state,
      emailList: {
        ...state.emailList,
        loading: false,
        error,
      },
    }
  },
})

export default userLoginReducer
