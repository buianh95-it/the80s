import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, generatePath, useParams, Navigate } from 'react-router-dom'
import { Row, Card, Button, Table, Space, Pagination, Popconfirm, Input } from 'antd'
import { PlusOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { ROUTES } from '../../../constants/routes.js'
import { getProductListAllAction, deleteProductAction } from '../../../redux/actions'
import HeroBanner from '../../../globalComponents/HeroBanner/index.jsx'
import ErrorMessage from '../../../globalComponents/ErrorMessage/index.jsx'

const ProductsAdminPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const productList = useSelector((state) => state.product.productListAll)
  const { productListAllItems } = productList
  const pageNumber = 1
  const loading = productList.productListLoading
  const error = productList.productListError
  const meta = productList.meta

  const handleChangePage = (page) => {
    dispatch(getProductListAllAction({ pageNumber: page }))
  }

  const handleFilterKeyword = (value) => {
    dispatch(getProductListAllAction({ pageNumber, keyword: value }))
  }

  useEffect(() => {
    dispatch(getProductListAllAction({ pageNumber }))
  }, [])

  const tableColumns = [
    {
      title: '',
      dataIndex: 'image',
      render: (dataIndex) => <img style={{ width: 60, height: 80 }} src={dataIndex} alt='img' />,
    },
    {
      title: 'NAME',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'PRICE',
      dataIndex: 'price',
      key: 'price',
      render: (price, record) => `${price.toLocaleString()}₫`,
    },
    {
      title: 'FARBIC',
      dataIndex: 'fabricMaterial',
      key: 'fabricMaterial',
    },
    {
      title: 'BRAND',
      dataIndex: 'brand',
      key: 'brand',
    },
    {
      title: 'CATEGORY',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'IN STOCK',
      dataIndex: 'countInStock',
      key: 'countInStock',
    },
    {
      title: 'DESCRIPTION',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'ACTIONS',
      dataIndex: 'action',
      key: 'action',
      render: (_, record) => (
        <Space>
          <Button
            type='primary'
            icon={<EditOutlined />}
            onClick={() => navigate(`/admin/products/edit/${record.key}`)}
          ></Button>
          <Popconfirm
            placement='top'
            title={`Remove this item permanently?`}
            onConfirm={() => {
              dispatch(deleteProductAction({ id: record.key }))
              window.location.reload()
            }}
            okText='Yes'
            cancelText='No'
          >
            <Button type='danger' icon={<DeleteOutlined />}></Button>
          </Popconfirm>
        </Space>
      ),
    },
  ]

  const tableData = productListAllItems.map((item) => {
    return {
      key: item._id,
      image: item.images[0],
      name: item.name,
      price: item.price,
      fabricMaterial: item.fabricMaterial,
      brand: item.brand,
      category: item.categoryId === 1 ? 'Hoodie Jackets' : 'PANTS',
      countInStock: Object.keys(item.countInStock).map((objKey) => [
        `${objKey.toLocaleUpperCase()}: `,
        item.countInStock[objKey],
        <br />,
      ]),
      description: item.description.map((item, index) => {
        return <li key={index}>{item}</li>
      }),
      createdAt: item.createdAt,
      updatedAt: item.updatedAt,
    }
  })

  const userLoginInfo = useSelector((state) => state.user.userLogin.userInfo)
  if (userLoginInfo.isAdmin === false) {
    return <Navigate to={ROUTES.USER.HOME} />
  }
  return (
    <>
      <HeroBanner location='admin / product-list' />
      <section className='sectionWrapper'>
        <div className='container'>
          <h3 style={{ textAlign: 'center', marginBottom: 50 }}>PRODUCTS MANAGEMENT</h3>
          {error ? <ErrorMessage error={error.message} /> : null}
          <Space
            direction='horizontal'
            style={{ width: '100%', justifyContent: 'flex-end', marginBottom: 20 }}
          >
            <div style={{ width: 200 }}>
              <Input
                width={200}
                onChange={(e) => handleFilterKeyword(e.target.value)}
                placeholder='Nhập từ khóa'
              />
            </div>
            <Button
              type='primary'
              ghost
              icon={<PlusOutlined />}
              onClick={() => navigate(generatePath(ROUTES.ADMIN.ADD_PRODUCT))}
            >
              ADD PRODUCT
            </Button>
          </Space>

          <Table
            style={{ fontFamily: 'Arial' }}
            columns={tableColumns}
            dataSource={tableData}
            pagination={false}
            loading={loading}
          />
          <Pagination
            style={{ textAlign: 'center', paddingTop: 30 }}
            current={meta.page}
            total={meta.total}
            pageSize={meta.pageSize}
            onChange={(page) => {
              handleChangePage(page)
            }}
          />
        </div>
      </section>
    </>
  )
}

export default ProductsAdminPage
