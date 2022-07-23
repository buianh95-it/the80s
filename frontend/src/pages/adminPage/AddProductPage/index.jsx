import axios from 'axios'
import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import HeroBanner from '../../../globalComponents/HeroBanner'
import { Form, Button, Input, Select, Space, Checkbox, Spin } from 'antd'
import { ROUTES } from '../../../constants/routes'
import { useDispatch, useSelector } from 'react-redux'
import { addProductAction } from '../../../redux/actions'

const { Option } = Select
const AddProductPage = () => {
  const dispatch = useDispatch()
  const [images, setImages] = useState([])
  const [renderInput, setRenderInput] = useState([])
  const [form] = Form.useForm()
  const [imageUploading, setImageUploading] = useState(false)
  const addInput = () => {
    setRenderInput((prev) => [...prev, 'hi'])
  }
  const removeInput = () => {
    setRenderInput((prev) => [...prev.slice(0, -1)])
  }

  const userLoginInfoId = useSelector((state) => state.user.userLogin.userInfo._id)
  const { loading, error } = useSelector((state) => state.product.adminProduct)

  const handleAddProductForm = (values) => {
    const {
      productName,
      brand,
      category,
      color,
      fabricMaterial,
      isNew,
      price,
      s,
      m,
      l,
      xl,
      xxl,
      description,
      description0,
      description1,
      description2,
    } = values

    const newProduct = {
      user: userLoginInfoId,
      name: productName,
      images: [...images],
      description: [description, description0, description1, description2],
      fabricMaterial,
      brand,
      color,
      categoryId: Number(category),
      isNew,
      price,
      countInStock: { s: Number(s), m: Number(m), l: Number(l), xl: Number(xl), xxl: Number(xxl) },
    }
    dispatch(addProductAction({ product: newProduct }))
    form.resetFields()
    setImages([])
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

  const userLoginInfo = useSelector((state) => state.user.userLogin.userInfo)
  if (userLoginInfo.isAdmin === false) {
    return <Navigate to={ROUTES.USER.HOME} />
  }
  return (
    <>
      <HeroBanner location='admin / add-product' />
      <section className='sectionWrapper'>
        <div className='container'>
          <h4 className='product-title'>ADD PRODUCT</h4>
          <div style={{ width: '35%', margin: 'auto' }}>
            <Form
              form={form}
              layout='vertical'
              name='addProductForm'
              onFinish={(values) => {
                handleAddProductForm(values)
              }}
              autoComplete='off'
              initialValues={{
                isNew: false,
                onSale: false,
                s: 0,
                m: 0,
                l: 0,
                xl: 0,
                xxl: 0,
              }}
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

              <Form.Item label='Description: ( at least 3 )' name='description'>
                <Input type='text' />
              </Form.Item>
              {renderInput &&
                renderInput.map((item, index) => (
                  <Form.Item key={index} name={`description${index}`}>
                    <Input type='text' />
                  </Form.Item>
                ))}
              <Button style={{ margin: '10px 0px' }} type='primary' onClick={() => addInput()}>
                {' '}
                + more row
              </Button>
              <Button style={{ margin: '10px 10px' }} type='danger' onClick={() => removeInput()}>
                {' '}
                - hide row
              </Button>

              <Form.Item label='Upload image:'>
                <p style={{ fontFamily: 'Arial', fontSize: 11 }}>
                  Upload at least 6 images, when the image upload done, please choose upload button
                  below to upload next image
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
                ADD NEW PRODUCT
              </Button>
            </Form>
          </div>
        </div>
      </section>
    </>
  )
}

export default AddProductPage
