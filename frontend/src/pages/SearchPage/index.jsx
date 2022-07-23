import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Select, Space, Tag, Input, Card, Slider } from 'antd'
import { getProductSearchAction } from '../../redux/actions'
import ProductRenderCard from '../../globalComponents/ProductRenderCard'
import { useParams } from 'react-router-dom'
import ErrorMessage from '../../globalComponents/ErrorMessage'
import SpinnerLoading from '../../globalComponents/SpinnerLoading'
import HeroBanner from '../../globalComponents/HeroBanner'
const { Option } = Select

const SearchPage = () => {
  const { keyword } = useParams()
  const dispatch = useDispatch()
  const [filterParams, setFilterParams] = useState({
    keyword: '',
    sort: '',
    categoryIds: ['1', '2'],
    price: [0, 5000000],
  })

  const { productListSearch } = useSelector((state) => state.product)
  const productListSearchItems = productListSearch.productListSearchItems
  const loading = productListSearch.productListSearchLoading
  const error = productListSearch.productListSearchError

  const handleFilterKeyword = (value) => {
    setFilterParams((prev) => ({ ...prev, keyword: value }))
    dispatch(getProductSearchAction({ filterParams: { ...filterParams, keyword: value } }))
  }

  const handleFilterPrice = (value) => {
    setFilterParams({
      ...filterParams,
      price: value,
    })
    dispatch(getProductSearchAction({ filterParams: { ...filterParams, price: value } }))
  }

  const handleFilterSort = (value) => {
    setFilterParams({
      ...filterParams,
      sort: value,
    })
    dispatch(getProductSearchAction({ filterParams: { ...filterParams, sort: value } }))
  }

  const handleFilterCategory = (value) => {
    setFilterParams({
      ...filterParams,
      categoryIds: value,
    })
    dispatch(
      getProductSearchAction({
        pageNumber: 1,
        filterParams: { ...filterParams, categoryIds: value },
      })
    )
  }

  const renderFilterCategoryTabs = useMemo(() => {
    return filterParams.categoryIds.map((categoryId) => {
      return (
        <Tag
          key={`category-tag-${categoryId}`}
          closable
          onClose={() => {
            const newCategoryIds = filterParams.categoryIds.filter((id) => id !== categoryId)
            setFilterParams({ ...filterParams, categoryIds: newCategoryIds })
          }}
        >
          {categoryId === '1' ? 'Hoodies Jacket' : 'Pants'}
        </Tag>
      )
    })
  }, [filterParams])

  useEffect(() => {
    dispatch(getProductSearchAction({ keyword }))
  }, [keyword])

  return (
    <>
      <HeroBanner location='search' />
      <section className='sectionWrapper'>
        <div className='container'>
          <h4 className='product-title'>SEARCHING ITEM : "{keyword}"</h4>
          <Space
            direction='horizontal'
            style={{
              width: '50%',
              marginBottom: 20,
              justifyContent: 'flex-start',
              flexWrap: 'wrap',
            }}
          >
            {renderFilterCategoryTabs}

            {filterParams.keyword && (
              <Tag
                closable
                onClose={() => {
                  setFilterParams({ ...filterParams, keyword: '' })
                  dispatch(dispatch(getProductSearchAction({ keyword })))
                }}
              >
                Từ khóa: {filterParams.keyword}
              </Tag>
            )}

            {filterParams.sort && (
              <Tag
                closable
                onClose={() => {
                  setFilterParams({ ...filterParams, sort: '' })
                  dispatch(dispatch(getProductSearchAction({ keyword })))
                }}
              >
                {filterParams.sort}
              </Tag>
            )}

            {filterParams.price && (
              <Tag
                onClose={() => {
                  setFilterParams({ ...filterParams, price: [0, 5000000] })
                  dispatch(dispatch(getProductSearchAction({ keyword })))
                }}
              >
                {filterParams.price[0].toLocaleString()}₫ - {filterParams.price[1].toLocaleString()}
                ₫
              </Tag>
            )}
          </Space>

          <Space
            align='center'
            style={{
              width: '100%',
              marginBottom: 20,
              justifyContent: 'flex-start',
              flexWrap: 'wrap',
              gap: 10,
            }}
          >
            <div style={{ width: 200 }}>
              <Input
                width={200}
                onChange={(e) => handleFilterKeyword(e.target.value)}
                value={filterParams.keyword}
                placeholder='Nhập từ khóa'
              />
            </div>

            <div>
              <Space>
                {' '}
                <p style={{ marginTop: 10 }}> Price:</p>
                <Slider
                  style={{ width: 200 }}
                  range
                  min={0}
                  max={2000000}
                  step={100000}
                  tipFormatter={(value) => `${value.toLocaleString()} VND`}
                  defaultValue={filterParams.price}
                  onAfterChange={(values) => handleFilterPrice(values)}
                />
              </Space>
            </div>
            <div>
              <span>Category: </span>
              <Select
                allowClear
                value={filterParams.categoryIds}
                mode='multiple'
                style={{ width: 200 }}
                onChange={handleFilterCategory}
                placeholder='Select category'
                defaultValue={['1', '2']}
              >
                <Option value='1'>Hoodies Jacket</Option>
                <Option value='2'>Pants</Option>
              </Select>
            </div>

            <div>
              <span>Sort by: </span>
              <Select
                value={filterParams.sort}
                placeholder='Select sort'
                style={{ width: 140 }}
                onChange={handleFilterSort}
              >
                <Option value='newest'>Newest</Option>
                <Option value='highToLow'>High to low</Option>
                <Option value='lowToHigh'>Low to high</Option>
              </Select>
            </div>
          </Space>

          <Row gutter={[16, 48]}>
            {loading ? (
              <SpinnerLoading />
            ) : error ? (
              <ErrorMessage message={error.message} />
            ) : (
              productListSearchItems.map((product, index) => {
                return (
                  <Col xs={24} sm={12} md={8} lg={6} xl={6} key={index}>
                    <ProductRenderCard product={product} />
                  </Col>
                )
              })
            )}
          </Row>
        </div>
      </section>
    </>
  )
}

export default SearchPage
