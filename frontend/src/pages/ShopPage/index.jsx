import React, { useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Pagination } from 'antd'
import { getProductListAllAction } from '../../redux/actions'
import ProductRenderCard from '../../globalComponents/ProductRenderCard'
import { useParams } from 'react-router-dom'
import SpinnerLoading from '../../globalComponents/SpinnerLoading'
import ErrorMessage from '../../globalComponents/ErrorMessage'
import HeroBanner from '../../globalComponents/HeroBanner'

const ShopPage = () => {
  const elementRef = useRef()
  const divElement = elementRef.current
  const { pageNumber } = useParams() || 1
  const dispatch = useDispatch()

  const { productListAll } = useSelector((state) => state.product)
  const productListAllItems = productListAll.productListAllItems
  const loading = productListAll.productListLoading
  const error = productListAll.productListError

  const meta = productListAll.meta

  const handleChangePage = (page) => {
    dispatch(getProductListAllAction({ pageNumber: page }))
  }

  useEffect(() => {
    dispatch(getProductListAllAction({ pageNumber }))
  }, [])
  return (
    <>
      <HeroBanner location='All products' />
      <section ref={elementRef} className='sectionWrapper'>
        <div className='container'>
          <h4 className='product-title'>ALL PRODUCTS</h4>
          <Row gutter={[48, 48]}>
            {loading ? (
              <SpinnerLoading />
            ) : error ? (
              <ErrorMessage message={error.message} />
            ) : (
              productListAllItems.map((product, index) => {
                return (
                  <Col xs={24} sm={12} md={8} lg={6} xl={6} key={index}>
                    <ProductRenderCard product={product} />
                  </Col>
                )
              })
            )}
          </Row>

          <Pagination
            style={{ textAlign: 'center', paddingTop: 30 }}
            current={meta.page}
            total={meta.total}
            pageSize={meta.pageSize}
            onChange={(page) => {
              divElement.scrollIntoView(true)
              handleChangePage(page)
            }}
          />
        </div>
      </section>
    </>
  )
}

export default ShopPage
