import React, { useEffect } from 'react'
import { Card, Button, Space } from 'antd'
import ProductRating from '../ProductRating'
import './styles.css'
import { Link, generatePath } from 'react-router-dom'
import { ROUTES } from '../../constants/routes.js'

const ProductRenderCard = ({ product }) => {
  const productDetailPath = generatePath(ROUTES.USER.PRODUCT_DETAIL, { id: product._id })
  return (
    <Card
      hoverable
      bordered={false}
      size='large'
      style={{ width: 280, height: 'auto', textAlign: 'center' }}
    >
      <div
        className={`productImgWrap ${product.isNew ? 'newItemHighlight' : ''} ${
          product.onSale ? 'onsaleHighlight' : ''
        } `}
      >
        <Link to={productDetailPath}>
          <img
            width={230}
            height={300}
            onMouseOver={(e) => {
              e.target.src = product.images[1]
            }}
            onMouseLeave={(e) => {
              e.target.src = product.images[0]
            }}
            src={product.images[0]}
            alt={product.name}
          />
        </Link>
      </div>
      <div className='card-content' style={{ textAlign: 'left', marginTop: 20 }}>
        <Link to={productDetailPath}>
          <h3 className='itemCard--title'>{product.name}</h3>
        </Link>
        <div style={{ padding: '10px 0px' }}>
          <ProductRating rating={product.rating} />{' '}
        </div>
        <Space>
          <p
            style={{ fontSize: 11, letterSpacing: 2 }}
            className={product.onSale ? 'saleOffPrice' : ''}
          >
            {product.onSale
              ? (product.price + 100000).toLocaleString('it-IT', {
                  style: 'currency',
                  currency: 'vnd',
                })
              : product.price.toLocaleString('it-IT', { style: 'currency', currency: 'vnd' })}
          </p>
          <p style={{ fontSize: 11, letterSpacing: 2 }}>
            {' '}
            {product.onSale
              ? product.price.toLocaleString('it-IT', { style: 'currency', currency: 'vnd' })
              : ''}
          </p>
        </Space>
        <div>
          <Link to={productDetailPath}>
            <Button type='primary'>
              <i className='fa-solid fa-angles-right faa-horizontal animated faa-slow'></i> &nbsp;
              &nbsp;DETAIL
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  )
}

export default ProductRenderCard
