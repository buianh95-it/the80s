import { createReducer } from '@reduxjs/toolkit'

const initialState = {
  productListAll: {
    productListAllItems: [
      {
        _id: '',
        name: '',
        images: [],
        description: [],
        fabricMaterial: '',
        brand: '',
        categoryId: 0,
        price: 0,
        countInStock: { s: 0, m: 0, l: 0, xl: 0, xxl: 0 },
        rating: 0,
        numReviews: 0,
        reviews: [],
      },
    ],
    productListLoading: false,
    productListError: '',
    meta: {
      total: '',
      page: '',
      pageSize: '',
    },
  },
  productListNew: {
    productListNewItems: [
      {
        _id: '',
        name: '',
        images: [],
        description: [],
        fabricMaterial: '',
        brand: '',
        categoryId: 1,
        price: 0,
        countInStock: { s: 0, m: 0, l: 0, xl: 0, xxl: 0 },
        rating: 0,
        numReviews: 0,
        reviews: [],
      },
    ],
    productListNewLoading: false,
    productListNewError: '',
    meta: {
      total: '',
      page: '',
      pageSize: '',
    },
  },
  productListHoodie: {
    productListHoodieItems: [
      {
        _id: '',
        name: '',
        images: [],
        description: [],
        fabricMaterial: '',
        brand: '',
        categoryId: 1,
        price: 0,
        countInStock: { s: 0, m: 0, l: 0, xl: 0, xxl: 0 },
        rating: 0,
        numReviews: 0,
        reviews: [],
      },
    ],
    productListHoodieLoading: false,
    productListHoodieError: '',
    meta: {
      total: '',
      page: '',
      pageSize: '',
    },
  },
  productListJean: {
    productListJeanItems: [
      {
        _id: '',
        name: '',
        images: [],
        description: [],
        fabricMaterial: '',
        brand: '',
        categoryId: 1,
        price: 0,
        countInStock: { s: 0, m: 0, l: 0, xl: 0, xxl: 0 },
        rating: 0,
        numReviews: 0,
        reviews: [],
      },
    ],
    productListJeanLoading: false,
    productListJeanError: '',
    meta: {
      total: '',
      page: '',
      pageSize: '',
    },
  },
  productListSearch: {
    productListSearchItems: [
      {
        _id: '',
        name: '',
        images: [],
        description: [],
        fabricMaterial: '',
        brand: '',
        categoryId: 1,
        price: 0,
        countInStock: { s: 0, m: 0, l: 0, xl: 0, xxl: 0 },
        rating: 0,
        numReviews: 0,
        reviews: [],
      },
    ],
    productListSearchLoading: false,
    productListSearchError: '',
    meta: {
      total: '',
      page: '',
      pageSize: '',
    },
  },

  productDetail: {
    productDetailItem: {
      _id: '',
      name: '',
      images: [],
      description: [],
      fabricMaterial: '',
      brand: '',
      categoryId: 1,
      price: 0,
      countInStock: { s: 0, m: 0, l: 0, xl: 0, xxl: 0 },
      rating: 0,
      numReviews: 0,
      reviews: [],
    },
    productDetailLoading: false,
    productDetailError: '',
  },
  adminProduct: {
    loading: false,
    error: '',
  },
}

const productReducer = createReducer(initialState, {
  GET_PRODUCT_LIST_ALL_REQUEST: (state, action) => {
    return {
      ...state,
      productListAll: { ...state.productListAll, productListLoading: true },
    }
  },
  GET_PRODUCT_LIST_ALL_SUCCESS: (state, action) => {
    const { productListAllItems, total, pageSize, page } = action.payload
    return {
      ...state,
      productListAll: {
        ...state.productListAll,
        productListAllItems,
        productListLoading: false,
        meta: { total, pageSize, page },
      },
    }
  },
  GET_PRODUCT_LIST_ALL_FAILURE: (state, action) => {
    const { error } = action.payload
    return {
      ...state,
      productListAll: {
        ...state.productListAll,
        productListLoading: false,
        productListError: error,
      },
    }
  },

  GET_PRODUCT_LIST_NEW_REQUEST: (state, action) => {
    return {
      ...state,
      productListNew: { ...state.productListNew, productListNewLoading: true },
    }
  },
  GET_PRODUCT_LIST_NEW_SUCCESS: (state, action) => {
    const { productListNewItems, total, page, pageSize } = action.payload
    return {
      ...state,
      productListNew: {
        ...state.productListNew,
        productListNewItems,
        productListNewLoading: false,
        meta: { total, page, pageSize },
      },
    }
  },
  GET_PRODUCT_LIST_NEW_FAILURE: (state, action) => {
    const { error } = action.payload
    return {
      ...state,
      productListNew: {
        ...state.productListNew,
        productListNewLoading: false,
        productListNewError: error,
      },
    }
  },

  GET_PRODUCT_LIST_HOODIEJACKETS_REQUEST: (state, action) => {
    return {
      ...state,
      productListHoodie: { ...state.productListHoodie, productListHoodieLoading: true },
    }
  },
  GET_PRODUCT_LIST_HOODIEJACKETS_SUCCESS: (state, action) => {
    const { productListHoodieItems, total, pageSize, page } = action.payload
    return {
      ...state,
      productListHoodie: {
        ...state.productListHoodie,
        productListHoodieItems,
        productListHoodieLoading: false,
        meta: { total, page, pageSize },
      },
    }
  },
  GET_PRODUCT_LIST_HOODIEJACKETS_FAILURE: (state, action) => {
    const { error } = action.payload
    return {
      ...state,
      productListHoodie: {
        ...state.productListHoodie,
        productListHoodieLoading: false,
        productListHoodieError: error,
      },
    }
  },

  GET_PRODUCT_LIST_JEANS_REQUEST: (state, action) => {
    return {
      ...state,
      productListJean: { ...state.productListJean, productListJeanLoading: true },
    }
  },
  GET_PRODUCT_LIST_JEANS_SUCCESS: (state, action) => {
    const { productListJeanItems, total, pageSize, page } = action.payload
    return {
      ...state,
      productListJean: {
        ...state.productListJean,
        productListJeanItems,
        productListJeanLoading: false,
        meta: { total, page, pageSize },
      },
    }
  },
  GET_PRODUCT_LIST_JEANS_FAILURE: (state, action) => {
    const { error } = action.payload
    return {
      ...state,
      productListJean: {
        ...state.productListJean,
        productListJeanLoading: false,
        productListJeanError: error,
      },
    }
  },

  GET_PRODUCT_DETAIL_REQUEST: (state, action) => {
    return {
      ...state,
      productDetail: { ...state.productDetail, productDetailLoading: true },
    }
  },
  GET_PRODUCT_DETAIL_SUCCESS: (state, action) => {
    const { productDetailItem } = action.payload
    return {
      ...state,
      productDetail: {
        ...state.productDetail,
        productDetailItem,
        productDetailLoading: false,
      },
    }
  },
  GET_PRODUCT_DETAIL_FAILURE: (state, action) => {
    const { error } = action.payload
    return {
      ...state,
      productDetail: {
        ...state.productDetail,
        productDetailLoading: false,
        productDetailError: error,
      },
    }
  },

  GET_PRODUCT_LIST_SEARCH_REQUEST: (state, action) => {
    return {
      ...state,
      productListSearch: { ...state.productListSearch, productListSearchLoading: true },
    }
  },
  GET_PRODUCT_LIST_SEARCH_SUCCESS: (state, action) => {
    const { products, total, page, pageSize } = action.payload
    return {
      ...state,
      productListSearch: {
        ...state.productListSearch,
        productListSearchItems: products,
        productListSearchLoading: false,
        meta: { total, page, pageSize },
      },
    }
  },
  GET_PRODUCT_LIST_SEARCH_FAILURE: (state, action) => {
    const { error } = action.payload
    return {
      ...state,
      productListSearch: {
        ...state.productListSearch,
        productListSearchLoading: false,
        productListSearchError: error,
      },
    }
  },

  ADD_PRODUCT_REQUEST: (state, action) => {
    return {
      ...state,
      adminProduct: { loading: true, error: null },
    }
  },
  ADD_PRODUCT_SUCCESS: (state, action) => {
    return {
      ...state,
      adminProduct: { loading: false, error: null },
    }
  },
  ADD_PRODUCT_FAILURE: (state, action) => {
    const { error } = action.payload
    return {
      ...state,
      adminProduct: { loading: false, error },
    }
  },

  UPDATE_PRODUCT_DETAIL_REQUEST: (state, action) => {
    return {
      ...state,
      adminProduct: { loading: true, error: null },
    }
  },
  UPDATE_PRODUCT_DETAIL_SUCCESS: (state, action) => {
    return {
      ...state,
      adminProduct: { loading: false, error: null },
    }
  },
  UPDATE_PRODUCT_DETAIL_FAILURE: (state, action) => {
    const { error } = action.payload
    return {
      ...state,
      adminProduct: { loading: false, error },
    }
  },
})

export default productReducer
