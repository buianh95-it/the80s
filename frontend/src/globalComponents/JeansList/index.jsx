import React, { useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Pagination } from 'antd'
import { getProductListJeansAction } from '../../redux/actions'
import ProductRenderCard from '../ProductRenderCard'
import { useParams } from 'react-router-dom'
import SpinnerLoading from '../SpinnerLoading'
import ErrorMessage from '../ErrorMessage'

const JeansList = () => {
  const elementRef = useRef()
  const divElement = elementRef.current

  const { pageNumber } = useParams() || 1
  const dispatch = useDispatch()

  const { productListJean } = useSelector((state) => state.product)
  const productListJeanItems = productListJean.productListJeanItems
  const loading = productListJean.productListJeanLoading
  const error = productListJean.productListJeanError
  const meta = productListJean.meta

  const handleChangeHoodiesPage = (page) => {
    dispatch(getProductListJeansAction({ pageNumber: page }))
  }

  useEffect(() => {
    dispatch(getProductListJeansAction({ pageNumber }))
  }, [])
  return (
    <section ref={elementRef} className='sectionWrapper'>
      <div className='container'>
        <h2 className='product-title'>PANTS</h2>
        <Row gutter={[48, 48]}>
          {loading ? (
            <SpinnerLoading />
          ) : error ? (
            <ErrorMessage message={error.message} />
          ) : (
            productListJeanItems.map((product, index) => {
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
            divElement.scrollIntoView(false)
            handleChangeHoodiesPage(page)
          }}
        />
      </div>
    </section>
  )
}

export default JeansList
