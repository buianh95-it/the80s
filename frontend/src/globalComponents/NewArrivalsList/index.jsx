import React, { useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Pagination } from 'antd'
import { getProductListNewAction } from '../../redux/actions'
import ProductRenderCard from '../ProductRenderCard'
import { useParams } from 'react-router-dom'
import SpinnerLoading from '../SpinnerLoading'
import ErrorMessage from '../ErrorMessage'

const NewArrivalsList = () => {
  const elementRef = useRef()
  const divElement = elementRef.current

  const dispatch = useDispatch()
  const { pageNumber } = useParams() || 1

  const { productListNew } = useSelector((state) => state.product)
  const productListNewItems = productListNew.productListNewItems
  const loading = productListNew.productListNewLoading
  const error = productListNew.productListNewError
  const meta = productListNew.meta
  const handleChangeHoodiesPage = (page) => {
    dispatch(getProductListNewAction({ pageNumber: page }))
  }

  useEffect(() => {
    dispatch(getProductListNewAction({ pageNumber }))
  }, [])

  return (
    <section ref={elementRef} className='sectionWrapper'>
      <div className='container'>
        <h2 className='product-title'>NEW ARRIVALS</h2>
        <Row gutter={[48, 48]}>
          {loading ? (
            <SpinnerLoading />
          ) : error ? (
            <ErrorMessage message={error.message} />
          ) : (
            productListNewItems.map((product, index) => {
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

export default NewArrivalsList
