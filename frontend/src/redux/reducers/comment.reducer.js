import { createReducer } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  error: null,
}

const commentReducer = createReducer(initialState, {
  CREATE_COMMENT_REQUEST: (state, action) => {
    return {
      ...state,
      loading: true,
    }
  },
  CREATE_COMMENT_SUCCESS: (state, action) => {
    return {
      ...state,
      loading: false,
    }
  },
  CREATE_COMMENT_FAILURE: (state, action) => {
    const { error } = action.payload
    return {
      ...state,
      loading: false,
      error,
    }
  },
})

export default commentReducer
