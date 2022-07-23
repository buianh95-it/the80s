import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Navigate, useParams, useNavigate } from 'react-router-dom'
import HeroBanner from '../../../globalComponents/HeroBanner'
import { Form, Button, Input, Select, Space, Checkbox, Spin } from 'antd'
import { ROUTES } from '../../../constants/routes'
import { useDispatch, useSelector } from 'react-redux'

import { getProductDetailAction, updateProductDetailAction } from '../../../redux/actions'

const { Option } = Select
const EditProductPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const productId = useParams().id
  const [images, setImages] = useState([])
  const [form] = Form.useForm()
  const [imageUploading, setImageUploading] = useState(false)
  const productDetail = useSelector((state) => state.product.productDetail)
  const productDetailItem = productDetail.productDetailItem
  const { loading, error } = useSelector((state) => state.product.adminProduct)

  const initFormValues = {
    productName: productDetailItem.name,
    fabricMaterial: productDetailItem.fabricMaterial,
    brand: productDetailItem.brand,
    category: productDetailItem.categoryId,
    color: productDetailItem.color,
    isNew: productDetailItem.isNew,
    price: productDetailItem.price,
    s: productDetailItem.countInStock.s,
    m: productDetailItem.countInStock.m,
    l: productDetailItem.countInStock.l,
    xl: productDetailItem.countInStock.xl,
    xxl: productDetailItem.countInStock.xxl,
    description0: productDetailItem.description[0],
    description1: productDetailItem.description[1],
    description2: productDetailItem.description[2],
    description3: productDetailItem.description[3],
    description4: productDetailItem.description[4],
    description5: productDetailItem.description[5],
  }

  const editProductForm = (values) => {
    const editProduct = {
      name: values.productName,
      fabricMaterial: values.fabricMaterial,
      brand: values.brand,
      categoryId: values.category,
      color: values.color,
      isNew: values.isNew,
      price: values.price,
      countInStock: {
        s: values.s,
        m: values.m,
        l: values.l,
        xl: values.xl,
        xxl: values.xxl,
      },
      description: [
        values.description0,
        values.description1,
        values.description2,
        values.description3,
        values.description4,
        values.description5,
      ],
      images: images.length > 1 ? images : productDetailItem.images,
    }
    dispatch(
      updateProductDetailAction({
        data: { productId, editProduct },
        callback: {
          navigateToAdmin: () => {
            navigate(ROUTES.ADMIN.PRODUCT_LIST)
          },
        },
      })
    )
  }

  const uploadImageHandler = async (e) => {
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append('image', file)
    setImageUploading(true)

    try {
      const config = {
        headers: { 'Content-Type': 'multipart/form-data' },
      }
      const { data } = await axios.post('/api/upload', formData, config)
      setImages([...images, data])
      setImageUploading(false)
    } catch (error) {
      console.error(error)
      setImageUploading(false)
    }
  }

  useEffect(() => {
    dispatch(getProductDetailAction({ productId }))
  }, [])

  const userLoginInfo = useSelector((state) => state.user.userLogin.userInfo)
  if (userLoginInfo.isAdmin === false) {
    return <Navigate to={ROUTES.USER.HOME} />
  }
  return (
    <>
      <HeroBanner location='admin / edit' />
      <section className='sectionWrapper'>
        <div className='container'>
          <h4 className='product-title'>EDIT PRODUCT</h4>
          <div style={{ width: '35%', margin: 'auto' }}>
            <Form
              form={form}
              layout='vertical'
              name='editProductForm'
              onFinish={(values) => {
                editProductForm(values)
              }}
              autoComplete='off'
              initialValues={initFormValues}
            >
              <Form.Item
                label='Product name:'
                name='productName'
                rules={[{ required: true, message: 'Please enter the product name' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label='Fabric Material:'
                name='fabricMaterial'
                rules={[{ required: true, message: 'Please enter the product material' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label='Brand:'
                name='brand'
                rules={[{ required: true, message: 'Please enter the product brand' }]}
              >
                <Input />
              </Form.Item>

              <Space>
                <Form.Item
                  label='Category:'
                  name='category'
                  rules={[{ required: true, message: 'Please choose the category' }]}
                >
                  <Select allowClear style={{ width: 200 }} placeholder='Select category'>
                    <Option value={1}>Hoodies Jacket</Option>
                    <Option value={2}>Pants</Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  label='Color:'
                  name='color'
                  rules={[{ required: true, message: 'Please enter the product color' }]}
                >
                  <Input />
                </Form.Item>

                <Form.Item name='isNew' style={{ marginTop: 20 }} valuePropName='checked' noStyle>
                  <Checkbox>isNew</Checkbox>
                </Form.Item>
              </Space>

              <Form.Item
                label='Price:'
                name='price'
                rules={[{ required: true, message: 'Please enter the product price' }]}
              >
                <Input type='number' min='0' max='5000000' />
              </Form.Item>
              <p>Count In Stock: </p>
              <Space>
                <Form.Item label='S:' name='s'>
                  <Input type='number' min='0' max='200' />
                </Form.Item>
                <Form.Item label='M:' name='m'>
                  <Input type='number' min='0' max='200' />
                </Form.Item>
                <Form.Item label='L:' name='l'>
                  <Input type='number' min='0' max='200' />
                </Form.Item>
                <Form.Item label='XL:' name='xl'>
                  <Input type='number' min='0' max='200' />
                </Form.Item>
                <Form.Item label='XXL:' name='xxl'>
                  <Input type='number' min='0' max='200' />
                </Form.Item>
              </Space>

              <Form.Item label='Description-1: ' name='description0'>
                <Input type='text' />
              </Form.Item>

              <Form.Item label='Description-2: ' name='description1'>
                <Input type='text' />
              </Form.Item>

              <Form.Item label='Description-3: ' name='description2'>
                <Input type='text' />
              </Form.Item>

              <Form.Item label='Description-4: ' name='description3'>
                <Input type='text' />
              </Form.Item>

              <Form.Item label='Description-5: ' name='description4'>
                <Input type='text' />
              </Form.Item>
              <Form.Item label='Description-6: ' name='description5'>
                <Input type='text' />
              </Form.Item>

              <Form.Item label='Edit image:'>
                <p style={{ fontFamily: 'Arial', fontSize: 11 }}>
                  Bỏ qua nếu không muốn thay đổi ảnh, nếu edit ảnh thì upload toàn bộ ảnh mới cho
                  sản phẩm
                </p>
                <Input type='file' onChange={uploadImageHandler} />
              </Form.Item>
              {imageUploading && <Spin />}

              {images.map((image, index) => {
                return (
                  <img
                    key={index}
                    style={{ width: 80, height: 80, marginBottom: 10, marginRight: 10 }}
                    src={image}
                    alt='uploaded img'
                  />
                )
              })}

              <Button loading={loading} style={{ width: '100%' }} type='primary' htmlType='submit'>
                EDIT THIS PRODUCT
              </Button>
            </Form>
          </div>
        </div>
      </section>
    </>
  )
}

export default EditProductPage
